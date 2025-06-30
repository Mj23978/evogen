import axios, { AxiosError } from "axios";
import "dotenv";
import fs from "fs";
import path from "path";

const ProviderType = {
	Sambanova: "Sambanova",
	AssemblyAI: "AssemblyAI",
	OpenAI: "OpenAI",
	Anthropic: "Anthropic",
	Google: "Google",
	Mistral: "Mistral",
	Cohere: "Cohere",
	Deepseek: "Deepseek",
	Groq: "Groq",
	HuggingFace: "HuggingFace",
	Hyperbolic: "Hyperbolic",
	Ollama: "Ollama",
	OpenRouter: "OpenRouter",
	OpenAILike: "OpenAILike",
	Perplexity: "Perplexity",
	XAI: "XAI",
	Together: "Together",
	LMStudio: "LMStudio",
	AmazonBedrock: "AmazonBedrock",
	Github: "Github",
	Azure: "Azure",
	Cerebras: "Cerebras",
	FriendliAI: "FriendliAI",
} as const;

const ModelsType = {
	Chat: "chat",
	Completion: "completion",
	Rerank: "rerank",
	Audio: "audio",
	ImageGeneration: "image-generation",
	TextToSpeech: "text-to-speach",
	Moderation: "moderation",
	SpeechToText: "speech-to-text",
	Embedding: "embedding",
	ImageClassification: "image-classification",
	ObjectDetection: "object-detection",
	Segmentation: "segmentation",
	Captioning: "captioning",
} as const;

const ModelsModality = {
	FunctionCall: "function-call",
	ToolChoice: "tool-choice",
	ResponseSchema: "response-schema",
	Vision: "vision",
	ParallelFunctionCalling: "parallel-function-calling",
	WebSearch: "web-search",
	AudioInput: "audio-input",
	AudioOutput: "audio-output",
	PdfInput: "pdf-input",
	VideoInput: "video-input",
	Prefill: "prefill",
	ImageGeneration: "image-generation",
	ImageEmbed: "image-embed",
} as const;

const modalityMapper: Record<string, string> = {
	supports_function_calling: ModelsModality.FunctionCall,
	supports_tool_choice: ModelsModality.ToolChoice,
	supports_response_schema: ModelsModality.ResponseSchema,
	supports_vision: ModelsModality.Vision,
	supports_parallel_function_calling: ModelsModality.ParallelFunctionCalling,
	supports_web_search: ModelsModality.WebSearch,
	supports_audio_input: ModelsModality.AudioInput,
	supports_audio_output: ModelsModality.AudioOutput,
	supports_pdf_input: ModelsModality.PdfInput,
	supports_video_input: ModelsModality.VideoInput,
};

export type ModelCostPerMillion = {
	inputCost?: number;
	outputCost?: number;
	inputCostAudio?: number;
	outputCostAudio?: number;
	inputCostPixel?: number;
	outputCostPixel?: number;
};

export type ModelContext = {
	maxTokens: number;
	maxInputTokens?: number;
	maxOutputTokens?: number;
};

export interface ModelInfo {
	name: string;
	label: string;
	provider: string;
	type: string;
	modalities?: string[];
	context?: ModelContext;
	cost?: ModelCostPerMillion;
	metadata?: Record<string, any>;
}

const providerMapper: Record<string, string> = {
	openai: ProviderType.OpenAI,
	anthropic: ProviderType.Anthropic,
	gemini: ProviderType.Google,
	mistral: ProviderType.Mistral,
	cohere: ProviderType.Cohere,
	deepseek: ProviderType.Deepseek,
	groq: ProviderType.Groq,
	huggingface: ProviderType.HuggingFace,
	perplexity: ProviderType.Perplexity,
	xai: ProviderType.XAI,
	bedrock: ProviderType.AmazonBedrock,
	openrouter: ProviderType.OpenRouter,
	github: ProviderType.Github,
	assemblyai: ProviderType.AssemblyAI,
	sambanova: ProviderType.Sambanova,
	azure: ProviderType.Azure,
	cerebras: ProviderType.Cerebras,
	friendliai: ProviderType.FriendliAI,
	"vertex_ai-language-models": ProviderType.Google,
	fireworks_ai: ProviderType.Google,
};

const typeMapper: Record<string, string> = {
	chat: ModelsType.Chat,
	completion: ModelsType.Completion,
	embedding: ModelsType.Embedding,
	image_generation: ModelsType.ImageGeneration,
	audio_speech: ModelsType.TextToSpeech,
	audio_transcription: ModelsType.SpeechToText,
	moderation: ModelsType.Moderation,
	rerank: ModelsType.Rerank,
	image: ModelsType.ImageGeneration,
};

