import type {
  EmbeddingModelV2,
  ImageModelV2,
  LanguageModelV2,
  ProviderV2,
  SpeechModelV2,
  TranscriptionModelV2,
} from "@ai-sdk/provider";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

import {
  BaseEvogenProvider,
  BaseEvogenStorage,
  EvogenNotImplementedError,
  EvogenProviderError,
  ModelInfo,
  ModelsModality,
  ModelsType,
  ProviderType,
  StatusCheckResult,
} from "../core";

interface OllamaModelDetails {
  parent_model: string;
  format: string;
  family: string;
  families: string[];
  parameter_size: string;
  quantization_level: string;
}

export interface OllamaModel {
  name: string;
  model: string;
  modified_at: string;
  size: number;
  digest: string;
  details: OllamaModelDetails;
}

export interface OllamaApiResponse {
  models: OllamaModel[];
}

const commonFamilyMaps: Record<
  string,
  {
    context_length: number;
    dimention?: number;
    type: ModelsType;
    modalities: ModelsModality[];
  }
> = {
  gemma3: {
    context_length: 131072,
    type: "chat",
    modalities: ["function-call", "vision", "response-schema", "tool-choice"],
  },
  qwen3: {
    context_length: 40000,
    type: "chat",
    modalities: [
      "function-call",
      "response-schema",
      "tool-choice",
      "reasoning",
    ],
  },
  gemma2: {
    context_length: 8196,
    type: "chat",
    modalities: [],
  },
  gemma: {
    context_length: 8196,
    type: "chat",
    modalities: [],
  },
  llama: {
    context_length: 32768,
    type: "chat",
    modalities: ["function-call"],
  },
  qwen2: {
    context_length: 32768,
    type: "chat",
    modalities: ["function-call", "response-schema", "tool-choice"],
  },
  "nomic-bert": {
    context_length: 2048,
    type: "embedding",
    dimention: 768,
    modalities: [],
  },
  deepseek2: {
    context_length: 131072,
    type: "chat",
    modalities: ["function-call", "response-schema", "tool-choice"],
  },
  exaone: {
    context_length: 32768,
    type: "chat",
    modalities: ["function-call", "response-schema", "tool-choice"],
  },
  phi3: {
    context_length: 131072,
    type: "chat",
    modalities: [],
  },
  phi2: {
    context_length: 4096,
    type: "chat",
    modalities: [],
  },
  bert: {
    context_length: 512,
    type: "embedding",
    dimention: 1024,
    modalities: [],
  },
  mllama: {
    context_length: 131072,
    type: "chat",
    modalities: ["function-call", "vision"],
  },
  vision: {
    context_length: 32768,
    type: "chat",
    modalities: ["function-call", "vision"],
  },
};
const visionModelNames = ["llava", "moondream", "minicpm-v"];

interface OllamaConfig {
  baseUrl: string;
  isDocker?: boolean;
}

export class OllamaProvider extends BaseEvogenProvider<OllamaConfig> {
  type: ProviderType = "Ollama";

  createProvider(): ProviderV2 {
    return createOpenAICompatible({
      name: this.name,
      apiKey: "",
      baseURL: this.getBaseUrl(),
    });
  }

  getBaseUrl(metadata?: Record<string, any>): string {
    let baseUrl = this.config.baseUrl;
    if (this.config.isDocker) {
      baseUrl = baseUrl
        .replace("localhost", "host.docker.internal")
        .replace("127.0.0.1", "host.docker.internal");
    }
    return baseUrl;
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
    const ollama = this.createProvider();
    const ollamaInstance = ollama.languageModel(
      model.name
    ) as LanguageModelV2 & { config: any };

    ollamaInstance.config.baseURL = `${this.getBaseUrl()}/api`;

    return ollamaInstance;
  }

  async _completionModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<LanguageModelV2> {
    const ollama = this.createProvider();
    const ollamaInstance = ollama.languageModel(
      model.name
    ) as LanguageModelV2 & { config: any };

    ollamaInstance.config.baseURL = `${this.getBaseUrl()}/api`;

    return ollamaInstance;
  }

  async _imageModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<ImageModelV2> {
    throw new EvogenNotImplementedError(
      "Audio models are not supported by Ollama."
    );
  }

  async _embeddingModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<EmbeddingModelV2<string>> {
    const ollama = this.createProvider();
    const ollamaInstance = ollama.textEmbeddingModel(
      model.name
    ) as EmbeddingModelV2<string> & { config: any };

    ollamaInstance.config.baseURL = `${this.getBaseUrl()}/api`;

    return ollamaInstance;
  }

  async _speachToTextModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<SpeechModelV2> {
    throw new EvogenNotImplementedError(
      "Speach models are not supported by Ollama."
    );
  }

  async _textToSpeachModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<TranscriptionModelV2> {
    throw new EvogenNotImplementedError(
      "TTS models are not supported by Ollama."
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

export function parseOllamaConfig(config: Record<string, any>): OllamaConfig {
  const { baseUrl, isDocker } = config;

  return {
    baseUrl: baseUrl ?? "http://localhost:1234",
    isDocker,
  };
}
