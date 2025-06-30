import { describe, expect, it, vi } from "vitest";
import {
	type BaseEvogenStorage,
	EvogenError,
	EvogenStorageError,
	type ProviderInfo,
} from "../core";
import EvoGen from "../evogen";
import { OllamaProvider } from "../providers/ollama";
import { StaticEvogenStorage } from "../storage/static";

describe("EvoGen", () => {
	const strategies = new Map<string, BaseEvogenStorage>([
		["static", new StaticEvogenStorage()],
	]);

	it("should throw an error if no strategies are provided", () => {
		expect(() => new EvoGen(new Map())).toThrow(EvogenError);
	});

	it("should return the correct storage strategy", () => {
		const evogen = new EvoGen(strategies);
		const storage = evogen.getStorage("static");
		expect(storage).toBeInstanceOf(StaticEvogenStorage);
	});

	it("should throw an error if the storage strategy is not found", () => {
		const evogen = new EvoGen(strategies);
		expect(() => evogen.getStorage("unknown")).toThrow(EvogenError);
	});

	it("should return the API key from the config if available", async () => {
		const evogen = new EvoGen(strategies);
		const info: ProviderInfo = {
			name: "Ollama",
			label: "",
			type: "Ollama",
			keys: { apiKeyEnv: "OLLAMA_API_KEY" },
			config: { apiKey: "config-api-key" },
		};
		const apiKey = await evogen.getProviderApiKey(info, "static");
		expect(apiKey).toBe("config-api-key");
	});

	it("should throw an error if no API key is found", async () => {
		const evogen = new EvoGen(strategies);
		const info: ProviderInfo = {
			name: "Ollama",
			label: "",
			type: "Ollama",
			keys: {},
		};
		await expect(evogen.getProviderApiKey(info, "static")).rejects.toThrow(
			EvogenError,
		);
	});

	it("should return the correct provider by type", async () => {
		const evogen = new EvoGen(strategies);
		const info: ProviderInfo = {
			name: "Ollama",
			label: "",
			type: "Ollama",
			keys: { apiKeyEnv: "OLLAMA_API_KEY" },
			config: { baseUrl: "http://localhost:11434" },
		};
		const provider = await evogen.getProviderByType(info, "static");
		expect(provider).toBeInstanceOf(OllamaProvider);
	});

	it("should return the correct provider configs", async () => {
		const evogen = new EvoGen(strategies);
		const configs = await evogen.getProviderConfigs("Ollama", "static");
		expect(configs.baseUrlEnv).toEqual("OLLAMA_API_BASE_URL");
		expect(configs.getModelsLink).toEqual("$BASE_URL/api/tags");
	});

	it("should return the correct provider", async () => {
		const evogen = new EvoGen(strategies);
		const provider = await evogen.getProvider("Ollama", "static");
		expect(provider).toBeInstanceOf(OllamaProvider);
	});
});
