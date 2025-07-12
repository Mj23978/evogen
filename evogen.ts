import {
  type BaseEvogenProvider,
  type BaseEvogenStorage,
  EvogenError,
  type ModelInfo,
  type ProviderInfo,
} from "./core";
import {
  AmazonBedrockProvider,
  parseAmazonBedrockConfig,
} from "./providers/amazon-bedrock";
import { AnthropicProvider, parseAnthropicConfig } from "./providers/anthropic";
import { CohereProvider, parseCohereConfig } from "./providers/cohere";
import { DeepSeekProvider, parseDeepSeekConfig } from "./providers/deepseek";
import { GithubProvider, parseGithubConfig } from "./providers/github";
import { GoogleProvider, parseGoogleConfig } from "./providers/google";
import { GroqProvider, parseGroqConfig } from "./providers/groq";
import {
  HuggingFaceProvider,
  parseHuggingFaceConfig,
} from "./providers/huggingface";
import {
  HyperbolicProvider,
  parseHyperbolicConfig,
} from "./providers/hyperbolic";
import { LMStudioProvider, parseLMStudioConfig } from "./providers/lmstudio";
import { MistralProvider, parseMistralConfig } from "./providers/mistral";
import { OllamaProvider, parseOllamaConfig } from "./providers/ollama";
import {
  OpenRouterProvider,
  parseOpenRouterConfig,
} from "./providers/open-router";
import {
  OpenAICompatibleProvider,
  parseOpenAICompatibleConfig,
} from "./providers/openai-compatible";
import {
  parsePerplexityConfig,
  PerplexityProvider,
} from "./providers/perplexity";
import {
  parseTogetherAIConfig,
  TogetherAIProvider,
} from "./providers/together";
import { parseXaiConfig, XaiProvider } from "./providers/xai";

export class EvoGen {
  strategies: Map<string, BaseEvogenStorage<{}>>;
  private _modelList: ModelInfo[] = [];

  constructor(strategies: Map<string, BaseEvogenStorage<{}>>) {
    if (strategies.size === 0) throw new EvogenError("No strategies provided");
    this.strategies = strategies;
  }

  getStorage(strategy: string): BaseEvogenStorage<{}> {
    const storage = this.strategies.get(strategy);
    if (storage) {
      return storage;
    }
    throw new EvogenError(`No storage strategy found for '${strategy}'`);
  }

  async getProviderApiKey(
    info: ProviderInfo,
    strategy: string,
    metadata?: Record<string, any>
  ): Promise<string> {
    if (info.config?.apiKey) {
      return info.config?.apiKey;
    }
    if (info.keys.apiKeyEnv) {
      const storage = this.getStorage(strategy);
      const apiKey = await storage.getApiKey({
        name: info.keys.apiKeyEnv,
        ...metadata,
      });
      return apiKey;
    }
    throw new EvogenError("No API key found for the given provider");
  }

  async getProviderConfigs(
    name: string,
    strategy: string,
    metadata?: Record<string, any>
  ): Promise<Record<string, any>> {
    const storage = this.getStorage(strategy);
    const provider = await storage.getProvider({
      providerName: name,
      ...metadata,
    });
    return { ...provider.keys, ...provider.metadata };
  }

  async getProvider(
    name: string,
    strategy: string,
    config?: Record<string, any>,
    metadata?: Record<string, any>
  ): Promise<BaseEvogenProvider<any>> {
    const storage = this.getStorage(strategy);
    const providerInfo = await storage.getProvider({
      providerName: name,
      ...metadata,
    });
    providerInfo.config = {
      ...providerInfo.keys,
      ...providerInfo.metadata,
      ...providerInfo.config,
      ...config,
    };
    return this.getProviderByType(providerInfo, storage);
  }

