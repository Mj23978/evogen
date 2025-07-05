import { type MistralProviderSettings, mistral } from "@ai-sdk/mistral";
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

type MistralModel = {
  id: string;
  object: string;
  created: number;
  owned_by: string;
  capabilities: {
    completion_chat: boolean;
    completion_fim: boolean;
    function_calling: boolean;
    fine_tuning: boolean;
    vision: boolean;
    classification: boolean;
  };
  name: string;
  description: string;
  max_context_length: number;
  aliases: string[];
  deprecation?: any;
  deprecation_replacement_model?: any;
  default_model_temperature?: any;
  type: string;
};

type MistralApiResponse = {
  object: string;
  data: MistralModel[];
};

export class MistralProvider extends BaseEvogenProvider<MistralProviderSettings> {
  type: ProviderType = "Mistral";
  getModelsLink = "https://api.mistral.ai/v1/models";

  createProvider(): ProviderV1 {
    return mistral;
  }

  async syncModelsFromServer(
    metadata?: Record<string, any>
  ): Promise<ModelInfo[]> {
    const response = await fetch(`${this.getModelsLink}?page_size=1000`, {
      headers: {
        Authorization: `Bearer ${this.config.apiKey}`,
      },
    });
    const data = (await response.json()) as MistralApiResponse;

    const models = data.data.map<ModelInfo>((model: MistralModel) => {
      const { capabilities, id, max_context_length } = model;

      let type: ModelsType = "chat";
      if (id.includes("moderation")) {
        type = "moderation";
      }
      if (id.includes("embed")) {
        type = "embedding";
      }
      if (id.includes("rerank")) {
        type = "rerank";
      }
      if (id.includes("ocr")) {
        type = "ocr";
      }

      const modalities: ModelsModality[] = [];
      if (capabilities.vision) modalities.push("vision");

      if (capabilities.function_calling) {
        modalities.push("response-schema");
        modalities.push("function-call");
      }

      const context: Record<string, any> = {};
      if (max_context_length !== undefined) {
        context.contextLength = max_context_length;
      }

      return {
        name: model.name,
        label: model.name, // can be changed to a readable label if needed
        provider: "Mistral" as const,
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
    metadata?: Record<string, any>
  ): Promise<LanguageModelV1> {
    const mistralInstance = mistral.languageModel(model.name);
    return mistralInstance;
  }

  async _completionModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<LanguageModelV1> {
    const mistralInstance = mistral(model.name);
    return mistralInstance;
  }

  async _embeddingModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<EmbeddingModelV1<string>> {
    const mistralInstance = mistral.textEmbeddingModel(model.name);
    return mistralInstance;
  }

	async _imageModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<ImageModelV1> {
		const mistral = this.createProvider();
		const mistralInstance = mistral.imageModel?.(model.name);
		if (!mistralInstance) {
			throw new EvogenNotImplementedError(
				"Image models are not supported.",
			);
		}

		return mistralInstance;
	}

	async _speachToTextModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<SpeechModelV1> {
		const mistral = this.createProvider();
		const mistralInstance = mistral.speechModel?.(model.name);
		if (!mistralInstance) {
			throw new EvogenNotImplementedError(
				"TTS models are not supported by mistral.",
			);
		}
		return mistralInstance;
	}

	async _textToSpeachModel(
		model: ModelInfo,
		metadata?: Record<string, any>,
	): Promise<TranscriptionModelV1> {
		const mistral = this.createProvider();
		const mistralInstance = mistral.transcriptionModel?.(model.name);
		if (!mistralInstance) {
			throw new EvogenNotImplementedError(
				"TTS models are not supported by mistral.",
			);
		}
		return mistralInstance;
	}


  async checkStatus(
    metadata?: Record<string, any>
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

export function parseMistralConfig(
  config: Record<string, any>
): MistralProviderSettings {
  if (!config || !config.apiKey) {
    throw new Error("Missing API key in Mistral configuration.");
  }

  return {
    apiKey: config.apiKey,
  };
}
