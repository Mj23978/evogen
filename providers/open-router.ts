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
	type ModelContext,
	type ModelCostPerMillion,
	type ModelInfo,
	type ModelsModality,
	type ModelsType,
	type ProviderType,
	type StatusCheckResult,
} from "../core";

type OpenRouterModel = {
	id: string;
	canonical_slug: string;
	hugging_face_id: string;
	name: string;
	created: number;
	description: string;
	context_length: number;
	architecture: {
		modality: string;
		input_modalities: string[];
		output_modalities: string[];
		tokenizer: string;
		instruct_type: string | null;
	};
	pricing: {
		prompt: string;
		completion: string;
		request?: string;
		image?: string;
		web_search?: string;
		internal_reasoning?: string;
		input_cache_read?: string;
		input_cache_write?: string;
	};
	top_provider: {
		context_length: number;
		max_completion_tokens: number;
		is_moderated: boolean;
	};
	per_request_limits: null;
	supported_parameters: string[];
};

type OpenRouterProviderSettings = {
	baseURL: string;
	apiKey: string;
};

type OpenRouterApiResponse = {
	data: OpenRouterModel[];
};

export class OpenRouterProvider extends BaseEvogenProvider<OpenRouterProviderSettings> {
	type: ProviderType = "OpenRouter";
	getModelsLink = "https://openrouter.ai/api/v1/models";

	createProvider(): ProviderV1 {
		return createOpenAICompatible({
			name: this.name,
			baseURL: this.config.baseURL,
			apiKey: this.config.apiKey,
		});
	}

	async syncModelsFromServer(
		metadata?: Record<string, any>,
	): Promise<ModelInfo[]> {
		const response = await fetch(this.getModelsLink, {
			headers: {
				Authorization: `Bearer ${this.config.apiKey}`,
			},
		});
		const data = (await response.json()) as OpenRouterApiResponse;

		const models = data.data.map<ModelInfo>((model: OpenRouterModel) => {
			const {
				id,
				context_length,
				architecture,
				pricing,
				supported_parameters,
			} = model;

			const type: ModelsType = "chat";

			const modalities: ModelsModality[] = [];
			if (architecture.input_modalities.includes("image")) {
				modalities.push("vision");
			}
			if (architecture.output_modalities.includes("image")) {
				modalities.push("image-generation");
			}
			if (architecture.output_modalities.includes("audio")) {
				modalities.push("audio-output");
			}
			if (architecture.input_modalities.includes("audio")) {
				modalities.push("audio-input");
			}
			if (supported_parameters.includes("tools")) {
				modalities.push("function-call", "response-schema");
			}
			if (supported_parameters.includes("reasoning")) {
				modalities.push("reasoning");
			}

			const context: ModelContext = {
				maxOutputTokens: context_length,
				maxTokens: context_length,
			};

			const price: ModelCostPerMillion = {
				inputCost: parseFloat(pricing.prompt) * 1000000,
				outputCost: parseFloat(pricing.completion) * 1000000,
			};

			return {
				name: id,
				label: id,
				provider: "OpenRouter" as const,
				type,
				modalities: modalities.length > 0 ? modalities : undefined,
				context: Object.keys(context).length > 0 ? context : undefined,
				cost: price,
			};
		});

		await this.storage.deleteProviderModels({
			providerName: this.name,
			...metadata,
		});
		await this.storage.addProviderModels({
			modelInfos: models,
			providerName: this.name,
			...metadata,
		});
		return models;
	}

	async _chatModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<LanguageModelV1> {
		const huggingface = this.createProvider();
		const huggingfaceInstance = huggingface.languageModel(model.name);
		return huggingfaceInstance;
	}

	async _completionModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<LanguageModelV1> {
		const huggingface = this.createProvider();
		const huggingfaceInstance = huggingface.languageModel(model.name);
		return huggingfaceInstance;
	}

	async _imageModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<ImageModelV1> {
		throw new EvogenNotImplementedError(
			"Audio models are not supported by OpenRouter.",
		);
	}

	async _embeddingModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<EmbeddingModelV1<string>> {
		const huggingface = this.createProvider();
		const huggingfaceInstance = huggingface.textEmbeddingModel(model.name);
		return huggingfaceInstance;
	}

	async _speachToTextModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<SpeechModelV1> {
		throw new EvogenNotImplementedError(
			"Speach models are not supported by OpenRouter.",
		);
	}

	async _textToSpeachModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<TranscriptionModelV1> {
		throw new EvogenNotImplementedError(
			"TTS models are not supported by OpenRouter.",
		);
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

export function parseOpenRouterConfig(
	config: Record<string, any>,
): OpenRouterProviderSettings {
	if (!config || !config.apiKey) {
		throw new Error("Missing API key in OpenRouter configuration.");
	}

	return {
		apiKey: config.apiKey,
		baseURL: "https://api.hyperbolic.xyz/v1/",
	};
}
