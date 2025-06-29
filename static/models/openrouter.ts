// Auto-generated model configuration
// Generated on 2025-06-28T19:02:34.501Z

import { ModelInfo } from '../../core/types';

const models: ModelInfo[] = [
  {
    "name": "deepseek/deepseek-r1",
    "label": "deepseek r1",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 65336,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.55,
      "outputCost": 2.19
    },
    "metadata": {}
  },
  {
    "name": "deepseek/deepseek-chat",
    "label": "deepseek chat",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 65536,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.14,
      "outputCost": 0.28
    },
    "metadata": {}
  },
  {
    "name": "deepseek/deepseek-coder",
    "label": "deepseek coder",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 66000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.14,
      "outputCost": 0.28
    },
    "metadata": {}
  },
  {
    "name": "microsoft/wizardlm-2-8x22b:nitro",
    "label": "wizardlm 2 8x22b:nitro",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 65536
    },
    "cost": {
      "inputCost": 1,
      "outputCost": 1
    },
    "metadata": {}
  },
  {
    "name": "google/gemini-pro-1.5",
    "label": "gemini pro 1.5",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "vision"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 1000000,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 2.5,
      "outputCost": 7.5
    },
    "metadata": {}
  },
  {
    "name": "google/gemini-2.0-flash-001",
    "label": "gemini 2.0 flash 001",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "audio-output"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 1048576,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.1,
      "outputCost": 0.4
    },
    "metadata": {}
  },
  {
    "name": "mistralai/mixtral-8x22b-instruct",
    "label": "mixtral 8x22b instruct",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 65536
    },
    "cost": {
      "inputCost": 0.65,
      "outputCost": 0.65
    },
    "metadata": {}
  },
  {
    "name": "cohere/command-r-plus",
    "label": "command r plus",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 128000
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 15
    },
    "metadata": {}
  },
  {
    "name": "databricks/dbrx-instruct",
    "label": "dbrx instruct",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 32768
    },
    "cost": {
      "inputCost": 0.6,
      "outputCost": 0.6
    },
    "metadata": {}
  },
  {
    "name": "anthropic/claude-3-haiku",
    "label": "claude 3 haiku",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "vision"
    ],
    "context": {
      "maxTokens": 200000
    },
    "cost": {
      "inputCost": 0.25,
      "outputCost": 1.25
    },
    "metadata": {}
  },
  {
    "name": "anthropic/claude-3-5-haiku",
    "label": "claude 3 5 haiku",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 200000
    },
    "cost": {
      "inputCost": 1,
      "outputCost": 5
    },
    "metadata": {}
  },
  {
    "name": "anthropic/claude-3-haiku-20240307",
    "label": "claude 3 haiku 20240307",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "vision"
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
    "name": "anthropic/claude-3-5-haiku-20241022",
    "label": "claude 3 5 haiku 20241022",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 200000,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 1,
      "outputCost": 5
    },
    "metadata": {}
  },
  {
    "name": "anthropic/claude-3.5-sonnet",
    "label": "claude 3.5 sonnet",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "vision"
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
    "name": "anthropic/claude-3.5-sonnet:beta",
    "label": "claude 3.5 sonnet:beta",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "vision"
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
    "name": "anthropic/claude-3.7-sonnet",
    "label": "claude 3.7 sonnet",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "vision"
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
    "name": "anthropic/claude-3.7-sonnet:beta",
    "label": "claude 3.7 sonnet:beta",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "vision"
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
    "name": "anthropic/claude-3-sonnet",
    "label": "claude 3 sonnet",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "vision"
    ],
    "context": {
      "maxTokens": 200000
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 15
    },
    "metadata": {}
  },
  {
    "name": "mistralai/mistral-large",
    "label": "mistral large",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 32000
    },
    "cost": {
      "inputCost": 8,
      "outputCost": 24
    },
    "metadata": {}
  },
  {
    "name": "cognitivecomputations/dolphin-mixtral-8x7b",
    "label": "dolphin mixtral 8x7b",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 32769
    },
    "cost": {
      "inputCost": 0.5,
      "outputCost": 0.5
    },
    "metadata": {}
  },
  {
    "name": "google/gemini-pro-vision",
    "label": "gemini pro vision",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "vision"
    ],
    "context": {
      "maxTokens": 45875
    },
    "cost": {
      "inputCost": 0.125,
      "outputCost": 0.375
    },
    "metadata": {}
  },
  {
    "name": "fireworks/firellava-13b",
    "label": "firellava 13b",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096
    },
    "cost": {
      "inputCost": 0.2,
      "outputCost": 0.2
    },
    "metadata": {}
  },
  {
    "name": "meta-llama/llama-3-8b-instruct:free",
    "label": "llama 3 8b instruct:free",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8192
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "meta-llama/llama-3-8b-instruct:extended",
    "label": "llama 3 8b instruct:extended",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 16384
    },
    "cost": {
      "inputCost": 0.225,
      "outputCost": 2.25
    },
    "metadata": {}
  },
  {
    "name": "meta-llama/llama-3-70b-instruct:nitro",
    "label": "llama 3 70b instruct:nitro",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8192
    },
    "cost": {
      "inputCost": 0.9,
      "outputCost": 0.9
    },
    "metadata": {}
  },
  {
    "name": "meta-llama/llama-3-70b-instruct",
    "label": "llama 3 70b instruct",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8192
    },
    "cost": {
      "inputCost": 0.59,
      "outputCost": 0.79
    },
    "metadata": {}
  },
  {
    "name": "openai/o1",
    "label": "o1",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 100000,
      "maxInputTokens": 200000,
      "maxOutputTokens": 100000
    },
    "cost": {
      "inputCost": 15,
      "outputCost": 60
    },
    "metadata": {}
  },
  {
    "name": "openai/o1-mini",
    "label": "o1 mini",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 65536,
      "maxInputTokens": 128000,
      "maxOutputTokens": 65536
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 12
    },
    "metadata": {}
  },
  {
    "name": "openai/o1-mini-2024-09-12",
    "label": "o1 mini 2024 09 12",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 65536,
      "maxInputTokens": 128000,
      "maxOutputTokens": 65536
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 12
    },
    "metadata": {}
  },
  {
    "name": "openai/o1-preview",
    "label": "o1 preview",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 32768,
      "maxInputTokens": 128000,
      "maxOutputTokens": 32768
    },
    "cost": {
      "inputCost": 15,
      "outputCost": 60
    },
    "metadata": {}
  },
  {
    "name": "openai/o1-preview-2024-09-12",
    "label": "o1 preview 2024 09 12",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 32768,
      "maxInputTokens": 128000,
      "maxOutputTokens": 32768
    },
    "cost": {
      "inputCost": 15,
      "outputCost": 60
    },
    "metadata": {}
  },
  {
    "name": "openai/gpt-4o",
    "label": "gpt 4o",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "vision",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 5,
      "outputCost": 15
    },
    "metadata": {}
  },
  {
    "name": "openai/gpt-4o-2024-05-13",
    "label": "gpt 4o 2024 05 13",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "vision",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 5,
      "outputCost": 15
    },
    "metadata": {}
  },
  {
    "name": "openai/gpt-4-vision-preview",
    "label": "gpt 4 vision preview",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "vision"
    ],
    "context": {
      "maxTokens": 130000
    },
    "cost": {
      "inputCost": 10,
      "outputCost": 30
    },
    "metadata": {}
  },
  {
    "name": "openai/gpt-3.5-turbo",
    "label": "gpt 3.5 turbo",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4095
    },
    "cost": {
      "inputCost": 1.5,
      "outputCost": 2
    },
    "metadata": {}
  },
  {
    "name": "openai/gpt-3.5-turbo-16k",
    "label": "gpt 3.5 turbo 16k",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 16383
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 4
    },
    "metadata": {}
  },
  {
    "name": "openai/gpt-4",
    "label": "gpt 4",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8192
    },
    "cost": {
      "inputCost": 30,
      "outputCost": 60
    },
    "metadata": {}
  },
  {
    "name": "anthropic/claude-instant-v1",
    "label": "claude instant v1",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 100000,
      "maxOutputTokens": 8191
    },
    "cost": {
      "inputCost": 1.63,
      "outputCost": 5.51
    },
    "metadata": {}
  },
  {
    "name": "anthropic/claude-2",
    "label": "claude 2",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 100000,
      "maxOutputTokens": 8191
    },
    "cost": {
      "inputCost": 11.02,
      "outputCost": 32.68
    },
    "metadata": {}
  },
  {
    "name": "anthropic/claude-3-opus",
    "label": "claude 3 opus",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
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
    "name": "google/palm-2-chat-bison",
    "label": "palm 2 chat bison",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 25804
    },
    "cost": {
      "inputCost": 0.5,
      "outputCost": 0.5
    },
    "metadata": {}
  },
  {
    "name": "google/palm-2-codechat-bison",
    "label": "palm 2 codechat bison",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 20070
    },
    "cost": {
      "inputCost": 0.5,
      "outputCost": 0.5
    },
    "metadata": {}
  },
  {
    "name": "meta-llama/llama-2-13b-chat",
    "label": "llama 2 13b chat",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096
    },
    "cost": {
      "inputCost": 0.2,
      "outputCost": 0.2
    },
    "metadata": {}
  },
  {
    "name": "meta-llama/llama-2-70b-chat",
    "label": "llama 2 70b chat",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096
    },
    "cost": {
      "inputCost": 1.5,
      "outputCost": 1.5
    },
    "metadata": {}
  },
  {
    "name": "meta-llama/codellama-34b-instruct",
    "label": "codellama 34b instruct",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8192
    },
    "cost": {
      "inputCost": 0.5,
      "outputCost": 0.5
    },
    "metadata": {}
  },
  {
    "name": "nousresearch/nous-hermes-llama2-13b",
    "label": "nous hermes llama2 13b",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096
    },
    "cost": {
      "inputCost": 0.2,
      "outputCost": 0.2
    },
    "metadata": {}
  },
  {
    "name": "mancer/weaver",
    "label": "weaver",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8000
    },
    "cost": {
      "inputCost": 5.625,
      "outputCost": 5.625
    },
    "metadata": {}
  },
  {
    "name": "gryphe/mythomax-l2-13b",
    "label": "mythomax l2 13b",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8192
    },
    "cost": {
      "inputCost": 1.875,
      "outputCost": 1.875
    },
    "metadata": {}
  },
  {
    "name": "jondurbin/airoboros-l2-70b-2.1",
    "label": "airoboros l2 70b 2.1",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096
    },
    "cost": {
      "inputCost": 13.875,
      "outputCost": 13.875
    },
    "metadata": {}
  },
  {
    "name": "undi95/remm-slerp-l2-13b",
    "label": "remm slerp l2 13b",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 6144
    },
    "cost": {
      "inputCost": 1.875,
      "outputCost": 1.875
    },
    "metadata": {}
  },
  {
    "name": "pygmalionai/mythalion-13b",
    "label": "mythalion 13b",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096
    },
    "cost": {
      "inputCost": 1.875,
      "outputCost": 1.875
    },
    "metadata": {}
  },
  {
    "name": "mistralai/mistral-7b-instruct",
    "label": "mistral 7b instruct",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8192
    },
    "cost": {
      "inputCost": 0.13,
      "outputCost": 0.13
    },
    "metadata": {}
  },
  {
    "name": "mistralai/mistral-7b-instruct:free",
    "label": "mistral 7b instruct:free",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8192
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "qwen/qwen-2.5-coder-32b-instruct",
    "label": "qwen 2.5 coder 32b instruct",
    "provider": "OpenRouter",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 33792,
      "maxInputTokens": 33792,
      "maxOutputTokens": 33792
    },
    "cost": {
      "inputCost": 0.18,
      "outputCost": 0.18
    },
    "metadata": {}
  }
];

export default models;
