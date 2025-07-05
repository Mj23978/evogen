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

type OpenAICompatibleProviderSettings = {
	name: string;
	apiKey?: string;
	baseURL: string;
};

export class OpenAICompatibleProvider extends BaseEvogenProvider<OpenAICompatibleProviderSettings> {
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
		const oaicomp = this.createProvider();
		const oaicompInstance = oaicomp.languageModel(model.name);
		return oaicompInstance;
	}

	async _completionModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<LanguageModelV1> {
		const oaicomp = this.createProvider();
		const oaicompInstance = oaicomp.languageModel(model.name);
		return oaicompInstance;
	}

	async _imageModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<ImageModelV1> {
		const oaicomp = this.createProvider();
		const oaicompInstance = oaicomp.imageModel?.(model.name);
		if (!oaicompInstance) {
			throw new EvogenNotImplementedError(
				"Image models are not supported.",
			);
		}
		return oaicompInstance;
	}

	async _embeddingModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<EmbeddingModelV1<string>> {
		const oaicomp = this.createProvider();
		const oaicompInstance = oaicomp.textEmbeddingModel(model.name);
		return oaicompInstance;
	}

	async _speachToTextModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<SpeechModelV1> {
		const oaicomp = this.createProvider();
		const oaicompInstance = oaicomp.speechModel?.(model.name);
		if (!oaicompInstance) {
			throw new EvogenNotImplementedError(
				"TTS models are not supported by OpenAICompatible.",
			);
		}
		return oaicompInstance;
	}

	async _textToSpeachModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<TranscriptionModelV1> {
		const oaicomp = this.createProvider();
		const oaicompInstance = oaicomp.transcriptionModel?.(model.name);
		if (!oaicompInstance) {
			throw new EvogenNotImplementedError(
				"TTS models are not supported by OpenAICompatible.",
			);
		}
		return oaicompInstance;
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

export function parseOpenAICompatibleConfig(
	config: Record<string, any>,
): OpenAICompatibleProviderSettings {
	if (!config || !config.apiKey || !config.baseURL) {
		throw new Error("Missing credentials in OpenAICompatible configuration.");
	}

	return {
		name: config.name || "OpenAI Compatible",
		apiKey: config.apiKey,
		baseURL: config.baseURL,
	};
}
