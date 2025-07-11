import {
	type AnthropicProviderSettings,
	createAnthropic,
} from "@ai-sdk/anthropic";
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

type AnthropicModel = {
	name: string;
	endpoints: string[];
	finetuned: boolean;
	context_length: number;
	tokenizer_url: string;
	supports_vision: boolean;
	features: null | string[];
	default_endpoints: never[];
};

type AnthropicApiResponse = {
	models: AnthropicModel[];
};

export class AnthropicProvider extends BaseEvogenProvider<AnthropicProviderSettings> {
	type: ProviderType = "Anthropic";
	getModelsLink = "https://api.anthropic.ai/v1/models";

	createProvider(): ProviderV1 {
		return createAnthropic(this.config);
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
		const anthropic = this.createProvider();
		const anthropicInstance = anthropic.languageModel(model.name);
		return anthropicInstance;
	}

	async _completionModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<LanguageModelV1> {
		const anthropic = this.createProvider();
		const anthropicInstance = anthropic.languageModel(model.name);
		return anthropicInstance;
	}

	async _imageModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<ImageModelV1> {
		const anthropic = this.createProvider();
		const anthropicInstance = anthropic.imageModel?.(model.name);
		if (!anthropicInstance) {
			throw new EvogenNotImplementedError(
				"Image models are not supported.",
			);
		}

		return anthropicInstance;
	}

	async _embeddingModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<EmbeddingModelV1<string>> {
		const anthropic = this.createProvider();
		const anthropicInstance = anthropic.textEmbeddingModel(model.name);
		return anthropicInstance;
	}

	async _speachToTextModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<SpeechModelV1> {
		const anthropic = this.createProvider();
		const anthropicInstance = anthropic.speechModel?.(model.name);
		if (!anthropicInstance) {
			throw new EvogenNotImplementedError(
				"TTS models are not supported by Anthropic.",
			);
		}
		return anthropicInstance;
	}

	async _textToSpeachModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<TranscriptionModelV1> {
		const anthropic = this.createProvider();
		const anthropicInstance = anthropic.transcriptionModel?.(model.name);
		if (!anthropicInstance) {
			throw new EvogenNotImplementedError(
				"TTS models are not supported by Anthropic.",
			);
		}
		return anthropicInstance;
	}

	async checkStatus(
		metadata?: Record<string, any>,
	): Promise<StatusCheckResult> {
		const apiEndpoint = this.getModelsLink;
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

export function parseAnthropicConfig(
	config: Record<string, any>,
): AnthropicProviderSettings {
	if (!config || !config.apiKey) {
		throw new Error("Missing credentials in Anthropic configuration.");
	}

	return {
		apiKey: config.apiKey,
		baseURL: config.baseURL,
	};
}
