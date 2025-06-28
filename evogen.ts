import { BaseEvogenProvider, BaseEvogenStorage, EvogenError, ProviderInfo } from './core';
import { OllamaProvider, parseOllamaConfig } from './providers/ollama';

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

  async getProviderApiKey(info: ProviderInfo, strategy: string, metadata?: Record<string, any>): Promise<string> {
    if (info.config?.apiKey) {
      return info.config?.apiKey;
    }
    if (info.keys.apiKeyEnv) {
      const storage = this.getStorage(strategy);
      const apiKey = await storage.getApiKey({ name: info.keys.apiKeyEnv, ...metadata });
      return apiKey;
    }
    throw new EvogenError("No API key found for the given provider");
  }

  async getProviderByType(info: ProviderInfo, strategy: string, metadata?: Record<string, any>): Promise<BaseEvogenProvider<any>> {
    const storage = this.getStorage(strategy);
    switch (info.type) {
      case 'Ollama':
        const config = parseOllamaConfig(info.config ?? {});
        return new OllamaProvider(info.name, config, storage);
      // case 'AmazonBedrock':
      //   return new AmazonBedrockStatusChecker(config);
      // case 'Cohere':
      //   return new CohereStatusChecker(config);
      // case 'Deepseek':
      //   return new DeepseekStatusChecker(config);
      // case 'Google':
      //   return new GoogleStatusChecker(config);
      // case 'Groq':
      //   return new GroqStatusChecker(config);
      // case 'HuggingFace':
      //   return new HuggingFaceStatusChecker(config);
      // case 'Hyperbolic':
      //   return new HyperbolicStatusChecker(config);
      // case 'Mistral':
      //   return new MistralStatusChecker(config);
      // case 'OpenRouter':
      //   return new OpenRouterStatusChecker(config);
      // case 'Perplexity':
      //   return new PerplexityStatusChecker(config);
      // case 'Together':
      //   return new TogetherStatusChecker(config);
      // case 'XAI':
      //   return new XAIStatusChecker(config);
      default:
        throw new EvogenError("Unknown provider type");
    }
  }

  async getProviderConfigs(name: string, strategy: string, metadata?: Record<string, any>): Promise<Record<string, any>> {
    const storage = this.getStorage(strategy);
    const provider = await storage.getProvider({ providerName: name, ...metadata });
    return { ...provider.keys, ...provider.metadata };
  }

  async getProvider(name: string, strategy: string, config?: Record<string, any>, metadata?: Record<string, any>): Promise<BaseEvogenProvider<any>> {
    const storage = this.getStorage(strategy);
    const provider = await storage.getProvider({ providerName: name, ...metadata });
    provider.config = { ...provider.keys, ...provider.metadata, ...provider.config, ...config };
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