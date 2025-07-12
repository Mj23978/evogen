import type { ModelInfo, ModelsType, ProviderInfo } from "./types";

// --- Type Definitions for Method Parameters ---

// API Key Management
export type EvogenStorageGetApiKeysParams<T> = T;
export type EvogenStorageDeleteApiKeyParams<T> = T & { name: string };
export type EvogenStorageGetApiKeyParams<T> = T & { name: string };
export type EvogenStorageAddApiKeyParams<T> = T & {
  name: string;
  value: string;
};
export type EvogenStorageEditApiKeyParams<T> = T & {
  name: string;
  value: string;
};

// Provider Management
export type EvogenStorageGetProvidersParams<T> = T;
export type EvogenStorageAddProviderParams<T> = T & {
  newProviderInfo: ProviderInfo;
};
export type EvogenStorageGetProviderParams<T> = T & { providerName: string };
export type EvogenStorageEditProviderParams<T> = T & {
  oldProviderName: string;
  newProviderInfo: ProviderInfo;
};
export type EvogenStorageDeleteProviderParams<T> = T & { providerName: string };

// Model Management
export type EvogenStorageGetProviderModelsParams<T> = T & {
  providerName: string;
};
export type EvogenStorageGetProviderModelParams<T> = T & {
  providerName: string;
  modelName: string;
  type: ModelsType;
};
export type EvogenStorageAddProviderModelParams<T> = T & {
  providerName: string;
  modelInfo: ModelInfo;
};
export type EvogenStorageAddProviderModelsParams<T> = T & {
  providerName: string;
  modelInfos: ModelInfo[];
};
export type EvogenStorageEditProviderModelParams<T> = T & {
  providerName: string;
  oldModelName: string;
  newModelInfo: ModelInfo;
};
export type EvogenStorageDeleteProviderModelParams<T> = T & {
  providerName: string;
  modelName: string;
};
export type EvogenStorageDeleteProviderModelsParams<T> = T & {
  providerName: string;
};

/**
 * Defines the abstract contract for all storage strategies in EvoGen.
 * A storage strategy is responsible for persisting and retrieving API keys,
 * provider configurations, and model information.
 *
 * @template T A generic type for additional metadata that can be passed to each method,
 * allowing for flexible and extensible storage solutions (e.g., user IDs, tenant IDs).
 */
export abstract class BaseEvogenStorage<T extends {}> {
  constructor() {}

  // --- API Key Management ---

  public abstract getApiKeys(
    data: EvogenStorageGetApiKeysParams<T>
  ): Promise<Record<string, string>>;
 
  public abstract deleteApiKey(
    data: EvogenStorageDeleteApiKeyParams<T>
  ): Promise<void>;
 
  public abstract getApiKey(
    data: EvogenStorageGetApiKeyParams<T>
  ): Promise<string>;
 
  public abstract addApiKey(
    data: EvogenStorageAddApiKeyParams<T>
  ): Promise<void>;
 
  public abstract editApiKey(
    data: EvogenStorageEditApiKeyParams<T>
  ): Promise<void>;
 
  public abstract getProviders(
    data: EvogenStorageGetProvidersParams<T>
  ): Promise<ProviderInfo[]>;
 
  public abstract addProvider(
    data: EvogenStorageAddProviderParams<T>
  ): Promise<void>;
 
  public abstract getProvider(
    data: EvogenStorageGetProviderParams<T>
  ): Promise<ProviderInfo>;
 
  public abstract editProvider(
    data: EvogenStorageEditProviderParams<T>
  ): Promise<void>;
 
  public abstract deleteProvider(
    data: EvogenStorageDeleteProviderParams<T>
  ): Promise<void>;
 
  public abstract getProviderModels(
    data: EvogenStorageGetProviderModelsParams<T>
  ): Promise<ModelInfo[]>;
 
  public abstract getProviderModel(
    data: EvogenStorageGetProviderModelParams<T>
  ): Promise<ModelInfo>;
 
  public abstract addProviderModel(
    data: EvogenStorageAddProviderModelParams<T>
  ): Promise<void>;
 
  public abstract addProviderModels(
    data: EvogenStorageAddProviderModelsParams<T>
  ): Promise<void>;
 
  public abstract editProviderModel(
    data: EvogenStorageEditProviderModelParams<T>
  ): Promise<void>;
 
  public abstract deleteProviderModel(
    data: EvogenStorageDeleteProviderModelParams<T>
  ): Promise<void>;
 
  public abstract deleteProviderModels(
    data: EvogenStorageDeleteProviderModelsParams<T>
  ): Promise<void>;
 }
