import { ModelInfo } from "../../core/types";

export const HuggingFaceModels: ModelInfo[] = [
  {
    "name": "Qwen/Qwen2.5-Coder-32B-Instruct",
    "label": "Qwen2.5-Coder-32B-Instruct (HuggingFace)",
    "provider": "HuggingFace",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 16000,
      "maxInputTokens": 8000,
      "maxOutputTokens": 8000
    },
    "cost": {
      "inputCost": 0.6,
      "outputCost": 0.6
    },
    "metadata": {}
  },
  {
    "name": "01-ai/Yi-1.5-34B-Chat",
    "label": "Yi-1.5-34B-Chat (HuggingFace)",
    "provider": "HuggingFace",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 8000,
      "maxInputTokens": 8000,
      "maxOutputTokens": 8000
    },
    "cost": {
      "inputCost": 0.8,
      "outputCost": 0.8
    },
    "metadata": {}
  },
  {
    "name": "codellama/CodeLlama-34b-Instruct-hf",
    "label": "CodeLlama-34b-Instruct (HuggingFace)",
    "provider": "HuggingFace",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 8000,
      "maxInputTokens": 8000,
      "maxOutputTokens": 8000
    },
    "cost": {
      "inputCost": 0.8,
      "outputCost": 0.8
    },
    "metadata": {}
  },
  {
    "name": "NousResearch/Hermes-3-Llama-3.1-8B",
    "label": "Hermes-3-Llama-3.1-8B (HuggingFace)",
    "provider": "HuggingFace",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 8000,
      "maxInputTokens": 8000,
      "maxOutputTokens": 8000
    },
    "cost": {
      "inputCost": 0.4,
      "outputCost": 0.4
    },
    "metadata": {}
  },
  {
    "name": "meta-llama/Llama-3.1-405B",
    "label": "Llama-3.1-405B (HuggingFace)",
    "provider": "HuggingFace",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 8000,
      "maxInputTokens": 8000,
      "maxOutputTokens": 8000
    },
    "cost": {
      "inputCost": 3.4,
      "outputCost": 5.4
    },
    "metadata": {}
  },
  {
    "name": "meta-llama/Llama-3.1-70B-Instruct",
    "label": "Llama-3.1-70B-Instruct (HuggingFace)",
    "provider": "HuggingFace",
    "type": "chat",
    "modalities": [],
    "context": {
      "maxTokens": 8000,
      "maxInputTokens": 8000,
      "maxOutputTokens": 8000
    },
    "cost": {
      "inputCost": 1.4,
      "outputCost": 1.4
    },
    "metadata": {}
  },
];