type CloudConfig = {
	url: string;
	cacheFile: string;
	type: "litellm" | "together";
};

function createLabel(modelName: string) {
	const parts = modelName.split("/");
	const lastPart = parts[parts.length - 1];
	return lastPart.replaceAll("-", " ");
}

function mapLiteLLMConfig(
	modelName: string,
	modelConfig: any,
): ModelInfo | undefined {
	// Extract provider
	const providerName: string = modelConfig.litellm_provider || "unknown";
	const provider: string | undefined =
		providerMapper[providerName] || undefined;
	if (!providerName || provider === undefined) {
		return;
	}
	if (provider === ProviderType.AmazonBedrock) {
		if (
			modelName.includes("us-west") ||
			modelName.includes("sa-") ||
			modelName.includes("month") ||
			modelName.includes("ca-") ||
			modelName.includes("us-east") ||
			modelName.includes("eu-west") ||
			modelName.includes("eu-east") ||
			modelName.includes("us.") ||
			modelName.includes("eu.") ||
			modelName.includes("ap-n") ||
			modelName.includes("eu-cen")
		) {
			return;
		}
		modelName = modelName.replace("bedrock/", "");
	}
	if (provider === ProviderType.Azure) {
		if (
			modelName.includes("us/") ||
			modelName.includes("eu/") ||
			modelName.includes("month") ||
			modelName.includes("ca-") ||
			modelName.includes("us-east") ||
			modelName.includes("eu-west") ||
			modelName.includes("eu-east") ||
			modelName.includes("us.") ||
			modelName.includes("eu.") ||
			modelName.includes("ap-n") ||
			modelName.includes("eu-cen")
		) {
			return;
		}
		modelName = modelName.replace("azure/", "");
	}
	if (provider === ProviderType.OpenRouter) {
		modelName = modelName.replace("openrouter/", "");
	}
	if (provider === ProviderType.Perplexity) {
		modelName = modelName.replace("perplexity/", "");
	}
	if (provider === ProviderType.XAI) {
		modelName = modelName.replace("xai/", "");
	}
	if (provider === ProviderType.Deepseek) {
		modelName = modelName.replace("deepseek/", "");
	}
	if (provider === ProviderType.Mistral) {
		modelName = modelName.replace("mistral/", "");
	}
	if (provider === ProviderType.Groq) {
		modelName = modelName.replace("groq/", "");
	}
	if (provider === ProviderType.Cerebras) {
		modelName = modelName.replace("cerebras/", "");
	}
	if (provider === ProviderType.Sambanova) {
		modelName = modelName.replace("sambanova/", "");
	}
	if (provider === ProviderType.Google) {
		modelName = modelName.replace("gemini/", "");
	}
	if (provider === ProviderType.FriendliAI) {
		modelName = modelName.replace("friendliai/", "");
	}

	// Extract type
	const type = typeMapper[modelConfig.mode] || "chat";

	// Extract modalities
	const modalities: string[] = [];
	for (const [key, modality] of Object.entries(modalityMapper)) {
		if (modelConfig[key] === true) {
			modalities.push(modality);
		}
	}

	// Extract context information
	const context: ModelContext = {
		maxTokens: modelConfig.max_tokens || modelConfig.max_input_tokens,
		maxInputTokens: modelConfig.max_input_tokens,
		maxOutputTokens: modelConfig.max_output_tokens,
	};

	// Extract cost information
	const cost: ModelCostPerMillion = {};

	if (modelConfig.input_cost_per_token) {
		cost.inputCost = parseFloat(
			(modelConfig.input_cost_per_token * 1000000).toFixed(3),
		);
	}

	if (modelConfig.output_cost_per_token) {
		cost.outputCost = parseFloat(
			(modelConfig.output_cost_per_token * 1000000).toFixed(3),
		);
	}

	// Additional metadata
	const metadata: Record<string, any> = {};

	// Include any search context costs
	if (modelConfig.search_context_cost_per_query) {
		metadata.searchContextCostPerQuery = parseFloat(
			(modelConfig.search_context_cost_per_query * 1000000).toFixed(3),
		);
	}

	// Add any batch pricing
	if (modelConfig.input_cost_per_token_batches) {
		metadata.inputCostBatches = parseFloat(
			(modelConfig.input_cost_per_token_batches * 1000000).toFixed(3),
		);
	}

	if (modelConfig.output_cost_per_token_batches) {
		metadata.outputCostBatches = parseFloat(
			(modelConfig.output_cost_per_token_batches * 1000000).toFixed(3),
		);
	}

	return {
		name: modelName,
		label: createLabel(modelName),
		provider: provider as string,
		type,
		modalities,
		context,
		cost,
		metadata,
	};
}

