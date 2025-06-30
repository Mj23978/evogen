import "dotenv";
import type {
  EvogenStorageAddApiKeyParams,
  EvogenStorageAddProviderModelParams,
  EvogenStorageAddProviderModelsParams,
  EvogenStorageAddProviderParams,
  EvogenStorageDeleteApiKeyParams,
  EvogenStorageDeleteProviderModelParams,
  EvogenStorageDeleteProviderParams,
  EvogenStorageEditApiKeyParams,
  EvogenStorageEditProviderModelParams,
  EvogenStorageEditProviderParams,
  EvogenStorageGetApiKeyParams,
  EvogenStorageGetApiKeysParams,
  EvogenStorageGetProviderModelParams,
  EvogenStorageGetProviderModelsParams,
  EvogenStorageGetProviderParams,
  EvogenStorageGetProvidersParams,
} from "../core";
import {
  BaseEvogenStorage,
  EvogenError,
  type ModelInfo,
  type ProviderInfo,
} from "../core";
import { staticProviders } from "../static/providers";

type CommonInput = {};

/**
 * An in-memory storage strategy for EvoGen that is initialized from a
 * static list of providers and environment variables.
 *
 * This class implements both synchronous and asynchronous methods, making it
 * suitable for any use case. All operations are performed on in-memory data structures.
 */
export class StaticEvogenStorage extends BaseEvogenStorage<CommonInput> {
  private providers: Map<string, ProviderInfo & { models: ModelInfo[] }>;
  private apiKeys: Record<string, string>;

  constructor() {
    super();
    this.apiKeys = {};
    this.providers = new Map(
      staticProviders.map((provider) => [provider.name, provider])
    );
    this._parseApiKeys();
  }

  private _parseApiKeys(): void {
    for (const provider of this.providers.values()) {
      if (provider.keys?.apiKeyEnv) {
        const apiKey = process.env[provider.keys.apiKeyEnv];
        if (apiKey) {
          // Use the provider's official name for the key, not the env var name
          this.apiKeys[provider.name] = apiKey;
        } else {
          // This is a configuration notice, not an error
          console.log(
            `Evogen Notice: API key environment variable '${provider.keys.apiKeyEnv}' not found for provider '${provider.name}'.`
          );
        }
      }
    }
  }

  // --- Synchronous Methods (Core Logic) ---

  public getApiKeysSync(
    data: EvogenStorageGetApiKeysParams<CommonInput>
  ): Record<string, string> {
    return this.apiKeys;
  }

  public deleteApiKeySync(
    data: EvogenStorageDeleteApiKeyParams<CommonInput>
  ): void {
    delete this.apiKeys[data.name];
  }

  public getApiKeySync(
    data: EvogenStorageGetApiKeyParams<CommonInput>
  ): string {
    const apiKey = this.apiKeys[data.name];
    if (!apiKey) {
      throw new EvogenError(`API key for '${data.name}' not found.`);
    }
    return apiKey;
  }

  public addApiKeySync(data: EvogenStorageAddApiKeyParams<CommonInput>): void {
    this.apiKeys[data.name] = data.value;
  }

  public editApiKeySync(
    data: EvogenStorageEditApiKeyParams<CommonInput>
  ): void {
    this.apiKeys[data.name] = data.value;
  }

  public getProvidersSync(
    data: EvogenStorageGetProvidersParams<CommonInput>
  ): ProviderInfo[] {
    return Array.from(this.providers.values());
  }

  public addProviderSync(
    data: EvogenStorageAddProviderParams<CommonInput>
  ): void {
    this.providers.set(data.newProviderInfo.name, {
      ...data.newProviderInfo,
      models: [],
    });
  }

  public getProviderSync(
    data: EvogenStorageGetProviderParams<CommonInput>
  ): ProviderInfo {
    const provider = this.providers.get(data.providerName);
    if (!provider) {
      throw new EvogenError(`Provider '${data.providerName}' not found`);
    }
    return provider;
  }

  public editProviderSync(
    data: EvogenStorageEditProviderParams<CommonInput>
  ): void {
    const provider = this.getProviderSync({
      providerName: data.oldProviderName,
    }) as ProviderInfo & { models: ModelInfo[] };
    this.providers.delete(data.oldProviderName);
    this.providers.set(data.newProviderInfo.name, {
      ...data.newProviderInfo,
      models: provider.models,
    });
  }

  public deleteProviderSync(
    data: EvogenStorageDeleteProviderParams<CommonInput>
  ): void {
    if (!this.providers.delete(data.providerName)) {
      throw new EvogenError(`Provider '${data.providerName}' not found`);
    }
  }

  public getProviderModelsSync(
    data: EvogenStorageGetProviderModelsParams<CommonInput>
  ): ModelInfo[] {
    const provider = this.getProviderSync(data) as ProviderInfo & {
      models: ModelInfo[];
    };
    return provider.models;
  }

  public getProviderModelSync(
    data: EvogenStorageGetProviderModelParams<CommonInput>
  ): ModelInfo {
    const provider = this.getProviderSync(data) as ProviderInfo & {
      models: ModelInfo[];
    };
    const model = provider.models.find(
      (m) => m.name === data.modelName && m.type === data.type
    );
    if (!model) {
      throw new EvogenError(
        `Model '${data.modelName}' not found for provider '${data.providerName}'`
      );
    }
    return model;
  }

