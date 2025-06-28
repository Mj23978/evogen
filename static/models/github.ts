import { ModelInfo } from "../../core/types";

export const GithubModels: ModelInfo[] = [
  {
    "name": "gpt-4o",
    "label": "gpt 4o",
    "provider": "Github",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
    ],
    "context": {
      "maxTokens": 16384,
      "maxInputTokens": 128000,
      "maxOutputTokens": 16384
    },
    "cost": {
      "inputCost": 2.5,
      "outputCost": 10
    },
  },
  {
    "name": "o1",
    "label": "o1",
    "provider": "Github",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
    ],
    "context": {
      "maxTokens": 16384,
      "maxInputTokens": 128000,
      "maxOutputTokens": 16384
    },
    "cost": {
      "inputCost": 15,
      "outputCost": 60
    },
  },
  {
    "name": "o1-mini",
    "label": "o1 mini",
    "provider": "Github",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
    ],
    "context": {
      "maxTokens": 16384,
      "maxInputTokens": 128000,
      "maxOutputTokens": 16384
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 12
    },
  },
  {
    "name": "gpt-4o-mini",
    "label": "gpt 4o mini",
    "provider": "Github",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
    ],
    "context": {
      "maxTokens": 8196,
      "maxInputTokens": 128000,
      "maxOutputTokens": 8196
    },
    "cost": {
      "inputCost": 0.6,
      "outputCost": 2.4
    },
  },
  {
    "name": "gpt-4-turbo",
    "label": "gpt 4 turbo",
    "provider": "Github",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "parallel-function-calling",
      "web-search"
    ],
    "context": {
      "maxTokens": 4196,
      "maxInputTokens": 32000,
      "maxOutputTokens": 4196
    },
    "cost": {
      "inputCost": 10,
      "outputCost": 30
    },
  },
  {
    "name": "gpt-4",
    "label": "gpt 4",
    "provider": "Github",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
    ],
    "context": {
      "maxTokens": 8000,
      "maxInputTokens": 32000,
      "maxOutputTokens": 8000
    },
    "cost": {
      "inputCost": 30,
      "outputCost": 60
    },
  },
  {
    "name": "gpt-3.5-turbo",
    "label": "gpt-3.5-turbo",
    "provider": "Github",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
    ],
    "context": {
      "maxTokens": 8196,
      "maxInputTokens": 16000,
      "maxOutputTokens": 8196
    },
    "cost": {
      "inputCost": 0.5,
      "outputCost": 1.5
    }
  },  
];