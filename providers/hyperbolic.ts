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
	type ModelContext,
	type ModelInfo,
	type ModelsModality,
	type ModelsType,
	type ProviderType,
	type StatusCheckResult,
} from "../core";

type HyperbolicModel = {
	id: string;
	created: number;
	object: string;
	owned_by: string;
	number_of_inference_nodes: number | null;
	supports_chat: boolean;
	supports_image_input: boolean;
	supports_tools: boolean;
	context_length: number;
};

type HyperbolicProviderSettings = {
	apiKey: string;
	baseURL: string;
};

type HyperbolicApiResponse = {
	object: string;
	data: HyperbolicModel[];
};

export class HyperbolicProvider extends BaseEvogenProvider<HyperbolicProviderSettings> {
	type: ProviderType = "Hyperbolic";
	getModelsLink = "https://api.huggingface.com/v1/models";

	createProvider(): ProviderV2 {
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
		const data = (await response.json()) as HyperbolicApiResponse;

		const models = data.data.map<ModelInfo>((model: HyperbolicModel) => {
			const {
				id,
				context_length,
				supports_image_input,
				supports_tools,
			} = model;

			let type: ModelsType = "chat";
			if (id.toLowerCase().includes("whisper")) {
				type = "speech-to-text";
			}
			if (id.toLowerCase().includes("flux")) {
				type = "image-generation";
			}
			if (id.toLowerCase().includes("sdxl")) {
				type = "image-generation";
			}
			if (id.toLowerCase().includes("tts")) {
				type = "text-to-speach";
			}
			if (id.toLowerCase().includes("guard")) {
				type = "moderation";
			}

			const modalities: ModelsModality[] = [];
			if (supports_tools) {
				modalities.push("function-call", "response-schema");
			}
			if (supports_image_input) {
				modalities.push("vision");
			}

			const context: ModelContext = {
				maxOutputTokens: context_length,
				maxTokens: context_length,
			};

			return {
				name: id,
				label: id,
				provider: "Hyperbolic",
				type,
				modalities: modalities.length > 0 ? modalities : undefined,
				context: Object.keys(context).length > 0 ? context : undefined,
				cost: undefined, // not available in JSON
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
	): Promise<LanguageModelV2> {
		const huggingface = this.createProvider();
		const huggingfaceInstance = huggingface.languageModel(model.name);
		return huggingfaceInstance;
	}

	async _completionModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<LanguageModelV2> {
		const huggingface = this.createProvider();
		const huggingfaceInstance = huggingface.languageModel(model.name);
		return huggingfaceInstance;
	}

	async _imageModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<ImageModelV2> {
		throw new EvogenNotImplementedError(
			"Audio models are not supported by Hyperbolic.",
		);
	}

	async _embeddingModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<EmbeddingModelV2<string>> {
		const huggingface = this.createProvider();
		const huggingfaceInstance = huggingface.textEmbeddingModel(model.name);
		return huggingfaceInstance;
	}

	async _speachToTextModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<SpeechModelV2> {
		throw new EvogenNotImplementedError(
			"Speach models are not supported by Hyperbolic.",
		);
	}

	async _textToSpeachModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<TranscriptionModelV2> {
		throw new EvogenNotImplementedError(
			"TTS models are not supported by Hyperbolic.",
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

export function parseHyperbolicConfig(
	config: Record<string, any>,
): HyperbolicProviderSettings {
	if (!config || !config.apiKey) {
		throw new Error("Missing API key in Hyperbolic configuration.");
	}

	return {
		apiKey: config.apiKey,
		baseURL: "https://api.hyperbolic.xyz/v1/",
	};
}
