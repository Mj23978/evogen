import { describe, expect, it, vi } from "vitest";
import {
	type BaseEvogenStorage,
	EvogenError,
	EvogenStorageError,
	ProviderInfo,
} from "../core";
import EvoGen from "../evogen";
import type OllamaProvider from "../providers/ollama";
import { StaticEvogenStorage } from "../storage/static";

describe("EvoGen", () => {
	const strategies = new Map<string, BaseEvogenStorage>([
		["static", new StaticEvogenStorage()],
	]);

	it("should throw an error if no strategies are provided", async () => {
		const evogen = new EvoGen(strategies);
		const ollama = (await evogen.getProvider(
			"Ollama",
			"static",
		)) as OllamaProvider;
		await ollama.syncModelsFromServer();
		const model = await ollama.chatModel("qwen2.5-coder:3b");
		// const response = await model.doGenerate({ inputFormat: 'messages', prompt: [{ content: [{ text: "Hello, world!", type: "text"  }], role: "user" }], mode: { type: "regular" }  })
		// console.log(response)
	});
});
