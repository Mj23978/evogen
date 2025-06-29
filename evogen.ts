import {
  BaseEvogenProvider,
  BaseEvogenStorage,
  EvogenError,
  ProviderInfo,
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
import { OpenAIProvider, parseOpenAIConfig } from "./providers/openai";
import {
  OpenAICompatibleProvider,
  parseOpenAICompatibleConfig,
} from "./providers/openai-compatible";
import {
  PerplexityProvider,
  parsePerplexityConfig,
} from "./providers/perplexity";
import {
  TogetherAIProvider,
  parseTogetherAIConfig,
} from "./providers/together";
import { XaiProvider, parseXaiConfig } from "./providers/xai";


export class EvoGen {
  strategies: Map<string, BaseEvogenStorage<{}>>;

  constructor(strategies: Map<string, BaseEvogenStorage<{}>>) {
    if (strategies.size === 0) throw new EvogenError("No strategies provided");
    this.strategies = strategies;
  }

  getStorage(strategy: string): BaseEvogenStorage<{}> {
    const storage = this.strategies.get(strategy);
    if (storage) {
      return storage;
    }
    throw new EvogenError("No storage strategy found for the given strategy");
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

  async getProviderByType(
    info: ProviderInfo,
    strategy: string,
    metadata?: Record<string, any>
  ): Promise<BaseEvogenProvider<any>> {
    const storage = this.getStorage(strategy);
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
      default:
        throw new EvogenError("Unknown provider type");
    }
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
    const provider = await storage.getProvider({
      providerName: name,
      ...metadata,
    });
    provider.config = {
      ...provider.keys,
      ...provider.metadata,
      ...provider.config,
      ...config,
    };
    return this.getProviderByType(provider, strategy);
  }

  // getDefaultProviderChecker(config: any): BaseProviderChecker {
  //   return new (class extends BaseProviderChecker {
  //     async checkStatus(): Promise<StatusCheckResult> {
  //       const endpointStatus = await this.checkEndpoint(this.config.statusUrl);
  //       const apiStatus = await this.checkEndpoint(this.config.apiUrl);

  //       return {
  //         status: endpointStatus === 'reachable' && apiStatus === 'reachable' ? 'operational' : 'degraded',
  //         message: `Status page: ${endpointStatus}, API: ${apiStatus}`,
  //         incidents: ['Note: Limited status information due to CORS restrictions'],
  //       };
  //     }
  //   })(config);
  // }

  // async updateModelList(options: {
  //   apiKeys?: Record<string, string>;
  //   providerSettings?: Record<string, IProviderSetting>;
  //   serverEnv?: Record<string, string>;
  // }): Promise<ModelInfo[]> {
  //   const { apiKeys, providerSettings, serverEnv } = options;

  //   let enabledProviders = Array.from(this._providers.values()).map((p) => p.name);

  //   if (providerSettings && Object.keys(providerSettings).length > 0) {
  //     enabledProviders = enabledProviders.filter((p) => providerSettings[p].enabled);
  //   }

  //   // Get dynamic models from all providers that support them
  //   const dynamicModels = await Promise.all(
  //     Array.from(this._providers.values())
  //       .filter((provider) => enabledProviders.includes(provider.name))
  //       .filter(
  //         (provider): provider is BaseProvider & Required<Pick<ProviderInfo, 'getDynamicModels'>> =>
  //           !!provider.getDynamicModels,
  //       )
  //       .map(async (provider) => {
  //         const cachedModels = provider.getModelsFromCache(options);

  //         if (cachedModels) {
  //           return cachedModels;
  //         }

  //         const dynamicModels = await provider
  //           .getDynamicModels(apiKeys, providerSettings?.[provider.name], serverEnv)
  //           .then((models) => {
  //             logger.info(`Caching ${models.length} dynamic models for ${provider.name}`);
  //             provider.storeDynamicModels(options, models);

  //             return models;
  //           })
  //           .catch((err) => {
  //             logger.error(`Error getting dynamic models ${provider.name} :`, err);
  //             return [];
  //           });

  //         return dynamicModels;
  //       }),
  //   );
  //   const staticModels = Array.from(this._providers.values()).flatMap((p) => p.staticModels || []);
  //   const dynamicModelsFlat = dynamicModels.flat();
  //   const dynamicModelKeys = dynamicModelsFlat.map((d) => `${d.name}-${d.provider}`);
  //   const filteredStaticModesl = staticModels.filter((m) => !dynamicModelKeys.includes(`${m.name}-${m.provider}`));

  //   // Combine static and dynamic models
  //   const modelList = [...dynamicModelsFlat, ...filteredStaticModesl];
  //   modelList.sort((a, b) => a.name.localeCompare(b.name));
  //   this._modelList = modelList;

  //   return modelList;
  // }
}

export default EvoGen;
