import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import type {
	EmbeddingModelV2,
	ImageModelV2,
	LanguageModelV2,
	ProviderV2,
	SpeechModelV2,
	TranscriptionModelV2,
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

	createProvider(): ProviderV2 {
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
	): Promise<LanguageModelV2> {
		const deepseek = this.createProvider();
		const deepseekInstance = deepseek.languageModel(model.name);
		return deepseekInstance;
	}

	async _completionModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<LanguageModelV2> {
		const deepseek = this.createProvider();
		const deepseekInstance = deepseek.languageModel(model.name);
		return deepseekInstance;
	}

	async _imageModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<ImageModelV2> {
		const deepseek = this.createProvider();
		const deepseekInstance = deepseek.imageModel(model.name);
		return deepseekInstance;
	}

	async _embeddingModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<EmbeddingModelV2<string>> {
		const deepseek = this.createProvider();
		const deepseekInstance = deepseek.textEmbeddingModel(model.name);
		return deepseekInstance;
	}

	async _speachToTextModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<SpeechModelV2> {
		const deepseek = this.createProvider();
		const deepseekInstance = deepseek.speechModel?.(model.name);
		if (!deepseekInstance) {
			throw new EvogenNotImplementedError(
				"TTS models are not supported by Github.",
			);
		}
		return deepseekInstance;
	}

	async _textToSpeachModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<TranscriptionModelV2> {
		const deepseek = this.createProvider();
		const deepseekInstance = deepseek.transcriptionModel?.(model.name);
		if (!deepseekInstance) {
			throw new EvogenNotImplementedError(
				"TTS models are not supported by Github.",
			);
		}
		return deepseekInstance;
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
