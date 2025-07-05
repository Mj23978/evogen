import { type GroqProviderSettings, groq } from "@ai-sdk/groq";
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

type GroqModel = {
	id: string;
	object: string;
	created: number;
	owned_by: string;
	active: boolean;
	context_window: number;
	public_apps: null;
	max_completion_tokens: number;
};

type GroqApiResponse = {
	object: string;
	data: GroqModel[];
};

export class GroqProvider extends BaseEvogenProvider<GroqProviderSettings> {
	type: ProviderType = "Groq";
	getModelsLink = "https://api.groq.com/v1/models";

	createProvider(): ProviderV2 {
		return groq;
	}

	async syncModelsFromServer(
		metadata?: Record<string, any>,
	): Promise<ModelInfo[]> {
		const response = await fetch(this.getModelsLink, {
			headers: {
				Authorization: `Bearer ${this.config.apiKey}`,
			},
		});
		const data = (await response.json()) as GroqApiResponse;

		const models = data.data.map<ModelInfo>((model: GroqModel) => {
			const { id, context_window, max_completion_tokens } =
				model;

			let type: ModelsType = "chat";
			if (id.includes("whisper")) {
				type = "speech-to-text";
			}
			if (id.includes("tts")) {
				type = "text-to-speach";
			}
			if (id.includes("guard")) {
				type = "moderation";
			}

			const modalities: ModelsModality[] = ["response-schema", "function-call"];

			const context: ModelContext = {
				maxOutputTokens: max_completion_tokens,
				maxTokens: context_window,
			};

			return {
				name: id,
				label: id,
				provider: "Groq" as const,
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
		const groqInstance = groq.languageModel(model.name);
		return groqInstance;
	}

	async _completionModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<LanguageModelV2> {
		const groqInstance = groq(model.name);
		return groqInstance;
	}

	async _imageModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<ImageModelV2> {
		throw new EvogenNotImplementedError(
			"Audio models are not supported by Groq.",
		);
	}

	async _embeddingModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<EmbeddingModelV2<string>> {
		const groqInstance = groq.textEmbeddingModel(model.name);
		return groqInstance;
	}

	async _speachToTextModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<SpeechModelV2> {
		throw new EvogenNotImplementedError(
			"Speach models are not supported by Groq.",
		);
	}

	async _textToSpeachModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<TranscriptionModelV2> {
		throw new EvogenNotImplementedError(
			"TTS models are not supported by Groq.",
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

export function parseGroqConfig(
	config: Record<string, any>,
): GroqProviderSettings {
	if (!config || !config.apiKey) {
		throw new Error("Missing API key in Groq configuration.");
	}

	return {
		apiKey: config.apiKey,
	};
}
