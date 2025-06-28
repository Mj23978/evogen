import { MastraTTS } from '@mastra/core/tts';
import { MastraVoice } from '@mastra/core/voice';
import type { EmbeddingModel, ImageModel, LanguageModelV1 } from 'ai';
import { ollama } from 'ollama-ai-provider';

import { BaseEvogenProvider, EvogenNotImplementedError, EvogenProviderError, ModelInfo, ModelsModality, ModelsType, ProviderType, StatusCheckResult } from '../core';

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

const commonFamilyMaps: Record<string, { context_length: number, dimention?: number, type: ModelsType, modalities: ModelsModality[] }> = {
  "gemma3": {
    context_length: 131072,
    type: "chat",
    modalities: ["function-call", "vision", "response-schema", "tool-choice"],
  },
  "gemma2": {
    context_length: 8196,
    type: "chat",
    modalities: [],
  },
  "gemma": {
    context_length: 8196,
    type: "chat",
    modalities: [],
  },
  "llama": {
    context_length: 32768,
    type: "chat",
    modalities: ["function-call",],
  },
  "qwen2": {
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
  "deepseek2": {
    context_length: 131072,
    type: "chat",
    modalities: ["function-call", "response-schema", "tool-choice"],
  },
  "exaone": {
    context_length: 32768,
    type: "chat",
    modalities: ["function-call", "response-schema", "tool-choice"],
  },
  "phi3": {
    context_length: 131072,
    type: "chat",
    modalities: [],
  },
  "phi2": {
    context_length: 4096,
    type: "chat",
    modalities: [],
  },
  "bert": {
    context_length: 512,
    type: "embedding",
    dimention: 1024,
    modalities: [],
  },
  "mllama": {
    context_length: 131072,
    type: "chat",
    modalities: ["function-call", "vision"],
  },
  "vision": {
    context_length: 32768,
    type: "chat",
    modalities: ["function-call", "vision"],
  },
}
const visionModelNames = ["llava", "moondream", "minicpm-v"]

interface OllamaConfig {
  baseUrl: string;
  isDocker?: boolean;
}

export class OllamaProvider extends BaseEvogenProvider<OllamaConfig> {
  typ: ProviderType = 'Ollama';

  getBaseUrl(metadata?: Record<string, any>): string {
    let baseUrl = this.config.baseUrl
    if (this.config.isDocker) {
      baseUrl = baseUrl.replace('localhost', 'host.docker.internal').replace('127.0.0.1', 'host.docker.internal');
    }
    return baseUrl
  }

  async syncModelsFromServer(metadata?: Record<string, any>): Promise<ModelInfo[]> {
    let baseUrl = this.getBaseUrl();
    const response = await fetch(`${baseUrl}/api/tags`);
    const data = (await response.json()) as OllamaApiResponse;

    const models = data.models.map<ModelInfo>((model: OllamaModel) => {
      const configs = commonFamilyMaps[model.details.family] ?? { context_length: 16384, type: "chat", modalities: [] };
      return {
        name: model.name,
        label: `${model.name} (${model.details.parameter_size})`,
        provider: "Ollama",
        type: configs.type,
        modalities: configs.modalities,
        context: {
          maxTokens: configs.context_length
        }
      }
    });
    await this.storage.deleteProviderModels({ providerName: this.name, ...metadata });
    await this.storage.addProviderModels({ modelInfos: models, providerName: this.name, ...metadata });
    return models;
  }


  async _chatModel(model: ModelInfo, metadata?: Record<string, any>): Promise<LanguageModelV1> {
    const ollamaInstance = ollama(model.name, {
      numCtx: model.context?.maxTokens,
      simulateStreaming: true,
      structuredOutputs: true,
    }) as LanguageModelV1 & { config: any };

    ollamaInstance.config.baseURL = `${this.getBaseUrl()}/api`;

    return ollamaInstance;
  }

  async _completionModel(model: ModelInfo, metadata?: Record<string, any>): Promise<LanguageModelV1> {
    const ollamaInstance = ollama(model.name, {
      numCtx: model.context?.maxTokens,
      simulateStreaming: true,
      structuredOutputs: true,
    }) as LanguageModelV1 & { config: any };

    ollamaInstance.config.baseURL = `${this.getBaseUrl()}/api`;

    return ollamaInstance;
  }

  async _imageModel(model: ModelInfo, metadata?: Record<string, any>): Promise<ImageModel> {
    throw new EvogenNotImplementedError('Audio models are not supported by Ollama.');
  }

  async _embeddingModel(model: ModelInfo, metadata?: Record<string, any>): Promise<EmbeddingModel<string>> {
    const ollamaInstance = ollama.textEmbeddingModel(model.name, {
      truncate: true
    }) as EmbeddingModel<string> & { config: any };;

    ollamaInstance.config.baseURL = `${this.getBaseUrl()}/api`;

    return ollamaInstance;
  }

  async _audioModel(model: ModelInfo, metadata?: Record<string, any>): Promise<MastraVoice> {
    throw new EvogenNotImplementedError('Audio models are not supported by Ollama.');
  }

  async _speachToTextModel(model: ModelInfo, metadata?: Record<string, any>): Promise<MastraVoice> {
    throw new EvogenNotImplementedError('Speach models are not supported by Ollama.');
  }

  async _textToSpeachModel(model: ModelInfo, metadata?: Record<string, any>): Promise<MastraTTS> {
    throw new EvogenNotImplementedError('TTS models are not supported by Ollama.');
  }

  async checkStatus(metadata?: Record<string, any>): Promise<StatusCheckResult> {
    const apiEndpoint = this.getBaseUrl();
    const apiStatus = await this.checkEndpointStatus(`${apiEndpoint}/api/models`);
    const endpointStatus = await this.checkEndpointStatus(apiEndpoint);
    return {
      status: endpointStatus === 'reachable' && apiStatus === 'reachable' ? 'operational' : 'degraded',
      message: `Status page: ${endpointStatus}, API: ${apiStatus}`,
      incidents: []
    };
  }
}

export function parseOllamaConfig(config: Record<string, any>): OllamaConfig {
  const { baseUrl, isDocker } = config;

  return {
    baseUrl: baseUrl ?? "http://localhost:11434",
    isDocker
  };
}
