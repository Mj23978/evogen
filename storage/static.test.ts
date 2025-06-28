import { describe, it, expect, beforeEach } from 'vitest';
import { StaticEvogenStorage } from './static';
import { ProviderInfo, ModelInfo } from '../core';

describe('StaticEvogenStorage', () => {
  let storage: StaticEvogenStorage;

  beforeEach(async () => {
    storage = new StaticEvogenStorage();
    const newProvider: ProviderInfo = {
      name: 'Test',
      label: 'Test Provider',
      type: 'OpenAILike',
      keys: {},
    };
    await storage.addProvider(newProvider);
  });

  it('should initialize with providers', async () => {
    const providers = await storage.getProviders();
    expect(providers.length).toBeGreaterThan(0);
  });

  it('should add a new provider', async () => {
    const newProvider: ProviderInfo = {
      name: 'TestProvider',
      label: 'Test Provider',
      type: 'OpenAILike',
      keys: {},
    };
    await storage.addProvider(newProvider);
    const providers = await storage.getProviders();
    expect(providers).toContainEqual(expect.objectContaining(newProvider));
  });

  it('should delete a provider', async () => {
    await storage.deleteProvider('Test');
    const providers = await storage.getProviders();
    expect(providers).not.toContainEqual(expect.objectContaining({ name: 'Test' }));
  });

  it('should edit a provider', async () => {
    const newProviderInfo: ProviderInfo = {
      name: 'TestEdited',
      label: 'Test Edited',
      type: 'OpenAILike',
      keys: {},
    };
    await storage.editProvider('Test', newProviderInfo);
    const providers = await storage.getProviders();
    expect(providers).toContainEqual(expect.objectContaining(newProviderInfo));
  });

  it('should add a model to a provider', async () => {
    const modelInfo: ModelInfo = {
      name: 'TestModel',
      type: 'chat',
      label: "",
      provider: "Test",
    };
    await storage.addProviderModel('Test', modelInfo);
    const models = await storage.getProviderModels('Test');
    expect(models).toContainEqual(modelInfo);
  });

  it('should delete a model from a provider', async () => {
    const newProvider: ProviderInfo = {
      name: 'Test',
      label: 'Test Provider',
      type: 'OpenAILike',
      keys: {},
    };
    await storage.addProvider(newProvider);
    const modelInfo: ModelInfo = {
      name: 'TestModel',
      type: 'chat',
      label: "",
      provider: "Test",
    };
    await storage.addProviderModel('Test', modelInfo);
    await storage.deleteProviderModel('Test', 'TestModel');
    const models = await storage.getProviderModels('Test');
    expect(models).not.toContainEqual(modelInfo);
  });

  it('should edit a model in a provider', async () => {
    const newProvider: ProviderInfo = {
      name: 'Test',
      label: 'Test Provider',
      type: 'OpenAILike',
      keys: {},
    };
    await storage.addProvider(newProvider);
    const modelInfo: ModelInfo = {
      name: 'TestModel',
      type: 'chat',
      label: "",
      provider: "Test",
    };
    await storage.addProviderModel('Test', modelInfo);
    const newModelInfo: ModelInfo = {
      name: 'TestModelEdited',
      type: 'chat',
      label: "",
      provider: "Test",
    };
    await storage.editProviderModel('Test', 'TestModel', newModelInfo);
    const models = await storage.getProviderModels('Test');
    expect(models).toContainEqual(newModelInfo);
  });
});
