// Auto-generated model configuration
// Generated on 2025-06-28T19:02:34.486Z

import { ModelInfo } from '../../core/types';

const models: ModelInfo[] = [
  {
    "name": "ai21.j2-mid-v1",
    "label": "ai21.j2 mid v1",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 8191,
      "maxOutputTokens": 8191
    },
    "cost": {
      "inputCost": 12.5,
      "outputCost": 12.5
    },
    "metadata": {}
  },
  {
    "name": "ai21.j2-ultra-v1",
    "label": "ai21.j2 ultra v1",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 8191,
      "maxOutputTokens": 8191
    },
    "cost": {
      "inputCost": 18.8,
      "outputCost": 18.8
    },
    "metadata": {}
  },
  {
    "name": "ai21.jamba-instruct-v1:0",
    "label": "ai21.jamba instruct v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 70000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.5,
      "outputCost": 0.7
    },
    "metadata": {}
  },
  {
    "name": "ai21.jamba-1-5-large-v1:0",
    "label": "ai21.jamba 1 5 large v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 256000,
      "maxInputTokens": 256000,
      "maxOutputTokens": 256000
    },
    "cost": {
      "inputCost": 2,
      "outputCost": 8
    },
    "metadata": {}
  },
  {
    "name": "ai21.jamba-1-5-mini-v1:0",
    "label": "ai21.jamba 1 5 mini v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 256000,
      "maxInputTokens": 256000,
      "maxOutputTokens": 256000
    },
    "cost": {
      "inputCost": 0.2,
      "outputCost": 0.4
    },
    "metadata": {}
  },
  {
    "name": "amazon.rerank-v1:0",
    "label": "amazon.rerank v1:0",
    "provider": "AmazonBedrock",
    "type": "rerank",
    "modalities": [],
    "context": {
      "maxTokens": 32000,
      "maxInputTokens": 32000,
      "maxOutputTokens": 32000
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "amazon.titan-text-lite-v1",
    "label": "amazon.titan text lite v1",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 4000,
      "maxInputTokens": 42000,
      "maxOutputTokens": 4000
    },
    "cost": {
      "inputCost": 0.3,
      "outputCost": 0.4
    },
    "metadata": {}
  },
  {
    "name": "amazon.titan-text-express-v1",
    "label": "amazon.titan text express v1",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 8000,
      "maxInputTokens": 42000,
      "maxOutputTokens": 8000
    },
    "cost": {
      "inputCost": 1.3,
      "outputCost": 1.7
    },
    "metadata": {}
  },
  {
    "name": "amazon.titan-text-premier-v1:0",
    "label": "amazon.titan text premier v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 32000,
      "maxInputTokens": 42000,
      "maxOutputTokens": 32000
    },
    "cost": {
      "inputCost": 0.5,
      "outputCost": 1.5
    },
    "metadata": {}
  },
  {
    "name": "amazon.titan-embed-text-v1",
    "label": "amazon.titan embed text v1",
    "provider": "AmazonBedrock",
    "type": "embedding",
    "modalities": [],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192
    },
    "cost": {
      "inputCost": 0.1
    },
    "metadata": {}
  },
  {
    "name": "amazon.titan-embed-text-v2:0",
    "label": "amazon.titan embed text v2:0",
    "provider": "AmazonBedrock",
    "type": "embedding",
    "modalities": [],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192
    },
    "cost": {
      "inputCost": 0.2
    },
    "metadata": {}
  },
  {
    "name": "amazon.titan-embed-image-v1",
    "label": "amazon.titan embed image v1",
    "provider": "AmazonBedrock",
    "type": "embedding",
    "modalities": [],
    "context": {
      "maxTokens": 128,
      "maxInputTokens": 128
    },
    "cost": {
      "inputCost": 0.8
    },
    "metadata": {}
  },
  {
    "name": "mistral.mistral-7b-instruct-v0:2",
    "label": "mistral.mistral 7b instruct v0:2",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 32000,
      "maxOutputTokens": 8191
    },
    "cost": {
      "inputCost": 0.15,
      "outputCost": 0.2
    },
    "metadata": {}
  },
  {
    "name": "mistral.mixtral-8x7b-instruct-v0:1",
    "label": "mistral.mixtral 8x7b instruct v0:1",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 32000,
      "maxOutputTokens": 8191
    },
    "cost": {
      "inputCost": 0.45,
      "outputCost": 0.7
    },
    "metadata": {}
  },
  {
    "name": "mistral.mistral-large-2402-v1:0",
    "label": "mistral.mistral large 2402 v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 32000,
      "maxOutputTokens": 8191
    },
    "cost": {
      "inputCost": 8,
      "outputCost": 24
    },
    "metadata": {}
  },
  {
    "name": "mistral.mistral-large-2407-v1:0",
    "label": "mistral.mistral large 2407 v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 128000,
      "maxOutputTokens": 8191
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 9
    },
    "metadata": {}
  },
  {
    "name": "mistral.mistral-small-2402-v1:0",
    "label": "mistral.mistral small 2402 v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 32000,
      "maxOutputTokens": 8191
    },
    "cost": {
      "inputCost": 1,
      "outputCost": 3
    },
    "metadata": {}
  },
  {
    "name": "1024-x-1024/50-steps/amazon.nova-canvas-v1:0",
    "label": "amazon.nova canvas v1:0",
    "provider": "AmazonBedrock",
    "type": "image-generation",
    "modalities": [],
    "context": {
      "maxTokens": 2600,
      "maxInputTokens": 2600
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "anthropic.claude-3-sonnet-20240229-v1:0",
    "label": "anthropic.claude 3 sonnet 20240229 v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "pdf-input"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 200000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 15
    },
    "metadata": {}
  },
  {
    "name": "invoke/anthropic.claude-3-5-sonnet-20240620-v1:0",
    "label": "anthropic.claude 3 5 sonnet 20240620 v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 200000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 15
    },
    "metadata": {}
  },
  {
    "name": "anthropic.claude-3-5-sonnet-20240620-v1:0",
    "label": "anthropic.claude 3 5 sonnet 20240620 v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "pdf-input"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 200000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 15
    },
    "metadata": {}
  },
  {
    "name": "anthropic.claude-3-5-sonnet-20241022-v2:0",
    "label": "anthropic.claude 3 5 sonnet 20241022 v2:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "pdf-input"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 200000,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 15
    },
    "metadata": {}
  },
  {
    "name": "anthropic.claude-3-haiku-20240307-v1:0",
    "label": "anthropic.claude 3 haiku 20240307 v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "pdf-input"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 200000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.25,
      "outputCost": 1.25
    },
    "metadata": {}
  },
  {
    "name": "anthropic.claude-3-5-haiku-20241022-v1:0",
    "label": "anthropic.claude 3 5 haiku 20241022 v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "pdf-input"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 200000,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.8,
      "outputCost": 4
    },
    "metadata": {}
  },
  {
    "name": "anthropic.claude-3-opus-20240229-v1:0",
    "label": "anthropic.claude 3 opus 20240229 v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 200000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 15,
      "outputCost": 75
    },
    "metadata": {}
  },
  {
    "name": "anthropic.claude-v1",
    "label": "anthropic.claude v1",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 100000,
      "maxOutputTokens": 8191
    },
    "cost": {
      "inputCost": 8,
      "outputCost": 24
    },
    "metadata": {}
  },
  {
    "name": "anthropic.claude-v2",
    "label": "anthropic.claude v2",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 100000,
      "maxOutputTokens": 8191
    },
    "cost": {
      "inputCost": 8,
      "outputCost": 24
    },
    "metadata": {}
  },
  {
    "name": "anthropic.claude-v2:1",
    "label": "anthropic.claude v2:1",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 100000,
      "maxOutputTokens": 8191
    },
    "cost": {
      "inputCost": 8,
      "outputCost": 24
    },
    "metadata": {}
  },
  {
    "name": "anthropic.claude-instant-v1",
    "label": "anthropic.claude instant v1",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 100000,
      "maxOutputTokens": 8191
    },
    "cost": {
      "inputCost": 0.8,
      "outputCost": 2.4
    },
    "metadata": {}
  },
  {
    "name": "cohere.rerank-v3-5:0",
    "label": "cohere.rerank v3 5:0",
    "provider": "AmazonBedrock",
    "type": "rerank",
    "modalities": [],
    "context": {
      "maxTokens": 32000,
      "maxInputTokens": 32000,
      "maxOutputTokens": 32000
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "cohere.command-text-v14",
    "label": "cohere.command text v14",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 4096,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 1.5,
      "outputCost": 2
    },
    "metadata": {}
  },
  {
    "name": "cohere.command-light-text-v14",
    "label": "cohere.command light text v14",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 4096,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.3,
      "outputCost": 0.6
    },
    "metadata": {}
  },
  {
    "name": "cohere.command-r-plus-v1:0",
    "label": "cohere.command r plus v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 15
    },
    "metadata": {}
  },
  {
    "name": "cohere.command-r-v1:0",
    "label": "cohere.command r v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.5,
      "outputCost": 1.5
    },
    "metadata": {}
  },
  {
    "name": "cohere.embed-english-v3",
    "label": "cohere.embed english v3",
    "provider": "AmazonBedrock",
    "type": "embedding",
    "modalities": [],
    "context": {
      "maxTokens": 512,
      "maxInputTokens": 512
    },
    "cost": {
      "inputCost": 0.1
    },
    "metadata": {}
  },
  {
    "name": "cohere.embed-multilingual-v3",
    "label": "cohere.embed multilingual v3",
    "provider": "AmazonBedrock",
    "type": "embedding",
    "modalities": [],
    "context": {
      "maxTokens": 512,
      "maxInputTokens": 512
    },
    "cost": {
      "inputCost": 0.1
    },
    "metadata": {}
  },
  {
    "name": "meta.llama2-13b-chat-v1",
    "label": "meta.llama2 13b chat v1",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 4096,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.75,
      "outputCost": 1
    },
    "metadata": {}
  },
  {
    "name": "meta.llama2-70b-chat-v1",
    "label": "meta.llama2 70b chat v1",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 4096,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 1.95,
      "outputCost": 2.56
    },
    "metadata": {}
  },
  {
    "name": "meta.llama3-8b-instruct-v1:0",
    "label": "meta.llama3 8b instruct v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.3,
      "outputCost": 0.6
    },
    "metadata": {}
  },
  {
    "name": "ap-south-1/meta.llama3-8b-instruct-v1:0",
    "label": "meta.llama3 8b instruct v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.36,
      "outputCost": 0.72
    },
    "metadata": {}
  },
  {
    "name": "meta.llama3-70b-instruct-v1:0",
    "label": "meta.llama3 70b instruct v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 2.65,
      "outputCost": 3.5
    },
    "metadata": {}
  },
  {
    "name": "ap-south-1/meta.llama3-70b-instruct-v1:0",
    "label": "meta.llama3 70b instruct v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 3.18,
      "outputCost": 4.2
    },
    "metadata": {}
  },
  {
    "name": "meta.llama3-1-8b-instruct-v1:0",
    "label": "meta.llama3 1 8b instruct v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call"
    ],
    "context": {
      "maxTokens": 128000,
      "maxInputTokens": 128000,
      "maxOutputTokens": 2048
    },
    "cost": {
      "inputCost": 0.22,
      "outputCost": 0.22
    },
    "metadata": {}
  },
  {
    "name": "meta.llama3-1-70b-instruct-v1:0",
    "label": "meta.llama3 1 70b instruct v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call"
    ],
    "context": {
      "maxTokens": 128000,
      "maxInputTokens": 128000,
      "maxOutputTokens": 2048
    },
    "cost": {
      "inputCost": 0.99,
      "outputCost": 0.99
    },
    "metadata": {}
  },
  {
    "name": "meta.llama3-1-405b-instruct-v1:0",
    "label": "meta.llama3 1 405b instruct v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call"
    ],
    "context": {
      "maxTokens": 128000,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 5.32,
      "outputCost": 16
    },
    "metadata": {}
  },
  {
    "name": "meta.llama3-2-1b-instruct-v1:0",
    "label": "meta.llama3 2 1b instruct v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call"
    ],
    "context": {
      "maxTokens": 128000,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.1,
      "outputCost": 0.1
    },
    "metadata": {}
  },
  {
    "name": "meta.llama3-2-3b-instruct-v1:0",
    "label": "meta.llama3 2 3b instruct v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call"
    ],
    "context": {
      "maxTokens": 128000,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.15,
      "outputCost": 0.15
    },
    "metadata": {}
  },
  {
    "name": "meta.llama3-2-11b-instruct-v1:0",
    "label": "meta.llama3 2 11b instruct v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call",
      "vision"
    ],
    "context": {
      "maxTokens": 128000,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.35,
      "outputCost": 0.35
    },
    "metadata": {}
  },
  {
    "name": "meta.llama3-2-90b-instruct-v1:0",
    "label": "meta.llama3 2 90b instruct v1:0",
    "provider": "AmazonBedrock",
    "type": "chat",
    "modalities": [
      "function-call",
      "vision"
    ],
    "context": {
      "maxTokens": 128000,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 2,
      "outputCost": 2
    },
    "metadata": {}
  },
  {
    "name": "512-x-512/50-steps/stability.stable-diffusion-xl-v0",
    "label": "stability.stable diffusion xl v0",
    "provider": "AmazonBedrock",
    "type": "image-generation",
    "modalities": [],
    "context": {
      "maxTokens": 77,
      "maxInputTokens": 77
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "512-x-512/max-steps/stability.stable-diffusion-xl-v0",
    "label": "stability.stable diffusion xl v0",
    "provider": "AmazonBedrock",
    "type": "image-generation",
    "modalities": [],
    "context": {
      "maxTokens": 77,
      "maxInputTokens": 77
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "max-x-max/50-steps/stability.stable-diffusion-xl-v0",
    "label": "stability.stable diffusion xl v0",
    "provider": "AmazonBedrock",
    "type": "image-generation",
    "modalities": [],
    "context": {
      "maxTokens": 77,
      "maxInputTokens": 77
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "max-x-max/max-steps/stability.stable-diffusion-xl-v0",
    "label": "stability.stable diffusion xl v0",
    "provider": "AmazonBedrock",
    "type": "image-generation",
    "modalities": [],
    "context": {
      "maxTokens": 77,
      "maxInputTokens": 77
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "1024-x-1024/50-steps/stability.stable-diffusion-xl-v1",
    "label": "stability.stable diffusion xl v1",
    "provider": "AmazonBedrock",
    "type": "image-generation",
    "modalities": [],
    "context": {
      "maxTokens": 77,
      "maxInputTokens": 77
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "1024-x-1024/max-steps/stability.stable-diffusion-xl-v1",
    "label": "stability.stable diffusion xl v1",
    "provider": "AmazonBedrock",
    "type": "image-generation",
    "modalities": [],
    "context": {
      "maxTokens": 77,
      "maxInputTokens": 77
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "stability.sd3-large-v1:0",
    "label": "stability.sd3 large v1:0",
    "provider": "AmazonBedrock",
    "type": "image-generation",
    "modalities": [],
    "context": {
      "maxTokens": 77,
      "maxInputTokens": 77
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "stability.sd3-5-large-v1:0",
    "label": "stability.sd3 5 large v1:0",
    "provider": "AmazonBedrock",
    "type": "image-generation",
    "modalities": [],
    "context": {
      "maxTokens": 77,
      "maxInputTokens": 77
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "stability.stable-image-core-v1:0",
    "label": "stability.stable image core v1:0",
    "provider": "AmazonBedrock",
    "type": "image-generation",
    "modalities": [],
    "context": {
      "maxTokens": 77,
      "maxInputTokens": 77
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "stability.stable-image-core-v1:1",
    "label": "stability.stable image core v1:1",
    "provider": "AmazonBedrock",
    "type": "image-generation",
    "modalities": [],
    "context": {
      "maxTokens": 77,
      "maxInputTokens": 77
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "stability.stable-image-ultra-v1:0",
    "label": "stability.stable image ultra v1:0",
    "provider": "AmazonBedrock",
    "type": "image-generation",
    "modalities": [],
    "context": {
      "maxTokens": 77,
      "maxInputTokens": 77
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "stability.stable-image-ultra-v1:1",
    "label": "stability.stable image ultra v1:1",
    "provider": "AmazonBedrock",
    "type": "image-generation",
    "modalities": [],
    "context": {
      "maxTokens": 77,
      "maxInputTokens": 77
    },
    "cost": {},
    "metadata": {}
  }
];

export default models;
