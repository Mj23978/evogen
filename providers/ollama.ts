import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import type {
  EmbeddingModelV1,
  ImageModelV1,
  LanguageModelV1,
  ProviderV1,
  SpeechModelV1,
  TranscriptionModelV1,
} from "@ai-sdk/provider";

import {
  BaseEvogenProvider,
  EvogenNotImplementedError,
  type ModelInfo,
  type ModelsModality,
  type ModelsType,
  type ProviderType,
  type StatusCheckResult,
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
// const visionModelNames = ["llava", "moondream", "minicpm-v"];

interface OllamaConfig {
  baseURL: string;
  isDocker?: boolean;
}

export class OllamaProvider extends BaseEvogenProvider<OllamaConfig> {
  type: ProviderType = "Ollama";

  createProvider(): ProviderV1 {
    return createOpenAICompatible({
      name: this.name,
      apiKey: "",
      baseURL: `${this.getBaseUrl()}/v1`,
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
    const baseURL = this.getBaseUrl();
    const response = await fetch(`${baseURL}/api/tags`);
    const data = (await response.json()) as OllamaApiResponse;

    const models = data.models.map<ModelInfo>((model: OllamaModel) => {
      const configs = commonFamilyMaps[model.details.family] ?? {
        context_length: 16384,
        type: "chat",
        modalities: [],
      };
      return {
        name: model.name,
        label: `${model.name} (${model.details.parameter_size})`,
        provider: "Ollama",
        type: configs.type,
        modalities: configs.modalities,
        context: {
          maxTokens: configs.context_length,
        },
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
  ): Promise<LanguageModelV1> {
    const ollama = this.createProvider();
    const ollamaInstance = ollama.languageModel(
      model.name
    ) as LanguageModelV1 & { config: any };

    ollamaInstance.config.baseURL = `${this.getBaseUrl()}/api`;

    return ollamaInstance;
  }

  async _completionModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<LanguageModelV1> {
    const ollama = this.createProvider();
    const ollamaInstance = ollama.languageModel(
      model.name
    ) as LanguageModelV1 & { config: any };

    ollamaInstance.config.baseURL = `${this.getBaseUrl()}/api`;

    return ollamaInstance;
  }

  async _imageModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<ImageModelV1> {
    throw new EvogenNotImplementedError(
      "Audio models are not supported by Ollama."
    );
  }

  async _embeddingModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<EmbeddingModelV1<string>> {
    const ollama = this.createProvider();
    const ollamaInstance = ollama.textEmbeddingModel(
      model.name
    ) as EmbeddingModelV1<string> & { config: any };

    ollamaInstance.config.baseURL = `${this.getBaseUrl()}/api`;

    return ollamaInstance;
  }

  async _speachToTextModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<SpeechModelV1> {
    throw new EvogenNotImplementedError(
      "Speach models are not supported by Ollama."
    );
  }

  async _textToSpeachModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<TranscriptionModelV1> {
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
  const { baseURL, isDocker } = config;

  return {
    baseURL: baseURL ?? "http://localhost:11434",
    isDocker,
  };
}
