import { createAmazonBedrock } from '@ai-sdk/amazon-bedrock';
import type { LanguageModelV1, ImageModel, EmbeddingModel } from 'ai';
import { MastraVoice } from '@mastra/core/voice';
import { MastraTTS } from '@mastra/core/tts';

import { BaseEvogenProvider, ModelInfo, ProviderInfo, EvogenProviderError, EvogenNotImplementedError } from '../core';

interface AWSBedRockConfig {
  region: string;
  apiKey: string
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
}

export default class AmazonBedrockProvider extends BaseEvogenProvider<AWSBedRockConfig> {
  name = 'AmazonBedrock';
  getApiKeyLink = 'https://console.aws.amazon.com/iam/home';

  _chatModel(model: ModelInfo): LanguageModelV1 {
    const bedrock = createAmazonBedrock(this.config);
    return bedrock(model.name);
  }

  _completionModel(model: ModelInfo): LanguageModelV1 {
    const bedrock = createAmazonBedrock(this.config);
    return bedrock(model.name);
  }

  _imageModel(model: ModelInfo): ImageModel {
    const bedrock = createAmazonBedrock(this.config);
    return bedrock.imageModel(model.name);
  }

  _embeddingModel(model: ModelInfo): EmbeddingModel<string> {
    const bedrock = createAmazonBedrock(this.config);
    return bedrock.textEmbeddingModel(model.name);
  }

  _audioModel(model: ModelInfo): MastraVoice {
    throw new EvogenNotImplementedError('Audio models are not supported by Amazon Bedrock.');
  }

  _speachToTextModel(model: ModelInfo): MastraVoice {
    throw new EvogenNotImplementedError('Speach models are not supported by Amazon Bedrock.');
  }

  _textToSpeachModel(model: ModelInfo): MastraTTS {
    throw new EvogenNotImplementedError('TTS models are not supported by Amazon Bedrock.');
  }

  async getModelsFromServer(apiKey: ModelInfo): Promise<ModelInfo[]> {
    return this.models
  }
}


export function parseAmazonBedrockConfig(info: ProviderInfo, apiKey: string): AWSBedRockConfig {
  const { region, accessKeyId, secretAccessKey, sessionToken } = info.config;

  if (!region || !accessKeyId || !secretAccessKey) {
    throw new EvogenProviderError(
      'Missing required AWS credentials. Configuration must include region, accessKeyId, and secretAccessKey.',
    );
  }

  return {
    region,
    apiKey,
    accessKeyId,
    secretAccessKey,
    ...(sessionToken && { sessionToken }),
  };
}

export default class AnthropicProvider extends BaseProvider {
  name = 'Anthropic';
  getApiKeyLink = 'https://console.anthropic.com/settings/keys';

  config = {
    apiTokenKey: 'ANTHROPIC_API_KEY',
  };

  staticModels: ModelInfo[] = [
    {
      name: 'claude-3-5-sonnet-latest',
      label: 'Claude 3.5 Sonnet (new)',
      provider: 'Anthropic',
      maxTokenAllowed: 8000,
    },
    {
      name: 'claude-3-5-sonnet-20240620',
      label: 'Claude 3.5 Sonnet (old)',
      provider: 'Anthropic',
      maxTokenAllowed: 8000,
    },
    {
      name: 'claude-3-5-haiku-latest',
      label: 'Claude 3.5 Haiku (new)',
      provider: 'Anthropic',
      maxTokenAllowed: 8000,
    },
    { name: 'claude-3-opus-latest', label: 'Claude 3 Opus', provider: 'Anthropic', maxTokenAllowed: 8000 },
    { name: 'claude-3-sonnet-20240229', label: 'Claude 3 Sonnet', provider: 'Anthropic', maxTokenAllowed: 8000 },
    { name: 'claude-3-haiku-20240307', label: 'Claude 3 Haiku', provider: 'Anthropic', maxTokenAllowed: 8000 },
  ];
  
  getModelInstance: (options: {
    model: string;
    serverEnv: Record<string, any>;
    apiKeys?: Record<string, string>;
    providerSettings?: Record<string, IProviderSetting>;
  }) => LanguageModelV1 = (options) => {
    const { apiKeys, providerSettings, serverEnv, model } = options;
    const { apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings,
      serverEnv: serverEnv as any,
      defaultBaseUrlKey: '',
      defaultApiTokenKey: 'ANTHROPIC_API_KEY',
    });
    const anthropic = createAnthropic({
      apiKey,
    });

    return anthropic(model);
  };
}
