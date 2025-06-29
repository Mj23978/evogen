import { cohere, CohereProviderSettings } from "@ai-sdk/cohere";
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
  ModelContext,
  ModelInfo,
  ModelsModality,
  ModelsType,
  ProviderType,
  StatusCheckResult,
} from "../core";

type CohereModel = {
  name: string;
  endpoints: string[];
  finetuned: boolean;
  context_length: number;
  tokenizer_url: string;
  supports_vision: boolean;
  features: null | string[];
  default_endpoints: never[];
};

type CohereApiResponse = {
  models: CohereModel[];
};

export class CohereProvider extends BaseEvogenProvider<CohereProviderSettings> {
  type: ProviderType = "Cohere";
  getModelsLink = "https://api.cohere.ai/v1/models";

  createProvider(): ProviderV2 {
    return cohere
  }

  async syncModelsFromServer(
    metadata?: Record<string, any>
  ): Promise<ModelInfo[]> {
    const response = await fetch(this.getModelsLink + "?page_size=1000", {
      headers: {
        Authorization: `Bearer ${this.config.apiKey!}`,
      },
    });
    const data = (await response.json()) as CohereApiResponse;

    const models = data.models.map<ModelInfo>((model: CohereModel) => {
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

      const context: ModelContext = {};
      if (context_length !== undefined) {
        context.maxTokens = context_length;
      }

      return {
        name: model.name,
        label: model.name, // can be changed to a readable label if needed
        provider: "Cohere" as const,
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
    const cohereInstance = cohere.languageModel(model.name);
    return cohereInstance;
  }

  async _completionModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<LanguageModelV2> {
    const cohereInstance = cohere(model.name);
    return cohereInstance;
  }

  async _imageModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<ImageModelV2> {
    throw new EvogenNotImplementedError(
      "Audio models are not supported by Cohere."
    );
  }

  async _embeddingModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<EmbeddingModelV2<string>> {
    const cohereInstance = cohere.textEmbeddingModel(model.name);
    return cohereInstance;
  }

  async _speachToTextModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<SpeechModelV2> {
    throw new EvogenNotImplementedError(
      "Speach models are not supported by Cohere."
    );
  }

  async _textToSpeachModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<TranscriptionModelV2> {
    throw new EvogenNotImplementedError(
      "TTS models are not supported by Cohere."
    );
  }

  async checkStatus(
    metadata?: Record<string, any>
  ): Promise<StatusCheckResult> {
    const apiEndpoint = this.getModelsLink;
    const apiStatus = await this.checkEndpointStatus(
      `${apiEndpoint}`
    );
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

export function parseCohereConfig(
  config: Record<string, any>
): CohereProviderSettings {
  if (!config || !config.apiKey) {
    throw new Error("Missing API key in Cohere configuration.");
  }

  return {
    apiKey: config.apiKey,
  };
}
