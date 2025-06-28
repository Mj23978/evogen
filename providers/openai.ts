import { createOpenAI } from '@ai-sdk/openai';
import type { LanguageModelV1 } from 'ai';

import BaseEvogenProvider from '../core/base-provider';
import { ModelInfo, ProviderInfo } from '../core/types';


export default class OpenAIProvider extends BaseEvogenProvider {
  name = 'OpenAI';

  constructor(info: ProviderInfo) {
    super(info);
  }

  async getModelsFromServer(apiKey: string): Promise<ModelInfo[]> {
    const response = await fetch(`https://api.openai.com/v1/models`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const res = (await response.json()) as any;

    const data = res.data.filter(
      (model: any) =>
        model.object === 'model' &&
        (model.id.startsWith('gpt-') || model.id.startsWith('o') || model.id.startsWith('chatgpt-')) 
        // && !staticModelIds.includes(model.id),
    );

    return data.map((m: any) => ({
      name: `${m.id}`,
      label: `${m.id}`,
      provider: "OpenAI",
      type: "chat",
      modalities: [],
      context: {
        maxTokens: m.context_window || 32000,
      }
    }));
  }

  getModelInstance(apiKey: string, model: string): LanguageModelV1 {
    const openai = createOpenAI({
      apiKey,
    });

    return openai(model);
  }
}
