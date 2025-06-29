import { ModelInfo, ProviderInfo } from "../core";

import cohereModels from "./models/cohere"

export const staticProviders: (ProviderInfo & { models: ModelInfo[] })[] = [
  {
    name: "Ollama",
    label: "Ollama",
    type: "Ollama",
    models: [],
    keys: {
      baseUrlEnv: "OLLAMA_API_BASE_URL",
      healthLink: "$BASE_URL/api/tags",
      getModelsLink: "$BASE_URL/api/tags",
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
  // AmazonBedrock: {
  //   statusUrl: 'https://health.aws.amazon.com/health/status',
  //   apiUrl: 'https://bedrock.us-east-1.amazonaws.com/models',
  //   headers: {},
  //   testModel: 'anthropic.claude-3-sonnet-20240229-v1:0',
  // },
  // Cohere: {
  //   statusUrl: 'https://status.cohere.com/',
  //   apiUrl: 'https://api.cohere.ai/v1/models',
  //   headers: {},
  //   testModel: 'command',
  // },
  // Deepseek: {
  //   statusUrl: 'https://status.deepseek.com/',
  //   apiUrl: 'https://api.deepseek.com/v1/models',
  //   headers: {},
  //   testModel: 'deepseek-chat',
  // },
  // Google: {
  //   statusUrl: 'https://status.cloud.google.com/',
  //   apiUrl: 'https://generativelanguage.googleapis.com/v1/models',
  //   headers: {},
  //   testModel: 'gemini-pro',
  // },
  // Groq: {
  //   statusUrl: 'https://groqstatus.com/',
  //   apiUrl: 'https://api.groq.com/v1/models',
  //   headers: {},
  //   testModel: 'mixtral-8x7b-32768',
  // },
  // HuggingFace: {
  //   statusUrl: 'https://status.huggingface.co/',
  //   apiUrl: 'https://api-inference.huggingface.co/models',
  //   headers: {},
  //   testModel: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
  // },
  // Hyperbolic: {
  //   statusUrl: 'https://status.hyperbolic.ai/',
  //   apiUrl: 'https://api.hyperbolic.ai/v1/models',
  //   headers: {},
  //   testModel: 'hyperbolic-1',
  // },
  // Mistral: {
  //   statusUrl: 'https://status.mistral.ai/',
  //   apiUrl: 'https://api.mistral.ai/v1/models',
  //   headers: {},
  //   testModel: 'mistral-tiny',
  // },
  // OpenRouter: {
  //   statusUrl: 'https://status.openrouter.ai/',
  //   apiUrl: 'https://openrouter.ai/api/v1/models',
  //   headers: {},
  //   testModel: 'anthropic/claude-3-sonnet',
  // },
  // Perplexity: {
  //   statusUrl: 'https://status.perplexity.com/',
  //   apiUrl: 'https://api.perplexity.ai/v1/models',
  //   headers: {},
  //   testModel: 'pplx-7b-chat',
  // },
  // Together: {
  //   statusUrl: 'https://status.together.ai/',
  //   apiUrl: 'https://api.together.xyz/v1/models',
  //   headers: {},
  //   testModel: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
  // },
  // XAI: {
  //   statusUrl: 'https://status.x.ai/',
  //   apiUrl: 'https://api.x.ai/v1/models',
  //   headers: {},
  //   testModel: 'grok-1',
  // },
  // {
  //   name: 'OpenAI',
  //   label: 'OpenAI',
  //   type: 'OpenAI',
  //   keys: {
  //     apiKeyEnv: 'OPENAI_API_KEY',
  //     baseUrlEnv: 'OPENAI_BASE_URL',
  //     healthLink: 'https://openai.com/health',
  //   },
  // },
  // {
  //   name: 'AmazonBedrock',
  //   label: 'Amazon Bedrock',
  //   type: 'AmazonBedrock',
  //   keys: {
  //     apiKeyEnv: 'AWS_BEDROCK_CONFIG',
  //     baseUrlEnv: 'AWS_BEDROCK_BASE_URL',
  //     getApiKeyLink: 'https://console.aws.amazon.com/iam/home',
  //     healthLink: 'https://aws.amazon.com/bedrock/',
  //   },
  // },
  // {
  //   name: 'Anthropic',
  //   label: 'Anthropic Claude',
  //   type: 'Anthropic',
  //   keys: {
  //     apiKeyEnv: 'ANTHROPIC_API_KEY',
  //     baseUrlEnv: 'ANTHROPIC_BASE_URL',
  //     getApiKeyLink: 'https://console.anthropic.com/settings/keys',
  //     healthLink: 'https://console.anthropic.com/settings/keys',
  //   },
  // },
  // {
  //   name: 'Cohere',
  //   label: 'Cohere',
  //   type: 'Cohere',
  //   keys: {
  //     apiKeyEnv: 'COHERE_API_KEY',
  //     baseUrlEnv: 'COHERE_BASE_URL',
  //     getApiKeyLink: 'https://dashboard.cohere.com/api-keys',
  //   }
  // },
  // {
  //   name: "Deepseek",
  //   label: "Deepseek",
  //   type: "Deepseek",
  //   keys: {
  //     apiKeyEnv: "DEEPSEEK_API_KEY",
  //     baseUrlEnv: "DEEPSEEK_BASE_URL",
  //     getApiKeyLink: "https://platform.deepseek.com/apiKeys",
  //   }
  // },
];
