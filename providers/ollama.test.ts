import { beforeEach, describe, expect, it, vi } from 'vitest';

import { EvogenNotImplementedError } from '../core';
import { StaticEvogenStorage } from '../storage/static';
import OllamaProvider, { parseOllamaConfig } from './ollama';

describe('OllamaProvider', () => {
  const mockConfig = { baseUrl: 'http://localhost:11434' };
  const staticStorage = new StaticEvogenStorage()
  staticStorage.addProviderModels("Ollama", [
    { label: "", name: "test-model", provider: "Ollama", type: "audio" },
    { label: "", name: "test-model", provider: "Ollama", type: "chat" },
    { label: "", name: "test-model", provider: "Ollama", type: "embedding" },
    { label: "", name: "test-model", provider: "Ollama", type: "speech-to-text" },
    { label: "", name: "test-model", provider: "Ollama", type: "text-to-speach" },
  ]);
  let provider: OllamaProvider;

  beforeEach(async () => {
    provider = new OllamaProvider("ollama", mockConfig, staticStorage);
  });

  it('should initialize with correct config', () => {
    expect(provider.name).toBe('Ollama');
  });

  it('should get base URL correctly', () => {
    expect(provider.getBaseUrl()).toBe('http://localhost:11434');
  });

  it('should get models from server', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve({ models: [{ name: 'test-model', details: { family: 'llama', parameter_size: '7B' } }] }),
    });
    global.fetch = mockFetch;

    const models = await provider.syncModelsFromServer();

    expect(models).toHaveLength(1);
    expect(models[0].name).toBe('test-model');
    expect(models[0].provider).toBe('Ollama');
  });

  it('should throw error for unsupported audio model', async () => {
    try {
      await provider.audioModel('test-model')
    } catch (error) {
      expect(error).toBeInstanceOf(EvogenNotImplementedError);
    }
  });

  it('should throw error for unsupported speech-to-text model', async () => {
    try {
      await provider.speachToTextModel('test-model')
    } catch (error) {
      expect(error).toBeInstanceOf(EvogenNotImplementedError);
    }
  });

  it('should throw error for unsupported text-to-speech model', async () => {
    try {
      await provider.textToSpeachModel('test-model')
    } catch (error) {
      expect(error).toBeInstanceOf(EvogenNotImplementedError);
    }
  });

  it('should check status correctly', async () => {
    const mockFetch = vi.fn().mockResolvedValue({ status: 200 });
    global.fetch = mockFetch;

    const status = await provider.checkStatus();
    expect(status.status).toBe('operational');
  });
});

describe('parseOllamaConfig', () => {
  it('should parse valid config', () => {
    const config = parseOllamaConfig({ baseUrl: 'http://localhost:11435' });
    expect(config.baseUrl).toBe('http://localhost:11435');
  });

  it('should parse valid config', () => {
    const config = parseOllamaConfig({});
    expect(config.baseUrl).toBe('http://localhost:11434');
  });
});