function mapTogetherLLMConfig(modelConfig: any): ModelInfo | undefined {
	// Extract provider
	const modelName: string = modelConfig.name || "unknown";
	const modelLabel: string = modelConfig.display_name || modelName;
	const provider: string = ProviderType.Together;
	if (modelName === "unknown" || modelConfig.isDeleted) {
		return;
	}

	// Extract type
	const type = typeMapper[modelConfig.display_type] || "chat";
	const modalities: string[] = [];

	const structuredOutputsModels = [
		"meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
		"meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
		"meta-llama/Llama-3.2-3B-Instruct-Turbo",
		"meta-llama/Llama-3.3-70B-Instruct-Turbo",
		"deepseek-ai/DeepSeek-V3",
	];
	const functionCallModels = [
		"Qwen/Qwen2.5-7B-Instruct-Turbo",
		"Qwen/Qwen2.5-72B-Instruct-Turbo",
		"meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
		"meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
		"meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
		"meta-llama/Llama-3.3-70B-Instruct-Turbo",
	];
	if (
		modelName.toLowerCase().includes("vision") ||
		modelLabel.toLowerCase().includes("vision")
	) {
		modalities.push(ModelsModality.Vision);
	}
	if (structuredOutputsModels.includes(modelName)) {
		modalities.push(ModelsModality.ResponseSchema);
	}
	if (functionCallModels.includes(modelName)) {
		modalities.push(ModelsModality.FunctionCall);
		modalities.push(ModelsModality.ToolChoice);
	}

	// Extract context information
	const context: ModelContext = {
		maxTokens: modelConfig.context_length,
		maxInputTokens: modelConfig.max_tokens,
	};

	if (modelConfig.context_length) {
		context.maxTokens = modelConfig.context_length;
	}

	if (modelConfig.maxInputTokens) {
		context.maxInputTokens = modelConfig.max_tokens;
	}

	// Extract cost information
	const cost: ModelCostPerMillion = {};

	if (modelConfig.pricing.input) {
		cost.inputCost = parseFloat((modelConfig.pricing.input * 0.004).toFixed(3));
	}

	if (modelConfig.pricing.output) {
		cost.outputCost = parseFloat(
			(modelConfig.pricing.output * 0.004).toFixed(3),
		);
	}

	if (modelConfig.pricing.pixelPricing) {
		cost.inputCostPixel = parseFloat(
			(modelConfig.pricing.pixelPricing.pricePerPixelDollar * 1000000).toFixed(
				3,
			),
		);
	}

	// Additional metadata
	const metadata: Record<string, any> = {};

	metadata.uuid = modelConfig.uuid;
	metadata.link = modelConfig.link;
	metadata.description = modelConfig.description;
	if (modelConfig.config) {
		metadata.config = modelConfig.config;
	}

	return {
		name: modelName,
		label: modelLabel,
		provider,
		type,
		modalities,
		context,
		cost,
		metadata,
	};
}

function writeToTsFile(models: ModelInfo[], outputPath: string): void {
	if (models.length === 0) {
		console.error("No models to write to file.");
		return;
	}

	const content = `// Auto-generated model configuration
// Generated on ${new Date().toISOString()}

import { ModelInfo } from '../../core/types';

const models: ModelInfo[] = ${JSON.stringify(models, null, 2)};

export default models;
`;

	fs.writeFileSync(outputPath, content);
	console.log(`Models written to: ${outputPath}`);
}

function getCacheFilename(url: string, name: string): string {
	const cacheDir = path.join("./", ".cache");

	// Create cache directory if it doesn't exist
	if (!fs.existsSync(cacheDir)) {
		fs.mkdirSync(cacheDir, { recursive: true });
	}

	return path.join(cacheDir, `${name}.json`);
}

function readFromCache(
	cacheFile: string,
	maxAgeMs: number = 24 * 60 * 60 * 1000,
): any | null {
	try {
		if (fs.existsSync(cacheFile)) {
			const stats = fs.statSync(cacheFile);
			const fileAge = Date.now() - stats.birthtimeMs;

			// Check if cache is still valid
			if (fileAge < maxAgeMs) {
				console.log(
					`Using cached data (${Math.round(fileAge / 60000)} minutes old)`,
				);
				const cacheData = fs.readFileSync(cacheFile, "utf8");
				return JSON.parse(cacheData);
			} else {
				console.log(
					`Cache expired (${Math.round(fileAge / 60000)} minutes old)`,
				);
			}
		}
	} catch (error) {
		console.warn("Error reading from cache:", error);
	}

	return null;
}

