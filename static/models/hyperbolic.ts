import { ModelInfo } from "../../core/types";

const HyperbolicModels: ModelInfo[] = [
  {
    "name": "Qwen/Qwen2.5-Coder-32B-Instruct",
    "label": "Qwen2.5-Coder-32B-Instruct",
    "provider": "Hyperbolic",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
    ],
    "context": {
      "maxTokens": 16000,
      "maxInputTokens": 8000,
      "maxOutputTokens": 8000
    },
    "cost": {
      "inputCost": 0.8,
      "outputCost": 1.6
    },
    "metadata": {}
  },
  {
    "name": "Qwen/Qwen2.5-72B-Instruct",
    "label": "Qwen2.5-72B-Instruct",
    "provider": "Hyperbolic",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
    ],
    "context": {
      "maxTokens": 16000,
      "maxInputTokens": 8000,
      "maxOutputTokens": 8000
    },
    "cost": {
      "inputCost": 1.6,
      "outputCost": 3.0
    },
    "metadata": {}
  },
  {
    "name": "Qwen/QwQ-32B-Preview",
    "label": "Qwen-QwQ-32B-Preview",
    "provider": "Hyperbolic",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      'reasoning'
    ],
    "context": {
      "maxTokens": 16000,
      "maxInputTokens": 8000,
      "maxOutputTokens": 8000
    },
    "cost": {
      "inputCost": 1.6,
      "outputCost": 3.0
    },
    "metadata": {}
  },
  {
    "name": "Qwen/Qwen2-VL-72B-Instruct",
    "label": "Qwen2-VL-72B-Instruct",
    "provider": "Hyperbolic",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      'vision'
    ],
    "context": {
      "maxTokens": 16000,
      "maxInputTokens": 8000,
      "maxOutputTokens": 8000
    },
    "cost": {
      "inputCost": 1.6,
      "outputCost": 3.0
    },
    "metadata": {}
  },
  {
    "name": "deepseek-ai/DeepSeek-V2.5",
    "label": "DeepSeek-V2.5",
    "provider": "Hyperbolic",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
    ],
    "context": {
      "maxTokens": 16000,
      "maxInputTokens": 8000,
      "maxOutputTokens": 8000
    },
    "cost": {
      "inputCost": 1.6,
      "outputCost": 3.0
    },
    "metadata": {}
  }
];

export default HyperbolicModels;