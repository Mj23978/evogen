export type FeatureActions = "list" | "get" | "add" | "edit" | "delete";
export type StorageFeature = "apiKeys" | "providers" | "models";
export type ProviderKeys =
	| "checkApiKeyLink"
	| "getApiKeyLink"
	| "apiKeyEnv"
	| "baseUrlEnv"
	| "healthLink"
	| "getModelsLink";
export type ProviderType =
	| "FriendliAI"
	| "AssemblyAI"
	| "Azure"
	| "Cerebras"
	| "Sambanova"
	| "OpenAI"
	| "Anthropic"
	| "Google"
	| "Mistral"
	| "Cohere"
	| "Deepseek"
	| "Groq"
	| "HuggingFace"
	| "Hyperbolic"
	| "Ollama"
	| "OpenRouter"
	| "OpenAILike"
	| "Perplexity"
	| "XAI"
	| "Together"
	| "LMStudio"
	| "AmazonBedrock"
	| "Github";
export type ModelsType =
	| "ocr"
	| "chat"
	| "completion"
	| "image-generation"
	| "text-to-speach"
	| "moderation"
	| "speech-to-text"
	| "embedding"
	| "rerank"
	| "audio"
	| "image-classification"
	| "object-detection"
	| "segmentation"
	| "captioning";
export type ModelsModality =
	| "reasoning"
	| "function-call"
	| "tool-choice"
	| "prefill"
	| "vision"
	| "response-schema"
	| "parallel-function-calling"
	| "web-search"
	| "image-generation"
	| "audio-input"
	| "audio-output"
	| "pdf-input"
	| "video-input"
	| "image-embed";

export type ModelCostPerMillion = {
	inputCost?: number;
	outputCost?: number;
	inputCostAudio?: number;
	outputCostAudio?: number;
	inputCostPixel?: number;
	outputCostPixel?: number;
};

export type ModelContext = {
	maxTokens?: number;
	maxInputTokens?: number;
	maxOutputTokens?: number;
};

export interface ModelInfo {
	name: string;
	label: string;
	provider: string;
	type: ModelsType;
	modalities?: ModelsModality[];
	context?: ModelContext;
	cost?: ModelCostPerMillion;
	metadata?: Record<string, any>;
}

export interface ProviderInfo {
	name: string;
	label: string;
	type: ProviderType;
	keys: Partial<Record<ProviderKeys, string>>;
	icon?: string;
	metadata?: Record<string, any>;
	config?: Record<string, any>;
}

export type ServiceStatus = {
	provider: ProviderType;
	status: "operational" | "degraded" | "down";
	lastChecked: string;
	statusUrl?: string;
	message?: string;
	responseTime?: number;
	incidents?: string[];
};

export interface ProviderConfig {
	statusUrl: string;
	apiUrl: string;
	headers: Record<string, string>;
	testModel: string;
}

export type ApiResponse = {
	error?: {
		message: string;
	};
	message?: string;
	model?: string;
	models?: Array<{
		id?: string;
		name?: string;
	}>;
	data?: Array<{
		id?: string;
		name?: string;
	}>;
};

export type StatusCheckResult = {
	status: "operational" | "degraded" | "down";
	message: string;
	incidents: string[];
};
