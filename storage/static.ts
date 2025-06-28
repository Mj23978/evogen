import "dotenv"
import { BaseEvogenStorage, EvogenStorageError, ModelInfo, ModelsType, ProviderInfo } from '../core';
import type { EvogenStorageGetProvidersParams, EvogenStorageGetApiKeysParams, EvogenStorageAddProviderParams, EvogenStorageEditProviderParams, EvogenStorageDeleteProviderParams, EvogenStorageDeleteApiKeyParams, EvogenStorageEditApiKeyParams, EvogenStorageAddApiKeyParams, EvogenStorageGetApiKeyParams, EvogenStorageGetProviderParams, EvogenStorageGetProviderModelsParams, EvogenStorageAddProviderModelParams, EvogenStorageGetProviderModelParams, EvogenStorageAddProviderModelsParams, EvogenStorageEditProviderModelParams, EvogenStorageDeleteProviderModelParams } from '../core';
import { staticProviders } from '../static/providers';

type CommonInput = { }

export class StaticEvogenStorage extends BaseEvogenStorage<CommonInput> {
  private providers: Map<string, ProviderInfo & { models: ModelInfo[] }>;
  private apiKeys: Record<string, string>;

  constructor() {
    super();
    this.apiKeys = {};
    this.providers = new Map(staticProviders.map(provider => [provider.name, provider]));
    this._parseApiKeys();
  }

  _parseApiKeys() {
    for (const provider of this.providers.values()) {
      if (provider.keys) {
        const apiKeyEnv = provider.keys.apiKeyEnv;
        if (apiKeyEnv) {
          const apiKey = process.env[apiKeyEnv];
          if (apiKey) {
            this.apiKeys[provider.name] = apiKey;
          } else {
            console.log(`API key not found for provider ${provider.name}`);
          }
        }
      }
    }
  }

  public async getApiKeys(data: EvogenStorageGetApiKeysParams<CommonInput>): Promise<Record<string, string>> {
    return this.apiKeys;
  }

  public async deleteApiKey(data: EvogenStorageDeleteApiKeyParams<CommonInput>): Promise<void> {
    delete this.apiKeys[data.name];
  }

  public async getApiKey(data: EvogenStorageGetApiKeyParams<CommonInput>): Promise<string> {
    return this.apiKeys[data.name];
  }

  public async addApiKey(data: EvogenStorageAddApiKeyParams<CommonInput>): Promise<void> {
    this.apiKeys[data.name] = data.value;
  }

  public async editApiKey(data: EvogenStorageEditApiKeyParams<CommonInput>): Promise<void> {
    this.apiKeys[data.name] = data.value;
  }

  public async getProviders(data: EvogenStorageGetProvidersParams<CommonInput>): Promise<ProviderInfo[]> {
    return Array.from(this.providers.values());
  }

  public async addProvider(data: EvogenStorageAddProviderParams<CommonInput>): Promise<void> {
    this.providers.set(data.newProviderInfo.name, { ...data.newProviderInfo, models: [] });
  }

  public async getProvider(data: EvogenStorageGetProviderParams<CommonInput>): Promise<ProviderInfo> {
    const provider = this.providers.get(data.providerName);
    if (!provider) {
      throw new EvogenStorageError(`Provider ${data.providerName} not found`);
    }
    return provider;
  }

  public async editProvider(data: EvogenStorageEditProviderParams<CommonInput>): Promise<void> {
    const provider = this.providers.get(data.oldProviderName);
    if (!provider) {
      throw new EvogenStorageError(`Provider ${data.oldProviderName} not found`);
    }
    this.providers.delete(data.oldProviderName);
    this.providers.set(data.newProviderInfo.name, { ...data.newProviderInfo, models: provider.models });
  }

  public async deleteProvider(data: EvogenStorageDeleteProviderParams<CommonInput>): Promise<void> {
    if (!this.providers.delete(data.providerName)) {
      throw new EvogenStorageError(`Provider ${data.providerName} not found`);
    }
  }

  public async getProviderModels(data: EvogenStorageGetProviderModelsParams<CommonInput>): Promise<ModelInfo[]> {
    const provider = this.providers.get(data.providerName);
    if (!provider) {
      throw new EvogenStorageError(`Provider ${data.providerName} not found`);
    }
    return provider.models;
  }

  public async getProviderModel(data: EvogenStorageGetProviderModelParams<CommonInput>): Promise<ModelInfo> {
    const provider = this.providers.get(data.providerName);
    if (!provider) {
      throw new EvogenStorageError(`Provider ${data.providerName} not found`);
    }
    const model = provider.models.find(model => model.name === data.modelName && model.type === data.type);
    if (!model) {
      throw new EvogenStorageError(`Model ${data.modelName} not found for provider ${data.providerName}`);
    }
    return model;
  }

  public async addProviderModel(data: EvogenStorageAddProviderModelParams<CommonInput>): Promise<void> {
    const provider = this.providers.get(data.providerName);
    if (!provider) {
      throw new EvogenStorageError(`Provider ${data.providerName} not found`);
    }
    provider.models.push(data.modelInfo);
  }

  public async addProviderModels(data: EvogenStorageAddProviderModelsParams<CommonInput>): Promise<void> {
    const provider = this.providers.get(data.providerName);
    if (!provider) {
      throw new EvogenStorageError(`Provider ${data.providerName} not found`);
    }
    provider.models.push(...data.modelInfos);
  }

  public async editProviderModel(data: EvogenStorageEditProviderModelParams<CommonInput>): Promise<void> {
    const provider = this.providers.get(data.providerName);
    if (!provider) {
      throw new EvogenStorageError(`Provider ${data.providerName} not found`);
    }
    const modelIndex = provider.models.findIndex(model => model.name === data.oldModelName);
    if (modelIndex === -1) {
      throw new EvogenStorageError(`Model ${data.oldModelName} not found for provider ${data.providerName}`);
    }
    provider.models[modelIndex] = data.newModelInfo;
  }

  public async deleteProviderModel(data: EvogenStorageDeleteProviderModelParams<CommonInput>): Promise<void> {
    const provider = this.providers.get(data.providerName);
    if (!provider) {
      throw new EvogenStorageError(`Provider ${data.providerName} not found`);
    }
    const modelIndex = provider.models.findIndex(model => model.name === data.modelName);
    if (modelIndex === -1) {
      throw new EvogenStorageError(`Model ${data.modelName} not found for provider ${data.providerName}`);
    }
    provider.models.splice(modelIndex, 1);
  }

  public async deleteProviderModels(data: EvogenStorageDeleteProviderModelParams<CommonInput>): Promise<void> {
    const provider = this.providers.get(data.providerName);
    if (!provider) {
      throw new EvogenStorageError(`Provider ${data.providerName} not found`);
    }
    provider.models = []
  }
}