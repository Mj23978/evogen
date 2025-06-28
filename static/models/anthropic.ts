// Auto-generated model configuration
// Generated on 2025-04-05T18:33:11.224Z

import { ModelInfo } from '../../core/types';

const models: ModelInfo[] = [
  {
    "name": "claude-instant-1",
    "label": "claude instant 1",
    "provider": "Anthropic",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 100000,
      "maxOutputTokens": 8191
    },
    "cost": {
      "inputCost": 1.63,
      "outputCost": 5.51
    },
    "metadata": {}
  },
  {
    "name": "claude-instant-1.2",
    "label": "claude instant 1.2",
    "provider": "Anthropic",
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
      "inputCost": 0.163,
      "outputCost": 0.551
    },
    "metadata": {}
  },
  {
    "name": "claude-2",
    "label": "claude 2",
    "provider": "Anthropic",
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
    "name": "claude-2.1",
    "label": "claude 2.1",
    "provider": "Anthropic",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 200000,
      "maxOutputTokens": 8191
    },
    "cost": {
      "inputCost": 8,
      "outputCost": 24
    },
    "metadata": {}
  },
  {
    "name": "claude-3-haiku-20240307",
    "label": "claude 3 haiku 20240307",
    "provider": "Anthropic",
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
      "inputCost": 0.25,
      "outputCost": 1.25
    },
    "metadata": {}
  },
  {
    "name": "claude-3-5-haiku-20241022",
    "label": "claude 3 5 haiku 20241022",
    "provider": "Anthropic",
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
      "inputCost": 0.8,
      "outputCost": 4
    },
    "metadata": {}
  },
  {
    "name": "claude-3-5-haiku-latest",
    "label": "claude 3 5 haiku latest",
    "provider": "Anthropic",
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
      "inputCost": 1,
      "outputCost": 5
    },
    "metadata": {}
  },
  {
    "name": "claude-3-opus-latest",
    "label": "claude 3 opus latest",
    "provider": "Anthropic",
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
    "name": "claude-3-opus-20240229",
    "label": "claude 3 opus 20240229",
    "provider": "Anthropic",
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
    "name": "claude-3-sonnet-20240229",
    "label": "claude 3 sonnet 20240229",
    "provider": "Anthropic",
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
    "name": "claude-3-5-sonnet-latest",
    "label": "claude 3 5 sonnet latest",
    "provider": "Anthropic",
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
    "name": "claude-3-5-sonnet-20240620",
    "label": "claude 3 5 sonnet 20240620",
    "provider": "Anthropic",
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
    "name": "claude-3-7-sonnet-latest",
    "label": "claude 3 7 sonnet latest",
    "provider": "Anthropic",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "pdf-input"
    ],
    "context": {
      "maxTokens": 128000,
      "maxInputTokens": 200000,
      "maxOutputTokens": 128000
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 15
    },
    "metadata": {}
  },
  {
    "name": "claude-3-7-sonnet-20250219",
    "label": "claude 3 7 sonnet 20250219",
    "provider": "Anthropic",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "pdf-input"
    ],
    "context": {
      "maxTokens": 128000,
      "maxInputTokens": 200000,
      "maxOutputTokens": 128000
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 15
    },
    "metadata": {}
  },
  {
    "name": "claude-3-5-sonnet-20241022",
    "label": "claude 3 5 sonnet 20241022",
    "provider": "Anthropic",
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
  }
];

export default models;