  public addProviderModelSync(
    data: EvogenStorageAddProviderModelParams<CommonInput>
  ): void {
    const provider = this.getProviderSync(data) as ProviderInfo & {
      models: ModelInfo[];
    };
    provider.models.push(data.modelInfo);
  }

  public addProviderModelsSync(
    data: EvogenStorageAddProviderModelsParams<CommonInput>
  ): void {
    const provider = this.getProviderSync(data) as ProviderInfo & {
      models: ModelInfo[];
    };
    provider.models.push(...data.modelInfos);
  }

  public editProviderModelSync(
    data: EvogenStorageEditProviderModelParams<CommonInput>
  ): void {
    const provider = this.getProviderSync(data) as ProviderInfo & {
      models: ModelInfo[];
    };
    const modelIndex = provider.models.findIndex(
      (model) => model.name === data.oldModelName
    );
    if (modelIndex === -1) {
      throw new EvogenError(
        `Model '${data.oldModelName}' not found for provider '${data.providerName}'`
      );
    }
    provider.models[modelIndex] = data.newModelInfo;
  }

  public deleteProviderModelSync(
    data: EvogenStorageDeleteProviderModelParams<CommonInput>
  ): void {
    const provider = this.getProviderSync(data) as ProviderInfo & {
      models: ModelInfo[];
    };
    const modelIndex = provider.models.findIndex(
      (model) => model.name === data.modelName
    );
    if (modelIndex === -1) {
      throw new EvogenError(
        `Model '${data.modelName}' not found for provider '${data.providerName}'`
      );
    }
    provider.models.splice(modelIndex, 1);
  }

  public deleteProviderModelsSync(
    data: EvogenStorageDeleteProviderModelParams<CommonInput>
  ): void {
    const provider = this.getProviderSync(data) as ProviderInfo & {
      models: ModelInfo[];
    };
    provider.models = [];
  }

  // --- Asynchronous Wrappers ---

  public async getApiKeys(
    data: EvogenStorageGetApiKeysParams<CommonInput>
  ): Promise<Record<string, string>> {
    return this.getApiKeysSync(data);
  }

  public async deleteApiKey(
    data: EvogenStorageDeleteApiKeyParams<CommonInput>
  ): Promise<void> {
    return this.deleteApiKeySync(data);
  }

  public async getApiKey(
    data: EvogenStorageGetApiKeyParams<CommonInput>
  ): Promise<string> {
    return this.getApiKeySync(data);
  }

  public async addApiKey(
    data: EvogenStorageAddApiKeyParams<CommonInput>
  ): Promise<void> {
    return this.addApiKeySync(data);
  }

  public async editApiKey(
    data: EvogenStorageEditApiKeyParams<CommonInput>
  ): Promise<void> {
    return this.editApiKeySync(data);
  }

  public async getProviders(
    data: EvogenStorageGetProvidersParams<CommonInput>
  ): Promise<ProviderInfo[]> {
    return this.getProvidersSync(data);
  }

  public async addProvider(
    data: EvogenStorageAddProviderParams<CommonInput>
  ): Promise<void> {
    return this.addProviderSync(data);
  }

  public async getProvider(
    data: EvogenStorageGetProviderParams<CommonInput>
  ): Promise<ProviderInfo> {
    return this.getProviderSync(data);
  }

  public async editProvider(
    data: EvogenStorageEditProviderParams<CommonInput>
  ): Promise<void> {
    return this.editProviderSync(data);
  }

  public async deleteProvider(
    data: EvogenStorageDeleteProviderParams<CommonInput>
  ): Promise<void> {
    return this.deleteProviderSync(data);
  }

  public async getProviderModels(
    data: EvogenStorageGetProviderModelsParams<CommonInput>
  ): Promise<ModelInfo[]> {
    return this.getProviderModelsSync(data);
  }

  public async getProviderModel(
    data: EvogenStorageGetProviderModelParams<CommonInput>
  ): Promise<ModelInfo> {
    return this.getProviderModelSync(data);
  }

  public async addProviderModel(
    data: EvogenStorageAddProviderModelParams<CommonInput>
  ): Promise<void> {
    return this.addProviderModelSync(data);
  }

  public async addProviderModels(
    data: EvogenStorageAddProviderModelsParams<CommonInput>
  ): Promise<void> {
    return this.addProviderModelsSync(data);
  }

  public async editProviderModel(
    data: EvogenStorageEditProviderModelParams<CommonInput>
  ): Promise<void> {
    return this.editProviderModelSync(data);
  }

  public async deleteProviderModel(
    data: EvogenStorageDeleteProviderModelParams<CommonInput>
  ): Promise<void> {
    return this.deleteProviderModelSync(data);
  }

  public async deleteProviderModels(
    data: EvogenStorageDeleteProviderModelParams<CommonInput>
  ): Promise<void> {
    return this.deleteProviderModelsSync(data);
  }
}
