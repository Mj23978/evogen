import { FeatureActions, ModelInfo, ProviderInfo, StorageFeature, ModelsType } from './types';


export type EvogenStorageGetApiKeysParams<T> = T;
export type EvogenStorageDeleteApiKeyParams<T> = T & { name: string };
export type EvogenStorageGetApiKeyParams<T> = T & { name: string };
export type EvogenStorageAddApiKeyParams<T> = T & { name: string; value: string };
export type EvogenStorageEditApiKeyParams<T> = T & { name: string; value: string };
export type EvogenStorageGetProvidersParams<T> = T;
export type EvogenStorageAddProviderParams<T> = T & { newProviderInfo: ProviderInfo };
export type EvogenStorageGetProviderParams<T> = T & { providerName: string };
export type EvogenStorageEditProviderParams<T> = T & { oldProviderName: string; newProviderInfo: ProviderInfo };
export type EvogenStorageDeleteProviderParams<T> = T & { providerName: string };
export type EvogenStorageGetProviderModelsParams<T> = T & { providerName: string };
export type EvogenStorageGetProviderModelParams<T> = T & { providerName: string; modelName: string; type: ModelsType };
export type EvogenStorageAddProviderModelParams<T> = T & { providerName: string; modelInfo: ModelInfo };
export type EvogenStorageAddProviderModelsParams<T> = T & { providerName: string; modelInfos: ModelInfo[] };
export type EvogenStorageEditProviderModelParams<T> = T & { providerName: string; oldModelName: string; newModelInfo: ModelInfo };
export type EvogenStorageDeleteProviderModelParams<T> = T & { providerName: string; modelName: string };
export type EvogenStorageDeleteProviderModelsParams<T> = T & { providerName: string };

export abstract class BaseEvogenStorage<T extends {}> {

  constructor() { }

  public abstract getApiKeys(data: EvogenStorageGetApiKeysParams<T>): Promise<Record<string, string>>;

  public abstract deleteApiKey(data: EvogenStorageDeleteApiKeyParams<T>): Promise<void>;

  public abstract getApiKey(data: EvogenStorageGetApiKeyParams<T>): Promise<string>;

  public abstract addApiKey(data: EvogenStorageAddApiKeyParams<T>): Promise<void>;

  public abstract editApiKey(data: EvogenStorageEditApiKeyParams<T>): Promise<void>;

  public abstract getProviders(data: EvogenStorageGetProvidersParams<T>): Promise<ProviderInfo[]>;

  public abstract addProvider(data: EvogenStorageAddProviderParams<T>): Promise<void>;

  public abstract getProvider(data: EvogenStorageGetProviderParams<T>): Promise<ProviderInfo>;

  public abstract editProvider(data: EvogenStorageEditProviderParams<T>): Promise<void>;

  public abstract deleteProvider(data: EvogenStorageDeleteProviderParams<T>): Promise<void>;

  public abstract getProviderModels(data: EvogenStorageGetProviderModelsParams<T>): Promise<ModelInfo[]>;

  public abstract getProviderModel(data: EvogenStorageGetProviderModelParams<T>): Promise<ModelInfo>;

  public abstract addProviderModel(data: EvogenStorageAddProviderModelParams<T>): Promise<void>;

  public abstract addProviderModels(data: EvogenStorageAddProviderModelsParams<T>): Promise<void>;

  public abstract editProviderModel(data: EvogenStorageEditProviderModelParams<T>): Promise<void>;

  public abstract deleteProviderModel(data: EvogenStorageDeleteProviderModelParams<T>): Promise<void>;

  public abstract deleteProviderModels(data: EvogenStorageDeleteProviderModelsParams<T>): Promise<void>;

}