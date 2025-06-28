// Auto-generated model configuration
// Generated on 2025-04-05T18:33:11.242Z

import { ModelInfo } from '../../core/types';

const models: ModelInfo[] = [
  {
    "name": "llama3.1-8b",
    "label": "llama3.1 8b",
    "provider": "Cerebras",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 128000,
      "maxInputTokens": 128000,
      "maxOutputTokens": 128000
    },
    "cost": {
      "inputCost": 0.1,
      "outputCost": 0.1
    },
    "metadata": {}
  },
  {
    "name": "llama3.1-70b",
    "label": "llama3.1 70b",
    "provider": "Cerebras",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 128000,
      "maxInputTokens": 128000,
      "maxOutputTokens": 128000
    },
    "cost": {
      "inputCost": 0.6,
      "outputCost": 0.6
    },
    "metadata": {}
  },
  {
    "name": "llama3.3-70b",
    "label": "llama3.3 70b",
    "provider": "Cerebras",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 128000,
      "maxInputTokens": 128000,
      "maxOutputTokens": 128000
    },
    "cost": {
      "inputCost": 0.85,
      "outputCost": 1.2
    },
    "metadata": {}
  }
];

export default models;
