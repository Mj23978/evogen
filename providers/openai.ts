import { type OpenAIProviderSettings, openai } from "@ai-sdk/openai";
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
	type ModelsModality,
	type ModelsType,
	type ProviderType,
	type StatusCheckResult,
} from "../core";

type OpenAIModel = {
	name: string;
	endpoints: string[];
	finetuned: boolean;
	context_length: number;
	tokenizer_url: string;
	supports_vision: boolean;
	features: null | string[];
	default_endpoints: never[];
};

type OpenAIApiResponse = {
	models: OpenAIModel[];
};

export class OpenAIProvider extends BaseEvogenProvider<OpenAIProviderSettings> {
	type: ProviderType = "OpenAI";
	getModelsLink = "https://api.openai.com/v1/models";

	createProvider(): ProviderV1 {
		return openai;
	}

	async syncModelsFromServer(
		metadata?: Record<string, any>,
	): Promise<ModelInfo[]> {
		const response = await fetch(this.getModelsLink + "?page_size=1000", {
			headers: {
				Authorization: `Bearer ${this.config.apiKey}`,
			},
		});
		const data = (await response.json()) as OpenAIApiResponse;

		const models = data.models.map<ModelInfo>((model: OpenAIModel) => {
			const {
				endpoints,
				context_length,
				supports_vision,
				features,
			} = model;

			let type: ModelsType = "chat";
			if (endpoints.includes("embed")) {
				type = "embedding";
			}
			if (endpoints.includes("embed_image")) {
				type = "embedding";
			}
			if (endpoints.includes("rerank")) {
				type = "rerank";
			}

			const modalities: ModelsModality[] = [];
			if (supports_vision) modalities.push("vision");

			if (features?.includes("json_schema")) {
				modalities.push("response-schema");
				modalities.push("function-call");
			}
			if (features?.includes("vision")) {
				modalities.push("vision");
			}

			const context: Record<string, any> = {};
			if (context_length !== undefined) {
				context.contextLength = context_length;
			}

			return {
				name: model.name,
				label: model.name, // can be changed to a readable label if needed
				provider: "OpenAI" as const,
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
	): Promise<LanguageModelV1> {
		const openaiInstance = openai.languageModel(model.name);
		return openaiInstance;
	}

	async _completionModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<LanguageModelV1> {
		const openaiInstance = openai(model.name);
		return openaiInstance;
	}

	async _embeddingModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<EmbeddingModelV1<string>> {
		const openaiInstance = openai.textEmbeddingModel(model.name);
		return openaiInstance;
	}

	async _imageModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<ImageModelV1> {
		const openai = this.createProvider();
		const openaiInstance = openai.imageModel?.(model.name);
		if (!openaiInstance) {
			throw new EvogenNotImplementedError(
				"Image models are not supported.",
			);
		}

		return openaiInstance;
	}

	async _speachToTextModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<SpeechModelV1> {
		const openai = this.createProvider();
		const openaiInstance = openai.speechModel?.(model.name);
		if (!openaiInstance) {
			throw new EvogenNotImplementedError(
				"TTS models are not supported by openai.",
			);
		}
		return openaiInstance;
	}

	async _textToSpeachModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<TranscriptionModelV1> {
		const openai = this.createProvider();
		const openaiInstance = openai.transcriptionModel?.(model.name);
		if (!openaiInstance) {
			throw new EvogenNotImplementedError(
				"TTS models are not supported by openai.",
			);
		}
		return openaiInstance;
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

export function parseOpenAIConfig(
	config: Record<string, any>,
): OpenAIProviderSettings {
	if (!config || !config.apiKey) {
		throw new Error("Missing API key in OpenAI configuration.");
	}

	return {
		apiKey: config.apiKey,
	};
}
