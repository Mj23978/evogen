// Auto-generated model configuration
// Generated on 2025-04-05T18:33:11.241Z

import { ModelInfo } from '../../core/types';

const models: ModelInfo[] = [
  {
    "name": "gpt-4o-mini-realtime-preview-2024-12-17",
    "label": "gpt 4o mini realtime preview 2024 12 17",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling",
      "audio-input",
      "audio-output"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.6,
      "outputCost": 2.4
    },
    "metadata": {}
  },
  {
    "name": "gpt-4o-realtime-preview-2024-10-01",
    "label": "gpt 4o realtime preview 2024 10 01",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling",
      "audio-input",
      "audio-output"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 5,
      "outputCost": 20
    },
    "metadata": {}
  },
  {
    "name": "o3-mini-2025-01-31",
    "label": "o3 mini 2025 01 31",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 100000,
      "maxInputTokens": 200000,
      "maxOutputTokens": 100000
    },
    "cost": {
      "inputCost": 1.1,
      "outputCost": 4.4
    },
    "metadata": {}
  },
  {
    "name": "tts-1",
    "label": "tts 1",
    "provider": "Azure",
    "type": "text-to-speach",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "tts-1-hd",
    "label": "tts 1 hd",
    "provider": "Azure",
    "type": "text-to-speach",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "whisper-1",
    "label": "whisper 1",
    "provider": "Azure",
    "type": "speech-to-text",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "o3-mini",
    "label": "o3 mini",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "tool-choice",
      "response-schema"
    ],
    "context": {
      "maxTokens": 100000,
      "maxInputTokens": 200000,
      "maxOutputTokens": 100000
    },
    "cost": {
      "inputCost": 1.1,
      "outputCost": 4.4
    },
    "metadata": {}
  },
  {
    "name": "o1-mini",
    "label": "o1 mini",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 65536,
      "maxInputTokens": 128000,
      "maxOutputTokens": 65536
    },
    "cost": {
      "inputCost": 1.21,
      "outputCost": 4.84
    },
    "metadata": {}
  },
  {
    "name": "o1-mini-2024-09-12",
    "label": "o1 mini 2024 09 12",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 65536,
      "maxInputTokens": 128000,
      "maxOutputTokens": 65536
    },
    "cost": {
      "inputCost": 1.21,
      "outputCost": 4.84
    },
    "metadata": {}
  },
  {
    "name": "o1",
    "label": "o1",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
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
    "name": "o1-2024-12-17",
    "label": "o1 2024 12 17",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
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
    "name": "o1-preview",
    "label": "o1 preview",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
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
    "name": "o1-preview-2024-09-12",
    "label": "o1 preview 2024 09 12",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
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
    "name": "gpt-4.5-preview",
    "label": "gpt 4.5 preview",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 16384,
      "maxInputTokens": 128000,
      "maxOutputTokens": 16384
    },
    "cost": {
      "inputCost": 75,
      "outputCost": 150
    },
    "metadata": {
      "inputCostBatches": 37.5,
      "outputCostBatches": 75
    }
  },
  {
    "name": "gpt-4o",
    "label": "gpt 4o",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "parallel-function-calling"
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
    "metadata": {}
  },
  {
    "name": "global/gpt-4o-2024-11-20",
    "label": "gpt 4o 2024 11 20",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "parallel-function-calling"
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
    "metadata": {}
  },
  {
    "name": "gpt-4o-2024-08-06",
    "label": "gpt 4o 2024 08 06",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "parallel-function-calling"
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
    "metadata": {}
  },
  {
    "name": "global/gpt-4o-2024-08-06",
    "label": "gpt 4o 2024 08 06",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "parallel-function-calling"
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
    "metadata": {}
  },
  {
    "name": "gpt-4o-2024-11-20",
    "label": "gpt 4o 2024 11 20",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 16384,
      "maxInputTokens": 128000,
      "maxOutputTokens": 16384
    },
    "cost": {
      "inputCost": 2.75,
      "outputCost": 11
    },
    "metadata": {}
  },
  {
    "name": "gpt-4o-2024-05-13",
    "label": "gpt 4o 2024 05 13",
    "provider": "Azure",
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
    "name": "global-standard/gpt-4o-2024-08-06",
    "label": "gpt 4o 2024 08 06",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "parallel-function-calling"
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
    "metadata": {}
  },
  {
    "name": "global-standard/gpt-4o-2024-11-20",
    "label": "gpt 4o 2024 11 20",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "parallel-function-calling"
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
    "metadata": {}
  },
  {
    "name": "global-standard/gpt-4o-mini",
    "label": "gpt 4o mini",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 16384,
      "maxInputTokens": 128000,
      "maxOutputTokens": 16384
    },
    "cost": {
      "inputCost": 0.15,
      "outputCost": 0.6
    },
    "metadata": {}
  },
  {
    "name": "gpt-4o-mini",
    "label": "gpt 4o mini",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 16384,
      "maxInputTokens": 128000,
      "maxOutputTokens": 16384
    },
    "cost": {
      "inputCost": 0.165,
      "outputCost": 0.66
    },
    "metadata": {}
  },
  {
    "name": "gpt-4o-mini-2024-07-18",
    "label": "gpt 4o mini 2024 07 18",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "response-schema",
      "vision",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 16384,
      "maxInputTokens": 128000,
      "maxOutputTokens": 16384
    },
    "cost": {
      "inputCost": 0.165,
      "outputCost": 0.66
    },
    "metadata": {}
  },
  {
    "name": "gpt-4-turbo-2024-04-09",
    "label": "gpt 4 turbo 2024 04 09",
    "provider": "Azure",
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
      "inputCost": 10,
      "outputCost": 30
    },
    "metadata": {}
  },
  {
    "name": "gpt-4-0125-preview",
    "label": "gpt 4 0125 preview",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 10,
      "outputCost": 30
    },
    "metadata": {}
  },
  {
    "name": "gpt-4-1106-preview",
    "label": "gpt 4 1106 preview",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 10,
      "outputCost": 30
    },
    "metadata": {}
  },
  {
    "name": "gpt-4-0613",
    "label": "gpt 4 0613",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 8192,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 30,
      "outputCost": 60
    },
    "metadata": {}
  },
  {
    "name": "gpt-4-32k-0613",
    "label": "gpt 4 32k 0613",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 32768,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 60,
      "outputCost": 120
    },
    "metadata": {}
  },
  {
    "name": "gpt-4-32k",
    "label": "gpt 4 32k",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 32768,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 60,
      "outputCost": 120
    },
    "metadata": {}
  },
  {
    "name": "gpt-4",
    "label": "gpt 4",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 8192,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 30,
      "outputCost": 60
    },
    "metadata": {}
  },
  {
    "name": "gpt-4-turbo",
    "label": "gpt 4 turbo",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 10,
      "outputCost": 30
    },
    "metadata": {}
  },
  {
    "name": "gpt-4-turbo-vision-preview",
    "label": "gpt 4 turbo vision preview",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "tool-choice",
      "vision"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 128000,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 10,
      "outputCost": 30
    },
    "metadata": {}
  },
  {
    "name": "gpt-35-turbo-16k-0613",
    "label": "gpt 35 turbo 16k 0613",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 16385,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 4
    },
    "metadata": {}
  },
  {
    "name": "gpt-35-turbo-1106",
    "label": "gpt 35 turbo 1106",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 16384,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 1,
      "outputCost": 2
    },
    "metadata": {}
  },
  {
    "name": "gpt-35-turbo-0613",
    "label": "gpt 35 turbo 0613",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 4097,
      "maxInputTokens": 4097,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 1.5,
      "outputCost": 2
    },
    "metadata": {}
  },
  {
    "name": "gpt-35-turbo-0301",
    "label": "gpt 35 turbo 0301",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 4097,
      "maxInputTokens": 4097,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.2,
      "outputCost": 2
    },
    "metadata": {}
  },
  {
    "name": "gpt-35-turbo-0125",
    "label": "gpt 35 turbo 0125",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 16384,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.5,
      "outputCost": 1.5
    },
    "metadata": {}
  },
  {
    "name": "gpt-3.5-turbo-0125",
    "label": "gpt 3.5 turbo 0125",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 16384,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.5,
      "outputCost": 1.5
    },
    "metadata": {}
  },
  {
    "name": "gpt-35-turbo-16k",
    "label": "gpt 35 turbo 16k",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 16385,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 4
    },
    "metadata": {}
  },
  {
    "name": "gpt-35-turbo",
    "label": "gpt 35 turbo",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 4097,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.5,
      "outputCost": 1.5
    },
    "metadata": {}
  },
  {
    "name": "gpt-3.5-turbo",
    "label": "gpt 3.5 turbo",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 4097,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.5,
      "outputCost": 1.5
    },
    "metadata": {}
  },
  {
    "name": "mistral-large-latest",
    "label": "mistral large latest",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call"
    ],
    "context": {
      "maxTokens": 32000,
      "maxInputTokens": 32000
    },
    "cost": {
      "inputCost": 8,
      "outputCost": 24
    },
    "metadata": {}
  },
  {
    "name": "mistral-large-2402",
    "label": "mistral large 2402",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call"
    ],
    "context": {
      "maxTokens": 32000,
      "maxInputTokens": 32000
    },
    "cost": {
      "inputCost": 8,
      "outputCost": 24
    },
    "metadata": {}
  },
  {
    "name": "command-r-plus",
    "label": "command r plus",
    "provider": "Azure",
    "type": "chat",
    "modalities": [
      "function-call"
    ],
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
    "name": "ada",
    "label": "ada",
    "provider": "Azure",
    "type": "embedding",
    "modalities": [],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 8191
    },
    "cost": {
      "inputCost": 0.1
    },
    "metadata": {}
  },
  {
    "name": "text-embedding-ada-002",
    "label": "text embedding ada 002",
    "provider": "Azure",
    "type": "embedding",
    "modalities": [],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 8191
    },
    "cost": {
      "inputCost": 0.1
    },
    "metadata": {}
  },
  {
    "name": "text-embedding-3-large",
    "label": "text embedding 3 large",
    "provider": "Azure",
    "type": "embedding",
    "modalities": [],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 8191
    },
    "cost": {
      "inputCost": 0.13
    },
    "metadata": {}
  },
  {
    "name": "text-embedding-3-small",
    "label": "text embedding 3 small",
    "provider": "Azure",
    "type": "embedding",
    "modalities": [],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 8191
    },
    "cost": {
      "inputCost": 0.02
    },
    "metadata": {}
  },
  {
    "name": "standard/1024-x-1024/dall-e-3",
    "label": "dall e 3",
    "provider": "Azure",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "hd/1024-x-1024/dall-e-3",
    "label": "dall e 3",
    "provider": "Azure",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "standard/1024-x-1792/dall-e-3",
    "label": "dall e 3",
    "provider": "Azure",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "standard/1792-x-1024/dall-e-3",
    "label": "dall e 3",
    "provider": "Azure",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "hd/1024-x-1792/dall-e-3",
    "label": "dall e 3",
    "provider": "Azure",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "hd/1792-x-1024/dall-e-3",
    "label": "dall e 3",
    "provider": "Azure",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "standard/1024-x-1024/dall-e-2",
    "label": "dall e 2",
    "provider": "Azure",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  }
];

export default models;
