import type { ModelInfo, ProviderInfo } from "../core";

import anthropicModels from "./models/anthropic";
import bedrockModels from "./models/bedrock";
import cohereModels from "./models/cohere";
import deepseekModels from "./models/deepseek";
import githubModels from "./models/github";
import googleModels from "./models/google";
import groqModels from "./models/groq";
import huggingfaceModels from "./models/huggingface";
import hyperbolicModels from "./models/hyperbolic";
import mistralModels from "./models/mistral";
import openaiModels from "./models/openai";
import openrouterModels from "./models/openrouter";
import perplexityModels from "./models/perplexity";
import togetherModels from "./models/together";
import xaiModels from "./models/xai";

export const staticProviders: (ProviderInfo & { models: ModelInfo[] })[] = [
	{
		name: "AmazonBedrock",
		label: "AmazonBedrock",
		type: "AmazonBedrock",
		models: bedrockModels,
		keys: {
			apiKeyEnv: "AWS_SESSION_TOKEN",
			healthLink: "https://health.aws.amazon.com/health/status",
			getModelsLink: "https://bedrock.us-east-1.amazonaws.com/models",
		},
	},
	{
		name: "Anthropic",
		label: "Anthropic Claude",
		type: "Anthropic",
		models: anthropicModels,
		keys: {
			apiKeyEnv: "ANTHROPIC_API_KEY",
			baseUrlEnv: "ANTHROPIC_BASE_URL",
			getApiKeyLink: "https://console.anthropic.com/settings/keys",
			healthLink: "https://console.anthropic.com/settings/keys",
		},
	},
	{
		name: "Cohere",
		label: "Cohere",
		type: "Cohere",
		models: cohereModels,
		keys: {
			apiKeyEnv: "COHERE_API_KEY",
			healthLink: "https://status.cohere.com/",
			getModelsLink: "https://api.cohere.ai/v1/models",
		},
	},
	{
		name: "Deepseek",
		label: "Deepseek",
		type: "Deepseek",
		models: deepseekModels,
		keys: {
			apiKeyEnv: "DEEPSEEK_API_KEY",
			baseUrlEnv: "DEEPSEEK_BASE_URL",
			getModelsLink: "https://platform.deepseek.com/apiKeys",
		},
	},
	{
		name: "Github",
		label: "Github",
		type: "Github",
		models: githubModels,
		keys: {
			apiKeyEnv: "GITHUB_API_KEY",
			baseUrlEnv: "GITHUB_BASE_URL",
			getModelsLink: "https://models.inference.ai.azure.com",
		},
	},
	{
		name: "Google",
		label: "Google",
		type: "Google",
		models: googleModels,
		keys: {
			apiKeyEnv: "GOOGLE_API_KEY",
			baseUrlEnv: "GOOGLE_BASE_URL",
			getModelsLink: "https://generativelanguage.googleapis.com/v1/models",
		},
	},
	{
		name: "Groq",
		label: "Groq",
		type: "Groq",
		models: groqModels,
		keys: {
			apiKeyEnv: "GROQ_API_KEY",
			baseUrlEnv: "GROQ_BASE_URL",
			getModelsLink: "https://api.groq.com/v1/models",
		},
	},
	{
		name: "HuggingFace",
		label: "HuggingFace",
		type: "HuggingFace",
		models: huggingfaceModels,
		keys: {
			apiKeyEnv: "HUGGINGFACE_API_KEY",
			baseUrlEnv: "HUGGINGFACE_BASE_URL",
			getModelsLink: "https://api.huggingface.com/v1/models",
		},
	},
	{
		name: "Hyperbolic",
		label: "Hyperbolic",
		type: "Hyperbolic",
		models: hyperbolicModels,
		keys: {
			apiKeyEnv: "HYPERBOLIC_API_KEY",
			baseUrlEnv: "HYPERBOLIC_BASE_URL",
			getModelsLink: "https://api.huggingface.com/v1/models",
		},
	},
	{
		name: "LMStudio",
		label: "LMStudio",
		type: "LMStudio",
		models: [],
		keys: {
			apiKeyEnv: "LMSTUDIO_API_KEY",
			baseUrlEnv: "LMSTUDIO_BASE_URL",
			getModelsLink: "$BASE_URL/v1/models",
		},
	},
	{
		name: "Mistral",
		label: "Mistral",
		type: "Mistral",
		models: mistralModels,
		keys: {
			apiKeyEnv: "MISTRAL_API_KEY",
			baseUrlEnv: "MISTRAL_BASE_URL",
			getModelsLink: "https://api.mistral.ai/v1/models",
		},
	},
	{
		name: "Ollama",
		label: "Ollama",
		type: "Ollama",
		models: [],
		keys: {
			baseUrlEnv: "OLLAMA_BASE_URL",
			healthLink: "$BASE_URL/api/tags",
			getModelsLink: "$BASE_URL/api/tags",
		},
	},
	{
		name: "OpenRouter",
		label: "OpenRouter",
		type: "OpenRouter",
		models: openrouterModels,
		keys: {
			apiKeyEnv: "OPENROUTER_API_KEY",
			baseUrlEnv: "OPENROUTER_BASE_URL",
			healthLink: "https://status.openrouter.ai",
			getModelsLink: "https://openrouter.ai/api/v1/models",
		},
	},
	{
		name: "OpenAI",
		label: "OpenAI",
		type: "OpenAI",
		models: openaiModels,
		keys: {
			apiKeyEnv: "OPENAI_API_KEY",
			baseUrlEnv: "OPENAI_BASE_URL",
			healthLink: "https://openai.com/health",
		},
	},
	{
		name: "Perplexity",
		label: "Perplexity",
		type: "Perplexity",
		models: perplexityModels,
		keys: {
			apiKeyEnv: "PERPLEXITY_API_KEY",
			baseUrlEnv: "PERPLEXITY_BASE_URL",
			healthLink: "https://status.perplexity.com/",
			getModelsLink: "https://api.perplexity.ai/v1/models",
		},
	},
	{
		name: "Together",
		label: "Together",
		type: "Together",
		models: togetherModels,
		keys: {
			apiKeyEnv: "TOGETHER_API_KEY",
			baseUrlEnv: "TOGETHER_BASE_URL",
			healthLink: "https://status.together.ai/",
			getModelsLink: "https://api.together.xyz/v1/models",
		},
	},
	{
		name: "XAI",
		label: "XAI",
		type: "XAI",
		models: xaiModels,
		keys: {
			apiKeyEnv: "XAI_API_KEY",
			baseUrlEnv: "XAI_BASE_URL",
			healthLink: "https://status.x.ai/",
			getModelsLink: "https://api.x.ai/v1/models",
		},
	},
];
