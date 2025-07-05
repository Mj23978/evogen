import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import type {
	EmbeddingModelV1,
	ImageModelV1,
	LanguageModelV1,
	ProviderV1,
	SpeechModelV1,
	TranscriptionModelV1,
} from "@ai-sdk/provider";

import {
	BaseEvogenProvider,
	EvogenNotImplementedError,
	type ModelInfo,
	type ProviderType,
	type StatusCheckResult,
} from "../core";

type GithubProviderSettings = {
	name: string;
	apiKey?: string;
	baseURL: string;
};

export class GithubProvider extends BaseEvogenProvider<GithubProviderSettings> {
	type: ProviderType = "OpenAILike";

	createProvider(): ProviderV1 {
		return createOpenAICompatible(this.config);
	}

	async syncModelsFromServer(
		metadata?: Record<string, any>,
	): Promise<ModelInfo[]> {
		return await this.storage.getProviderModels({
			providerName: this.name,
			...metadata,
		});
	}

	async _chatModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<LanguageModelV1> {
		const github = this.createProvider();
		const githubInstance = github.languageModel(model.name);
		return githubInstance;
	}

	async _completionModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<LanguageModelV1> {
		const github = this.createProvider();
		const githubInstance = github.languageModel(model.name);
		return githubInstance;
	}

	async _embeddingModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<EmbeddingModelV1<string>> {
		const github = this.createProvider();
		const githubInstance = github.textEmbeddingModel(model.name);
		return githubInstance;
	}

	async _imageModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<ImageModelV1> {
		const github = this.createProvider();
		const githubInstance = github.imageModel?.(model.name);
		if (!githubInstance) {
			throw new EvogenNotImplementedError(
				"Image models are not supported.",
			);
		}

		return githubInstance;
	}

	async _speachToTextModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<SpeechModelV1> {
		const github = this.createProvider();
		const githubInstance = github.speechModel?.(model.name);
		if (!githubInstance) {
			throw new EvogenNotImplementedError(
				"TTS models are not supported by Github.",
			);
		}
		return githubInstance;
	}

	async _textToSpeachModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<TranscriptionModelV1> {
		const github = this.createProvider();
		const githubInstance = github.transcriptionModel?.(model.name);
		if (!githubInstance) {
			throw new EvogenNotImplementedError(
				"TTS models are not supported by Github.",
			);
		}
		return githubInstance;
	}

	async checkStatus(
		metadata?: Record<string, any>,
	): Promise<StatusCheckResult> {
		const apiEndpoint = this.config.baseURL;
		const apiStatus = await this.checkEndpointStatus(`${apiEndpoint}`);
		const endpointStatus = await this.checkEndpointStatus(apiEndpoint);
		return {
			status:
				endpointStatus === "reachable" && apiStatus === "reachable"
					? "operational"
					: "degraded",
			message: `Status page: ${endpointStatus}, API: ${apiStatus}`,
			incidents: [],
		};
	}
}

export function parseGithubConfig(
	config: Record<string, any>,
): GithubProviderSettings {
	if (!config || !config.apiKey) {
		throw new Error("Missing credentials in Github configuration.");
	}

	return {
		name: config.name || "Github",
		apiKey: config.apiKey,
		baseURL: config.baseURL || "https://models.inference.ai.azure.com",
	};
}
