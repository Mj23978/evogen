import { createAmazonBedrock } from '@ai-sdk/amazon-bedrock';
import type { LanguageModelV1, ImageModel, EmbeddingModel } from 'ai';
import { MastraVoice } from '@mastra/core/voice';
import { MastraTTS } from '@mastra/core/tts';

import { BaseEvogenProvider, ModelInfo, ProviderInfo, EvogenProviderError, EvogenNotImplementedError } from '../core';

interface AWSBedRockConfig {
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
}

export default class AmazonBedrockProvider extends BaseEvogenProvider<AWSBedRockConfig> {
  name = 'AmazonBedrock';
  getApiKeyLink = 'https://console.aws.amazon.com/iam/home';
  apiKey: string;

  constructor(config: AWSBedRockConfig, models: ModelInfo[], apiKey: string) {
    super(config, models);
    this.apiKey = apiKey
  }

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

  _embeddingModel(model: ModelInfo): EmbeddingModel<string>  {
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


export function parseAmazonBedrockConfig(config: Record<string, any>): AWSBedRockConfig {
  const { region, accessKeyId, secretAccessKey, sessionToken } = config;

  if (!region || !accessKeyId || !secretAccessKey) {
    throw new EvogenProviderError(
      'Missing required AWS credentials. Configuration must include region, accessKeyId, and secretAccessKey.',
    );
  }

  return {
    region,
    accessKeyId,
    secretAccessKey,
    ...(sessionToken && { sessionToken }),
  };
}
