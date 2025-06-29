// Auto-generated model configuration
// Generated on 2025-06-28T19:02:34.509Z

import { ModelInfo } from '../../core/types';

const models: ModelInfo[] = [
  {
    "name": "meta-llama-3.1-8b-instruct",
    "label": "meta llama 3.1 8b instruct",
    "provider": "FriendliAI",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.1,
      "outputCost": 0.1
    },
    "metadata": {}
  },
  {
    "name": "meta-llama-3.1-70b-instruct",
    "label": "meta llama 3.1 70b instruct",
    "provider": "FriendliAI",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 8192,
      "maxInputTokens": 8192,
      "maxOutputTokens": 8192
    },
    "cost": {
      "inputCost": 0.6,
      "outputCost": 0.6
    },
    "metadata": {}
  }
];

export default models;
