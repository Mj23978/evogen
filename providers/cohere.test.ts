import { beforeEach, describe, expect, it, vi } from "vitest";

import { EvogenNotImplementedError } from "../core";
import { StaticEvogenStorage } from "../storage/static";
import { CohereProvider, parseCohereConfig } from "./cohere";

describe("CohereProvider", () => {
  const mockConfig = { apiKey: "1234567890" };
  const staticStorage = new StaticEvogenStorage();
  staticStorage.addProviderModels({
    modelInfos: [
      { label: "", name: "test-model", provider: "Cohere", type: "audio" },
      { label: "", name: "test-model", provider: "Cohere", type: "chat" },
      { label: "", name: "test-model", provider: "Cohere", type: "embedding" },
      {
        label: "",
        name: "test-model",
        provider: "Cohere",
        type: "speech-to-text",
      },
      {
        label: "",
        name: "test-model",
        provider: "Cohere",
        type: "text-to-speach",
      },
    ],
    providerName: "Cohere",
  });
  let provider: CohereProvider;

  beforeEach(async () => {
    provider = new CohereProvider("cohere", mockConfig, staticStorage);
  });

  it("should initialize with correct config", () => {
    expect(provider.name).toBe("Cohere");
  });

  it("should get models from server", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      json: () =>
        Promise.resolve({
          models: [
            {
              name: "test-model",
              details: { family: "cohere", parameter_size: "7B" },
            },
          ],
        }),
    });
    global.fetch = mockFetch;

    const models = await provider.syncModelsFromServer();

    expect(models).toHaveLength(1);
    expect(models[0].name).toBe("test-model");
    expect(models[0].provider).toBe("Cohere");
  });

  it("should throw error for unsupported speech-to-text model", async () => {
    try {
      await provider.speachToTextModel("test-model");
    } catch (error) {
      expect(error).toBeInstanceOf(EvogenNotImplementedError);
    }
  });

  it("should throw error for unsupported text-to-speech model", async () => {
    try {
      await provider.textToSpeachModel("test-model");
    } catch (error) {
      expect(error).toBeInstanceOf(EvogenNotImplementedError);
    }
  });

  it("should check status correctly", async () => {
    const mockFetch = vi.fn().mockResolvedValue({ status: 200 });
    global.fetch = mockFetch;

    const status = await provider.checkStatus();
    expect(status.status).toBe("operational");
  });
});

describe("parseCohereConfig", () => {
  it("should parse valid config", () => {
    const config = parseCohereConfig({ apiKey: "1234567890" });
    expect(config.apiKey).toBe("1234567890");
  });

  it("should parse default config", () => {
    const config = parseCohereConfig({});
    expect(config.apiKey).toBe("");
  });
});
