// Auto-generated model configuration
// Generated on 2025-04-05T18:33:11.228Z

import { ModelInfo } from '../../core/types';

const models: ModelInfo[] = [
  {
    "name": "deepseek-r1-distill-llama-70b",
    "label": "deepseek r1 distill llama 70b",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 131072,
      "maxInputTokens": 131072,
      "maxOutputTokens": 131072
    },
    "cost": {
      "inputCost": 0.75,
      "outputCost": 0.99
    },
    "metadata": {}
  },
  {
    "name": "llama-3.3-70b-versatile",
    "label": "llama 3.3 70b versatile",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 128000,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.59,
      "outputCost": 0.79
    },
    "metadata": {}
  },
  {
    "name": "llama-3.3-70b-specdec",
    "label": "llama 3.3 70b specdec",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.59,
      "outputCost": 0.99
    },
    "metadata": {}
  },
  {
    "name": "llama2-70b-4096",
    "label": "llama2 70b 4096",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 4096,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.7,
      "outputCost": 0.8
    },
    "metadata": {}
  },
  {
    "name": "llama3-8b-8192",
    "label": "llama3 8b 8192",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.05,
      "outputCost": 0.08
    },
    "metadata": {}
  },
  {
    "name": "llama-3.2-1b-preview",
    "label": "llama 3.2 1b preview",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.04,
      "outputCost": 0.04
    },
    "metadata": {}
  },
  {
    "name": "llama-3.2-3b-preview",
    "label": "llama 3.2 3b preview",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.06,
      "outputCost": 0.06
    },
    "metadata": {}
  },
  {
    "name": "llama-3.2-11b-text-preview",
    "label": "llama 3.2 11b text preview",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.18,
      "outputCost": 0.18
    },
    "metadata": {}
  },
  {
    "name": "llama-3.2-11b-vision-preview",
    "label": "llama 3.2 11b vision preview",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.18,
      "outputCost": 0.18
    },
    "metadata": {}
  },
  {
    "name": "llama-3.2-90b-text-preview",
    "label": "llama 3.2 90b text preview",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.9,
      "outputCost": 0.9
    },
    "metadata": {}
  },
  {
    "name": "llama-3.2-90b-vision-preview",
    "label": "llama 3.2 90b vision preview",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.9,
      "outputCost": 0.9
    },
    "metadata": {}
  },
  {
    "name": "llama3-70b-8192",
    "label": "llama3 70b 8192",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.59,
      "outputCost": 0.79
    },
    "metadata": {}
  },
  {
    "name": "llama-3.1-8b-instant",
    "label": "llama 3.1 8b instant",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.05,
      "outputCost": 0.08
    },
    "metadata": {}
  },
  {
    "name": "llama-3.1-70b-versatile",
    "label": "llama 3.1 70b versatile",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.59,
      "outputCost": 0.79
    },
    "metadata": {}
  },
  {
    "name": "llama-3.1-405b-reasoning",
    "label": "llama 3.1 405b reasoning",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.59,
      "outputCost": 0.79
    },
    "metadata": {}
  },
  {
    "name": "mixtral-8x7b-32768",
    "label": "mixtral 8x7b 32768",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 32768,
      "maxInputTokens": 32768,
      "maxOutputTokens": 32768
    },
    "cost": {
      "inputCost": 0.24,
      "outputCost": 0.24
    },
    "metadata": {}
  },
  {
    "name": "gemma-7b-it",
    "label": "gemma 7b it",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.07,
      "outputCost": 0.07
    },
    "metadata": {}
  },
  {
    "name": "gemma2-9b-it",
    "label": "gemma2 9b it",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.2,
      "outputCost": 0.2
    },
    "metadata": {}
  },
  {
    "name": "llama3-groq-70b-8192-tool-use-preview",
    "label": "llama3 groq 70b 8192 tool use preview",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.89,
      "outputCost": 0.89
    },
    "metadata": {}
  },
  {
    "name": "llama3-groq-8b-8192-tool-use-preview",
    "label": "llama3 groq 8b 8192 tool use preview",
    "provider": "Groq",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.19,
      "outputCost": 0.19
    },
    "metadata": {}
  }
];

export default models;
