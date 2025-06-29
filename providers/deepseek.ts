import { DeepSeekProviderSettings, createDeepSeek } from "@ai-sdk/deepseek";
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
  ProviderType,
  StatusCheckResult,
} from "../core";

type DeepSeekModel = {
  name: string;
  endpoints: string[];
  finetuned: boolean;
  context_length: number;
  tokenizer_url: string;
  supports_vision: boolean;
  features: null | string[];
  default_endpoints: never[];
};

type DeepSeekApiResponse = {
  models: DeepSeekModel[];
};

export class DeepSeekProvider extends BaseEvogenProvider<DeepSeekProviderSettings> {
  type: ProviderType = "Deepseek";
  getModelsLink = "https://api.deepseek.com/v1/models";

  createProvider(): ProviderV2 {
    return createDeepSeek(this.config);
  }

  async syncModelsFromServer(
    metadata?: Record<string, any>
  ): Promise<ModelInfo[]> {
    return await this.storage.getProviderModels({
      providerName: this.name,
      ...metadata,
    });
  }

  async _chatModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<LanguageModelV2> {
    const deepseek = this.createProvider();
    const deepseekInstance = deepseek.languageModel(model.name);
    return deepseekInstance;
  }

  async _completionModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<LanguageModelV2> {
    const deepseek = this.createProvider();
    const deepseekInstance = deepseek.languageModel(model.name);
    return deepseekInstance;
  }

  async _imageModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<ImageModelV2> {
    const deepseek = this.createProvider();
    const deepseekInstance = deepseek.imageModel(model.name);
    return deepseekInstance;
  }

  async _embeddingModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<EmbeddingModelV2<string>> {
    const deepseek = this.createProvider();
    const deepseekInstance = deepseek.textEmbeddingModel(model.name);
    return deepseekInstance;
  }

  async _speachToTextModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<SpeechModelV2> {
    const deepseek = this.createProvider();
    const deepseekInstance = deepseek.speechModel?.(model.name);
    if (!deepseekInstance) {
      throw new EvogenNotImplementedError(
        "TTS models are not supported by DeepSeek."
      );
    }
    return deepseekInstance;
  }

  async _textToSpeachModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<TranscriptionModelV2> {
    const deepseek = this.createProvider();
    const deepseekInstance = deepseek.transcriptionModel?.(model.name);
    if (!deepseekInstance) {
      throw new EvogenNotImplementedError(
        "TTS models are not supported by DeepSeek."
      );
    }
    return deepseekInstance;
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

export function parseDeepSeekConfig(
  config: Record<string, any>
): DeepSeekProviderSettings {
  if (!config || !config.apiKey) {
    throw new Error("Missing credentials in DeepSeek configuration.");
  }

  return {
    apiKey: config.apiKey,
    baseURL: config.baseURL,
  };
}
