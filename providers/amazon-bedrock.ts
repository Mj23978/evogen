import {
	type AmazonBedrockProviderSettings,
	createAmazonBedrock,
} from "@ai-sdk/amazon-bedrock";
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

type AmazonBedrockModel = {
	name: string;
	endpoints: string[];
	finetuned: boolean;
	context_length: number;
	tokenizer_url: string;
	supports_vision: boolean;
	features: null | string[];
	default_endpoints: never[];
};

type AmazonBedrockApiResponse = {
	models: AmazonBedrockModel[];
};

export class AmazonBedrockProvider extends BaseEvogenProvider<AmazonBedrockProviderSettings> {
	type: ProviderType = "AmazonBedrock";
	getModelsLink = "https://api.bedrock.ai/v1/models";

	createProvider(): ProviderV1 {
		return createAmazonBedrock(this.config);
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
		const bedrock = this.createProvider();
		const bedrockInstance = bedrock.languageModel(model.name);
		return bedrockInstance;
	}

	async _completionModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<LanguageModelV1> {
		const bedrock = this.createProvider();
		const bedrockInstance = bedrock.languageModel(model.name);
		return bedrockInstance;
	}

	async _imageModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<ImageModelV1> {
		const bedrock = this.createProvider();
		const bedrockInstance = bedrock.imageModel?.(model.name);
		if (!bedrockInstance) {
			throw new EvogenNotImplementedError(
				"Image models are not supported.",
			);
		}
		return bedrockInstance;
	}

	async _embeddingModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<EmbeddingModelV1<string>> {
		const bedrock = this.createProvider();
		const bedrockInstance = bedrock.textEmbeddingModel(model.name);
		return bedrockInstance;
	}

	async _speachToTextModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<SpeechModelV1> {
		const bedrock = this.createProvider();
		const bedrockInstance = bedrock.speechModel?.(model.name);
		if (!bedrockInstance) {
			throw new EvogenNotImplementedError(
				"STT models are not supported by AmazonBedrock.",
			);
		}
		return bedrockInstance;
	}

	async _textToSpeachModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<TranscriptionModelV1> {
		const bedrock = this.createProvider();
		const bedrockInstance = bedrock.transcriptionModel?.(model.name);
		if (!bedrockInstance) {
			throw new EvogenNotImplementedError(
				"TTS models are not supported by AmazonBedrock.",
			);
		}
		return bedrockInstance;
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

export function parseAmazonBedrockConfig(
	config: Record<string, any>,
): AmazonBedrockProviderSettings {
	if (
		!config ||
		!config.accessKeyId ||
		!config.secretAccessKey ||
		!config.region
	) {
		throw new Error("Missing credentials in AmazonBedrock configuration.");
	}

	return {
		sessionToken: config.sessionToken,
		accessKeyId: config.accessKeyId,
		region: config.region,
		baseURL: config.baseURL,
		secretAccessKey: config.secretAccessKey,
	};
}
