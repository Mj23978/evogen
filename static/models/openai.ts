// Auto-generated model configuration
// Generated on 2025-06-28T19:02:34.489Z

import { ModelInfo } from '../../core/types';

const models: ModelInfo[] = [
  {
    "name": "omni-moderation-latest",
    "label": "omni moderation latest",
    "provider": "OpenAI",
    "type": "moderation",
    "modalities": [],
    "context": {
      "maxTokens": 32768,
      "maxInputTokens": 32768,
      "maxOutputTokens": 0
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "omni-moderation-latest-intents",
    "label": "omni moderation latest intents",
    "provider": "OpenAI",
    "type": "moderation",
    "modalities": [],
    "context": {
      "maxTokens": 32768,
      "maxInputTokens": 32768,
      "maxOutputTokens": 0
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "omni-moderation-2024-09-26",
    "label": "omni moderation 2024 09 26",
    "provider": "OpenAI",
    "type": "moderation",
    "modalities": [],
    "context": {
      "maxTokens": 32768,
      "maxInputTokens": 32768,
      "maxOutputTokens": 0
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "gpt-4",
    "label": "gpt 4",
    "provider": "OpenAI",
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
    "name": "gpt-4o",
    "label": "gpt 4o",
    "provider": "OpenAI",
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
      "maxTokens": 16384,
      "maxInputTokens": 128000,
      "maxOutputTokens": 16384
    },
    "cost": {
      "inputCost": 2.5,
      "outputCost": 10
    },
    "metadata": {
      "searchContextCostPerQuery": null,
      "inputCostBatches": 1.25,
      "outputCostBatches": 5
    }
  },
  {
    "name": "gpt-4o-search-preview-2025-03-11",
    "label": "gpt 4o search preview 2025 03 11",
    "provider": "OpenAI",
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
      "maxTokens": 16384,
      "maxInputTokens": 128000,
      "maxOutputTokens": 16384
    },
    "cost": {
      "inputCost": 2.5,
      "outputCost": 10
    },
    "metadata": {
      "searchContextCostPerQuery": null,
      "inputCostBatches": 1.25,
      "outputCostBatches": 5
    }
  },
  {
    "name": "gpt-4o-search-preview",
    "label": "gpt 4o search preview",
    "provider": "OpenAI",
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
      "maxTokens": 16384,
      "maxInputTokens": 128000,
      "maxOutputTokens": 16384
    },
    "cost": {
      "inputCost": 2.5,
      "outputCost": 10
    },
    "metadata": {
      "searchContextCostPerQuery": null,
      "inputCostBatches": 1.25,
      "outputCostBatches": 5
    }
  },
  {
    "name": "gpt-4.5-preview",
    "label": "gpt 4.5 preview",
    "provider": "OpenAI",
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
    "name": "gpt-4.5-preview-2025-02-27",
    "label": "gpt 4.5 preview 2025 02 27",
    "provider": "OpenAI",
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
    "name": "gpt-4o-audio-preview",
    "label": "gpt 4o audio preview",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling",
      "audio-input",
      "audio-output"
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
    "name": "gpt-4o-audio-preview-2024-12-17",
    "label": "gpt 4o audio preview 2024 12 17",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling",
      "audio-input",
      "audio-output"
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
    "name": "gpt-4o-audio-preview-2024-10-01",
    "label": "gpt 4o audio preview 2024 10 01",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling",
      "audio-input",
      "audio-output"
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
    "name": "gpt-4o-mini-audio-preview-2024-12-17",
    "label": "gpt 4o mini audio preview 2024 12 17",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling",
      "audio-input",
      "audio-output"
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
    "provider": "OpenAI",
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
      "maxTokens": 16384,
      "maxInputTokens": 128000,
      "maxOutputTokens": 16384
    },
    "cost": {
      "inputCost": 0.15,
      "outputCost": 0.6
    },
    "metadata": {
      "searchContextCostPerQuery": null,
      "inputCostBatches": 0.075,
      "outputCostBatches": 0.3
    }
  },
  {
    "name": "gpt-4o-mini-search-preview-2025-03-11",
    "label": "gpt 4o mini search preview 2025 03 11",
    "provider": "OpenAI",
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
      "maxTokens": 16384,
      "maxInputTokens": 128000,
      "maxOutputTokens": 16384
    },
    "cost": {
      "inputCost": 0.15,
      "outputCost": 0.6
    },
    "metadata": {
      "searchContextCostPerQuery": null,
      "inputCostBatches": 0.075,
      "outputCostBatches": 0.3
    }
  },
  {
    "name": "gpt-4o-mini-search-preview",
    "label": "gpt 4o mini search preview",
    "provider": "OpenAI",
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
      "maxTokens": 16384,
      "maxInputTokens": 128000,
      "maxOutputTokens": 16384
    },
    "cost": {
      "inputCost": 0.15,
      "outputCost": 0.6
    },
    "metadata": {
      "searchContextCostPerQuery": null,
      "inputCostBatches": 0.075,
      "outputCostBatches": 0.3
    }
  },
  {
    "name": "gpt-4o-mini-2024-07-18",
    "label": "gpt 4o mini 2024 07 18",
    "provider": "OpenAI",
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
    "metadata": {
      "searchContextCostPerQuery": null,
      "inputCostBatches": 0.075,
      "outputCostBatches": 0.3
    }
  },
  {
    "name": "o1-pro",
    "label": "o1 pro",
    "provider": "OpenAI",
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
      "inputCost": 150,
      "outputCost": 600
    },
    "metadata": {
      "inputCostBatches": 75,
      "outputCostBatches": 300
    }
  },
  {
    "name": "o1-pro-2025-03-19",
    "label": "o1 pro 2025 03 19",
    "provider": "OpenAI",
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
      "inputCost": 150,
      "outputCost": 600
    },
    "metadata": {
      "inputCostBatches": 75,
      "outputCostBatches": 300
    }
  },
  {
    "name": "o1",
    "label": "o1",
    "provider": "OpenAI",
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
    "name": "o1-mini",
    "label": "o1 mini",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "vision"
    ],
    "context": {
      "maxTokens": 65536,
      "maxInputTokens": 128000,
      "maxOutputTokens": 65536
    },
    "cost": {
      "inputCost": 1.1,
      "outputCost": 4.4
    },
    "metadata": {}
  },
  {
    "name": "o3-mini",
    "label": "o3 mini",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "function-call",
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
    "name": "o3-mini-2025-01-31",
    "label": "o3 mini 2025 01 31",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "function-call",
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
    "name": "o1-mini-2024-09-12",
    "label": "o1 mini 2024 09 12",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "vision"
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
    "name": "o1-preview",
    "label": "o1 preview",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "vision"
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
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "vision"
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
    "name": "o1-2024-12-17",
    "label": "o1 2024 12 17",
    "provider": "OpenAI",
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
    "name": "chatgpt-4o-latest",
    "label": "chatgpt 4o latest",
    "provider": "OpenAI",
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
    "name": "gpt-4o-2024-05-13",
    "label": "gpt 4o 2024 05 13",
    "provider": "OpenAI",
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
    "metadata": {
      "inputCostBatches": 2.5,
      "outputCostBatches": 7.5
    }
  },
  {
    "name": "gpt-4o-2024-08-06",
    "label": "gpt 4o 2024 08 06",
    "provider": "OpenAI",
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
      "maxTokens": 16384,
      "maxInputTokens": 128000,
      "maxOutputTokens": 16384
    },
    "cost": {
      "inputCost": 2.5,
      "outputCost": 10
    },
    "metadata": {
      "searchContextCostPerQuery": null,
      "inputCostBatches": 1.25,
      "outputCostBatches": 5
    }
  },
  {
    "name": "gpt-4o-2024-11-20",
    "label": "gpt 4o 2024 11 20",
    "provider": "OpenAI",
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
    "metadata": {
      "inputCostBatches": 1.25,
      "outputCostBatches": 5
    }
  },
  {
    "name": "gpt-4o-realtime-preview-2024-10-01",
    "label": "gpt 4o realtime preview 2024 10 01",
    "provider": "OpenAI",
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
    "name": "gpt-4o-realtime-preview",
    "label": "gpt 4o realtime preview",
    "provider": "OpenAI",
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
    "name": "gpt-4o-realtime-preview-2024-12-17",
    "label": "gpt 4o realtime preview 2024 12 17",
    "provider": "OpenAI",
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
    "name": "gpt-4o-mini-realtime-preview",
    "label": "gpt 4o mini realtime preview",
    "provider": "OpenAI",
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
    "name": "gpt-4o-mini-realtime-preview-2024-12-17",
    "label": "gpt 4o mini realtime preview 2024 12 17",
    "provider": "OpenAI",
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
    "name": "gpt-4-turbo-preview",
    "label": "gpt 4 turbo preview",
    "provider": "OpenAI",
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
    "name": "gpt-4-0314",
    "label": "gpt 4 0314",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
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
    "name": "gpt-4-0613",
    "label": "gpt 4 0613",
    "provider": "OpenAI",
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
    "name": "gpt-4-32k",
    "label": "gpt 4 32k",
    "provider": "OpenAI",
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
    "name": "gpt-4-32k-0314",
    "label": "gpt 4 32k 0314",
    "provider": "OpenAI",
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
    "name": "gpt-4-32k-0613",
    "label": "gpt 4 32k 0613",
    "provider": "OpenAI",
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
    "name": "gpt-4-turbo",
    "label": "gpt 4 turbo",
    "provider": "OpenAI",
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
    "name": "gpt-4-turbo-2024-04-09",
    "label": "gpt 4 turbo 2024 04 09",
    "provider": "OpenAI",
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
    "name": "gpt-4-1106-preview",
    "label": "gpt 4 1106 preview",
    "provider": "OpenAI",
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
    "name": "gpt-4-0125-preview",
    "label": "gpt 4 0125 preview",
    "provider": "OpenAI",
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
    "name": "gpt-4-vision-preview",
    "label": "gpt 4 vision preview",
    "provider": "OpenAI",
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
    "name": "gpt-4-1106-vision-preview",
    "label": "gpt 4 1106 vision preview",
    "provider": "OpenAI",
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
    "name": "gpt-3.5-turbo",
    "label": "gpt 3.5 turbo",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4097,
      "maxInputTokens": 16385,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 1.5,
      "outputCost": 2
    },
    "metadata": {}
  },
  {
    "name": "gpt-3.5-turbo-0301",
    "label": "gpt 3.5 turbo 0301",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "tool-choice"
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
    "name": "gpt-3.5-turbo-0613",
    "label": "gpt 3.5 turbo 0613",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice"
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
    "name": "gpt-3.5-turbo-1106",
    "label": "gpt 3.5 turbo 1106",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 16385,
      "maxInputTokens": 16385,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 1,
      "outputCost": 2
    },
    "metadata": {}
  },
  {
    "name": "gpt-3.5-turbo-0125",
    "label": "gpt 3.5 turbo 0125",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "function-call",
      "tool-choice",
      "parallel-function-calling"
    ],
    "context": {
      "maxTokens": 16385,
      "maxInputTokens": 16385,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 0.5,
      "outputCost": 1.5
    },
    "metadata": {}
  },
  {
    "name": "gpt-3.5-turbo-16k",
    "label": "gpt 3.5 turbo 16k",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 16385,
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
    "name": "gpt-3.5-turbo-16k-0613",
    "label": "gpt 3.5 turbo 16k 0613",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 16385,
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
    "name": "ft:gpt-3.5-turbo",
    "label": "ft:gpt 3.5 turbo",
    "provider": "OpenAI",
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
      "outputCost": 6
    },
    "metadata": {
      "inputCostBatches": 1.5,
      "outputCostBatches": 3
    }
  },
  {
    "name": "ft:gpt-3.5-turbo-0125",
    "label": "ft:gpt 3.5 turbo 0125",
    "provider": "OpenAI",
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
      "outputCost": 6
    },
    "metadata": {}
  },
  {
    "name": "ft:gpt-3.5-turbo-1106",
    "label": "ft:gpt 3.5 turbo 1106",
    "provider": "OpenAI",
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
      "outputCost": 6
    },
    "metadata": {}
  },
  {
    "name": "ft:gpt-3.5-turbo-0613",
    "label": "ft:gpt 3.5 turbo 0613",
    "provider": "OpenAI",
    "type": "chat",
    "modalities": [
      "tool-choice"
    ],
    "context": {
      "maxTokens": 4096,
      "maxInputTokens": 4096,
      "maxOutputTokens": 4096
    },
    "cost": {
      "inputCost": 3,
      "outputCost": 6
    },
    "metadata": {}
  },
  {
    "name": "ft:gpt-4-0613",
    "label": "ft:gpt 4 0613",
    "provider": "OpenAI",
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
    "name": "ft:gpt-4o-2024-08-06",
    "label": "ft:gpt 4o 2024 08 06",
    "provider": "OpenAI",
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
      "inputCost": 3.75,
      "outputCost": 15
    },
    "metadata": {
      "inputCostBatches": 1.875,
      "outputCostBatches": 7.5
    }
  },
  {
    "name": "ft:gpt-4o-2024-11-20",
    "label": "ft:gpt 4o 2024 11 20",
    "provider": "OpenAI",
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
      "inputCost": 3.75,
      "outputCost": 15
    },
    "metadata": {}
  },
  {
    "name": "ft:gpt-4o-mini-2024-07-18",
    "label": "ft:gpt 4o mini 2024 07 18",
    "provider": "OpenAI",
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
      "inputCost": 0.3,
      "outputCost": 1.2
    },
    "metadata": {
      "inputCostBatches": 0.15,
      "outputCostBatches": 0.6
    }
  },
  {
    "name": "text-embedding-3-large",
    "label": "text embedding 3 large",
    "provider": "OpenAI",
    "type": "embedding",
    "modalities": [],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 8191
    },
    "cost": {
      "inputCost": 0.13
    },
    "metadata": {
      "inputCostBatches": 0.065
    }
  },
  {
    "name": "text-embedding-3-small",
    "label": "text embedding 3 small",
    "provider": "OpenAI",
    "type": "embedding",
    "modalities": [],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 8191
    },
    "cost": {
      "inputCost": 0.02
    },
    "metadata": {
      "inputCostBatches": 0.01
    }
  },
  {
    "name": "text-embedding-ada-002",
    "label": "text embedding ada 002",
    "provider": "OpenAI",
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
    "name": "text-embedding-ada-002-v2",
    "label": "text embedding ada 002 v2",
    "provider": "OpenAI",
    "type": "embedding",
    "modalities": [],
    "context": {
      "maxTokens": 8191,
      "maxInputTokens": 8191
    },
    "cost": {
      "inputCost": 0.1
    },
    "metadata": {
      "inputCostBatches": 0.05
    }
  },
  {
    "name": "text-moderation-stable",
    "label": "text moderation stable",
    "provider": "OpenAI",
    "type": "moderation",
    "modalities": [],
    "context": {
      "maxTokens": 32768,
      "maxInputTokens": 32768,
      "maxOutputTokens": 0
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "text-moderation-007",
    "label": "text moderation 007",
    "provider": "OpenAI",
    "type": "moderation",
    "modalities": [],
    "context": {
      "maxTokens": 32768,
      "maxInputTokens": 32768,
      "maxOutputTokens": 0
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "text-moderation-latest",
    "label": "text moderation latest",
    "provider": "OpenAI",
    "type": "moderation",
    "modalities": [],
    "context": {
      "maxTokens": 32768,
      "maxInputTokens": 32768,
      "maxOutputTokens": 0
    },
    "cost": {},
    "metadata": {}
  },
  {
    "name": "256-x-256/dall-e-2",
    "label": "dall e 2",
    "provider": "OpenAI",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "512-x-512/dall-e-2",
    "label": "dall e 2",
    "provider": "OpenAI",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "1024-x-1024/dall-e-2",
    "label": "dall e 2",
    "provider": "OpenAI",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "hd/1024-x-1792/dall-e-3",
    "label": "dall e 3",
    "provider": "OpenAI",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "hd/1792-x-1024/dall-e-3",
    "label": "dall e 3",
    "provider": "OpenAI",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "hd/1024-x-1024/dall-e-3",
    "label": "dall e 3",
    "provider": "OpenAI",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "standard/1024-x-1792/dall-e-3",
    "label": "dall e 3",
    "provider": "OpenAI",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "standard/1792-x-1024/dall-e-3",
    "label": "dall e 3",
    "provider": "OpenAI",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "standard/1024-x-1024/dall-e-3",
    "label": "dall e 3",
    "provider": "OpenAI",
    "type": "image-generation",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "gpt-4o-transcribe",
    "label": "gpt 4o transcribe",
    "provider": "OpenAI",
    "type": "speech-to-text",
    "modalities": [],
    "context": {},
    "cost": {
      "inputCost": 2.5,
      "outputCost": 10
    },
    "metadata": {}
  },
  {
    "name": "gpt-4o-mini-transcribe",
    "label": "gpt 4o mini transcribe",
    "provider": "OpenAI",
    "type": "speech-to-text",
    "modalities": [],
    "context": {},
    "cost": {
      "inputCost": 1.25,
      "outputCost": 5
    },
    "metadata": {}
  },
  {
    "name": "whisper-1",
    "label": "whisper 1",
    "provider": "OpenAI",
    "type": "speech-to-text",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "tts-1",
    "label": "tts 1",
    "provider": "OpenAI",
    "type": "text-to-speach",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  },
  {
    "name": "tts-1-hd",
    "label": "tts 1 hd",
    "provider": "OpenAI",
    "type": "text-to-speach",
    "modalities": [],
    "context": {},
    "cost": {},
    "metadata": {}
  }
];

export default models;
