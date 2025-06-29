// Auto-generated model configuration
// Generated on 2025-06-28T19:02:34.493Z

import { ModelInfo } from '../../core/types';

const models: ModelInfo[] = [
  {
    "name": "deepseek-reasoner",
    "label": "deepseek reasoner",
    "provider": "Deepseek",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 65536,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.55,
      "outputCost": 2.19
    },
    "metadata": {}
  },
  {
    "name": "deepseek-chat",
    "label": "deepseek chat",
    "provider": "Deepseek",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 65536,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.27,
      "outputCost": 1.1
    },
    "metadata": {}
  },
  {
    "name": "deepseek-coder",
    "label": "deepseek coder",
    "provider": "Deepseek",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.14,
      "outputCost": 0.28
    },
    "metadata": {}
  }
];

export default models;
