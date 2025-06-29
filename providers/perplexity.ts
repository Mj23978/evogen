import { perplexity, PerplexityProviderSettings } from "@ai-sdk/perplexity";
import type {
  EmbeddingModelV2,
  ImageModelV2,
  LanguageModelV2,
  ProviderV2,
  SpeechModelV2,
  TranscriptionModelV2,
} from "@ai-sdk/provider";

import {
  BaseEvogenProvider,
  EvogenNotImplementedError,
  ModelInfo,
  ModelsModality,
  ModelsType,
  ProviderType,
  StatusCheckResult,
} from "../core";

type PerplexityModel = {
  name: string;
  endpoints: string[];
  finetuned: boolean;
  context_length: number;
  tokenizer_url: string;
  supports_vision: boolean;
  features: null | string[];
  default_endpoints: never[];
};

type PerplexityApiResponse = {
  models: PerplexityModel[];
};

export class PerplexityProvider extends BaseEvogenProvider<PerplexityProviderSettings> {
  type: ProviderType = "Perplexity";
  getModelsLink = "https://api.perplexity.com/v1/models";

  createProvider(): ProviderV2 {
    return perplexity;
  }

  async syncModelsFromServer(
    metadata?: Record<string, any>
  ): Promise<ModelInfo[]> {
    const response = await fetch(this.getModelsLink + "?page_size=1000", {
      headers: {
        Authorization: `Bearer ${this.config.apiKey!}`,
      },
    });
    const data = (await response.json()) as PerplexityApiResponse;

    const models = data.models.map<ModelInfo>((model: PerplexityModel) => {
      const {
        name,
        endpoints,
        context_length,
        supports_vision,
        features,
        ...rest
      } = model;

      let type: ModelsType = "chat";
      if (endpoints.includes("embed")) {
        type = "embedding";
      }
      if (endpoints.includes("embed_image")) {
        type = "embedding";
      }
      if (endpoints.includes("rerank")) {
        type = "rerank";
      }

      const modalities: ModelsModality[] = [];
      if (supports_vision) modalities.push("vision");

      if (features?.includes("json_schema")) {
        modalities.push("response-schema");
        modalities.push("function-call");
      }
      if (features?.includes("vision")) {
        modalities.push("vision");
      }

      const context: Record<string, any> = {};
      if (context_length !== undefined) {
        context.contextLength = context_length;
      }

      return {
        name: model.name,
        label: model.name, // can be changed to a readable label if needed
        provider: "Perplexity" as const,
        type,
        modalities: modalities.length > 0 ? modalities : undefined,
        context: Object.keys(context).length > 0 ? context : undefined,
        cost: undefined, // not available in JSON
      };
    });
    await this.storage.deleteProviderModels({
      providerName: this.name,
      ...metadata,
    });
    await this.storage.addProviderModels({
      modelInfos: models,
      providerName: this.name,
      ...metadata,
    });
    return models;
  }

  async _chatModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<LanguageModelV2> {
    const perplexityInstance = perplexity.languageModel(model.name);
    return perplexityInstance;
  }

  async _completionModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<LanguageModelV2> {
    const perplexityInstance = perplexity(model.name);
    return perplexityInstance;
  }

  async _imageModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<ImageModelV2> {
    throw new EvogenNotImplementedError(
      "Audio models are not supported by Perplexity."
    );
  }

  async _embeddingModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<EmbeddingModelV2<string>> {
    const perplexityInstance = perplexity.textEmbeddingModel(model.name);
    return perplexityInstance;
  }

  async _speachToTextModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<SpeechModelV2> {
    throw new EvogenNotImplementedError(
      "Speach models are not supported by Perplexity."
    );
  }

  async _textToSpeachModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<TranscriptionModelV2> {
    throw new EvogenNotImplementedError(
      "TTS models are not supported by Perplexity."
    );
  }

  async checkStatus(
    metadata?: Record<string, any>
  ): Promise<StatusCheckResult> {
    const apiEndpoint = this.getModelsLink;
    const apiStatus = await this.checkEndpointStatus(`${apiEndpoint}`);
    const endpointStatus = await this.checkEndpointStatus(apiEndpoint);
    return {
      status:
        endpointStatus === "reachable" && apiStatus === "reachable"
          ? "operational"
          : "degraded",
      message: `Status page: ${endpointStatus}, API: ${apiStatus}`,
      incidents: [],
    };
  }
}

export function parsePerplexityConfig(
  config: Record<string, any>
): PerplexityProviderSettings {
  if (!config || !config.apiKey) {
    throw new Error("Missing API key in Perplexity configuration.");
  }

  return {
    apiKey: config.apiKey,
  };
}
