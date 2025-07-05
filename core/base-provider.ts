import type {
  EmbeddingModelV1,
  ImageModelV1,
  LanguageModelV1,
  ProviderV1,
  SpeechModelV1,
  TranscriptionModelV1,
} from "@ai-sdk/provider";

import type { BaseEvogenStorage } from "./base-storage";
import type {
  ApiResponse,
  ModelInfo,
  ModelsType,
  StatusCheckResult,
} from "./types";

export abstract class BaseEvogenProvider<T> {
  name: string;
  config: T;
  storage: BaseEvogenStorage<{}>;

  constructor(name: string, config: T, storage: BaseEvogenStorage<{}>) {
    this.name = name;
    this.config = config;
    this.storage = storage;
  }

  async validateModelExists(
    modelName: string,
    modelType: ModelsType,
    metadata?: Record<string, any>
  ): Promise<ModelInfo> {
    return await this.storage.getProviderModel({
      modelName,
      providerName: this.name,
      type: modelType,
      ...metadata,
    });
  }

  abstract createProvider(): ProviderV1;

  abstract _chatModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<LanguageModelV1>;
  async chatModel(
    modelName: string,
    metadata?: Record<string, any>
  ): Promise<LanguageModelV1> {
    const model = await this.validateModelExists(modelName, "chat", metadata);
    return this._chatModel(model, metadata);
  }

  abstract _completionModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<LanguageModelV1>;
  async completionModel(
    modelName: string,
    metadata?: Record<string, any>
  ): Promise<LanguageModelV1> {
    const model = await this.validateModelExists(
      modelName,
      "completion",
      metadata
    );
    return this._completionModel(model, metadata);
  }

  abstract _imageModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<ImageModelV1>;
  async imageModel(
    modelName: string,
    metadata?: Record<string, any>
  ): Promise<ImageModelV1> {
    const model = await this.validateModelExists(
      modelName,
      "image-generation",
      metadata
    );
    return this._imageModel(model, metadata);
  }

  abstract _embeddingModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<EmbeddingModelV1<any>>;
  async embeddingModel(
    modelName: string,
    metadata?: Record<string, any>
  ): Promise<EmbeddingModelV1<any>> {
    const model = await this.validateModelExists(
      modelName,
      "embedding",
      metadata
    );
    return this._embeddingModel(model, metadata);
  }

  abstract _speachToTextModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<SpeechModelV1>;
  async speachToTextModel(
    modelName: string,
    metadata?: Record<string, any>
  ): Promise<SpeechModelV1> {
    const model = await this.validateModelExists(
      modelName,
      "speech-to-text",
      metadata
    );
    return this._speachToTextModel(model, metadata);
  }

  abstract _textToSpeachModel(
    model: ModelInfo,
    metadata?: Record<string, any>
  ): Promise<TranscriptionModelV1>;
  async textToSpeachModel(
    modelName: string,
    metadata?: Record<string, any>
  ): Promise<TranscriptionModelV1> {
    const model = await this.validateModelExists(
      modelName,
      "text-to-speach",
      metadata
    );
    return this._textToSpeachModel(model, metadata);
  }

  abstract syncModelsFromServer(
    metadata?: Record<string, any>
  ): Promise<ModelInfo[]>;

  protected async checkApiEndpoint(
    url: string,
    headers?: Record<string, string>,
    testModel?: string,
    metadata?: Record<string, any>
  ): Promise<{
    ok: boolean;
    status: number | string;
    message?: string;
    responseTime: number;
  }> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const startTime = performance.now();

      // Add common headers
      const processedHeaders = {
        "Content-Type": "application/json",
        ...headers,
      };

      const response = await fetch(url, {
        method: "GET",
        headers: processedHeaders,
        signal: controller.signal,
      });

      const endTime = performance.now();
      const responseTime = endTime - startTime;

      clearTimeout(timeoutId);

      const data = (await response.json()) as ApiResponse;

      if (!response.ok) {
        let errorMessage = `API returned status: ${response.status}`;

        if (data.error?.message) {
          errorMessage = data.error.message;
        } else if (data.message) {
          errorMessage = data.message;
        }

        return {
          ok: false,
          status: response.status,
          message: errorMessage,
          responseTime,
        };
      }

      // Different providers have different model list formats
      let models: string[] = [];

      if (Array.isArray(data)) {
        models = data.map(
          (model: { id?: string; name?: string }) =>
            model.id || model.name || ""
        );
      } else if (data.data && Array.isArray(data.data)) {
        models = data.data.map((model) => model.id || model.name || "");
      } else if (data.models && Array.isArray(data.models)) {
        models = data.models.map((model) => model.id || model.name || "");
      } else if (data.model) {
        models = [data.model];
      }

      if (!testModel || models.length > 0) {
        return {
          ok: true,
          status: response.status,
          responseTime,
          message: "API key is valid",
        };
      }

      if (testModel && !models.includes(testModel)) {
        return {
          ok: true,
          status: "model_not_found",
          message: `API key is valid (test model ${testModel} not found in ${models.length} available models)`,
          responseTime,
        };
      }

      return {
        ok: true,
        status: response.status,
        message: "API key is valid",
        responseTime,
      };
    } catch (error) {
      console.error(`Error checking API endpoint ${url}:`, error);
      return {
        ok: false,
        status: error instanceof Error ? error.message : "Unknown error",
        message:
          error instanceof Error
            ? `Connection failed: ${error.message}`
            : "Connection failed",
        responseTime: 0,
      };
    }
  }

  protected async checkEndpoint(
    url: string,
    metadata?: Record<string, any>
  ): Promise<"reachable" | "unreachable"> {
    try {
      const response = await fetch(url, {
        mode: "no-cors",
        headers: {
          Accept: "text/html",
        },
      });
      return response.type === "opaque" ? "reachable" : "unreachable";
    } catch (error) {
      console.error(`Error checking ${url}:`, error);
      return "unreachable";
    }
  }

  protected async checkEndpointStatus(
    url: string,
    metadata?: Record<string, any>
  ): Promise<"reachable" | "unreachable"> {
    try {
      const response = await fetch(url, {
        headers: {
          Accept: "text/html",
        },
      });
      return response.status >= 200 && response.status < 300
        ? "reachable"
        : "unreachable";
    } catch (error) {
      console.error(`Error checking ${url}:`, error);
      return "unreachable";
    }
  }

  abstract checkStatus(
    metadata?: Record<string, any>
  ): Promise<StatusCheckResult>;
}

// export function getOpenAILikeModel(baseURL: string, apiKey: OptionalApiKey, model: string) {
//   const openai = createOpenAI({
//     baseURL,
//     apiKey,
//   });

//   return openai(model);
// }
