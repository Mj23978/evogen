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
 * This class implements both hronous and ahronous methods, making it
 * suitable for any use case. All operations are performed on in-memory data structures.
 */
export class StaticEvogenStorage extends BaseEvogenStorage<CommonInput> {
  private providers: Map<string, ProviderInfo & { models: ModelInfo[] }>;
  private apiKeys: Record<string, string>;

  constructor(parseApiKeys: boolean = false) {
    super();
    this.apiKeys = {};
    this.providers = new Map(
      staticProviders.map((provider) => [provider.name, provider])
    );
    if (parseApiKeys) {
      this._parseApiKeys();
    }
  }

  private _parseApiKeys(): void {
    require("dotenv");
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

  public async getApiKeys(
    data: EvogenStorageGetApiKeysParams<CommonInput>
  ): Promise<Record<string, string>> {
    return this.apiKeys;
  }

  public async deleteApiKey(
    data: EvogenStorageDeleteApiKeyParams<CommonInput>
  ): Promise<void> {
    delete this.apiKeys[data.name];
  }

  public async getApiKey(
    data: EvogenStorageGetApiKeyParams<CommonInput>
  ): Promise<string> {
    const apiKey = this.apiKeys[data.name];
    if (!apiKey) {
      throw new EvogenError(`API key for '${data.name}' not found.`);
    }
    return apiKey;
  }

  public async addApiKey(data: EvogenStorageAddApiKeyParams<CommonInput>): Promise<void> {
    this.apiKeys[data.name] = data.value;
  }

  public async editApiKey(
    data: EvogenStorageEditApiKeyParams<CommonInput>
  ): Promise<void> {
    this.apiKeys[data.name] = data.value;
  }

  public async getProviders(
    data: EvogenStorageGetProvidersParams<CommonInput>
  ): Promise<ProviderInfo[]> {
    return Array.from(this.providers.values());
  }

  public async addProvider(
    data: EvogenStorageAddProviderParams<CommonInput>
  ): Promise<void> {
    this.providers.set(data.newProviderInfo.name, {
      ...data.newProviderInfo,
      models: [],
    });
  }

  public async getProvider(
    data: EvogenStorageGetProviderParams<CommonInput>
  ): Promise<ProviderInfo> {
    const provider = this.providers.get(data.providerName);
    if (!provider) {
      throw new EvogenError(`Provider '${data.providerName}' not found`);
    }
    return provider;
  }

  public async editProvider(
    data: EvogenStorageEditProviderParams<CommonInput>
  ): Promise<void> {
    const provider = await this.getProvider({
      providerName: data.oldProviderName,
    }) as ProviderInfo & { models: ModelInfo[] };
    this.providers.delete(data.oldProviderName);
    this.providers.set(data.newProviderInfo.name, {
      ...data.newProviderInfo,
      models: provider.models,
    });
  }

  public async deleteProvider(
    data: EvogenStorageDeleteProviderParams<CommonInput>
  ): Promise<void> {
    if (!this.providers.delete(data.providerName)) {
      throw new EvogenError(`Provider '${data.providerName}' not found`);
    }
  }

  public async getProviderModels(
    data: EvogenStorageGetProviderModelsParams<CommonInput>
  ): Promise<ModelInfo[]> {
    const provider = await this.getProvider(data) as ProviderInfo & {
      models: ModelInfo[];
    };
    return provider.models;
  }

  public async getProviderModel(
    data: EvogenStorageGetProviderModelParams<CommonInput>
  ): Promise<ModelInfo> {
    const provider = await this.getProvider(data) as ProviderInfo & {
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

  public async addProviderModel(
    data: EvogenStorageAddProviderModelParams<CommonInput>
  ): Promise<void> {
    const provider = await this.getProvider(data) as ProviderInfo & {
      models: ModelInfo[];
    };
    provider.models.push(data.modelInfo);
  }

  public async addProviderModels(
    data: EvogenStorageAddProviderModelsParams<CommonInput>
  ): Promise<void> {
    const provider = await this.getProvider(data) as ProviderInfo & {
      models: ModelInfo[];
    };
    provider.models.push(...data.modelInfos);
  }

  public async editProviderModel(
    data: EvogenStorageEditProviderModelParams<CommonInput>
  ): Promise<void> {
    const provider = await this.getProvider(data) as ProviderInfo & {
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

  public async deleteProviderModel(
    data: EvogenStorageDeleteProviderModelParams<CommonInput>
  ): Promise<void> {
    const provider = await this.getProvider(data) as ProviderInfo & {
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

  public async deleteProviderModels(
    data: EvogenStorageDeleteProviderModelParams<CommonInput>
  ): Promise<void> {
    const provider = await this.getProvider(data) as ProviderInfo & {
      models: ModelInfo[];
    };
    provider.models = [];
  }
}
