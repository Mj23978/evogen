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
  type ModelInfo,
  type ProviderType,
  type StatusCheckResult,
} from "../core";

interface LMStudioModelDetails {
  parent_model: string;
  format: string;
  family: string;
  families: string[];
  parameter_size: string;
  quantization_level: string;
}

export interface LMStudioModel {
  name: string;
  model: string;
  modified_at: string;
  size: number;
  digest: string;
  details: LMStudioModelDetails;
}

export interface LMStudioApiResponse {
  models: LMStudioModel[];
}
interface LMStudioConfig {
  baseURL: string;
  isDocker?: boolean;
}

export class LMStudioProvider extends BaseEvogenProvider<LMStudioConfig> {
  type: ProviderType = "LMStudio";

  createProvider(): ProviderV2 {
    return createOpenAICompatible({
      name: this.name,
      apiKey: "",
      baseURL: this.getBaseUrl(),
    });
  }

  getBaseUrl(metadata?: Record<string, any>): string {
    let baseURL = this.config.baseURL;
    if (this.config.isDocker) {
      baseURL = baseURL
        .replace("localhost", "host.docker.internal")
        .replace("127.0.0.1", "host.docker.internal");
    }
    return baseURL;
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
    const lmstudio = this.createProvider();
    const lmstudioInstance = lmstudio.languageModel(
      model.name
    ) as LanguageModelV2 & { config: any };

    lmstudioInstance.config.baseURL = `${this.getBaseUrl()}/api`;

    return lmstudioInstance;
  }

  async _completionModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<LanguageModelV2> {
    const lmstudio = this.createProvider();
    const lmstudioInstance = lmstudio.languageModel(
      model.name
    ) as LanguageModelV2 & { config: any };

    lmstudioInstance.config.baseURL = `${this.getBaseUrl()}/api`;

    return lmstudioInstance;
  }

  async _imageModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<ImageModelV2> {
    throw new EvogenNotImplementedError(
      "Audio models are not supported by LMStudio."
    );
  }

  async _embeddingModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<EmbeddingModelV2<string>> {
    const lmstudio = this.createProvider();
    const lmstudioInstance = lmstudio.textEmbeddingModel(
      model.name
    ) as EmbeddingModelV2<string> & { config: any };

    lmstudioInstance.config.baseURL = `${this.getBaseUrl()}/api`;

    return lmstudioInstance;
  }

  async _speachToTextModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<SpeechModelV2> {
    throw new EvogenNotImplementedError(
      "Speach models are not supported by LMStudio."
    );
  }

  async _textToSpeachModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<TranscriptionModelV2> {
    throw new EvogenNotImplementedError(
      "TTS models are not supported by LMStudio."
    );
  }

  async checkStatus(
    metadata?: Record<string, any>
  ): Promise<StatusCheckResult> {
    const apiEndpoint = this.getBaseUrl();
    const apiStatus = await this.checkEndpointStatus(
      `${apiEndpoint}/api/models`
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

export function parseLMStudioConfig(
  config: Record<string, any>
): LMStudioConfig {
  const { baseURL, isDocker } = config;

  return {
    baseURL: baseURL ?? "http://localhost:1234",
    isDocker,
  };
}
