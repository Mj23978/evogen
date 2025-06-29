import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
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

type HuggingFaceModel =  {
  _id: string;
  id: string;
  likes: number;
  trendingScore: number;
  private: boolean;
  downloads: number;
  tags: string[];
  pipeline_tag?: string | undefined;
  library_name: string;
  createdAt: string;
  modelId?: string
};

type HuggingFaceProviderSettings = {
  apiKey: string;
  baseURL: string;
};

type HuggingFaceApiResponse = HuggingFaceModel[];

export class HuggingFaceProvider extends BaseEvogenProvider<HuggingFaceProviderSettings> {
  type: ProviderType = "HuggingFace";
  getModelsLink = "https://api.huggingface.com/v1/models";

  createProvider(): ProviderV2 {
    return createOpenAICompatible({
      name: this.name,
      baseURL: this.config.baseURL!,
      apiKey: this.config.apiKey!,
    });
  }

  async syncModelsFromServer(
    metadata?: Record<string, any>
  ): Promise<ModelInfo[]> {
    const response = await fetch(this.getModelsLink, {
      headers: {
        Authorization: `Bearer ${this.config.apiKey!}`,
      },
    });
    const data = (await response.json()) as HuggingFaceApiResponse;

    const models = data.filter(model => {
      return (
        model.pipeline_tag === "image-to-image" ||
        model.pipeline_tag === "text-generation" ||
        model.pipeline_tag === "text-to-speech" ||
        model.pipeline_tag === "image-text-to-text" ||
        model.pipeline_tag === "any-to-any" ||
        model.pipeline_tag === "sentence-similarity" ||
        model.pipeline_tag === "text-to-image" ||
        model.pipeline_tag === "automatic-speech-recognition"
      ); 
    }).map<ModelInfo>((model: HuggingFaceModel) => {
      const { id, modelId, pipeline_tag, tags, ...rest } = model;

      const modalities: ModelsModality[] = [];

      let type: ModelsType = "chat";
      if (pipeline_tag === "image-to-image") {
        type = "image-generation";
      }
      if (pipeline_tag === "image-text-to-text") {
        modalities.push("vision");
      }
      if (pipeline_tag === "any-to-any") {
        modalities.push("vision");
        modalities.push("audio-input");
        modalities.push("audio-output");
        modalities.push("video-input");
      }
      if (pipeline_tag === "text-to-speech") {
        type = "text-to-speach";
      }
      if (pipeline_tag === "text-to-image") {
        type = "image-generation";
      }
      if (pipeline_tag === "automatic-speech-recognition") {
        type = "speech-to-text";
      }
      if (pipeline_tag === "sentence-similarity") {
        type = "embedding";
      }
      if (id.includes("guard")) {
        type = "moderation";
      }

      return {
        name: id,
        label: id,
        provider: "HuggingFace" as const,
        type,
        modalities: modalities.length > 0 ? modalities : undefined,
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
    const huggingface = this.createProvider();
    const huggingfaceInstance = huggingface.languageModel(model.name);
    return huggingfaceInstance;
  }

  async _completionModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<LanguageModelV2> {
    const huggingface = this.createProvider();
    const huggingfaceInstance = huggingface.languageModel(model.name);
    return huggingfaceInstance;
  }

  async _imageModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<ImageModelV2> {
    throw new EvogenNotImplementedError(
      "Audio models are not supported by HuggingFace."
    );
  }

  async _embeddingModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<EmbeddingModelV2<string>> {
    const huggingface = this.createProvider();
    const huggingfaceInstance = huggingface.textEmbeddingModel(model.name);
    return huggingfaceInstance;
  }

  async _speachToTextModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<SpeechModelV2> {
    throw new EvogenNotImplementedError(
      "Speach models are not supported by HuggingFace."
    );
  }

  async _textToSpeachModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<TranscriptionModelV2> {
    throw new EvogenNotImplementedError(
      "TTS models are not supported by HuggingFace."
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

export function parseHuggingFaceConfig(
  config: Record<string, any>
): HuggingFaceProviderSettings {
  if (!config || !config.apiKey) {
    throw new Error("Missing API key in HuggingFace configuration.");
  }

  return {
    apiKey: config.apiKey,
    baseURL: 'https://api-inference.huggingface.co/v1/'
  };
}