function writeToCache(cacheFile: string, data: any): void {
	try {
		fs.writeFileSync(cacheFile, JSON.stringify(data));
		console.log(`Cache updated: ${cacheFile}`);
	} catch (error) {
		console.warn("Error writing to cache:", error);
	}
}

async function downloadAndProcessModels(
	json: CloudConfig,
	cacheMaxAgeMs: number = 720 * 60 * 60 * 1000,
): Promise<void> {
	try {
		const cacheFile = getCacheFilename(json.url, json.cacheFile);
		let modelsData = readFromCache(cacheFile, cacheMaxAgeMs);

		if (!modelsData) {
			console.log("Cache miss. Downloading model configuration...");
			const response = await axios.get(json.url, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.TOGETHER_API_KEY}`,
				},
			});
			modelsData = response.data;

			// Update cache
			writeToCache(cacheFile, modelsData);
		}

		console.log("Processing models...");
		const allModels: Record<string, { models: ModelInfo[]; fileName: string }> =
			{
				AmazonBedrock: {
					fileName: "bedrock",
					models: [],
				},
				OpenAI: {
					fileName: "openai",
					models: [],
				},
				Anthropic: {
					fileName: "anthropic",
					models: [],
				},
				Google: {
					fileName: "google",
					models: [],
				},
				Mistral: {
					fileName: "mistral",
					models: [],
				},
				Cohere: {
					fileName: "cohere",
					models: [],
				},
				Deepseek: {
					fileName: "deepseek",
					models: [],
				},
				Groq: {
					fileName: "groq",
					models: [],
				},
				HuggingFace: {
					fileName: "huggingface",
					models: [],
				},
				XAI: {
					fileName: "xai",
					models: [],
				},
				AssemblyAI: {
					fileName: "assemblyai",
					models: [],
				},
				Perplexity: {
					fileName: "perplexity",
					models: [],
				},
				Github: {
					fileName: "github",
					models: [],
				},
				OpenRouter: {
					fileName: "openrouter",
					models: [],
				},
				Together: {
					fileName: "together",
					models: [],
				},
				Azure: {
					fileName: "azure",
					models: [],
				},
				Cerebras: {
					fileName: "cerebras",
					models: [],
				},
				Hyperbolic: {
					fileName: "hyperbolic",
					models: [],
				},
				Sambanova: {
					fileName: "sambanova",
					models: [],
				},
				FriendliAI: {
					fileName: "friendli",
					models: [],
				},
			};

		if (json.type === "litellm") {
			for (const [modelName, modelConfig] of Object.entries(modelsData)) {
				const modelInfo = mapLiteLLMConfig(modelName, modelConfig);
				if (modelInfo) {
					allModels[modelInfo.provider].models.push(modelInfo);
				}
			}
		}

		if (json.type === "together") {
			for (const [_, modelConfig] of Object.entries(modelsData)) {
				const modelInfo = mapTogetherLLMConfig(modelConfig);
				if (modelInfo) {
					allModels.Together.models.push(modelInfo);
				}
			}
		}

		for (const [_, modelConfig] of Object.entries(allModels)) {
			console.log(
				`Processed ${modelConfig.models.length} ${modelConfig.fileName} models`,
			);
			writeToTsFile(
				modelConfig.models,
				`./static/models/${modelConfig.fileName}.ts`,
			);
		}
	} catch (error) {
		if (error instanceof AxiosError && error.response?.status === 401) {
			console.error(`API Key : ${process.env.TOGETHER_API_KEY}`);
			console.error(
				"Unauthorized: Please check your TOGETHER_API_KEY in the environment variables.",
			);
			process.exit(1);
		}
		console.error("Error processing models:", error);
	}
}

const urls: CloudConfig[] = [
	// {
	//   url: "https://api.together.xyz/api/models2?&inf",
	//   cacheFile: 'together_models',
	//   type: 'together'
	// },
	{
		url: "https://raw.githubusercontent.com/BerriAI/litellm/refs/heads/main/model_prices_and_context_window.json",
		cacheFile: "litellm_models",
		type: "litellm",
	},
];

for (const url of urls) {
	downloadAndProcessModels(url)
		.then(() => console.log("Done!"))
		.catch((err) => console.error("Failed:", err));
}