  /**
   * Fetches model lists from all available providers for a given strategy,
   * updates the internal cache, and returns the combined list.
   * @param strategy The storage strategy to use.
   * @param metadata Optional metadata for the storage strategy.
   * @returns A promise that resolves to an array of ModelInfo objects.
   */
  async getModelList(
    strategy: string,
    metadata?: Record<string, any>
  ): Promise<ModelInfo[]> {
    const storage = this.getStorage(strategy);
    const providerInfos = await storage.getProviders({ ...metadata });

    const modelPromises = providerInfos.map(async (info) => {
      try {
        const models = await storage.getProviderModels({
          providerName: info.name,
        });
        return models;
      } catch (err) {
        console.error(
          `Evogen: Error fetching models for provider ${info.name}:`,
          err
        );
        return [];
      }
    });

    const modelLists = await Promise.all(modelPromises);
    const allModels = modelLists.flat();

    allModels.sort((a, b) => a.name.localeCompare(b.name));
    this._modelList = allModels;

    return this._modelList;
  }

  /**
   * A pure function that returns a provider instance based on its type.
   * @param info The provider's configuration and type information.
   * @param storage The storage instance to be passed to the provider.
   * @returns An instance of a BaseEvogenProvider.
   */
  getProviderByType(
    info: ProviderInfo,
    storage: BaseEvogenStorage<{}>
  ): BaseEvogenProvider<any> {
    switch (info.type) {
      case "AmazonBedrock":
        return new AmazonBedrockProvider(
          info.name,
          parseAmazonBedrockConfig(info.config ?? {}),
          storage
        );
      case "Anthropic":
        return new AnthropicProvider(
          info.name,
          parseAnthropicConfig(info.config ?? {}),
          storage
        );
      case "Cohere":
        return new CohereProvider(
          info.name,
          parseCohereConfig(info.config ?? {}),
          storage
        );
      case "Deepseek":
        return new DeepSeekProvider(
          info.name,
          parseDeepSeekConfig(info.config ?? {}),
          storage
        );
      case "Github":
        return new GithubProvider(
          info.name,
          parseGithubConfig(info.config ?? {}),
          storage
        );
      case "Google":
        return new GoogleProvider(
          info.name,
          parseGoogleConfig(info.config ?? {}),
          storage
        );
      case "Groq":
        return new GroqProvider(
          info.name,
          parseGroqConfig(info.config ?? {}),
          storage
        );
      case "HuggingFace":
        return new HuggingFaceProvider(
          info.name,
          parseHuggingFaceConfig(info.config ?? {}),
          storage
        );
      case "Hyperbolic":
        return new HyperbolicProvider(
          info.name,
          parseHyperbolicConfig(info.config ?? {}),
          storage
        );
      case "LMStudio":
        return new LMStudioProvider(
          info.name,
          parseLMStudioConfig(info.config ?? {}),
          storage
        );
      case "Mistral":
        return new MistralProvider(
          info.name,
          parseMistralConfig(info.config ?? {}),
          storage
        );
      case "Ollama":
        return new OllamaProvider(
          info.name,
          parseOllamaConfig(info.config ?? {}),
          storage
        );
      case "OpenRouter":
        return new OpenRouterProvider(
          info.name,
          parseOpenRouterConfig(info.config ?? {}),
          storage
        );
      case "Perplexity":
        return new PerplexityProvider(
          info.name,
          parsePerplexityConfig(info.config ?? {}),
          storage
        );
      case "Together":
        return new TogetherAIProvider(
          info.name,
          parseTogetherAIConfig(info.config ?? {}),
          storage
        );
      case "XAI":
        return new XaiProvider(
          info.name,
          parseXaiConfig(info.config ?? {}),
          storage
        );
      case "OpenAILike":
        return new OpenAICompatibleProvider(
          info.name,
          parseOpenAICompatibleConfig(info.config ?? {}),
          storage
        );
      default: {
        const exhaustiveCheck = info.type;
        throw new EvogenError(`Unknown provider type: ${exhaustiveCheck}`);
      }
    }
  }
}

export default EvoGen;
