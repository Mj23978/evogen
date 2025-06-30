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
  public getApiKeysSync?(
    data: EvogenStorageGetApiKeysParams<T>
  ): Record<string, string>;

  public abstract deleteApiKey(
    data: EvogenStorageDeleteApiKeyParams<T>
  ): Promise<void>;
  public deleteApiKeySync?(data: EvogenStorageDeleteApiKeyParams<T>): void;

  public abstract getApiKey(
    data: EvogenStorageGetApiKeyParams<T>
  ): Promise<string>;
  public getApiKeySync?(data: EvogenStorageGetApiKeyParams<T>): string;

  public abstract addApiKey(
    data: EvogenStorageAddApiKeyParams<T>
  ): Promise<void>;
  public addApiKeySync?(data: EvogenStorageAddApiKeyParams<T>): void;

  public abstract editApiKey(
    data: EvogenStorageEditApiKeyParams<T>
  ): Promise<void>;
  public editApiKeySync?(data: EvogenStorageEditApiKeyParams<T>): void;

  // --- Provider Management ---

  /**
   * Asynchronously retrieves all provider configurations.
   * This method was previously named `getProviders`.
   */
  public abstract getProviders(
    data: EvogenStorageGetProvidersParams<T>
  ): Promise<ProviderInfo[]>;
  /**
   * Synchronously retrieves all provider configurations.
   * Optional: Implement only if the storage strategy supports synchronous operations.
   */
  public getProvidersSync?(
    data: EvogenStorageGetProvidersParams<T>
  ): ProviderInfo[];

  public abstract addProvider(
    data: EvogenStorageAddProviderParams<T>
  ): Promise<void>;
  public addProviderSync?(data: EvogenStorageAddProviderParams<T>): void;

  public abstract getProvider(
    data: EvogenStorageGetProviderParams<T>
  ): Promise<ProviderInfo>;
  public getProviderSync?(
    data: EvogenStorageGetProviderParams<T>
  ): ProviderInfo;

  public abstract editProvider(
    data: EvogenStorageEditProviderParams<T>
  ): Promise<void>;
  public editProviderSync?(data: EvogenStorageEditProviderParams<T>): void;

  public abstract deleteProvider(
    data: EvogenStorageDeleteProviderParams<T>
  ): Promise<void>;
  public deleteProviderSync?(data: EvogenStorageDeleteProviderParams<T>): void;

  // --- Model Management ---

  public abstract getProviderModels(
    data: EvogenStorageGetProviderModelsParams<T>
  ): Promise<ModelInfo[]>;
  public getProviderModelsSync?(
    data: EvogenStorageGetProviderModelsParams<T>
  ): ModelInfo[];

  public abstract getProviderModel(
    data: EvogenStorageGetProviderModelParams<T>
  ): Promise<ModelInfo>;
  public getProviderModelSync?(
    data: EvogenStorageGetProviderModelParams<T>
  ): ModelInfo;

  public abstract addProviderModel(
    data: EvogenStorageAddProviderModelParams<T>
  ): Promise<void>;
  public addProviderModelSync?(
    data: EvogenStorageAddProviderModelParams<T>
  ): void;

  public abstract addProviderModels(
    data: EvogenStorageAddProviderModelsParams<T>
  ): Promise<void>;
  public addProviderModelsSync?(
    data: EvogenStorageAddProviderModelsParams<T>
  ): void;

  public abstract editProviderModel(
    data: EvogenStorageEditProviderModelParams<T>
  ): Promise<void>;
  public editProviderModelSync?(
    data: EvogenStorageEditProviderModelParams<T>
  ): void;

  public abstract deleteProviderModel(
    data: EvogenStorageDeleteProviderModelParams<T>
  ): Promise<void>;
  public deleteProviderModelSync?(
    data: EvogenStorageDeleteProviderModelParams<T>
  ): void;

  public abstract deleteProviderModels(
    data: EvogenStorageDeleteProviderModelsParams<T>
  ): Promise<void>;
  public deleteProviderModelsSync?(
    data: EvogenStorageDeleteProviderModelsParams<T>
  ): void;
}
