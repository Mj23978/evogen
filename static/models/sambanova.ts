// Auto-generated model configuration
// Generated on 2025-06-28T19:02:34.508Z

import type { ModelInfo } from "../../core/types";

const models: ModelInfo[] = [
	{
		name: "Meta-Llama-3.1-8B-Instruct",
		label: "Meta Llama 3.1 8B Instruct",
		provider: "Sambanova",
		type: "chat",
		modalities: ["function-call", "tool-choice"],
		context: {
			maxTokens: 16000,
			maxInputTokens: 16000,
			maxOutputTokens: 16000,
		},
		cost: {
			inputCost: 0.1,
			outputCost: 0.2,
		},
		metadata: {},
	},
	{
		name: "Meta-Llama-3.1-70B-Instruct",
		label: "Meta Llama 3.1 70B Instruct",
		provider: "Sambanova",
		type: "chat",
		modalities: ["function-call", "tool-choice"],
		context: {
			maxTokens: 128000,
			maxInputTokens: 128000,
			maxOutputTokens: 128000,
		},
		cost: {
			inputCost: 0.6,
			outputCost: 1.2,
		},
		metadata: {},
	},
	{
		name: "Meta-Llama-3.1-405B-Instruct",
		label: "Meta Llama 3.1 405B Instruct",
		provider: "Sambanova",
		type: "chat",
		modalities: ["function-call", "tool-choice"],
		context: {
			maxTokens: 16000,
			maxInputTokens: 16000,
			maxOutputTokens: 16000,
		},
		cost: {
			inputCost: 5,
			outputCost: 10,
		},
		metadata: {},
	},
	{
		name: "Meta-Llama-3.2-1B-Instruct",
		label: "Meta Llama 3.2 1B Instruct",
		provider: "Sambanova",
		type: "chat",
		modalities: ["function-call", "tool-choice"],
		context: {
			maxTokens: 16000,
			maxInputTokens: 16000,
			maxOutputTokens: 16000,
		},
		cost: {
			inputCost: 0.4,
			outputCost: 0.8,
		},
		metadata: {},
	},
	{
		name: "Meta-Llama-3.2-3B-Instruct",
		label: "Meta Llama 3.2 3B Instruct",
		provider: "Sambanova",
		type: "chat",
		modalities: ["function-call", "tool-choice"],
		context: {
			maxTokens: 4000,
			maxInputTokens: 4000,
			maxOutputTokens: 4000,
		},
		cost: {
			inputCost: 0.8,
			outputCost: 1.6,
		},
		metadata: {},
	},
	{
		name: "Qwen2.5-Coder-32B-Instruct",
		label: "Qwen2.5 Coder 32B Instruct",
		provider: "Sambanova",
		type: "chat",
		modalities: ["function-call", "tool-choice"],
		context: {
			maxTokens: 8000,
			maxInputTokens: 8000,
			maxOutputTokens: 8000,
		},
		cost: {
			inputCost: 1.5,
			outputCost: 3,
		},
		metadata: {},
	},
	{
		name: "Qwen2.5-72B-Instruct",
		label: "Qwen2.5 72B Instruct",
		provider: "Sambanova",
		type: "chat",
		modalities: ["function-call", "tool-choice"],
		context: {
			maxTokens: 8000,
			maxInputTokens: 8000,
			maxOutputTokens: 8000,
		},
		cost: {
			inputCost: 2,
			outputCost: 4,
		},
		metadata: {},
	},
];

export default models;
