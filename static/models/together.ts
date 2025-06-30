// Auto-generated model configuration
// Generated on 2025-04-05T18:33:11.210Z

import type { ModelInfo } from "../../core/types";

const models: ModelInfo[] = [
	{
		name: "WhereIsAI/UAE-Large-V1",
		label: "UAE-Large-V1",
		provider: "Together",
		type: "embedding",
		modalities: [],
		context: {},
		cost: {
			inputCost: 0.016,
			outputCost: 0.016,
		},
		metadata: {
			uuid: "endpoint-fb84dee7-1954-4f79-a780-6e58ed5e3710",
			link: "https://huggingface.co/bert-base-uncased",
			description:
				"A universal English sentence embedding WhereIsAI/UAE-Large-V1 achieves SOTA on the MTEB Leaderboard with an average score of 64.64!",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
			},
		},
	},
	{
		name: "meta-llama/Meta-Llama-3-70B-Instruct-Turbo",
		label: "Meta Llama 3 70B Instruct Turbo",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.88,
			outputCost: 0.88,
		},
		metadata: {
			uuid: "endpoint-4626a9aa-4d0a-4226-b0e5-9e6874f1a256",
			link: "https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct",
			description:
				"Llama 3 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.",
			config: {
				stop: ["<|eot_id|>"],
				chat_template:
					"{% set loop_messages = messages %}{% for message in loop_messages %}{% set content = '<|start_header_id|>' + message['role'] + '<|end_header_id|>\n\n'+ message['content'] | trim + '<|eot_id|>' %}{% if loop.index0 == 0 %}{% set content = bos_token + content %}{% endif %}{{ content }}{% endfor %}{{ '<|start_header_id|>assistant<|end_header_id|>\n\n' }}",
				bos_token: "<|begin_of_text|>",
				eos_token: "<|end_of_text|>",
			},
		},
	},
	{
		name: "togethercomputer/m2-bert-80M-32k-retrieval",
		label: "M2-BERT-Retrieval-32k",
		provider: "Together",
		type: "embedding",
		modalities: [],
		context: {
			maxTokens: 32768,
		},
		cost: {
			inputCost: 0.008,
			outputCost: 0.008,
		},
		metadata: {
			uuid: "endpoint-e8ef8792-ba72-4fd2-bf73-03e093140c07",
			link: "https://huggingface.co/togethercomputer/m2-bert-80M-32k-retrieval",
			description:
				"The 80M checkpoint for M2-BERT-base from the paper Monarch Mixer: A Simple Sub-Quadratic GEMM-Based Architecture with sequence length 8192, and it has been fine-tuned for retrieval.",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
			},
		},
	},
	{
		name: "google/gemma-2-9b-it",
		label: "Gemma-2 Instruct (9B)",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.3,
			outputCost: 0.3,
		},
		metadata: {
			uuid: "endpoint-fbf722a2-0390-4c25-9dc4-8a09d05dcb07",
			link: "https://huggingface.co/google/gemma-2-9b-it",
			description:
				"Gemma is a family of lightweight, state-of-the-art open models from Google, built from the same research and technology used to create the Gemini models.",
			config: {
				stop: ["<end_of_turn>", "<eos>"],
				chat_template:
					"{{ bos_token }}{% for message in messages %}{% if (message['role'] == 'assistant') %}{% set role = 'model' %}{% else %}{% set role = message['role'] %}{% endif %}{{ '<start_of_turn>' + role + '\n' + message['content'] | trim + '<end_of_turn>\n' }}{% endfor %}{% if add_generation_prompt %}{{'<start_of_turn>model\n'}}{% endif %}",
				bos_token: "<bos>",
				eos_token: null,
				max_tokens: 8192,
			},
		},
	},
	{
		name: "cartesia/sonic",
		label: "Cartesia/Sonic",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 0,
		},
		cost: {
			inputCost: 65,
		},
		metadata: {
			link: "https://www.cartesia.ai",
			description: "Cartesian Sonic model that generate audio from a prompt",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
			},
		},
	},
	{
		name: "BAAI/bge-large-en-v1.5",
		label: "BAAI-Bge-Large-1p5",
		provider: "Together",
		type: "embedding",
		modalities: [],
		context: {},
		cost: {
			inputCost: 0.016,
			outputCost: 0.016,
		},
		metadata: {
			uuid: "endpoint-00e4046c-0f18-4e4b-9482-1d494c6a8cfc",
			description:
				"bge is short for BAAI general embedding, it maps any text to a low-dimensional dense vector using FlagEmbedding",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
			},
		},
	},
	{
		name: "Salesforce/Llama-Rank-V1",
		label: "Salesforce Llama Rank V1 (8B)",
		provider: "Together",
		type: "rerank",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.1,
			outputCost: 0.1,
		},
		metadata: {
			uuid: "endpoint-ec76d175-b4d5-430a-9b2b-d9a7d45755ec",
			description:
				"LlamaRank is a language model specialized for document ranking. LlamaRank achieves performance at least comparable to leading APIs across general document ranking while demonstrating a marked improvement in code search.",
			config: {
				stop: ["<|eot_id|>"],
				chat_template:
					"{% set loop_messages = messages %}{% for message in loop_messages %}{% set content = '<|start_header_id|>' + message['role'] + '<|end_header_id|>\n\n'+ message['content'] | trim + '<|eot_id|>' %}{% if loop.index0 == 0 %}{% set content = bos_token + content %}{% endif %}{{ content }}{% endfor %}{% if add_generation_prompt %}{{ '<|start_header_id|>assistant<|end_header_id|>\n\nAfter carefully reading the query, document, and guidelines, I have determined that the relevance score is: ' }}{% endif %}",
				bos_token: "<|begin_of_text|>",
				eos_token: "<|eot_id|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "meta-llama/Llama-2-13b-chat-hf",
		label: "LLaMA-2 Chat (13B)",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 4096,
		},
		cost: {
			inputCost: 0.22,
			outputCost: 0.22,
		},
		metadata: {
			uuid: "endpoint-7f6eb04d-c54f-4820-ab89-daf0d58658ba",
			link: "https://huggingface.co/meta-llama/Llama-2-13b-chat-hf",
			description:
				"Llama 2-chat leverages publicly available instruction datasets and over 1 million human annotations. Available in three sizes: 7B, 13B and 70B parameters",
			config: {
				stop: ["[/INST]", "</s>"],
				chat_template:
					"{% if messages[0]['role'] == 'system' %}{% set loop_messages = messages[1:] %}{% set system_message = messages[0]['content'] %}{% else %}{% set loop_messages = messages %}{% set system_message = false %}{% endif %}{% for message in loop_messages %}{% if loop.index0 == 0 and system_message != false %}{% set content = '<<SYS>>\\n' + system_message + '\\n<</SYS>>\\n\\n' + message['content'] %}{% else %}{% set content = message['content'] %}{% endif %}{% if message['role'] == 'user' or message['role'] == 'tool' %}{{ bos_token + '[INST] ' + content + ' [/INST]' }}{% elif message['role'] == 'system' %}{{ '<<SYS>>\\n' + content + '\\n<</SYS>>\\n\\n' }}{% elif message['role'] == 'assistant' %}{{ ' '  + content + ' ' + eos_token }}{% endif %}{% endfor %}",
				bos_token: "<s>",
				eos_token: "</s>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "black-forest-labs/FLUX.1-schnell-Free",
		label: "FLUX.1 [schnell] Free",
		provider: "Together",
		type: "image-generation",
		modalities: [],
		context: {},
		cost: {
			inputCostPixel: 0,
		},
		metadata: {
			uuid: "endpoint-4100b004-3258-462e-89ab-d3f4c60eea00",
			link: "https://huggingface.co/black-forest-labs/FLUX.1-schnell",
			description:
				"FLUX.1 [schnell] is a 12 billion parameter rectified flow transformer capable of generating images from text descriptions.",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
				height: 768,
				width: 1024,
				number_of_images: 1,
				steps: 4,
				seed: -1,
				response_format: "b64_json",
			},
		},
	},
	{
		name: "black-forest-labs/FLUX.1.1-pro",
		label: "FLUX1.1 [pro]",
		provider: "Together",
		type: "image-generation",
		modalities: [],
		context: {},
		cost: {
			inputCostPixel: 0.04,
		},
		metadata: {
			uuid: "endpoint-071376f6-db8a-44cf-9706-7ba0c9c14833",
			link: "https://huggingface.co/black-forest-labs/FLUX.1-schnell",
			description:
				"FLUX1.1 [pro] provides six times faster generation than its predecessor FLUX.1 [pro] while also improving image quality, prompt adherence, and diversity.",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
				height: 768,
				width: 1024,
				number_of_images: 1,
				steps: 1,
				seed: -1,
				response_format: "b64_json",
			},
		},
	},
	{
		name: "black-forest-labs/FLUX.1-dev",
		label: "FLUX.1 [dev]",
		provider: "Together",
		type: "image-generation",
		modalities: [],
		context: {},
		cost: {
			inputCostPixel: 0.025,
		},
		metadata: {
			uuid: "model-a96dfb5f-10de-4745-8bf8-1de27b790eb9",
			link: "https://huggingface.co/black-forest-labs/FLUX.1-dev",
			description:
				"FLUX.1 [dev] is a 12 billion parameter rectified flow transformer capable of generating images from text descriptions.",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
				height: 768,
				width: 1024,
				number_of_images: 1,
				steps: 28,
				seed: -1,
				max_n: 1,
				response_format: "b64_json",
			},
		},
	},
	{
		name: "meta-llama/Meta-Llama-3-8B-Instruct-Turbo",
		label: "Meta Llama 3 8B Instruct Turbo",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.18,
			outputCost: 0.18,
		},
		metadata: {
			uuid: "endpoint-fea3fa6b-c5e4-4272-a3fe-bd3ce37d69c6",
			link: "https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct",
			description:
				"Llama 3 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.",
			config: {
				stop: ["<|eot_id|>"],
				chat_template:
					"{% set loop_messages = messages %}{% for message in loop_messages %}{% set content = '<|start_header_id|>' + message['role'] + '<|end_header_id|>\n\n'+ message['content'] | trim + '<|eot_id|>' %}{% if loop.index0 == 0 %}{% set content = bos_token + content %}{% endif %}{{ content }}{% endfor %}{{ '<|start_header_id|>assistant<|end_header_id|>\n\n' }}",
				bos_token: "<|begin_of_text|>",
				eos_token: "<|end_of_text|>",
			},
		},
	},
	{
		name: "meta-llama/Llama-Guard-3-11B-Vision-Turbo",
		label: "Meta Llama Guard 3 11B Vision Turbo",
		provider: "Together",
		type: "moderation",
		modalities: ["vision"],
		context: {
			maxTokens: 131072,
		},
		cost: {
			inputCost: 0.18,
			outputCost: 0.18,
		},
		metadata: {
			uuid: "endpoint-abaaaacd-7c45-4739-9379-b8a4cf97e8b5",
			link: "https://huggingface.co/meta-llama/Llama-Guard-3-11B-Vision",
			description:
				"Llama 3.2 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.",
			config: {
				stop: ["<|eot_id|>", "<|eom_id|>"],
				chat_template:
					'{%- if messages|length % 2 == 0 -%}\n    {%- set role = \'Agent\' -%}\n{%-  else -%}\n    {%-  set role = \'User\' -%}\n{%-  endif -%}\n{%-  if categories is not defined -%}\n    {%-  \n        set categories = ({\n            "S1": "Violent Crimes.",\n            "S2": "Non-Violent Crimes.",\n            "S3": "Sex Crimes.",\n            "S4": "Child Exploitation.",\n            "S5": "Defamation.",\n            "S6": "Specialized Advice.",\n            "S7": "Privacy.",\n            "S8": "Intellectual Property.",\n            "S9": "Indiscriminate Weapons.",\n            "S10": "Hate.",\n            "S11": "Self-Harm.",\n            "S12": "Sexual Content.",\n            "S13": "Elections.",\n        })\n    -%}\n{%-  endif -%}\n\n{{- "<|begin_of_text|><|start_header_id|>user<|end_header_id|>\\n\\n" -}}\n{%- set ns = namespace(contains_image=false) -%}\n{%-  for message in messages -%}\n    {%- for content in message[\'content\'] | selectattr(\'type\', \'equalto\', \'image\') -%}\n        {%- set ns.contains_image = true -%}\n    {%- endfor -%}\n{%- endfor -%}\n{%- if ns.contains_image -%}\n{{- "<|image|> "-}}\n{%- endif -%}\n{{- "Task: Check if there is unsafe content in \'" + role + "\' messages in conversations according our safety policy with the below categories.\\n\\n" -}}\n{{- "<BEGIN UNSAFE CONTENT CATEGORIES>\\n"-}}\n\n{%-  for key in categories -%}\n    {%-  if key not in excluded_category_keys -%}\n        {{-key + ": " + categories[key] + "\\n" -}}\n    {%-  endif -%}\n{%-  endfor -%}\n\n{{- "<END UNSAFE CONTENT CATEGORIES>\\n\\n"-}}\n{{- "<BEGIN CONVERSATION>\\n\\n"-}}\n{%-  for message in messages -%}\n    {%-  if (message[\'role\'] == \'user\') != (loop.index0 % 2 == 0) -%}\n        {{ raise_exception(\'Conversation roles must alternate user/assistant/user/assistant/...\')-}}\n    {%-  endif -%}\n    {%-  set content = message[\'content\'] -%}\n    {%-  if message[\'role\'] == \'user\' -%}\n        {%-  set role = \'User\' -%}\n    {%-  elif message[\'role\'] == \'assistant\' -%}\n        {%-  set role = \'Agent\' -%}\n    {%-  endif -%}\n    {%-  for content in message[\'content\'] | selectattr(\'type\', \'equalto\', \'text\') -%}\n{{- role + \': \' + content[\'text\'] | trim + \'\\n\\n\'-}}\n    {%-  endfor -%}\n{%-  endfor -%}\n{{- "<END CONVERSATION>\\n\\n"-}}\n{{- "Provide your safety assessment for ONLY THE LAST " + role + " message in the above conversation:\\n"-}}\n{{- " - First line must read \'safe\' or \'unsafe\'.\\n"-}}\n{{- " - If unsafe, a second line must include a comma-separated list of violated categories. <|eot_id|><|start_header_id|>assistant<|end_header_id|>"-}}',
				bos_token: "<|begin_of_text|>",
				eos_token: "<|eot_id|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "black-forest-labs/FLUX.1-schnell",
		label: "FLUX.1 Schnell",
		provider: "Together",
		type: "image-generation",
		modalities: [],
		context: {},
		cost: {
			inputCostPixel: 0.003,
		},
		metadata: {
			uuid: "endpoint-e4638297-e0d0-4be4-85d4-62449ad55023",
			link: "https://huggingface.co/black-forest-labs/FLUX.1-schnell",
			description:
				"FLUX.1 [schnell] is a 12 billion parameter rectified flow transformer capable of generating images from text descriptions.",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
				height: 768,
				width: 1024,
				number_of_images: 1,
				steps: 4,
				seed: -1,
				max_n: 1,
				response_format: "b64_json",
			},
		},
	},
	{
		name: "meta-llama/Llama-3-70b-chat-hf",
		label: "Meta Llama 3 70B Instruct Reference",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.88,
			outputCost: 0.88,
		},
		metadata: {
			uuid: "endpoint-05785dc7-4ac6-4d06-af9a-cffc556ba65e",
			link: "https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct",
			description:
				"Llama 3 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.",
			config: {
				stop: ["<|eot_id|>"],
				chat_template:
					"{% set loop_messages = messages %}{% for message in loop_messages %}{% set content = '<|start_header_id|>' + message['role'] + '<|end_header_id|>\n\n'+ message['content'] | trim + '<|eot_id|>' %}{% if loop.index0 == 0 %}{% set content = bos_token + content %}{% endif %}{{ content }}{% endfor %}{{ '<|start_header_id|>assistant<|end_header_id|>\n\n' }}",
				bos_token: "<|begin_of_text|>",
				eos_token: "<|end_of_text|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "mistralai/Mistral-7B-Instruct-v0.3",
		label: "Mistral (7B) Instruct v0.3",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 32768,
		},
		cost: {
			inputCost: 0.2,
			outputCost: 0.2,
		},
		metadata: {
			uuid: "endpoint-0830fdf1-35d2-4722-9b1f-b799f85f9997",
			link: "https://huggingface.co/api/models/mistralai/Mistral-7B-Instruct-v0.3",
			description:
				"The Mistral-7B-Instruct-v0.3 Large Language Model (LLM) is an instruct fine-tuned version of the Mistral-7B-v0.3.",
			config: {
				stop: ["</s>"],
				chat_template:
					"{% if messages[0]['role'] == 'system' %}{% set loop_messages = messages[1:] %}{% set system_message = messages[0]['content'] %}{% else %}{% set loop_messages = messages %}{% set system_message = false %}{% endif %}{% for message in loop_messages %}{% if loop.index0 == 0 and system_message != false %}{% set content = '<<SYS>>\\n' + system_message + '\\n<</SYS>>\\n\\n' + message['content'] %}{% else %}{% set content = message['content'] %}{% endif %}{% if message['role'] == 'user' or message['role'] == 'tool' %}{{ bos_token + '[INST] ' + content + ' [/INST]' }}{% elif message['role'] == 'system' %}{{ '<<SYS>>\\n' + content + '\\n<</SYS>>\\n\\n' }}{% elif message['role'] == 'assistant' %}{{ ' '  + content + ' ' + eos_token }}{% endif %}{% endfor %}",
				bos_token: "<s>",
				eos_token: "</s>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "meta-llama-llama-2-70b-hf",
		label: "LLaMA-2 (70B)",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 4096,
		},
		cost: {
			inputCost: 0.9,
			outputCost: 0.9,
		},
		metadata: {
			uuid: "endpoint-291a09ed-e013-477f-b4eb-1606b88d6d61",
			link: "https://huggingface.co/api/models/meta-llama/Llama-2-70b-hf",
			description:
				"The LLaMA-2 model is a large language model trained on a mixture of data sources.",
			config: {
				stop: ["</s>"],
				chat_template: null,
				bos_token: "<s>",
				eos_token: "</s>",
			},
		},
	},
	{
		name: "microsoft/WizardLM-2-8x22B",
		label: "WizardLM-2 (8x22B)",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 65536,
		},
		cost: {
			inputCost: 1.2,
			outputCost: 1.2,
		},
		metadata: {
			uuid: "endpoint-6e540087-2b79-495d-be98-379b8a57dd6f",
			link: "https://huggingface.co/microsoft/WizardLM-2-8x22B",
			description:
				"WizardLM-2 8x22B is Wizard's most advanced model, demonstrates highly competitive performance compared to those leading proprietary works and consistently outperforms all the existing state-of-the-art opensource models.",
			config: {
				stop: ["</s>"],
				chat_template:
					"{% for message in messages %}{{message['role'].toLocaleUpperCase() + ': ' + message['content'] + '\n'}}{% endfor %}{{ 'ASSISTANT: ' }}",
				bos_token: "<s>",
				eos_token: "</s>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "BAAI/bge-base-en-v1.5",
		label: "BAAI-Bge-Base-1.5",
		provider: "Together",
		type: "embedding",
		modalities: [],
		context: {
			maxTokens: 512,
		},
		cost: {
			inputCost: 0.008,
			outputCost: 0.008,
		},
		metadata: {
			uuid: "endpoint-9a567e7b-15a8-40b7-b8b1-b5ae0f2163d1",
			link: "https://huggingface.co/api/models/BAAI/bge-base-en-v1.5",
			description:
				"bge is short for BAAI general embedding, it maps any text to a low-dimensional dense vector using FlagEmbedding",
			config: {
				stop: [],
				chat_template: null,
				bos_token: "[PAD]",
				eos_token: null,
			},
		},
	},
	{
		name: "stabilityai/stable-diffusion-xl-base-1.0",
		label: "Stable Diffusion XL 1.0",
		provider: "Together",
		type: "image-generation",
		modalities: [],
		context: {},
		cost: {},
		metadata: {
			uuid: "endpoint-ef36cb8c-adef-4f47-a6cb-11d2b74fe869",
			link: "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0",
			description:
				"A text-to-image generative AI model that excels at creating 1024x1024 images.",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
				height: 1024,
				width: 1024,
				number_of_images: 4,
				steps: 40,
				seed: 1000,
				response_format: "b64_json",
			},
		},
	},
	{
		name: "Gryphe/MythoMax-L2-13b",
		label: "MythoMax-L2 (13B)",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 4096,
		},
		cost: {
			inputCost: 0.3,
			outputCost: 0.3,
		},
		metadata: {
			uuid: "endpoint-fb32c8ad-0392-49f7-8083-5bdc38d07024",
			description:
				"MythoLogic-L2 and Huginn merge using a highly experimental tensor type merge technique. The main difference with MythoMix is that I allowed more of Huginn to intermingle with the single tensors located at the front and end of a model",
			config: {
				stop: ["</s>"],
				chat_template:
					"{% for message in messages %}{% if message['role'] == 'user' %}{{ '### Instruction:\n' + message['content'] + '\n' }}{% else %}{{ '### Response:\n' + message['content'] + '\n' }}{% endif %}{% endfor %}{{ '### Response:' }}",
				bos_token: null,
				eos_token: null,
			},
		},
	},
	{
		name: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo-classifier",
		label: "Meta Llama 3.1 8B Instruct Turbo",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 131072,
		},
		cost: {
			inputCost: 0.18,
			outputCost: 0.18,
		},
		metadata: {
			uuid: "endpoint-b29b431f-6184-4685-9abc-b4d39cdc771d",
			link: "https://huggingface.co/meta-llama/Meta-Llama-3.1-8B-Instruct",
			description:
				"Llama 3.1 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.",
			config: {
				stop: ["<|eot_id|>", "<|eom_id|>"],
				chat_template:
					'{{- bos_token }}\n{%- if custom_tools is defined %}\n    {%- set tools = custom_tools %}\n{%- endif %}\n{%- if not tools_in_user_message is defined %}\n    {%- set tools_in_user_message = true %}\n{%- endif %}\n{%- if not date_string is defined %}\n    {%- set date_string = "26 Jul 2024" %}\n{%- endif %}\n\n{#- This block extracts the system message, so we can slot it into the right place. #}\n{%- if messages[0][\'role\'] == \'system\' %}\n    {%- set system_message = messages[0][\'content\']|trim %}\n    {%- set messages = messages[1:] %}\n{%- else %}\n    {%- set system_message = "" %}\n{%- endif %}\n\n{#- System message + builtin tools #}\n{{- "<|start_header_id|>system<|end_header_id|>\n\n" }}\n{%- if builtin_tools is defined or tools %}\n    {{- "Environment: ipython\n" }}\n{%- endif %}\n{%- if builtin_tools is defined %}\n    {{- "Tools: " + builtin_tools | reject(\'equalto\', \'code_interpreter\') | join(", ") + "\n\n"}}\n{%- endif %}\n{{- "Cutting Knowledge Date: December 2023\n" }}\n{{- "Today Date: " + date_string + "\n\n" }}\n{%- if tools %}\n    {{- "You have access to the following functions:\n\n" }}{%- for t in tools %}\n        {{- "Use the function \'" + t.function.name + "\' to \'" + t.function.description + "\'\n" }}\n        {{- t.function | dump(4) }}\n        {{- "\n\n" }}\n    {%- endfor %}\n{% raw %}If a you choose to call a function ONLY reply in the following format:\n<{start_tag}={function_name}>{parameters}{end_tag}\nwhere\n\nstart_tag => `<function`\nparameters => a JSON dict with the function argument name as key and function argument value as value.\nend_tag => `</function>`\n\nHere is an example,\n<function=example_function_name>{"example_name": "example_value"}</function>\n\nReminder:\n- Function calls MUST follow the specified format\n- Required parameters MUST be specified\n- Only call one function at a time\n- Put the entire function call reply on one line\n- Always add your sources when using search results to answer the user query\n\n{% endraw %}{%- endif %}\n{{- system_message }}\n{{- "<|eot_id|>" }}\n\n{%- for message in messages %}\n    {%- if not (message.role == \'ipython\' or message.role == \'tool\' or \'tool_calls\' in message) %}\n        {{- \'<|start_header_id|>\' + message[\'role\'] + \'<|end_header_id|>\n\n\'+ message[\'content\'] | trim + \'<|eot_id|>\' }}\n    {%- elif \'tool_calls\' in message %}\n        {%- if not message.tool_calls|length == 1 %}\n            {{- raise_exception("This model only supports single tool-calls at once!") }}\n        {%- endif %}\n        {%- set tool_call = message.tool_calls[0].function %}\n        {%- if builtin_tools is defined and tool_call.name in builtin_tools %}\n            {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' -}}\n            {{- "<|python_tag|>" + tool_call.name + ".call(" }}\n            {%- for arg_name, arg_val in tool_call.arguments | items %}\n                {{- arg_name + \'="\' + arg_val + \'"\' }}\n                {%- if not loop.last %}\n                    {{- ", " }}\n                {%- endif %}\n                {%- endfor %}\n            {{- ")" }}\n        {%- else  %}\n            {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' -}}\n            {{- \'{"name": "\' + tool_call.name + \'", \' }}\n            {{- \'"parameters": \' }}\n            {{- tool_call.arguments | dump }}\n            {{- "}" }}\n        {%- endif %}\n        {%- if builtin_tools is defined %}\n            {#- This means we\'re in ipython mode #}\n            {{- "<|eom_id|>" }}\n        {%- else %}\n            {{- "<|eot_id|>" }}\n        {%- endif %}\n    {%- elif message.role == "tool" or message.role == "ipython" %}\n        {{- "<|start_header_id|>ipython<|end_header_id|>\n\n" }}\n        {%- if message.content is mapping or message.content is iterable %}\n            {{- message.content | dump }}\n        {%- else %}\n            {{- message.content }}\n        {%- endif %}\n        {{- "<|eot_id|>" }}\n    {%- endif %}\n{%- endfor %}\n{%- if add_generation_prompt %}\n    {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' }}{%- endif %}',
				bos_token: "<|begin_of_text|>",
				eos_token: "<|eot_id|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "nvidia/Llama-3.1-Nemotron-70B-Instruct-HF",
		label: "Llama 3.1 Nemotron 70B Instruct HF",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 32768,
		},
		cost: {
			inputCost: 0.88,
			outputCost: 0.88,
		},
		metadata: {
			uuid: "endpoint-a1b84afe-8242-42a6-8288-68773f507684",
			link: "https://huggingface.co/nvidia/Llama-3.1-Nemotron-70B-Instruct-HF",
			description:
				"Llama-3.1-Nemotron-70B-Instruct is a large language model customized by NVIDIA to improve the helpfulness of LLM generated responses to user queries.",
			config: {
				stop: ["<|eot_id|>", "<|eom_id|>"],
				chat_template:
					'{{- bos_token }}\n{%- if custom_tools is defined %}\n    {%- set tools = custom_tools %}\n{%- endif %}\n{%- if not tools_in_user_message is defined %}\n    {%- set tools_in_user_message = true %}\n{%- endif %}\n{%- if not date_string is defined %}\n    {%- set date_string = "26 Jul 2024" %}\n{%- endif %}\n{%- if not tools is defined %}\n    {%- set tools = none %}\n{%- endif %}\n\n{#- This block extracts the system message, so we can slot it into the right place. #}\n{%- if messages[0][\'role\'] == \'system\' %}\n    {%- set system_message = messages[0][\'content\']|trim %}\n    {%- set messages = messages[1:] %}\n{%- else %}\n    {%- set system_message = "" %}\n{%- endif %}\n\n{#- System message + builtin tools #}\n{{- "<|start_header_id|>system<|end_header_id|>\\n\\n" }}\n{%- if builtin_tools is defined or tools is not none %}\n    {{- "Environment: ipython\\n" }}\n{%- endif %}\n{%- if builtin_tools is defined %}\n    {{- "Tools: " + builtin_tools | reject(\'equalto\', \'code_interpreter\') | join(", ") + "\\n\\n"}}\n{%- endif %}\n\n{%- if tools is not none and not tools_in_user_message %}\n    {{- "You have access to the following functions. To call a function, please respond with JSON for a function call." }}\n    {{- \'Respond in the format {"name": function name, "parameters": dictionary of argument name and its value}.\' }}\n    {{- "Do not use variables.\\n\\n" }}\n    {%- for t in tools %}\n        {{- t | tojson(indent=4) }}\n        {{- "\\n\\n" }}\n    {%- endfor %}\n{%- endif %}\n{{- system_message }}\n{{- "<|eot_id|>" }}\n\n{#- Custom tools are passed in a user message with some extra guidance #}\n{%- if tools_in_user_message and not tools is none %}\n    {#- Extract the first user message so we can plug it in here #}\n    {%- if messages | length != 0 %}\n        {%- set first_user_message = messages[0][\'content\']|trim %}\n        {%- set messages = messages[1:] %}\n    {%- else %}\n        {{- raise_exception("Cannot put tools in the first user message when there\'s no first user message!") }}\n{%- endif %}\n    {{- \'<|start_header_id|>user<|end_header_id|>\\n\\n\' -}}\n    {{- "Given the following functions, please respond with a JSON for a function call " }}\n    {{- "with its proper arguments that best answers the given prompt.\\n\\n" }}\n    {{- \'Respond in the format {"name": function name, "parameters": dictionary of argument name and its value}.\' }}\n    {{- "Do not use variables.\\n\\n" }}\n    {%- for t in tools %}\n        {{- t | tojson(indent=4) }}\n        {{- "\\n\\n" }}\n    {%- endfor %}\n    {{- first_user_message + "<|eot_id|>"}}\n{%- endif %}\n\n{%- for message in messages %}\n    {%- if not (message.role == \'ipython\' or message.role == \'tool\' or \'tool_calls\' in message) %}\n        {{- \'<|start_header_id|>\' + message[\'role\'] + \'<|end_header_id|>\\n\\n\'+ message[\'content\'] | trim + \'<|eot_id|>\' }}\n    {%- elif \'tool_calls\' in message %}\n        {%- if not message.tool_calls|length == 1 %}\n            {{- raise_exception("This model only supports single tool-calls at once!") }}\n        {%- endif %}\n        {%- set tool_call = message.tool_calls[0].function %}\n        {%- if builtin_tools is defined and tool_call.name in builtin_tools %}\n            {{- \'<|start_header_id|>assistant<|end_header_id|>\\n\\n\' -}}\n            {{- "<|python_tag|>" + tool_call.name + ".call(" }}\n            {%- for arg_name, arg_val in tool_call.arguments | items %}\n                {{- arg_name + \'="\' + arg_val + \'"\' }}\n                {%- if not loop.last %}\n                    {{- ", " }}\n                {%- endif %}\n                {%- endfor %}\n            {{- ")" }}\n        {%- else  %}\n            {{- \'<|start_header_id|>assistant<|end_header_id|>\\n\\n\' -}}\n            {{- \'{"name": "\' + tool_call.name + \'", \' }}\n            {{- \'"parameters": \' }}\n            {{- tool_call.arguments | tojson }}\n            {{- "}" }}\n        {%- endif %}\n        {%- if builtin_tools is defined %}\n            {#- This means we\'re in ipython mode #}\n            {{- "<|eom_id|>" }}\n        {%- else %}\n            {{- "<|eot_id|>" }}\n        {%- endif %}\n    {%- elif message.role == "tool" or message.role == "ipython" %}\n        {{- "<|start_header_id|>ipython<|end_header_id|>\\n\\n" }}\n        {%- if message.content is mapping or message.content is iterable %}\n            {{- message.content | tojson }}\n        {%- else %}\n            {{- message.content }}\n        {%- endif %}\n        {{- "<|eot_id|>" }}\n    {%- endif %}\n{%- endfor %}\n{%- if add_generation_prompt %}\n    {{- \'<|start_header_id|>assistant<|end_header_id|>\\n\\n\' }}\n{%- endif %}\n',
				bos_token: "<|begin_of_text|>",
				eos_token: "<|eot_id|>",
			},
		},
	},
	{
		name: "meta-llama/Llama-Vision-Free",
		label: "Meta Llama Vision Free",
		provider: "Together",
		type: "chat",
		modalities: ["vision"],
		context: {
			maxTokens: 131072,
		},
		cost: {},
		metadata: {
			uuid: "endpoint-4a176456-460e-4a85-a494-58b6fd7bdae6",
			link: "https://huggingface.co/meta-llama/Llama-3.2-11B-Vision-Instruct",
			description:
				"Llama 3.2 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.",
			config: {
				stop: ["<|eot_id|>", "<|eom_id|>"],
				chat_template:
					"{% for message in messages %}\n{% if loop.index0 == 0 %}{{ bos_token }}{% endif %}\n{{ '<|start_header_id|>' + message['role'] + '<|end_header_id|>\\n\\n' }}\n{% if message['content'] is string %}\n{{ message['content'] }}\n{% else %}\n{% for content in message['content'] | sort(attribute=\"type\") %}\n{% if content['type'] == 'image' %}\n{{ '<|image|>' }}\n{% elif content['type'] == 'text' %}\n{{ content['text'] }}\n{% endif %}\n{% endfor %}\n{% endif %}\n{{ '<|eot_id|>' }}\n{% endfor %}\n{% if add_generation_prompt %}\n{{ '<|start_header_id|>assistant<|end_header_id|>\\n\\n' }}\n{% endif %}",
				bos_token: "<|begin_of_text|>",
				eos_token: "<|eot_id|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
		label: "Meta Llama 3.1 8B Instruct Turbo",
		provider: "Together",
		type: "chat",
		modalities: ["response-schema", "function-call", "tool-choice"],
		context: {
			maxTokens: 131072,
		},
		cost: {
			inputCost: 0.18,
			outputCost: 0.18,
		},
		metadata: {
			uuid: "endpoint-b29b431f-6184-4685-9abc-b4d39cdc771d",
			link: "https://huggingface.co/meta-llama/Meta-Llama-3.1-8B-Instruct",
			description:
				"Llama 3.1 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.",
			config: {
				stop: ["<|eot_id|>", "<|eom_id|>"],
				chat_template:
					'{{- bos_token }}\n{%- if custom_tools is defined %}\n    {%- set tools = custom_tools %}\n{%- endif %}\n{%- if not tools_in_user_message is defined %}\n    {%- set tools_in_user_message = true %}\n{%- endif %}\n{%- if not date_string is defined %}\n    {%- set date_string = "26 Jul 2024" %}\n{%- endif %}\n\n{#- This block extracts the system message, so we can slot it into the right place. #}\n{%- if messages[0][\'role\'] == \'system\' %}\n    {%- set system_message = messages[0][\'content\']|trim %}\n    {%- set messages = messages[1:] %}\n{%- else %}\n    {%- set system_message = "" %}\n{%- endif %}\n\n{#- System message + builtin tools #}\n{{- "<|start_header_id|>system<|end_header_id|>\n\n" }}\n{%- if builtin_tools is defined or tools %}\n    {{- "Environment: ipython\n" }}\n{%- endif %}\n{%- if builtin_tools is defined %}\n    {{- "Tools: " + builtin_tools | reject(\'equalto\', \'code_interpreter\') | join(", ") + "\n\n"}}\n{%- endif %}\n{{- "Cutting Knowledge Date: December 2023\n" }}\n{{- "Today Date: " + date_string + "\n\n" }}\n{%- if tools %}\n    {{- "You have access to the following functions:\n\n" }}{%- for t in tools %}\n        {{- "Use the function \'" + t.function.name + "\' to \'" + t.function.description + "\'\n" }}\n        {{- t.function | dump(4) }}\n        {{- "\n\n" }}\n    {%- endfor %}\n{% raw %}If a you choose to call a function ONLY reply in the following format:\n<{start_tag}={function_name}>{parameters}{end_tag}\nwhere\n\nstart_tag => `<function`\nparameters => a JSON dict with the function argument name as key and function argument value as value.\nend_tag => `</function>`\n\nHere is an example,\n<function=example_function_name>{"example_name": "example_value"}</function>\n\nReminder:\n- Function calls MUST follow the specified format\n- Required parameters MUST be specified\n- Only call one function at a time\n- Put the entire function call reply on one line\n- Always add your sources when using search results to answer the user query\n\n{% endraw %}{%- endif %}\n{{- system_message }}\n{{- "<|eot_id|>" }}\n\n{%- for message in messages %}\n    {%- if not (message.role == \'ipython\' or message.role == \'tool\' or \'tool_calls\' in message) %}\n        {{- \'<|start_header_id|>\' + message[\'role\'] + \'<|end_header_id|>\n\n\'+ message[\'content\'] | trim + \'<|eot_id|>\' }}\n    {%- elif \'tool_calls\' in message %}\n        {%- if not message.tool_calls|length == 1 %}\n            {{- raise_exception("This model only supports single tool-calls at once!") }}\n        {%- endif %}\n        {%- set tool_call = message.tool_calls[0].function %}\n        {%- if builtin_tools is defined and tool_call.name in builtin_tools %}\n            {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' -}}\n            {{- "<|python_tag|>" + tool_call.name + ".call(" }}\n            {%- for arg_name, arg_val in tool_call.arguments | items %}\n                {{- arg_name + \'="\' + arg_val + \'"\' }}\n                {%- if not loop.last %}\n                    {{- ", " }}\n                {%- endif %}\n                {%- endfor %}\n            {{- ")" }}\n        {%- else  %}\n            {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' -}}\n            {{- \'{"name": "\' + tool_call.name + \'", \' }}\n            {{- \'"parameters": \' }}\n            {{- tool_call.arguments | dump }}\n            {{- "}" }}\n        {%- endif %}\n        {%- if builtin_tools is defined %}\n            {#- This means we\'re in ipython mode #}\n            {{- "<|eom_id|>" }}\n        {%- else %}\n            {{- "<|eot_id|>" }}\n        {%- endif %}\n    {%- elif message.role == "tool" or message.role == "ipython" %}\n        {{- "<|start_header_id|>ipython<|end_header_id|>\n\n" }}\n        {%- if message.content is mapping or message.content is iterable %}\n            {{- message.content | dump }}\n        {%- else %}\n            {{- message.content }}\n        {%- endif %}\n        {{- "<|eot_id|>" }}\n    {%- endif %}\n{%- endfor %}\n{%- if add_generation_prompt %}\n    {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' }}{%- endif %}',
				bos_token: "<|begin_of_text|>",
				eos_token: "<|eot_id|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "mistralai/Mixtral-8x22B-Instruct-v0.1",
		label: "Mixtral-8x22B Instruct v0.1",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 65536,
		},
		cost: {
			inputCost: 1.2,
			outputCost: 1.2,
		},
		metadata: {
			uuid: "endpoint-552dd530-c1f5-49b6-ad33-c68a87bf8600",
			link: "https://huggingface.co/mistralai/Mixtral-8x22B-Instruct-v0.1",
			description:
				"The Mixtral-8x22B-Instruct-v0.1 Large Language Model (LLM) is an instruct fine-tuned version of the Mixtral-8x22B-v0.1.",
			config: {
				stop: ["</s>", "[/INST]"],
				chat_template:
					"{{bos_token}}{% if messages[0]['role'] == 'system' %}{% set loop_messages = messages[1:] %}{% set system_message = messages[0]['content'] %}{% else %}{% set loop_messages = messages %}{% set system_message = false %}{% endif %}{% for message in loop_messages %}{% if loop.index0 == 0 and system_message != false %}{% set content = '<<SYS>>\n' + system_message + '\n<</SYS>>\n\n' + message['content'] %}{% else %}{% set content = message['content'] %}{% endif %}{% if message['role'] == 'user' %}{{ ' [INST] ' + content + ' [/INST]' }}{% elif message['role'] == 'system' %}{{ '<<SYS>>\n' + content + '\n<</SYS>>\n\n' }}{% elif message['role'] == 'assistant' %}{{ ' '  + content + ' ' + eos_token }}{% endif %}{% endfor %}",
				bos_token: "<s>",
				eos_token: "</s>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO",
		label: "Nous Hermes 2 - Mixtral 8x7B-DPO ",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 32768,
		},
		cost: {
			inputCost: 0.6,
			outputCost: 0.6,
		},
		metadata: {
			uuid: "endpoint-1ff3cab2-a24e-42a3-b839-c5922536e48a",
			link: "https://huggingface.co/NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO",
			description:
				"Nous Hermes 2 Mixtral 7bx8 DPO is the new flagship Nous Research model trained over the Mixtral 7bx8 MoE LLM. The model was trained on over 1,000,000 entries of primarily GPT-4 generated data, as well as other high quality data from open datasets across the AI landscape, achieving state of the art performance on a variety of tasks.",
			config: {
				stop: ["<|im_end|>", "<|im_start|>"],
				chat_template:
					"{% for message in messages %}{{'<|im_start|>' + message['role'] + '\n' + message['content'] + '<|im_end|>' + '\n'}}{% endfor %}{% if add_generation_prompt %}{{ '<|im_start|>assistant\n' }}{% endif %}",
				bos_token: null,
				eos_token: null,
				max_tokens: 2048,
			},
		},
	},
	{
		name: "meta-llama/LlamaGuard-2-8b",
		label: "Meta Llama Guard 2 8B",
		provider: "Together",
		type: "moderation",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.2,
			outputCost: 0.2,
		},
		metadata: {
			uuid: "endpoint-44385e7e-2672-4163-a442-6123f16079f0",
			link: null,
			description: "",
			config: {
				stop: [],
				chat_template:
					"{% if messages.length % 2 == 0 %}{% set final_role = 'Agent' %}{% else %}{% set final_role = 'User' %}{% endif %}[INST] Task: Check if there is unsafe content in '{{ final_role }}' messages in conversations according our safety policy with the below categories.\n\n<BEGIN UNSAFE CONTENT CATEGORIES>\nS1: Violent Crimes.\nS2: Non-Violent Crimes.\nS3: Sex Crimes.\nS4: Child Exploitation.\nS5: Specialized Advice.\nS6: Privacy.\nS7: Intellectual Property.\nS8: Indiscriminate Weapons.\nS9: Hate.\nS10: Self-Harm.\nS11: Sexual Content.\n<END UNSAFE CONTENT CATEGORIES>\n\n<BEGIN CONVERSATION>\n\n{% for message in messages %}{% if message['role'] == 'user' and loop.index0 % 2 == 0 %}User: {{ message['content'].trim() }}{% elif message['role'] == 'assistant' and loop.index0 % 2 != 0 %}Agent: {{ message['content'].trim() }}{% else %}{{ raise_exception('Conversation roles must alternate user/assistant/user/assistant/...') }}{% endif %}{% if loop.last %}{% set role = message['role'] %}{% endif %}{{ '\n\n' }}{% endfor %}<END CONVERSATION>\n\nProvide your safety assessment for ONLY THE LAST {{ role }} message in the above conversation:\n - First line must read 'safe' or 'unsafe'.\n - If unsafe, a second line must include a comma-separated list of violated categories. [/INST]",
				bos_token: null,
				eos_token: null,
			},
		},
	},
	{
		name: "cartesia/sonic-2",
		label: "Cartesia/Sonic-2",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 0,
		},
		cost: {
			inputCost: 65,
		},
		metadata: {
			link: "https://www.cartesia.ai",
			description: "Cartesian Sonic 2 model that generate audio from a prompt",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
			},
		},
	},
	{
		name: "togethercomputer/m2-bert-80M-8k-retrieval",
		label: "M2-BERT-Retrieval-8k",
		provider: "Together",
		type: "embedding",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.008,
			outputCost: 0.008,
		},
		metadata: {
			uuid: "endpoint-be1d99be-671b-4167-be42-22956ed934a6",
			link: "https://huggingface.co/togethercomputer/m2-bert-80M-8k-retrieval",
			description:
				"The 80M checkpoint for M2-BERT-base from the paper Monarch Mixer: A Simple Sub-Quadratic GEMM-Based Architecture with sequence length 8192, and it has been fine-tuned for retrieval.",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
			},
		},
	},
	{
		name: "mistralai/Mixtral-8x7B-Instruct-v0.1",
		label: "Mixtral-8x7B Instruct v0.1",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 32768,
		},
		cost: {
			inputCost: 0.6,
			outputCost: 0.6,
		},
		metadata: {
			uuid: "endpoint-14e525c7-aa72-46f4-981d-1bdbf2f83dde",
			link: "https://huggingface.co/mistralai/Mixtral-8x7B-Instruct-v0.1",
			description:
				"The Mixtral-8x7B Large Language Model (LLM) is a pretrained generative Sparse Mixture of Experts.",
			config: {
				stop: ["[/INST]", "</s>"],
				chat_template:
					"{% if messages[0]['role'] == 'system' %}{% set loop_messages = messages[1:] %}{% set system_message = messages[0]['content'] %}{% else %}{% set loop_messages = messages %}{% set system_message = false %}{% endif %}{% for message in loop_messages %}{% if loop.index0 == 0 and system_message != false %}{% set content = '<<SYS>>\\n' + system_message + '\\n<</SYS>>\\n\\n' + message['content'] %}{% else %}{% set content = message['content'] %}{% endif %}{% if message['role'] == 'user' or message['role'] == 'tool' %}{{ bos_token + '[INST] ' + content + ' [/INST]' }}{% elif message['role'] == 'system' %}{{ '<<SYS>>\\n' + content + '\\n<</SYS>>\\n\\n' }}{% elif message['role'] == 'assistant' %}{{ ' '  + content + ' ' + eos_token }}{% endif %}{% endfor %}",
				bos_token: "<s>",
				eos_token: "</s>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
		label: "Meta Llama 3.3 70B Instruct Turbo Free",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 131072,
		},
		cost: {},
		metadata: {
			link: "https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct",
			description:
				"The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model is optimized for multilingual dialogue use cases and outperform many of the available open source and closed chat models on common industry benchmarks.",
			config: {
				stop: ["<|eot_id|>", "<|eom_id|>"],
				chat_template:
					'{{- bos_token }}\n{%- if custom_tools is defined %}\n    {%- set tools = custom_tools %}\n{%- endif %}\n{%- if not tools_in_user_message is defined %}\n    {%- set tools_in_user_message = true %}\n{%- endif %}\n{%- if not date_string is defined %}\n    {%- set date_string = "26 Jul 2024" %}\n{%- endif %}\n\n{#- This block extracts the system message, so we can slot it into the right place. #}\n{%- if messages[0][\'role\'] == \'system\' %}\n    {%- set system_message = messages[0][\'content\']|trim %}\n    {%- set messages = messages[1:] %}\n{%- else %}\n    {%- set system_message = "" %}\n{%- endif %}\n\n{#- System message + builtin tools #}\n{{- "<|start_header_id|>system<|end_header_id|>\n\n" }}\n{%- if builtin_tools is defined or tools %}\n    {{- "Environment: ipython\n" }}\n{%- endif %}\n{%- if builtin_tools is defined %}\n    {{- "Tools: " + builtin_tools | reject(\'equalto\', \'code_interpreter\') | join(", ") + "\n\n"}}\n{%- endif %}\n{{- "Cutting Knowledge Date: December 2023\n" }}\n{{- "Today Date: " + date_string + "\n\n" }}\n{%- if tools %}\n    {{- "You have access to the following functions:\n\n" }}{%- for t in tools %}\n        {{- "Use the function \'" + t.function.name + "\' to \'" + t.function.description + "\'\n" }}\n        {{- t.function | dump(4) }}\n        {{- "\n\n" }}\n    {%- endfor %}\n{% raw %}If a you choose to call a function ONLY reply in the following format:\n<{start_tag}={function_name}>{parameters}{end_tag}\nwhere\n\nstart_tag => `<function`\nparameters => a JSON dict with the function argument name as key and function argument value as value.\nend_tag => `</function>`\n\nHere is an example,\n<function=example_function_name>{"example_name": "example_value"}</function>\n\nReminder:\n- Function calls MUST follow the specified format\n- Required parameters MUST be specified\n- Only call one function at a time\n- Put the entire function call reply on one line\n- Always add your sources when using search results to answer the user query\n\n{% endraw %}{%- endif %}\n{{- system_message }}\n{{- "<|eot_id|>" }}\n\n{%- for message in messages %}\n    {%- if not (message.role == \'ipython\' or message.role == \'tool\' or \'tool_calls\' in message) %}\n        {{- \'<|start_header_id|>\' + message[\'role\'] + \'<|end_header_id|>\n\n\'+ message[\'content\'] | trim + \'<|eot_id|>\' }}\n    {%- elif \'tool_calls\' in message %}\n        {%- if not message.tool_calls|length == 1 %}\n            {{- raise_exception("This model only supports single tool-calls at once!") }}\n        {%- endif %}\n        {%- set tool_call = message.tool_calls[0].function %}\n        {%- if builtin_tools is defined and tool_call.name in builtin_tools %}\n            {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' -}}\n            {{- "<|python_tag|>" + tool_call.name + ".call(" }}\n            {%- for arg_name, arg_val in tool_call.arguments | items %}\n                {{- arg_name + \'="\' + arg_val + \'"\' }}\n                {%- if not loop.last %}\n                    {{- ", " }}\n                {%- endif %}\n                {%- endfor %}\n            {{- ")" }}\n        {%- else  %}\n            {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' -}}\n            {{- \'{"name": "\' + tool_call.name + \'", \' }}\n            {{- \'"parameters": \' }}\n            {{- tool_call.arguments | dump }}\n            {{- "}" }}\n        {%- endif %}\n        {%- if builtin_tools is defined %}\n            {#- This means we\'re in ipython mode #}\n            {{- "<|eom_id|>" }}\n        {%- else %}\n            {{- "<|eot_id|>" }}\n        {%- endif %}\n    {%- elif message.role == "tool" or message.role == "ipython" %}\n        {{- "<|start_header_id|>ipython<|end_header_id|>\n\n" }}\n        {%- if message.content is mapping or message.content is iterable %}\n            {{- message.content | dump }}\n        {%- else %}\n            {{- message.content }}\n        {%- endif %}\n        {{- "<|eot_id|>" }}\n    {%- endif %}\n{%- endfor %}\n{%- if add_generation_prompt %}\n    {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' }}{%- endif %}',
				bos_token: "<|begin_of_text|>",
				eos_token: "<|eot_id|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "upstage/SOLAR-10.7B-Instruct-v1.0",
		label: "Upstage SOLAR Instruct v1 (11B)",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 4096,
		},
		cost: {
			inputCost: 0.3,
			outputCost: 0.3,
		},
		metadata: {
			uuid: "endpoint-969de050-d8c6-4adc-ad8c-d6b33f5c60ca",
			description:
				"Built on the Llama2 architecture, SOLAR-10.7B incorporates the innovative Upstage Depth Up-Scaling",
			config: {
				stop: ["</s>", "###"],
				chat_template:
					"{% for message in messages %}{% if message['role'] == 'system' %}{% if message['content']%}{{'### System:\n' + message['content']+'\n\n'}}{% endif %}{% elif message['role'] == 'user' %}{{'### User:\n' + message['content']+'\n\n'}}{% elif message['role'] == 'assistant' %}{{'### Assistant:\n'  + message['content']}}{% endif %}{% if loop.last and add_generation_prompt %}{{ '### Assistant:\n' }}{% endif %}{% endfor %}",
				bos_token: null,
				eos_token: null,
			},
		},
	},
	{
		name: "togethercomputer/MoA-1",
		label: "Together AI MoA-1",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 32768,
		},
		cost: {},
		metadata: {
			uuid: "model-6c5d1e00-16b2-48f9-9053-adedc7b339cf",
			link: "https://github.com/togethercomputer/MoA",
			description:
				"Mixture of Agents (MoA) is a novel approach that leverages the collective strengths of multiple LLMs to enhance performance, achieving state-of-the-art results",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
			},
		},
	},
	{
		name: "scb10x/scb10x-llama3-typhoon-v1-5-8b-instruct",
		label: "Typhoon 1.5 8B Instruct",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.18,
			outputCost: 0.18,
		},
		metadata: {
			uuid: "endpoint-6bcc6770-f91d-4894-bec9-f3cea5953fa3",
			link: "https://huggingface.co/scb10x/llama-3-typhoon-v1.5-8b-instruct",
			description:
				"Llama-3-Typhoon-v1.5-8B-Instruct is an instruct Thai 🇹🇭 large language model with 8 billion parameters, and it is based on Llama3-8B.",
			config: {
				stop: ["<|eot_id|>"],
				chat_template:
					"{% set loop_messages = messages %}{% for message in loop_messages %}{% set content = '<|start_header_id|>' + message['role'] + '<|end_header_id|>\n\n'+ message['content'] | trim + '<|eot_id|>' %}{% if loop.index0 == 0 %}{% set content = bos_token + content %}{% endif %}{{ content }}{% endfor %}{% if add_generation_prompt %}{{ '<|start_header_id|>assistant<|end_header_id|>\n\n' }}{% endif %}",
				bos_token: "<|startoftext|>",
				eos_token: "<|end_of_text|>",
			},
		},
	},
	{
		name: "scb10x/scb10x-llama3-typhoon-v1-5x-4f316",
		label: "Typhoon 1.5X 70B-awq",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.88,
			outputCost: 0.88,
		},
		metadata: {
			uuid: "endpoint-aa3aac52-eb95-4b87-a192-117f5bb72562",
			link: "https://huggingface.co/scb10x/llama-3-typhoon-v1.5x-70b-instruct-awq",
			description:
				"Llama-3-Typhoon-v1.5X-70B-instruct is a 70 billion parameter instruct  model designed for the Thai 🇹🇭 language. It demonstrates  competitive performance with GPT-4-0612, and is optimized for application use cases,  Retrieval-Augmented Generation (RAG), constrained generation, and reasoning tasks.",
			config: {
				stop: ["<|eot_id|>"],
				chat_template:
					"{% set loop_messages = messages %}{% for message in loop_messages %}{% set content = '<|start_header_id|>' + message['role'] + '<|end_header_id|>\n\n'+ message['content'] | trim + '<|eot_id|>' %}{% if loop.index0 == 0 %}{% set content = bos_token + content %}{% endif %}{{ content }}{% endfor %}{% if add_generation_prompt %}{{ '<|start_header_id|>assistant<|end_header_id|>\n\n' }}{% endif %}",
				bos_token: "<|startoftext|>",
				eos_token: "<|end_of_text|>",
			},
		},
	},
	{
		name: "deepseek-ai/DeepSeek-V3",
		label: "DeepSeek V3-0324",
		provider: "Together",
		type: "chat",
		modalities: ["response-schema"],
		context: {
			maxTokens: 131072,
		},
		cost: {
			inputCost: 1.25,
			outputCost: 1.25,
		},
		metadata: {
			uuid: "endpoint-7a1937b0-d63a-46da-9a75-c1bd73dc297c",
			link: "https://huggingface.co/deepseek-ai/DeepSeek-V3",
			description: "DeepSeek V3-0324",
			config: {
				stop: ["<｜end▁of▁sentence｜>"],
				chat_template:
					"{% if not add_generation_prompt is defined %}{% set add_generation_prompt = false %}{% endif %}{% set ns = namespace(is_first=false, is_tool=false, is_output_first=true, system_prompt='', is_first_sp=true) %}{%- for message in messages %}{%- if message['role'] == 'system' %}{%- if ns.is_first_sp %}{% set ns.system_prompt = ns.system_prompt + message['content'] %}{% set ns.is_first_sp = false %}{%- else %}{% set ns.system_prompt = ns.system_prompt + '\n\n' + message['content'] %}{%- endif %}{%- endif %}{%- endfor %}{{bos_token}}{{ns.system_prompt}}{%- for message in messages %}{%- if message['role'] == 'user' %}{%- set ns.is_tool = false -%}{{'<｜User｜>' + message['content']}}{%- endif %}{%- if message['role'] == 'assistant' and message['content'] is none %}{%- set ns.is_tool = false -%}{%- for tool in message['tool_calls']%}{%- if not ns.is_first %}{{'<｜Assistant｜><｜tool▁calls▁begin｜><｜tool▁call▁begin｜>' + tool['type'] + '<｜tool▁sep｜>' + tool['function']['name'] + '\n' + '```json' + '\n' + tool['function']['arguments'] + '\n' + '```' + '<｜tool▁call▁end｜>'}}{%- set ns.is_first = true -%}{%- else %}{{'\n' + '<｜tool▁call▁begin｜>' + tool['type'] + '<｜tool▁sep｜>' + tool['function']['name'] + '\n' + '```json' + '\n' + tool['function']['arguments'] + '\n' + '```' + '<｜tool▁call▁end｜>'}}{{'<｜tool▁calls▁end｜><｜end▁of▁sentence｜>'}}{%- endif %}{%- endfor %}{%- endif %}{%- if message['role'] == 'assistant' and message['content'] is not none %}{%- if ns.is_tool %}{{'<｜tool▁outputs▁end｜>' + message['content'] + '<｜end▁of▁sentence｜>'}}{%- set ns.is_tool = false -%}{%- else %}{{'<｜Assistant｜>' + message['content'] + '<｜end▁of▁sentence｜>'}}{%- endif %}{%- endif %}{%- if message['role'] == 'tool' %}{%- set ns.is_tool = true -%}{%- if ns.is_output_first %}{{'<｜tool▁outputs▁begin｜><｜tool▁output▁begin｜>' + message['content'] + '<｜tool▁output▁end｜>'}}{%- set ns.is_output_first = false %}{%- else %}{{'\n<｜tool▁output▁begin｜>' + message['content'] + '<｜tool▁output▁end｜>'}}{%- endif %}{%- endif %}{%- endfor -%}{% if ns.is_tool %}{{'<｜tool▁outputs▁end｜>'}}{% endif %}{% if add_generation_prompt and not ns.is_tool %}{{'<｜Assistant｜>'}}{% endif %}",
				bos_token: "<｜begin▁of▁sentence｜>",
				eos_token: "<｜end▁of▁sentence｜>",
				max_tokens_hard_limit_streaming: 12288,
				max_tokens: 2048,
			},
		},
	},
	{
		name: "meta-llama/Llama-3.2-90B-Vision-Instruct-Turbo",
		label: "Meta Llama 3.2 90B Vision Instruct Turbo",
		provider: "Together",
		type: "chat",
		modalities: ["vision"],
		context: {
			maxTokens: 131072,
		},
		cost: {
			inputCost: 1.2,
			outputCost: 1.2,
		},
		metadata: {
			uuid: "endpoint-555b1589-b380-4a74-aae9-ff07f92e7bfc",
			link: "https://huggingface.co/meta-llama/Llama-3.2-90B-Vision-Instruct",
			description:
				"Llama 3.2 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.",
			config: {
				stop: ["<|eot_id|>", "<|eom_id|>"],
				chat_template:
					"{% for message in messages %}\n{% if loop.index0 == 0 %}{{ bos_token }}{% endif %}\n{{ '<|start_header_id|>' + message['role'] + '<|end_header_id|>\\n\\n' }}\n{% if message['content'] is string %}\n{{ message['content'] }}\n{% else %}\n{% for content in message['content'] | sort(attribute=\"type\") %}\n{% if content['type'] == 'image' %}\n{{ '<|image|>' }}\n{% elif content['type'] == 'text' %}\n{{ content['text'] }}\n{% endif %}\n{% endfor %}\n{% endif %}\n{{ '<|eot_id|>' }}\n{% endfor %}\n{% if add_generation_prompt %}\n{{ '<|start_header_id|>assistant<|end_header_id|>\\n\\n' }}\n{% endif %}",
				bos_token: "<|begin_of_text|>",
				eos_token: "<|eot_id|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "mistralai/Mistral-7B-Instruct-v0.2",
		label: "Mistral (7B) Instruct v0.2",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 32768,
		},
		cost: {
			inputCost: 0.2,
			outputCost: 0.2,
		},
		metadata: {
			uuid: "endpoint-1792b880-33fc-4e50-85ab-c06672bf4092",
			description:
				"The Mistral-7B-Instruct-v0.2 Large Language Model (LLM) is an improved instruct fine-tuned version of Mistral-7B-Instruct-v0.1.",
			config: {
				stop: ["[/INST]", "</s>"],
				chat_template:
					"{% if messages[0]['role'] == 'system' %}{% set loop_messages = messages[1:] %}{% set system_message = messages[0]['content'] %}{% else %}{% set loop_messages = messages %}{% set system_message = false %}{% endif %}{% for message in loop_messages %}{% if loop.index0 == 0 and system_message != false %}{% set content = '<<SYS>>\\n' + system_message + '\\n<</SYS>>\\n\\n' + message['content'] %}{% else %}{% set content = message['content'] %}{% endif %}{% if message['role'] == 'user' or message['role'] == 'tool' %}{{ bos_token + '[INST] ' + content + ' [/INST]' }}{% elif message['role'] == 'system' %}{{ '<<SYS>>\\n' + content + '\\n<</SYS>>\\n\\n' }}{% elif message['role'] == 'assistant' %}{{ ' '  + content + ' ' + eos_token }}{% endif %}{% endfor %}",
				bos_token: "<s>",
				eos_token: "</s>",
			},
		},
	},
	{
		name: "togethercomputer/m2-bert-80M-2k-retrieval",
		label: "M2-BERT-Retrieval-2K",
		provider: "Together",
		type: "embedding",
		modalities: [],
		context: {},
		cost: {
			inputCost: 0.008,
			outputCost: 0.008,
		},
		metadata: {
			uuid: "endpoint-0981aab2-e2a3-4555-ab7f-f3e971691596",
			description:
				"M2-BERT from the Monarch Mixer paper fine-tuned for retrieval",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
			},
		},
	},
	{
		name: "deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B",
		label: "DeepSeek R1 Distill Qwen 1.5B",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 131072,
		},
		cost: {
			inputCost: 0.18,
			outputCost: 0.18,
		},
		metadata: {
			uuid: "endpoint-56e511d0-9a77-4121-a8b3-39cd093828c4",
			link: "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B",
			description: "",
			config: {
				stop: ["<｜end▁of▁sentence｜>"],
				chat_template:
					"{% if not add_generation_prompt %}{% set add_generation_prompt = false %}{% endif %}{# Initialize variables since Nunjucks doesn't support namespace #}{% set is_first = false %}{% set is_tool = false %}{% set is_output_first = true %}{% set system_prompt = '' %}{# Get system prompt #}{% for message in messages %}{% if message.role == 'system' %}{% set system_prompt = message.content %}{% endif %}{% endfor %}{{bos_token}}{{system_prompt}}{% for message in messages %}{% if message.role == 'user' %}{% set is_tool = false %}<｜User｜>{{message.content}}{% endif %}{% if message.role == 'assistant' and not message.content %}{% set is_tool = false %}{% for tool in message.tool_calls %}{% if not is_first %}<｜Assistant｜><｜tool▁calls▁begin｜><｜tool▁call▁begin｜>{{tool.type}}<｜tool▁sep｜>{{tool.function.name}}```json{{tool.function.arguments}}```<｜tool▁call▁end｜>{% set is_first = true %}{% else %}<｜tool▁call▁begin｜>{{tool.type}}<｜tool▁sep｜>{{tool.function.name}}```json{{tool.function.arguments}}```<｜tool▁call▁end｜><｜tool▁calls▁end｜><｜end▁of▁sentence｜>{% endif %}{% endfor %}{% endif %}{% if message.role == 'assistant' and message.content %}{% if is_tool %}<｜tool▁outputs▁end｜>{{message.content}}<｜end▁of▁sentence｜>{% set is_tool = false %}{% else %}{% set content = message.content %}{% if '</think>' in content %}{% set parts = content | split('</think>') %}{% set content = parts[parts.length-1] %}{% endif %}<｜Assistant｜>{{content}}<｜end▁of▁sentence｜>{% endif %}{% endif %}{% if message.role == 'tool' %}{% set is_tool = true %}{% if is_output_first %}<｜tool▁outputs▁begin｜><｜tool▁output▁begin｜>{{message.content}}<｜tool▁output▁end｜>{% set is_output_first = false %}{% else %}<｜tool▁output▁begin｜>{{message.content}}<｜tool▁output▁end｜>{% endif %}{% endif %}{% endfor %}{% if is_tool %}<｜tool▁outputs▁end｜>{% endif %}{% if add_generation_prompt and not is_tool %}<｜Assistant｜>{% endif %}",
				bos_token: "<｜begin▁of▁sentence｜>",
				eos_token: "<｜end▁of▁sentence｜>",
				max_tokens: 4096,
			},
		},
	},
	{
		name: "Qwen/QwQ-32B",
		label: "Qwen QwQ-32B",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 131072,
		},
		cost: {
			inputCost: 1.2,
			outputCost: 1.2,
		},
		metadata: {
			link: "https://huggingface.co/Qwen/QwQ-32B",
			description:
				"QwQ is the reasoning model of the Qwen series. Compared with conventional instruction-tuned models, QwQ, which is capable of thinking and reasoning, can achieve significantly enhanced performance in downstream tasks, especially hard problems.",
			config: {
				stop: ["<|im_end|>", "<|endoftext|>"],
				chat_template:
					"{%- if tools %}\n    {{- '<|im_start|>system\\n' }}\n    {%- if messages[0]['role'] == 'system' %}\n        {{- messages[0]['content'] }}\n    {%- else %}\n        {{- 'You are a helpful and harmless assistant. You are Qwen developed by Alibaba. You should think step-by-step.' }}\n    {%- endif %}\n    {{- \"\\n\\n# Tools\\n\\nYou may call one or more functions to assist with the user query.\\n\\nYou are provided with function signatures within <tools></tools> XML tags:\\n<tools>\" }}\n    {%- for tool in tools %}\n        {{- \"\\n\" }}\n        {{- tool | tojson }}\n    {%- endfor %}\n    {{- \"\\n</tools>\\n\\nFor each function call, return a json object with function name and arguments within <tool_call></tool_call> XML tags:\\n<tool_call>\\n{\\\"name\\\": <function-name>, \\\"arguments\\\": <args-json-object>}\\n</tool_call><|im_end|>\\n\" }}\n{%- else %}\n    {%- if messages[0]['role'] == 'system' %}\n        {{- '<|im_start|>system\\n' + messages[0]['content'] + '<|im_end|>\\n' }}\n    {%- else %}\n        {{- '<|im_start|>system\\nYou are a helpful assistant.<|im_end|>\\n' }}\n    {%- endif %}\n{%- endif %}\n{%- for message in messages %}\n    {%- if (message.role == \"user\") or (message.role == \"system\" and not loop.first) or (message.role == \"assistant\" and not message.tool_calls) %}\n        {{- '<|im_start|>' + message.role + '\\n' + message.content + '<|im_end|>' + '\\n' }}\n    {%- elif message.role == \"assistant\" %}\n        {{- '<|im_start|>' + message.role }}\n        {%- if message.content %}\n            {{- '\\n' + message.content }}\n        {%- endif %}\n        {%- for tool_call in message.tool_calls %}\n            {%- if tool_call.function is defined %}\n                {%- set tool_call = tool_call.function %}\n            {%- endif %}\n            {{- '\\n<tool_call>\\n{\"name\": \"' }}\n            {{- tool_call.name }}\n            {{- '\", \"arguments\": ' }}\n            {{- tool_call.arguments | tojson }}\n            {{- '}\\n</tool_call>' }}\n        {%- endfor %}\n        {{- '<|im_end|>\\n' }}\n    {%- elif message.role == \"tool\" %}\n        {%- if (loop.index0 == 0) or (messages[loop.index0 - 1].role != \"tool\") %}\n            {{- '<|im_start|>user' }}\n        {%- endif %}\n        {{- '\\n<tool_response>\\n' }}\n        {{- message.content }}\n        {{- '\\n</tool_response>' }}\n        {%- if loop.last or (messages[loop.index0 + 1].role != \"tool\") %}\n            {{- '<|im_end|>\\n' }}\n        {%- endif %}\n    {%- endif %}\n{%- endfor %}\n{%- if add_generation_prompt %}\n    {{- '<|im_start|>assistant\\n' }}\n{%- endif %}\n",
				bos_token: null,
				eos_token: "<|im_end|>",
				max_tokens_hard_limit_streaming: 32768,
				max_tokens: 2048,
			},
		},
	},
	{
		name: "google/gemma-2b-it",
		label: "Gemma Instruct (2B)",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.1,
			outputCost: 0.1,
		},
		metadata: {
			uuid: "endpoint-d918f758-f6d7-4c70-a3b4-f80a386a05f0",
			link: "https://huggingface.co/google/gemma-2b-it",
			description:
				"Gemma is a family of lightweight, state-of-the-art open models from Google, built from the same research and technology used to create the Gemini models.",
			config: {
				stop: ["<eos>", "<end_of_turn>"],
				chat_template:
					"{{ bos_token }}{% if (message['role'] == 'assistant') %}{% set role = 'model' %}{% else %}{% set role = message['role'] %}{% endif %}{% for message in messages %}{{'<start_of_turn>' + role + '\n' + message['content'] + '<end_of_turn>' + '\n'}}{% endfor %}{% if add_generation_prompt %}{{ '<|im_start|>model\n' }}{% endif %}",
				bos_token: "<bos>",
				eos_token: null,
			},
		},
	},
	{
		name: "black-forest-labs/FLUX.1-pro",
		label: "FLUX.1 [pro]",
		provider: "Together",
		type: "image-generation",
		modalities: [],
		context: {},
		cost: {
			inputCostPixel: 0.05,
		},
		metadata: {
			uuid: "endpoint-b2b7c6db-450f-45b2-b57e-2b0cd2c24c4a",
			link: "https://huggingface.co/black-forest-labs/FLUX.1-schnell",
			description:
				"The best of FLUX.1, offering state-of-the-art performance image generation with top of the line prompt following, visual quality, image detail and output diversity.",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
				height: 768,
				width: 1024,
				number_of_images: 1,
				steps: 28,
				seed: -1,
				response_format: "b64_json",
			},
		},
	},
	{
		name: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
		label: "Meta Llama 3.3 70B Instruct Turbo",
		provider: "Together",
		type: "chat",
		modalities: ["response-schema", "function-call", "tool-choice"],
		context: {
			maxTokens: 131072,
		},
		cost: {
			inputCost: 0.88,
			outputCost: 0.88,
		},
		metadata: {
			link: "https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct",
			description:
				"The Meta Llama 3.3 multilingual large language model (LLM) is a pretrained and instruction tuned generative model in 70B (text in/text out). The Llama 3.3 instruction tuned text only model is optimized for multilingual dialogue use cases and outperform many of the available open source and closed chat models on common industry benchmarks.",
			config: {
				stop: ["<|eot_id|>", "<|eom_id|>"],
				chat_template:
					'{{- bos_token }}\n{%- if custom_tools is defined %}\n    {%- set tools = custom_tools %}\n{%- endif %}\n{%- if not tools_in_user_message is defined %}\n    {%- set tools_in_user_message = true %}\n{%- endif %}\n{%- if not date_string is defined %}\n    {%- set date_string = "26 Jul 2024" %}\n{%- endif %}\n\n{#- This block extracts the system message, so we can slot it into the right place. #}\n{%- if messages[0][\'role\'] == \'system\' %}\n    {%- set system_message = messages[0][\'content\']|trim %}\n    {%- set messages = messages[1:] %}\n{%- else %}\n    {%- set system_message = "" %}\n{%- endif %}\n\n{#- System message + builtin tools #}\n{{- "<|start_header_id|>system<|end_header_id|>\n\n" }}\n{%- if builtin_tools is defined or tools %}\n    {{- "Environment: ipython\n" }}\n{%- endif %}\n{%- if builtin_tools is defined %}\n    {{- "Tools: " + builtin_tools | reject(\'equalto\', \'code_interpreter\') | join(", ") + "\n\n"}}\n{%- endif %}\n{{- "Cutting Knowledge Date: December 2023\n" }}\n{{- "Today Date: " + date_string + "\n\n" }}\n{%- if tools %}\n    {{- "You have access to the following functions:\n\n" }}{%- for t in tools %}\n        {{- "Use the function \'" + t.function.name + "\' to \'" + t.function.description + "\'\n" }}\n        {{- t.function | dump(4) }}\n        {{- "\n\n" }}\n    {%- endfor %}\n{% raw %}If a you choose to call a function ONLY reply in the following format:\n<{start_tag}={function_name}>{parameters}{end_tag}\nwhere\n\nstart_tag => `<function`\nparameters => a JSON dict with the function argument name as key and function argument value as value.\nend_tag => `</function>`\n\nHere is an example,\n<function=example_function_name>{"example_name": "example_value"}</function>\n\nReminder:\n- Function calls MUST follow the specified format\n- Required parameters MUST be specified\n- Only call one function at a time\n- Put the entire function call reply on one line\n- Always add your sources when using search results to answer the user query\n\n{% endraw %}{%- endif %}\n{{- system_message }}\n{{- "<|eot_id|>" }}\n\n{%- for message in messages %}\n    {%- if not (message.role == \'ipython\' or message.role == \'tool\' or \'tool_calls\' in message) %}\n        {{- \'<|start_header_id|>\' + message[\'role\'] + \'<|end_header_id|>\n\n\'+ message[\'content\'] | trim + \'<|eot_id|>\' }}\n    {%- elif \'tool_calls\' in message %}\n        {%- if not message.tool_calls|length == 1 %}\n            {{- raise_exception("This model only supports single tool-calls at once!") }}\n        {%- endif %}\n        {%- set tool_call = message.tool_calls[0].function %}\n        {%- if builtin_tools is defined and tool_call.name in builtin_tools %}\n            {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' -}}\n            {{- "<|python_tag|>" + tool_call.name + ".call(" }}\n            {%- for arg_name, arg_val in tool_call.arguments | items %}\n                {{- arg_name + \'="\' + arg_val + \'"\' }}\n                {%- if not loop.last %}\n                    {{- ", " }}\n                {%- endif %}\n                {%- endfor %}\n            {{- ")" }}\n        {%- else  %}\n            {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' -}}\n            {{- \'{"name": "\' + tool_call.name + \'", \' }}\n            {{- \'"parameters": \' }}\n            {{- tool_call.arguments | dump }}\n            {{- "}" }}\n        {%- endif %}\n        {%- if builtin_tools is defined %}\n            {#- This means we\'re in ipython mode #}\n            {{- "<|eom_id|>" }}\n        {%- else %}\n            {{- "<|eot_id|>" }}\n        {%- endif %}\n    {%- elif message.role == "tool" or message.role == "ipython" %}\n        {{- "<|start_header_id|>ipython<|end_header_id|>\n\n" }}\n        {%- if message.content is mapping or message.content is iterable %}\n            {{- message.content | dump }}\n        {%- else %}\n            {{- message.content }}\n        {%- endif %}\n        {{- "<|eot_id|>" }}\n    {%- endif %}\n{%- endfor %}\n{%- if add_generation_prompt %}\n    {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' }}{%- endif %}',
				bos_token: "<|begin_of_text|>",
				eos_token: "<|eot_id|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "Gryphe/MythoMax-L2-13b-Lite",
		label: "Gryphe MythoMax L2 Lite (13B)",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 4096,
		},
		cost: {
			inputCost: 0.1,
			outputCost: 0.1,
		},
		metadata: {
			uuid: "endpoint-d17af9fe-2c35-4635-85a5-060b948eb324",
			description:
				"MythoLogic-L2 and Huginn merge using a highly experimental tensor type merge technique. The main difference with MythoMix is that I allowed more of Huginn to intermingle with the single tensors located at the front and end of a model",
			config: {
				stop: ["</s>"],
				chat_template:
					"{% for message in messages %}{% if message['role'] == 'user' %}{{ '### Instruction:\n' + message['content'] + '\n' }}{% else %}{{ '### Response:\n' + message['content'] + '\n' }}{% endif %}{% endfor %}{{ '### Response:' }}",
				bos_token: null,
				eos_token: null,
			},
		},
	},
	{
		name: "meta-llama/Meta-Llama-3-8B-Instruct-Lite",
		label: "Meta Llama 3 8B Instruct Lite",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.1,
			outputCost: 0.1,
		},
		metadata: {
			uuid: "endpoint-23097993-11d0-4cd5-bfbc-d0613125f431",
			link: "https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct",
			description:
				"Llama 3 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.",
			config: {
				stop: ["<|eot_id|>"],
				chat_template:
					"{% set loop_messages = messages %}{% for message in loop_messages %}{% set content = '<|start_header_id|>' + message['role'] + '<|end_header_id|>\n\n'+ message['content'] | trim + '<|eot_id|>' %}{% if loop.index0 == 0 %}{% set content = bos_token + content %}{% endif %}{{ content }}{% endfor %}{{ '<|start_header_id|>assistant<|end_header_id|>\n\n' }}",
				bos_token: "<|begin_of_text|>",
				eos_token: "<|end_of_text|>",
				max_tokens_hard_limit_streaming: 8192,
				max_tokens: 2048,
			},
		},
	},
	{
		name: "black-forest-labs/FLUX.1-redux",
		label: "FLUX.1 Redux [dev]",
		provider: "Together",
		type: "image-generation",
		modalities: [],
		context: {},
		cost: {
			inputCostPixel: 0.025,
		},
		metadata: {
			uuid: "model-43d8d288-2198-49f3-be08-24fcbe30a8d9",
			link: "https://huggingface.co/black-forest-labs/FLUX.1-Redux-dev",
			description:
				"FLUX.1 Redux [dev] is an adapter for all FLUX.1 base models for image variation generation. Given an input image, FLUX.1 Redux can reproduce the image with slight variation, allowing to refine a given image. It naturally integrates into more complex workflows unlocking image restyling.",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
				height: 768,
				width: 1024,
				number_of_images: 1,
				steps: 28,
				seed: -1,
				max_n: 1,
				response_format: "b64_json",
			},
		},
	},
	{
		name: "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
		label: "Meta Llama 3.1 405B Instruct Turbo",
		provider: "Together",
		type: "chat",
		modalities: ["function-call", "tool-choice"],
		context: {
			maxTokens: 130815,
		},
		cost: {
			inputCost: 3.5,
			outputCost: 3.5,
		},
		metadata: {
			uuid: "endpoint-5cc540cb-cefd-4e97-b9bf-b639081e6995",
			link: "https://huggingface.co/meta-llama/Meta-Llama-3.1-405B-Instruct",
			description:
				"Llama 3.1 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.",
			config: {
				stop: ["<|eot_id|>", "<|eom_id|>"],
				chat_template:
					'{{- bos_token }}\n{%- if custom_tools is defined %}\n    {%- set tools = custom_tools %}\n{%- endif %}\n{%- if not tools_in_user_message is defined %}\n    {%- set tools_in_user_message = true %}\n{%- endif %}\n{%- if not date_string is defined %}\n    {%- set date_string = "26 Jul 2024" %}\n{%- endif %}\n\n{#- This block extracts the system message, so we can slot it into the right place. #}\n{%- if messages[0][\'role\'] == \'system\' %}\n    {%- set system_message = messages[0][\'content\']|trim %}\n    {%- set messages = messages[1:] %}\n{%- else %}\n    {%- set system_message = "" %}\n{%- endif %}\n\n{#- System message + builtin tools #}\n{{- "<|start_header_id|>system<|end_header_id|>\n\n" }}\n{%- if builtin_tools is defined or tools %}\n    {{- "Environment: ipython\n" }}\n{%- endif %}\n{%- if builtin_tools is defined %}\n    {{- "Tools: " + builtin_tools | reject(\'equalto\', \'code_interpreter\') | join(", ") + "\n\n"}}\n{%- endif %}\n{{- "Cutting Knowledge Date: December 2023\n" }}\n{{- "Today Date: " + date_string + "\n\n" }}\n{%- if tools %}\n    {{- "You have access to the following functions:\n\n" }}{%- for t in tools %}\n        {{- "Use the function \'" + t.function.name + "\' to \'" + t.function.description + "\'\n" }}\n        {{- t.function | dump(4) }}\n        {{- "\n\n" }}\n    {%- endfor %}\n{% raw %}If a you choose to call a function ONLY reply in the following format:\n<{start_tag}={function_name}>{parameters}{end_tag}\nwhere\n\nstart_tag => `<function`\nparameters => a JSON dict with the function argument name as key and function argument value as value.\nend_tag => `</function>`\n\nHere is an example,\n<function=example_function_name>{"example_name": "example_value"}</function>\n\nReminder:\n- Function calls MUST follow the specified format\n- Required parameters MUST be specified\n- Only call one function at a time\n- Put the entire function call reply on one line\n- Always add your sources when using search results to answer the user query\n\n{% endraw %}{%- endif %}\n{{- system_message }}\n{{- "<|eot_id|>" }}\n\n{%- for message in messages %}\n    {%- if not (message.role == \'ipython\' or message.role == \'tool\' or \'tool_calls\' in message) %}\n        {{- \'<|start_header_id|>\' + message[\'role\'] + \'<|end_header_id|>\n\n\'+ message[\'content\'] | trim + \'<|eot_id|>\' }}\n    {%- elif \'tool_calls\' in message and message.tool_calls %}\n        {%- if not message.tool_calls|length == 1 %}\n            {{- raise_exception("This model only supports single tool-calls at once!") }}\n        {%- endif %}\n        {%- set tool_call = message.tool_calls[0].function %}\n        {%- if builtin_tools is defined and tool_call.name in builtin_tools %}\n            {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' -}}\n            {{- "<|python_tag|>" + tool_call.name + ".call(" }}\n            {%- for arg_name, arg_val in tool_call.arguments | items %}\n                {{- arg_name + \'="\' + arg_val + \'"\' }}\n                {%- if not loop.last %}\n                    {{- ", " }}\n                {%- endif %}\n                {%- endfor %}\n            {{- ")" }}\n        {%- else  %}\n            {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' -}}\n            {{- \'{"name": "\' + tool_call.name + \'", \' }}\n            {{- \'"parameters": \' }}\n            {{- tool_call.arguments | dump }}\n            {{- "}" }}\n        {%- endif %}\n        {%- if builtin_tools is defined %}\n            {#- This means we\'re in ipython mode #}\n            {{- "<|eom_id|>" }}\n        {%- else %}\n            {{- "<|eot_id|>" }}\n        {%- endif %}\n    {%- elif message.role == "tool" or message.role == "ipython" %}\n        {{- "<|start_header_id|>ipython<|end_header_id|>\n\n" }}\n        {%- if message.content is mapping or message.content is iterable %}\n            {{- message.content | dump }}\n        {%- else %}\n            {{- message.content }}\n        {%- endif %}\n        {{- "<|eot_id|>" }}\n    {%- endif %}\n{%- endfor %}\n{%- if add_generation_prompt %}\n    {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' }}{%- endif %}',
				bos_token: "<|begin_of_text|>",
				eos_token: "<|eot_id|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "mistralai/Mixtral-8x7B-v0.1",
		label: "Mixtral-8x7B v0.1",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 32768,
		},
		cost: {
			inputCost: 0.6,
			outputCost: 0.6,
		},
		metadata: {
			uuid: "endpoint-da57b2f0-d8b5-4ff7-96a8-680a24e79ded",
			link: "https://huggingface.co/mistralai/Mixtral-8x7B-v0.1",
			description:
				"The Mixtral-8x7B Large Language Model (LLM) is a pretrained generative Sparse Mixture of Experts.",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
				max_tokens: 2048,
			},
		},
	},
	{
		name: "meta-llama/Meta-Llama-Guard-3-8B",
		label: "Meta Llama Guard 3 8B",
		provider: "Together",
		type: "moderation",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.2,
			outputCost: 0.2,
		},
		metadata: {
			uuid: "endpoint-83596b4f-9433-4b3f-ba00-8f4265753221",
			link: null,
			description: "",
			config: {
				stop: [],
				chat_template:
					"{% if messages.length % 2 == 0 %}{% set final_role = 'Agent' %}{% else %}{% set final_role = 'User' %}{% endif %}<|begin_of_text|><|start_header_id|>user<|end_header_id|>\n\nTask: Check if there is unsafe content in '{{ final_role }}' messages in conversations according our safety policy with the below categories.\n\n<BEGIN UNSAFE CONTENT CATEGORIES>\nS1: Violent Crimes.\nS2: Non-Violent Crimes.\nS3: Sex Crimes.\nS4: Child Exploitation.\nS5: Defamation.\nS6: Specialized Advice.\nS7: Privacy.\nS8: Intellectual Property.\nS9: Indiscriminate Weapons.\nS10: Hate.\nS11: Self-Harm.\nS12: Sexual Content.\nS13: Elections.\nS14: Code Interpreter Abuse.\n<END UNSAFE CONTENT CATEGORIES>\n\n<BEGIN CONVERSATION>\n\n{% for message in messages %}{% if message['role'] == 'user' and loop.index0 % 2 == 0 %}User: {{ message['content'].trim() }}{% elif message['role'] == 'assistant' and loop.index0 % 2 != 0 %}Agent: {{ message['content'].trim() }}{% endif %}{% if loop.last %}{% set role = message['role'] %}{% endif %}{{ '\n\n' }}{% endfor %}<END CONVERSATION>\n\nProvide your safety assessment for {{ role }} in the above conversation:\n - First line must read 'safe' or 'unsafe'.\n - If unsafe, a second line must include a comma-separated list of violated categories.<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
				bos_token: null,
				eos_token: null,
			},
		},
	},
	{
		name: "deepseek-ai/DeepSeek-R1-Distill-Qwen-14B",
		label: "DeepSeek R1 Distill Qwen 14B",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 131072,
		},
		cost: {
			inputCost: 1.6,
			outputCost: 1.6,
		},
		metadata: {
			uuid: "endpoint-56e511d0-9a77-4121-a8b3-39cd093828c3",
			link: "https://huggingface.co/api/models/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B",
			description: "",
			config: {
				stop: ["<｜end▁of▁sentence｜>"],
				chat_template:
					"{% if not add_generation_prompt %}{% set add_generation_prompt = false %}{% endif %}{# Initialize variables since Nunjucks doesn't support namespace #}{% set is_first = false %}{% set is_tool = false %}{% set is_output_first = true %}{% set system_prompt = '' %}{# Get system prompt #}{% for message in messages %}{% if message.role == 'system' %}{% set system_prompt = message.content %}{% endif %}{% endfor %}{{bos_token}}{{system_prompt}}{% for message in messages %}{% if message.role == 'user' %}{% set is_tool = false %}<｜User｜>{{message.content}}{% endif %}{% if message.role == 'assistant' and not message.content %}{% set is_tool = false %}{% for tool in message.tool_calls %}{% if not is_first %}<｜Assistant｜><｜tool▁calls▁begin｜><｜tool▁call▁begin｜>{{tool.type}}<｜tool▁sep｜>{{tool.function.name}}```json{{tool.function.arguments}}```<｜tool▁call▁end｜>{% set is_first = true %}{% else %}<｜tool▁call▁begin｜>{{tool.type}}<｜tool▁sep｜>{{tool.function.name}}```json{{tool.function.arguments}}```<｜tool▁call▁end｜><｜tool▁calls▁end｜><｜end▁of▁sentence｜>{% endif %}{% endfor %}{% endif %}{% if message.role == 'assistant' and message.content %}{% if is_tool %}<｜tool▁outputs▁end｜>{{message.content}}<｜end▁of▁sentence｜>{% set is_tool = false %}{% else %}{% set content = message.content %}{% if '</think>' in content %}{% set parts = content | split('</think>') %}{% set content = parts[parts.length-1] %}{% endif %}<｜Assistant｜>{{content}}<｜end▁of▁sentence｜>{% endif %}{% endif %}{% if message.role == 'tool' %}{% set is_tool = true %}{% if is_output_first %}<｜tool▁outputs▁begin｜><｜tool▁output▁begin｜>{{message.content}}<｜tool▁output▁end｜>{% set is_output_first = false %}{% else %}<｜tool▁output▁begin｜>{{message.content}}<｜tool▁output▁end｜>{% endif %}{% endif %}{% endfor %}{% if is_tool %}<｜tool▁outputs▁end｜>{% endif %}{% if add_generation_prompt and not is_tool %}<｜Assistant｜>{% endif %}",
				bos_token: "<｜begin▁of▁sentence｜>",
				eos_token: "<｜end▁of▁sentence｜>",
				max_tokens_hard_limit_streaming: 32768,
				max_tokens: 8192,
			},
		},
	},
	{
		name: "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
		label: "Meta Llama 3.1 70B Instruct Turbo",
		provider: "Together",
		type: "chat",
		modalities: ["response-schema", "function-call", "tool-choice"],
		context: {
			maxTokens: 131072,
		},
		cost: {
			inputCost: 0.88,
			outputCost: 0.88,
		},
		metadata: {
			uuid: "endpoint-8dc05faf-a910-40bb-8163-9f4e0c9008f1",
			link: "https://huggingface.co/meta-llama/Meta-Llama-3.1-70B-Instruct",
			description:
				"Llama 3.1 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.",
			config: {
				stop: ["<|eot_id|>", "<|eom_id|>"],
				chat_template:
					'{{- bos_token }}\n{%- if custom_tools is defined %}\n    {%- set tools = custom_tools %}\n{%- endif %}\n{%- if not tools_in_user_message is defined %}\n    {%- set tools_in_user_message = true %}\n{%- endif %}\n{%- if not date_string is defined %}\n    {%- set date_string = "26 Jul 2024" %}\n{%- endif %}\n\n{#- This block extracts the system message, so we can slot it into the right place. #}\n{%- if messages[0][\'role\'] == \'system\' %}\n    {%- set system_message = messages[0][\'content\']|trim %}\n    {%- set messages = messages[1:] %}\n{%- else %}\n    {%- set system_message = "" %}\n{%- endif %}\n\n{#- System message + builtin tools #}\n{{- "<|start_header_id|>system<|end_header_id|>\n\n" }}\n{%- if builtin_tools is defined or tools %}\n    {{- "Environment: ipython\n" }}\n{%- endif %}\n{%- if builtin_tools is defined %}\n    {{- "Tools: " + builtin_tools | reject(\'equalto\', \'code_interpreter\') | join(", ") + "\n\n"}}\n{%- endif %}\n{{- "Cutting Knowledge Date: December 2023\n" }}\n{{- "Today Date: " + date_string + "\n\n" }}\n{%- if tools %}\n    {{- "You have access to the following functions:\n\n" }}{%- for t in tools %}\n        {{- "Use the function \'" + t.function.name + "\' to \'" + t.function.description + "\'\n" }}\n        {{- t.function | dump(4) }}\n        {{- "\n\n" }}\n    {%- endfor %}\n{% raw %}If a you choose to call a function ONLY reply in the following format:\n<{start_tag}={function_name}>{parameters}{end_tag}\nwhere\n\nstart_tag => `<function`\nparameters => a JSON dict with the function argument name as key and function argument value as value.\nend_tag => `</function>`\n\nHere is an example,\n<function=example_function_name>{"example_name": "example_value"}</function>\n\nReminder:\n- Function calls MUST follow the specified format\n- Required parameters MUST be specified\n- Only call one function at a time\n- Put the entire function call reply on one line\n- Always add your sources when using search results to answer the user query\n\n{% endraw %}{%- endif %}\n{{- system_message }}\n{{- "<|eot_id|>" }}\n\n{%- for message in messages %}\n    {%- if not (message.role == \'ipython\' or message.role == \'tool\' or \'tool_calls\' in message) %}\n        {{- \'<|start_header_id|>\' + message[\'role\'] + \'<|end_header_id|>\n\n\'+ message[\'content\'] | trim + \'<|eot_id|>\' }}\n    {%- elif \'tool_calls\' in message %}\n        {%- if not message.tool_calls|length == 1 %}\n            {{- raise_exception("This model only supports single tool-calls at once!") }}\n        {%- endif %}\n        {%- set tool_call = message.tool_calls[0].function %}\n        {%- if builtin_tools is defined and tool_call.name in builtin_tools %}\n            {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' -}}\n            {{- "<|python_tag|>" + tool_call.name + ".call(" }}\n            {%- for arg_name, arg_val in tool_call.arguments | items %}\n                {{- arg_name + \'="\' + arg_val + \'"\' }}\n                {%- if not loop.last %}\n                    {{- ", " }}\n                {%- endif %}\n                {%- endfor %}\n            {{- ")" }}\n        {%- else  %}\n            {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' -}}\n            {{- \'{"name": "\' + tool_call.name + \'", \' }}\n            {{- \'"parameters": \' }}\n            {{- tool_call.arguments | dump }}\n            {{- "}" }}\n        {%- endif %}\n        {%- if builtin_tools is defined %}\n            {#- This means we\'re in ipython mode #}\n            {{- "<|eom_id|>" }}\n        {%- else %}\n            {{- "<|eot_id|>" }}\n        {%- endif %}\n    {%- elif message.role == "tool" or message.role == "ipython" %}\n        {{- "<|start_header_id|>ipython<|end_header_id|>\n\n" }}\n        {%- if message.content is mapping or message.content is iterable %}\n            {{- message.content | dump }}\n        {%- else %}\n            {{- message.content }}\n        {%- endif %}\n        {{- "<|eot_id|>" }}\n    {%- endif %}\n{%- endfor %}\n{%- if add_generation_prompt %}\n    {{- \'<|start_header_id|>assistant<|end_header_id|>\n\n\' }}{%- endif %}',
				bos_token: "<|begin_of_text|>",
				eos_token: "<|eot_id|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "black-forest-labs/FLUX.1-depth",
		label: "FLUX.1 Depth [dev]",
		provider: "Together",
		type: "image-generation",
		modalities: [],
		context: {},
		cost: {
			inputCostPixel: 0.025,
		},
		metadata: {
			uuid: "model-45b26f3e-001a-4176-b15a-6b292b4ebcfb",
			link: "https://huggingface.co/black-forest-labs/FLUX.1-Depth-dev",
			description:
				"FLUX.1 Depth [dev] is a 12 billion parameter rectified flow transformer capable of generating an image based on a text description while following the structure of a given input image.",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
				height: 768,
				width: 1024,
				number_of_images: 1,
				steps: 28,
				seed: -1,
				max_n: 1,
				response_format: "b64_json",
			},
		},
	},
	{
		name: "black-forest-labs/FLUX.1-canny",
		label: "FLUX.1 Canny [dev]",
		provider: "Together",
		type: "image-generation",
		modalities: [],
		context: {},
		cost: {
			inputCostPixel: 0.025,
		},
		metadata: {
			uuid: "model-5c46225e-db9c-4e61-95ea-c6c234d1eecc",
			link: "https://huggingface.co/black-forest-labs/FLUX.1-Canny-dev",
			description:
				"FLUX.1 Canny [dev] is 12 billion parameter rectified flow transformer capable of generating an image based on a text description while following the structure of a given input image.",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
				height: 768,
				width: 1024,
				number_of_images: 1,
				steps: 28,
				seed: -1,
				max_n: 1,
				response_format: "b64_json",
			},
		},
	},
	{
		name: "meta-llama/Llama-3-8b-chat-hf",
		label: "Meta Llama 3 8B Instruct Reference",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.2,
			outputCost: 0.2,
		},
		metadata: {
			uuid: "endpoint-30e7275a-6fee-42aa-989c-86b4354a3804",
			link: "https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct",
			description:
				"Llama 3 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.",
			config: {
				stop: ["<|eot_id|>"],
				chat_template:
					"{% set loop_messages = messages %}{% for message in loop_messages %}{% set content = '<|start_header_id|>' + message['role'] + '<|end_header_id|>\n\n'+ message['content'] | trim + '<|eot_id|>' %}{% if loop.index0 == 0 %}{% set content = bos_token + content %}{% endif %}{{ content }}{% endfor %}{{ '<|start_header_id|>assistant<|end_header_id|>\n\n' }}",
				bos_token: "<|begin_of_text|>",
				eos_token: "<|end_of_text|>",
			},
		},
	},
	{
		name: "togethercomputer/MoA-1-Turbo",
		label: "Together AI MoA-1-Turbo",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 32768,
		},
		cost: {},
		metadata: {
			uuid: "model-2b761333-56bf-4912-aed5-d1b654cef9e4",
			link: "https://github.com/togethercomputer/MoA",
			description:
				"Mixture of Agents (MoA) is a novel approach that leverages the collective strengths of multiple LLMs to enhance performance, achieving state-of-the-art results",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
			},
		},
	},
	{
		name: "mistralai/Mistral-7B-Instruct-v0.1",
		label: "Mistral (7B) Instruct",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 32768,
		},
		cost: {
			inputCost: 0.2,
			outputCost: 0.2,
		},
		metadata: {
			uuid: "endpoint-0830fdf1-35d2-4722-9b1f-b799f85f9997",
			link: "https://huggingface.co/api/models/mistralai/Mistral-7B-Instruct-v0.1",
			description: "instruct fine-tuned version of Mistral-7B-v0.1",
			config: {
				stop: ["</s>"],
				chat_template:
					"{% if messages[0]['role'] == 'system' %}{% set loop_messages = messages[1:] %}{% set system_message = messages[0]['content'] %}{% else %}{% set loop_messages = messages %}{% set system_message = false %}{% endif %}{% for message in loop_messages %}{% if loop.index0 == 0 and system_message != false %}{% set content = '<<SYS>>\\n' + system_message + '\\n<</SYS>>\\n\\n' + message['content'] %}{% else %}{% set content = message['content'] %}{% endif %}{% if message['role'] == 'user' or message['role'] == 'tool' %}{{ bos_token + '[INST] ' + content + ' [/INST]' }}{% elif message['role'] == 'system' %}{{ '<<SYS>>\\n' + content + '\\n<</SYS>>\\n\\n' }}{% elif message['role'] == 'assistant' %}{{ ' '  + content + ' ' + eos_token }}{% endif %}{% endfor %}",
				bos_token: "<s>",
				eos_token: "</s>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "mistralai/Mistral-Small-24B-Instruct-2501",
		label: "Mistral Small (24B) Instruct 25.01",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 32768,
		},
		cost: {
			inputCost: 0.8,
			outputCost: 0.8,
		},
		metadata: {
			uuid: "endpoint-d5e9222e-abb6-49ce-940f-f24b0073bfda",
			link: "https://huggingface.co/mistralai/Mistral-Small-Instruct-2501",
			description:
				'Mistral Small 3 ( 2501 ) sets a new benchmark in the "small" Large Language Models category below 70B, boasting 24B parameters and achieving state-of-the-art capabilities comparable to larger models!',
			config: {
				stop: ["[/INST]", "</s>"],
				chat_template:
					"{{ bos_token }}{% for message in messages %}{% if message['role'] == 'system' %}[SYSTEM_PROMPT]{{ message['content'] }}[/SYSTEM_PROMPT]{% elif message['role'] == 'user' %}[INST]{{ message['content'] }}[/INST]{% elif message['role'] == 'assistant' %}{{ message['content'] + '</s>' }}{% endif %}{% endfor %}",
				bos_token: null,
				eos_token: null,
				max_tokens: 2048,
			},
		},
	},
	{
		name: "scb10x/scb10x-llama3-1-typhoon2-8b-instruct",
		label: "Typhoon 2 8B Instruct",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.18,
			outputCost: 0.18,
		},
		metadata: {
			uuid: "endpoint-534c3a31-c1c5-4e89-82ab-5c5187a11503",
			link: "https://huggingface.co/api/models/scb10x/llama3.1-typhoon2-8b-instruct",
			description:
				"Llama3.1-Typhoon2-8B-instruct is a instruct Thai 🇹🇭   large language model with 8 billion parameters, and it is based on Llama3.1-8B.",
			config: {
				stop: ["<|eot_id|>"],
				chat_template:
					'{{- bos_token }}\n{%- if custom_tools is defined %}\n    {%- set tools = custom_tools %}\n{%- endif %}\n{%- if not date_string is defined %}\n    {%- set date_string = "26 Jul 2024" %}\n{%- endif %}\n{%- if not tools is defined %}\n    {%- set tools = none %}\n{%- endif %}\n\n{#- This block extracts the system message, so we can slot it into the right place. #}\n{%- if messages[0][\'role\'] == \'system\' %}\n    {%- set system_message = messages[0][\'content\']|trim %}\n    {%- set messages = messages[1:] %}\n{%- else %}\n    {%- set system_message = "" %}\n{%- endif %}\n\n{#- System message + builtin tools #}\n{{- "<|start_header_id|>system<|end_header_id|>\\n\\n" }}\n{{- "Cutting Knowledge Date: December 2023\\n" }}\n{{- "Today Date: " + date_string + "\\n\\n" }}\n{{- system_message }}\n{%- if tools is not none %}\n    {{- "\\n" }}\n    {{- "You are given a question and a set of possible functions. Based on the question, you will need to make one or more function/tool calls to achieve the purpose." }}\n    {{- "If none of the function can be used, point it out. If the given question lacks the parameters required by the function, also point it out." }}\n    {{- "You should only return the function call in tools call sections." }}\n    {{- "If you decide to invoke any of the function(s), you MUST put it in the format of [Function(arguments1={{params_name1: params_value1,params_name2: params_value2, ...}},  name1=function_name1), Function(arguments2={{params}},  name2=function_name2) , ...]"}}\n    {{- "You SHOULD NOT include any other text in the response.\\nHere is a list of functions in JSON format that you can invoke.\\n" }}\n    {%- for t in tools %}\n        {{- t | tojson(indent=4) }}\n        {{- "\\n\\n" }}\n    {%- endfor %}\n{%- endif %}\n{{- "<|eot_id|>" }}\n\n\n{%- for message in messages %}\n    {%- if not (message.role == \'tool\') %}\n        {{- \'<|start_header_id|>\' + message[\'role\'] + \'<|end_header_id|>\\n\\n\'+ message[\'content\'] | trim + \'<|eot_id|>\' }}\n    {%- elif message.role == "tool" %}\n        {{- "<|start_header_id|>tool<|end_header_id|>\\n\\n" }}\n        {%- if message.content is mapping or message.content is iterable %}\n            {{- message.content | tojson }}\n        {%- else %}\n            {{- message.content }}\n        {%- endif %}\n        {{- "<|eot_id|>" }}\n    {%- endif %}\n{%- endfor %}\n{%- if add_generation_prompt %}\n    {{- \'<|start_header_id|>assistant<|end_header_id|>\\n\\n\' }}\n{%- endif %}',
				bos_token: "<|begin_of_text|>",
				eos_token: "<|eot_id|>",
			},
		},
	},
	{
		name: "meta-llama/Llama-3.2-11B-Vision-Instruct-Turbo",
		label: "Meta Llama 3.2 11B Vision Instruct Turbo",
		provider: "Together",
		type: "chat",
		modalities: ["vision"],
		context: {
			maxTokens: 131072,
		},
		cost: {
			inputCost: 0.18,
			outputCost: 0.18,
		},
		metadata: {
			uuid: "endpoint-650d951d-0a47-4ba1-8d63-680456cd4af4",
			link: "https://huggingface.co/meta-llama/Meta-Llama-3.1-405B-Instruct",
			description:
				"Llama 3.2 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.",
			config: {
				stop: ["<|eot_id|>", "<|eom_id|>"],
				chat_template:
					"{% for message in messages %}\n{% if loop.index0 == 0 %}{{ bos_token }}{% endif %}\n{{ '<|start_header_id|>' + message['role'] + '<|end_header_id|>\\n\\n' }}\n{% if message['content'] is string %}\n{{ message['content'] }}\n{% else %}\n{% for content in message['content'] | sort(attribute=\"type\") %}\n{% if content['type'] == 'image' %}\n{{ '<|image|>' }}\n{% elif content['type'] == 'text' %}\n{{ content['text'] }}\n{% endif %}\n{% endfor %}\n{% endif %}\n{{ '<|eot_id|>' }}\n{% endfor %}\n{% if add_generation_prompt %}\n{{ '<|start_header_id|>assistant<|end_header_id|>\\n\\n' }}\n{% endif %}",
				bos_token: "<|begin_of_text|>",
				eos_token: "<|eot_id|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "Qwen/Qwen2.5-72B-Instruct-Turbo",
		label: "Qwen2.5 72B Instruct Turbo",
		provider: "Together",
		type: "chat",
		modalities: ["function-call", "tool-choice"],
		context: {
			maxTokens: 131072,
		},
		cost: {
			inputCost: 1.2,
			outputCost: 1.2,
		},
		metadata: {
			uuid: "endpoint-2aca6593-7a8d-4790-a136-29e1ba686aa0",
			link: "https://huggingface.co/Qwen/Qwen2.5-72B-Instruct",
			description:
				"Qwen2.5 is the latest series of Qwen large language models. For Qwen2.5, we release a number of base language models and instruction-tuned language models ranging from 0.5 to 72 billion parameters.",
			config: {
				stop: ["<|im_end|>"],
				chat_template:
					"{%- if tools %}\n    {{- '<|im_start|>system\\n' }}\n    {%- if messages[0]['role'] == 'system' %}\n        {{- messages[0]['content'] }}\n    {%- else %}\n        {{- 'You are Qwen, created by Alibaba Cloud. You are a helpful assistant.' }}\n    {%- endif %}\n    {{- \"\\n\\n# Tools\\n\\nYou may call one or more functions to assist with the user query.\\n\\nYou are provided with function signatures within <tools></tools> XML tags:\\n<tools>\" }}\n    {%- for tool in tools %}\n        {{- \"\\n\" }}\n        {{- tool | tojson }}\n    {%- endfor %}\n    {{- \"\\n</tools>\\n\\nFor each function call, return a json object with function name and arguments within <tool_call></tool_call> XML tags:\\n<tool_call>\\n{\\\"name\\\": <function-name>, \\\"arguments\\\": <args-json-object>}\\n</tool_call><|im_end|>\\n\" }}\n{%- else %}\n    {%- if messages[0]['role'] == 'system' %}\n        {{- '<|im_start|>system\\n' + messages[0]['content'] + '<|im_end|>\\n' }}\n    {%- else %}\n        {{- '<|im_start|>system\\nYou are Qwen, created by Alibaba Cloud. You are a helpful assistant.<|im_end|>\\n' }}\n    {%- endif %}\n{%- endif %}\n{%- for message in messages %}\n    {%- if (message.role == \"user\") or (message.role == \"system\" and not loop.first) or (message.role == \"assistant\" and not message.tool_calls) %}\n        {{- '<|im_start|>' + message.role + '\\n' + message.content + '<|im_end|>' + '\\n' }}\n    {%- elif message.role == \"assistant\" %}\n        {{- '<|im_start|>' + message.role }}\n        {%- if message.content %}\n            {{- '\\n' + message.content }}\n        {%- endif %}\n        {%- for tool_call in message.tool_calls %}\n            {%- if tool_call.function is defined %}\n                {%- set tool_call = tool_call.function %}\n            {%- endif %}\n            {{- '\\n<tool_call>\\n{\"name\": \"' }}\n            {{- tool_call.name }}\n            {{- '\", \"arguments\": ' }}\n            {{- tool_call.arguments | tojson }}\n            {{- '}\\n</tool_call>' }}\n        {%- endfor %}\n        {{- '<|im_end|>\\n' }}\n    {%- elif message.role == \"tool\" %}\n        {%- if (loop.index0 == 0) or (messages[loop.index0 - 1].role != \"tool\") %}\n            {{- '<|im_start|>user' }}\n        {%- endif %}\n        {{- '\\n<tool_response>\\n' }}\n        {{- message.content }}\n        {{- '\\n</tool_response>' }}\n        {%- if loop.last or (messages[loop.index0 + 1].role != \"tool\") %}\n            {{- '<|im_end|>\\n' }}\n        {%- endif %}\n    {%- endif %}\n{%- endfor %}\n{%- if add_generation_prompt %}\n    {{- '<|im_start|>assistant\\n' }}\n{%- endif %}\n",
				bos_token: "<|endoftext|>",
				eos_token: "<|im_end|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "Qwen/Qwen2-72B-Instruct",
		label: "Qwen 2 Instruct (72B)",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 32768,
		},
		cost: {
			inputCost: 0.9,
			outputCost: 0.9,
		},
		metadata: {
			uuid: "endpoint-1b2ff055-14fa-488a-a20c-0f51fee92a8b",
			link: "https://huggingface.co/Qwen/Qwen2-72B-Instruct",
			description:
				"Qwen2 is the new series of Qwen large language models. For Qwen2, we release a number of base language models and instruction-tuned language models ranging from 0.5 to 72 billion parameters, including a Mixture-of-Experts model.",
			config: {
				stop: ["<|im_start|>", "<|im_end|>"],
				chat_template:
					"{% for message in messages %}{% if loop.first and messages[0]['role'] != 'system' %}{{ '<|im_start|>system\nYou are a helpful assistant.<|im_end|>\n' }}{% endif %}{{'<|im_start|>' + message['role'] + '\n' + message['content'] + '<|im_end|>' + '\n'}}{% endfor %}{% if add_generation_prompt %}{{ '<|im_start|>assistant\n' }}{% endif %}",
				bos_token: null,
				eos_token: null,
				max_tokens: 2048,
			},
		},
	},
	{
		name: "Qwen/Qwen2.5-Coder-32B-Instruct",
		label: "Qwen 2.5 Coder 32B Instruct",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 16384,
		},
		cost: {
			inputCost: 0.8,
			outputCost: 0.8,
		},
		metadata: {
			uuid: "endpoint-503e11d4-3dee-459d-9ea6-e0f061f7dee5",
			link: "https://huggingface.co/Qwen/Qwen2.5-Coder-32B-Instruct",
			description:
				"Qwen2.5 is the latest series of Qwen large language models. For Qwen2.5, we release a number of base language models and instruction-tuned language models ranging from 0.5 to 72 billion parameters.",
			config: {
				stop: ["<|im_end|>"],
				chat_template:
					"{%- if tools %}\n    {{- '<|im_start|>system\\n' }}\n    {%- if messages[0]['role'] == 'system' %}\n        {{- messages[0]['content'] }}\n    {%- else %}\n        {{- 'You are Qwen, created by Alibaba Cloud. You are a helpful assistant.' }}\n    {%- endif %}\n    {{- \"\\n\\n# Tools\\n\\nYou may call one or more functions to assist with the user query.\\n\\nYou are provided with function signatures within <tools></tools> XML tags:\\n<tools>\" }}\n    {%- for tool in tools %}\n        {{- \"\\n\" }}\n        {{- tool | tojson }}\n    {%- endfor %}\n    {{- \"\\n</tools>\\n\\nFor each function call, return a json object with function name and arguments within <tool_call></tool_call> XML tags:\\n<tool_call>\\n{\\\"name\\\": <function-name>, \\\"arguments\\\": <args-json-object>}\\n</tool_call><|im_end|>\\n\" }}\n{%- else %}\n    {%- if messages[0]['role'] == 'system' %}\n        {{- '<|im_start|>system\\n' + messages[0]['content'] + '<|im_end|>\\n' }}\n    {%- else %}\n        {{- '<|im_start|>system\\nYou are Qwen, created by Alibaba Cloud. You are a helpful assistant.<|im_end|>\\n' }}\n    {%- endif %}\n{%- endif %}\n{%- for message in messages %}\n    {%- if (message.role == \"user\") or (message.role == \"system\" and not loop.first) or (message.role == \"assistant\" and not message.tool_calls) %}\n        {{- '<|im_start|>' + message.role + '\\n' + message.content + '<|im_end|>' + '\\n' }}\n    {%- elif message.role == \"assistant\" %}\n        {{- '<|im_start|>' + message.role }}\n        {%- if message.content %}\n            {{- '\\n' + message.content }}\n        {%- endif %}\n        {%- for tool_call in message.tool_calls %}\n            {%- if tool_call.function is defined %}\n                {%- set tool_call = tool_call.function %}\n            {%- endif %}\n            {{- '\\n<tool_call>\\n{\"name\": \"' }}\n            {{- tool_call.name }}\n            {{- '\", \"arguments\": ' }}\n            {{- tool_call.arguments | tojson }}\n            {{- '}\\n</tool_call>' }}\n        {%- endfor %}\n        {{- '<|im_end|>\\n' }}\n    {%- elif message.role == \"tool\" %}\n        {%- if (loop.index0 == 0) or (messages[loop.index0 - 1].role != \"tool\") %}\n            {{- '<|im_start|>user' }}\n        {%- endif %}\n        {{- '\\n<tool_response>\\n' }}\n        {{- message.content }}\n        {{- '\\n</tool_response>' }}\n        {%- if loop.last or (messages[loop.index0 + 1].role != \"tool\") %}\n            {{- '<|im_end|>\\n' }}\n        {%- endif %}\n    {%- endif %}\n{%- endfor %}\n{%- if add_generation_prompt %}\n    {{- '<|im_start|>assistant\\n' }}\n{%- endif %}\n",
				bos_token: "<|endoftext|>",
				eos_token: "<|im_end|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "Qwen/Qwen2.5-7B-Instruct-Turbo",
		label: "Qwen2.5 7B Instruct Turbo",
		provider: "Together",
		type: "chat",
		modalities: ["function-call", "tool-choice"],
		context: {
			maxTokens: 32768,
		},
		cost: {
			inputCost: 0.3,
			outputCost: 0.3,
		},
		metadata: {
			uuid: "endpoint-117e51c5-eec1-48b8-be1c-fe6f8ae0a5be",
			link: "https://huggingface.co/Qwen/Qwen2.5-7B-Instruct",
			description:
				"Qwen2.5 is the latest series of Qwen large language models. For Qwen2.5, we release a number of base language models and instruction-tuned language models ranging from 0.5 to 72 billion parameters.",
			config: {
				stop: ["<|im_end|>"],
				chat_template:
					"{%- if tools %}\n    {{- '<|im_start|>system\\n' }}\n    {%- if messages[0]['role'] == 'system' %}\n        {{- messages[0]['content'] }}\n    {%- else %}\n        {{- 'You are Qwen, created by Alibaba Cloud. You are a helpful assistant.' }}\n    {%- endif %}\n    {{- \"\\n\\n# Tools\\n\\nYou may call one or more functions to assist with the user query.\\n\\nYou are provided with function signatures within <tools></tools> XML tags:\\n<tools>\" }}\n    {%- for tool in tools %}\n        {{- \"\\n\" }}\n        {{- tool | tojson }}\n    {%- endfor %}\n    {{- \"\\n</tools>\\n\\nFor each function call, return a json object with function name and arguments within <tool_call></tool_call> XML tags:\\n<tool_call>\\n{\\\"name\\\": <function-name>, \\\"arguments\\\": <args-json-object>}\\n</tool_call><|im_end|>\\n\" }}\n{%- else %}\n    {%- if messages[0]['role'] == 'system' %}\n        {{- '<|im_start|>system\\n' + messages[0]['content'] + '<|im_end|>\\n' }}\n    {%- else %}\n        {{- '<|im_start|>system\\nYou are Qwen, created by Alibaba Cloud. You are a helpful assistant.<|im_end|>\\n' }}\n    {%- endif %}\n{%- endif %}\n{%- for message in messages %}\n    {%- if (message.role == \"user\") or (message.role == \"system\" and not loop.first) or (message.role == \"assistant\" and not message.tool_calls) %}\n        {{- '<|im_start|>' + message.role + '\\n' + message.content + '<|im_end|>' + '\\n' }}\n    {%- elif message.role == \"assistant\" %}\n        {{- '<|im_start|>' + message.role }}\n        {%- if message.content %}\n            {{- '\\n' + message.content }}\n        {%- endif %}\n        {%- for tool_call in message.tool_calls %}\n            {%- if tool_call.function is defined %}\n                {%- set tool_call = tool_call.function %}\n            {%- endif %}\n            {{- '\\n<tool_call>\\n{\"name\": \"' }}\n            {{- tool_call.name }}\n            {{- '\", \"arguments\": ' }}\n            {{- tool_call.arguments | tojson }}\n            {{- '}\\n</tool_call>' }}\n        {%- endfor %}\n        {{- '<|im_end|>\\n' }}\n    {%- elif message.role == \"tool\" %}\n        {%- if (loop.index0 == 0) or (messages[loop.index0 - 1].role != \"tool\") %}\n            {{- '<|im_start|>user' }}\n        {%- endif %}\n        {{- '\\n<tool_response>\\n' }}\n        {{- message.content }}\n        {{- '\\n</tool_response>' }}\n        {%- if loop.last or (messages[loop.index0 + 1].role != \"tool\") %}\n            {{- '<|im_end|>\\n' }}\n        {%- endif %}\n    {%- endif %}\n{%- endfor %}\n{%- if add_generation_prompt %}\n    {{- '<|im_start|>assistant\\n' }}\n{%- endif %}\n",
				bos_token: "<|endoftext|>",
				eos_token: "<|im_end|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "Qwen/Qwen2.5-VL-72B-Instruct",
		label: "Qwen2.5-VL (72B) Instruct",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 32768,
		},
		cost: {
			inputCost: 1.95,
			outputCost: 8,
		},
		metadata: {
			uuid: "endpoint-0de709e6-fce9-4457-9591-b650b7338796",
			link: "https://huggingface.co/api/models/Qwen/Qwen2.5-VL-72B-Instruct",
			description:
				"Qwen2.5-VL is the latest version of the vision language models based on Qwen2 in the Qwen model family.",
			config: {
				stop: ["<|im_end|>", "<|endoftext|>"],
				chat_template:
					"{% set image_count = namespace(value=0) %}{% set video_count = namespace(value=0) %}{% for message in messages %}{% if loop.first and message['role'] != 'system' %}<|im_start|>system\nYou are a helpful assistant.<|im_end|>\n{% endif %}<|im_start|>{{ message['role'] }}\n{% if message['content'] is string %}{{ message['content'] }}<|im_end|>\n{% else %}{% for content in message['content'] %}{% if content['type'] == 'image' or 'image' in content or 'image_url' in content %}{% set image_count.value = image_count.value + 1 %}{% if add_vision_id %}Picture {{ image_count.value }}: {% endif %}<|vision_start|><|image_pad|><|vision_end|>{% elif content['type'] == 'video' or 'video' in content %}{% set video_count.value = video_count.value + 1 %}{% if add_vision_id %}Video {{ video_count.value }}: {% endif %}<|vision_start|><|video_pad|><|vision_end|>{% elif 'text' in content %}{{ content['text'] }}{% endif %}{% endfor %}<|im_end|>\n{% endif %}{% endfor %}{% if add_generation_prompt %}<|im_start|>assistant\n{% endif %}",
				bos_token: null,
				eos_token: "<|im_end|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "deepseek-ai/DeepSeek-R1",
		label: "DeepSeek R1",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 163840,
		},
		cost: {
			inputCost: 3,
			outputCost: 7,
		},
		metadata: {
			uuid: "endpoint-e98c33e5-aba4-4681-a904-2af36627ac32",
			link: "https://huggingface.co/deepseek-ai/DeepSeek-R1",
			description: "DeepSeek R1",
			config: {
				stop: ["<｜end▁of▁sentence｜>"],
				chat_template:
					"{% if not add_generation_prompt is defined %}{% set add_generation_prompt = false %}{% endif %}{% set system_prompt='' %}{% set is_tool = false %}{%- for message in messages %}{%- if message['role'] == 'system' %}{% set system_prompt = message['content'] %}{%- endif %}{%- endfor %}{{bos_token}}{{system_prompt}}{%- for message in messages %}{%- if message['role'] == 'user' %}{%- set is_tool = false -%}{{'<｜User｜>' + message['content']}}{%- endif %}{%- if message['role'] == 'assistant' and message['content'] is none %}{%- set is_tool = false -%}{%- set is_output_first = true -%}{%- set is_first = false -%}{%- for tool in message['tool_calls']%}{%- if is_first %}{{'<｜Assistant｜><｜tool▁calls▁begin｜><｜tool▁call▁begin｜>' + tool['type'] + '<｜tool▁sep｜>' + tool['function']['name'] + '\\n' + '```json' + '\\n' + tool['function']['arguments'] + '\\n' + '```' + '<｜tool▁call▁end｜>'}}{%- set is_first = true -%}{%- else %}{{'\\n' + '<｜tool▁call▁begin｜>' + tool['type'] + '<｜tool▁sep｜>' + tool['function']['name'] + '\\n' + '```json' + '\\n' + tool['function']['arguments'] + '\\n' + '```' + '<｜tool▁call▁end｜>'}}{{'<｜tool▁calls▁end｜><｜end▁of▁sentence｜>'}}{%- endif %}{%- endfor %}{%- endif %}{%- if message['role'] == 'assistant' and message['content'] is not none %}{%- if is_tool %}{{'<｜tool▁outputs▁end｜>' + message['content'] + '<｜end▁of▁sentence｜>'}}{%- set is_tool = false -%}{%- else %}{% set content = message['content'] %}{% if '</think>' in content %}{% set parts = content | split('</think>') %}{% set content = parts[parts.length-1] %}{% endif %}{{'<｜Assistant｜>' + content + '<｜end▁of▁sentence｜>'}}{%- endif %}{%- endif %}{%- if message['role'] == 'tool' %}{%- set is_tool = true -%}{%- if is_output_first %}{{'<｜tool▁outputs▁begin｜><｜tool▁output▁begin｜>' + message['content'] + '<｜tool▁output▁end｜>'}}{%- set is_output_first = false %}{%- else %}{{'\\n<｜tool▁output▁begin｜>' + message['content'] + '<｜tool▁output▁end｜>'}}{%- endif %}{%- endif %}{%- endfor -%}{% if is_tool %}{{'<｜tool▁outputs▁end｜>'}}{% endif %}{% if add_generation_prompt and not is_tool %}{{'<｜Assistant｜>'}}{% endif %}",
				bos_token: "<｜begin▁of▁sentence｜>",
				eos_token: "<｜end▁of▁sentence｜>",
				max_tokens_hard_limit_streaming: 32768,
				max_tokens: 8192,
			},
		},
	},
	{
		name: "black-forest-labs/FLUX.1-dev-lora",
		label: "FLUX.1 [dev] LoRA",
		provider: "Together",
		type: "image-generation",
		modalities: [],
		context: {},
		cost: {
			inputCostPixel: 0.035,
		},
		metadata: {
			link: "https://huggingface.co/black-forest-labs/FLUX.1-dev",
			description:
				"FLUX.1 [dev] is a 12 billion parameter rectified flow transformer capable of generating images from text descriptions.",
			config: {
				stop: [],
				chat_template: null,
				bos_token: null,
				eos_token: null,
				height: 768,
				width: 1024,
				number_of_images: 1,
				steps: 28,
				seed: -1,
				max_n: 1,
				response_format: "b64_json",
			},
		},
	},
	{
		name: "meta-llama/Llama-3.2-3B-Instruct-Turbo",
		label: "Meta Llama 3.2 3B Instruct Turbo",
		provider: "Together",
		type: "chat",
		modalities: ["response-schema"],
		context: {
			maxTokens: 131072,
		},
		cost: {
			inputCost: 0.06,
			outputCost: 0.06,
		},
		metadata: {
			uuid: "endpoint-d9c24b7a-77fb-42ab-a0df-5f1d05a7495b",
			link: "https://huggingface.co/meta-llama/Llama-3.2-3B-Instruct",
			description:
				"Llama 3.2 is an auto-regressive language model that uses an optimized transformer architecture. The tuned versions use supervised fine-tuning (SFT) and reinforcement learning with human feedback (RLHF) to align with human preferences for helpfulness and safety.",
			config: {
				stop: ["<|eot_id|>", "<|eom_id|>"],
				chat_template:
					'{{- bos_token }}\n{%- if custom_tools is defined %}\n    {%- set tools = custom_tools %}\n{%- endif %}\n{%- if not tools_in_user_message is defined %}\n    {%- set tools_in_user_message = true %}\n{%- endif %}\n{%- if not date_string is defined %}\n    {%- if strftime_now is defined %}\n        {%- set date_string = strftime_now("%d %b %Y") %}\n    {%- else %}\n        {%- set date_string = "26 Jul 2024" %}\n    {%- endif %}\n{%- endif %}\n{%- if not tools is defined %}\n    {%- set tools = none %}\n{%- endif %}\n\n{#- This block extracts the system message, so we can slot it into the right place. #}\n{%- if messages[0][\'role\'] == \'system\' %}\n    {%- set system_message = messages[0][\'content\']|trim %}\n    {%- set messages = messages[1:] %}\n{%- else %}\n    {%- set system_message = "" %}\n{%- endif %}\n\n{#- System message #}\n{{- "<|start_header_id|>system<|end_header_id|>\\n\\n" }}\n{%- if tools is not none %}\n    {{- "Environment: ipython\\n" }}\n{%- endif %}\n{{- "Cutting Knowledge Date: December 2023\\n" }}\n{{- "Today Date: " + date_string + "\\n\\n" }}\n{%- if tools is not none and not tools_in_user_message %}\n    {{- "You have access to the following functions. To call a function, please respond with JSON for a function call." }}\n    {{- \'Respond in the format {"name": function name, "parameters": dictionary of argument name and its value}.\' }}\n    {{- "Do not use variables.\\n\\n" }}\n    {%- for t in tools %}\n        {{- t | tojson(indent=4) }}\n        {{- "\\n\\n" }}\n    {%- endfor %}\n{%- endif %}\n{{- system_message }}\n{{- "<|eot_id|>" }}\n\n{#- Custom tools are passed in a user message with some extra guidance #}\n{%- if tools_in_user_message and not tools is none %}\n    {#- Extract the first user message so we can plug it in here #}\n    {%- if messages | length != 0 %}\n        {%- set first_user_message = messages[0][\'content\']|trim %}\n        {%- set messages = messages[1:] %}\n    {%- else %}\n        {{- raise_exception("Cannot put tools in the first user message when there\'s no first user message!") }}\n{%- endif %}\n    {{- \'<|start_header_id|>user<|end_header_id|>\\n\\n\' -}}\n    {{- "Given the following functions, please respond with a JSON for a function call " }}\n    {{- "with its proper arguments that best answers the given prompt.\\n\\n" }}\n    {{- \'Respond in the format {"name": function name, "parameters": dictionary of argument name and its value}.\' }}\n    {{- "Do not use variables.\\n\\n" }}\n    {%- for t in tools %}\n        {{- t | tojson(indent=4) }}\n        {{- "\\n\\n" }}\n    {%- endfor %}\n    {{- first_user_message + "<|eot_id|>"}}\n{%- endif %}\n\n{%- for message in messages %}\n    {%- if not (message.role == \'ipython\' or message.role == \'tool\' or \'tool_calls\' in message) %}\n        {{- \'<|start_header_id|>\' + message[\'role\'] + \'<|end_header_id|>\\n\\n\'+ message[\'content\'] | trim + \'<|eot_id|>\' }}\n    {%- elif \'tool_calls\' in message %}\n        {%- if not message.tool_calls|length == 1 %}\n            {{- raise_exception("This model only supports single tool-calls at once!") }}\n        {%- endif %}\n        {%- set tool_call = message.tool_calls[0].function %}\n        {{- \'<|start_header_id|>assistant<|end_header_id|>\\n\\n\' -}}\n        {{- \'{"name": "\' + tool_call.name + \'", \' }}\n        {{- \'"parameters": \' }}\n        {{- tool_call.arguments | tojson }}\n        {{- "}" }}\n        {{- "<|eot_id|>" }}\n    {%- elif message.role == "tool" or message.role == "ipython" %}\n        {{- "<|start_header_id|>ipython<|end_header_id|>\\n\\n" }}\n        {%- if message.content is mapping or message.content is iterable %}\n            {{- message.content | tojson }}\n        {%- else %}\n            {{- message.content }}\n        {%- endif %}\n        {{- "<|eot_id|>" }}\n    {%- endif %}\n{%- endfor %}\n{%- if add_generation_prompt %}\n    {{- \'<|start_header_id|>assistant<|end_header_id|>\\n\\n\' }}\n{%- endif %}\n',
				bos_token: "<|begin_of_text|>",
				eos_token: "<|eot_id|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "scb10x/scb10x-llama3-1-typhoon2-70b-instruct",
		label: "Typhoon 2 70B Instruct",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.88,
			outputCost: 0.88,
		},
		metadata: {
			uuid: "endpoint-f440dec6-9db3-489e-abea-5e4be8c03c0c",
			link: "https://huggingface.co/api/models/scb10x/llama3.1-typhoon2-70b-instruct",
			description:
				"Llama3.1-Typhoon2-70B-instruct is a instruct Thai 🇹🇭   large language model with 70 billion parameters, and it is based on Llama3.1-70B.",
			config: {
				stop: ["<|eot_id|>"],
				chat_template:
					'{{- bos_token }}\n{%- if custom_tools is defined %}\n    {%- set tools = custom_tools %}\n{%- endif %}\n{%- if not date_string is defined %}\n    {%- set date_string = "26 Jul 2024" %}\n{%- endif %}\n{%- if not tools is defined %}\n    {%- set tools = none %}\n{%- endif %}\n\n{#- This block extracts the system message, so we can slot it into the right place. #}\n{%- if messages[0][\'role\'] == \'system\' %}\n    {%- set system_message = messages[0][\'content\']|trim %}\n    {%- set messages = messages[1:] %}\n{%- else %}\n    {%- set system_message = "" %}\n{%- endif %}\n\n{#- System message + builtin tools #}\n{{- "<|start_header_id|>system<|end_header_id|>\\n\\n" }}\n{{- "Cutting Knowledge Date: December 2023\\n" }}\n{{- "Today Date: " + date_string + "\\n\\n" }}\n{{- system_message }}\n{%- if tools is not none %}\n    {{- "\\n" }}\n    {{- "You are given a question and a set of possible functions. Based on the question, you will need to make one or more function/tool calls to achieve the purpose." }}\n    {{- "If none of the function can be used, point it out. If the given question lacks the parameters required by the function, also point it out." }}\n    {{- "You should only return the function call in tools call sections." }}\n    {{- "If you decide to invoke any of the function(s), you MUST put it in the format of [Function(arguments1={{params_name1: params_value1,params_name2: params_value2, ...}},  name1=function_name1), Function(arguments2={{params}},  name2=function_name2) , ...]"}}\n    {{- "You SHOULD NOT include any other text in the response.\\nHere is a list of functions in JSON format that you can invoke.\\n" }}\n    {%- for t in tools %}\n        {{- t | tojson(indent=4) }}\n        {{- "\\n\\n" }}\n    {%- endfor %}\n{%- endif %}\n{{- "<|eot_id|>" }}\n\n\n{%- for message in messages %}\n    {%- if not (message.role == \'tool\') %}\n        {{- \'<|start_header_id|>\' + message[\'role\'] + \'<|end_header_id|>\\n\\n\'+ message[\'content\'] | trim + \'<|eot_id|>\' }}\n    {%- elif message.role == "tool" %}\n        {{- "<|start_header_id|>tool<|end_header_id|>\\n\\n" }}\n        {%- if message.content is mapping or message.content is iterable %}\n            {{- message.content | tojson }}\n        {%- else %}\n            {{- message.content }}\n        {%- endif %}\n        {{- "<|eot_id|>" }}\n    {%- endif %}\n{%- endfor %}\n{%- if add_generation_prompt %}\n    {{- \'<|start_header_id|>assistant<|end_header_id|>\\n\\n\' }}\n{%- endif %}',
				bos_token: "<|begin_of_text|>",
				eos_token: "<|eot_id|>",
			},
		},
	},
	{
		name: "Qwen/Qwen2-VL-72B-Instruct",
		label: "Qwen2-VL (72B) Instruct",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 32768,
		},
		cost: {
			inputCost: 1.2,
			outputCost: 1.2,
		},
		metadata: {
			link: "https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct",
			description:
				"Qwen2-VL is the latest version of the vision language models based on Qwen2 in the Qwen model family.",
			config: {
				stop: ["<|im_end|>", "<|endoftext|>"],
				chat_template:
					"{% set image_count = namespace(value=0) %}{% set video_count = namespace(value=0) %}{% for message in messages %}{% if loop.first and message['role'] != 'system' %}<|im_start|>system\nYou are a helpful assistant.<|im_end|>\n{% endif %}<|im_start|>{{ message['role'] }}\n{% if message['content'] is string %}{{ message['content'] }}<|im_end|>\n{% else %}{% for content in message['content'] %}{% if content['type'] == 'image' or 'image' in content or 'image_url' in content %}{% set image_count.value = image_count.value + 1 %}{% if add_vision_id %}Picture {{ image_count.value }}: {% endif %}<|vision_start|><|image_pad|><|vision_end|>{% elif content['type'] == 'video' or 'video' in content %}{% set video_count.value = video_count.value + 1 %}{% if add_vision_id %}Video {{ video_count.value }}: {% endif %}<|vision_start|><|video_pad|><|vision_end|>{% elif 'text' in content %}{{ content['text'] }}{% endif %}{% endfor %}<|im_end|>\n{% endif %}{% endfor %}{% if add_generation_prompt %}<|im_start|>assistant\n{% endif %}",
				bos_token: null,
				eos_token: "<|im_end|>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B",
		label: "DeepSeek R1 Distill Llama 70B",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 131072,
		},
		cost: {
			inputCost: 2,
			outputCost: 2,
		},
		metadata: {
			uuid: "endpoint-6bf6649d-fdfb-47e7-8f39-be4c7516c96c",
			link: "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Llama-70B",
			description: "DeepSeek R1 Distill Llama 70B",
			config: {
				stop: ["<｜end▁of▁sentence｜>"],
				chat_template:
					"{% if not add_generation_prompt is defined %}{% set add_generation_prompt = false %}{% endif %}{% set system_prompt='' %}{% set is_tool = false %}{%- for message in messages %}{%- if message['role'] == 'system' %}{% set system_prompt = message['content'] %}{%- endif %}{%- endfor %}{{bos_token}}{{system_prompt}}{%- for message in messages %}{%- if message['role'] == 'user' %}{%- set is_tool = false -%}{{'<｜User｜>' + message['content']}}{%- endif %}{%- if message['role'] == 'assistant' and message['content'] is none %}{%- set is_tool = false -%}{%- set is_output_first = true -%}{%- set is_first = false -%}{%- for tool in message['tool_calls']%}{%- if is_first %}{{'<｜Assistant｜><｜tool▁calls▁begin｜><｜tool▁call▁begin｜>' + tool['type'] + '<｜tool▁sep｜>' + tool['function']['name'] + '\\n' + '```json' + '\\n' + tool['function']['arguments'] + '\\n' + '```' + '<｜tool▁call▁end｜>'}}{%- set is_first = true -%}{%- else %}{{'\\n' + '<｜tool▁call▁begin｜>' + tool['type'] + '<｜tool▁sep｜>' + tool['function']['name'] + '\\n' + '```json' + '\\n' + tool['function']['arguments'] + '\\n' + '```' + '<｜tool▁call▁end｜>'}}{{'<｜tool▁calls▁end｜><｜end▁of▁sentence｜>'}}{%- endif %}{%- endfor %}{%- endif %}{%- if message['role'] == 'assistant' and message['content'] is not none %}{%- if is_tool %}{{'<｜tool▁outputs▁end｜>' + message['content'] + '<｜end▁of▁sentence｜>'}}{%- set is_tool = false -%}{%- else %}{% set content = message['content'] %}{% if '</think>' in content %}{% set parts = content | split('</think>') %}{% set content = parts[parts.length-1] %}{% endif %}{{'<｜Assistant｜>' + content + '<｜end▁of▁sentence｜>'}}{%- endif %}{%- endif %}{%- if message['role'] == 'tool' %}{%- set is_tool = true -%}{%- if is_output_first %}{{'<｜tool▁outputs▁begin｜><｜tool▁output▁begin｜>' + message['content'] + '<｜tool▁output▁end｜>'}}{%- set is_output_first = false %}{%- else %}{{'\\n<｜tool▁output▁begin｜>' + message['content'] + '<｜tool▁output▁end｜>'}}{%- endif %}{%- endif %}{%- endfor -%}{% if is_tool %}{{'<｜tool▁outputs▁end｜>'}}{% endif %}{% if add_generation_prompt and not is_tool %}{{'<｜Assistant｜>'}}{% endif %}",
				bos_token: "<｜begin▁of▁sentence｜>",
				eos_token: "<｜end▁of▁sentence｜>",
				max_tokens: 4096,
			},
		},
	},
	{
		name: "google/gemma-2-27b-it",
		label: "Gemma-2 Instruct (27B)",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {
			inputCost: 0.8,
			outputCost: 0.8,
		},
		metadata: {
			uuid: "endpoint-aeccb188-d897-4fc6-aaf4-84d1bff38f8a",
			link: "https://huggingface.co/google/gemma-2b-it",
			description:
				"Gemma is a family of lightweight, state-of-the-art open models from Google, built from the same research and technology used to create the Gemini models.",
			config: {
				stop: ["<eos>", "<end_of_turn>"],
				chat_template:
					"{{ bos_token }}{% for message in messages %}{% if (message['role'] == 'assistant') %}{% set role = 'model' %}{% else %}{% set role = message['role'] %}{% endif %}{{ '<start_of_turn>' + role + '\n' + message['content'] | trim + '<end_of_turn>\n' }}{% endfor %}{% if add_generation_prompt %}{{'<start_of_turn>model\n'}}{% endif %}",
				bos_token: "<bos>",
				eos_token: "<end_of_turn>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free",
		label: "DeepSeek R1 Distill Llama 70B Free",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 8192,
		},
		cost: {},
		metadata: {
			uuid: "endpoint-21c5baff-f588-47bb-9e7e-3aa7edcf756e",
			link: "https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Llama-70B",
			description: "DeepSeek R1 Distill Llama 70B",
			config: {
				stop: ["<｜end▁of▁sentence｜>"],
				chat_template:
					"{% if not add_generation_prompt is defined %}{% set add_generation_prompt = false %}{% endif %}{% set system_prompt='' %}{% set is_tool = false %}{%- for message in messages %}{%- if message['role'] == 'system' %}{% set system_prompt = message['content'] %}{%- endif %}{%- endfor %}{{bos_token}}{{system_prompt}}{%- for message in messages %}{%- if message['role'] == 'user' %}{%- set is_tool = false -%}{{'<｜User｜>' + message['content']}}{%- endif %}{%- if message['role'] == 'assistant' and message['content'] is none %}{%- set is_tool = false -%}{%- set is_output_first = true -%}{%- set is_first = false -%}{%- for tool in message['tool_calls']%}{%- if is_first %}{{'<｜Assistant｜><｜tool▁calls▁begin｜><｜tool▁call▁begin｜>' + tool['type'] + '<｜tool▁sep｜>' + tool['function']['name'] + '\\n' + '```json' + '\\n' + tool['function']['arguments'] + '\\n' + '```' + '<｜tool▁call▁end｜>'}}{%- set is_first = true -%}{%- else %}{{'\\n' + '<｜tool▁call▁begin｜>' + tool['type'] + '<｜tool▁sep｜>' + tool['function']['name'] + '\\n' + '```json' + '\\n' + tool['function']['arguments'] + '\\n' + '```' + '<｜tool▁call▁end｜>'}}{{'<｜tool▁calls▁end｜><｜end▁of▁sentence｜>'}}{%- endif %}{%- endfor %}{%- endif %}{%- if message['role'] == 'assistant' and message['content'] is not none %}{%- if is_tool %}{{'<｜tool▁outputs▁end｜>' + message['content'] + '<｜end▁of▁sentence｜>'}}{%- set is_tool = false -%}{%- else %}{% set content = message['content'] %}{% if '</think>' in content %}{% set parts = content | split('</think>') %}{% set content = parts[parts.length-1] %}{% endif %}{{'<｜Assistant｜>' + content + '<｜end▁of▁sentence｜>'}}{%- endif %}{%- endif %}{%- if message['role'] == 'tool' %}{%- set is_tool = true -%}{%- if is_output_first %}{{'<｜tool▁outputs▁begin｜><｜tool▁output▁begin｜>' + message['content'] + '<｜tool▁output▁end｜>'}}{%- set is_output_first = false %}{%- else %}{{'\\n<｜tool▁output▁begin｜>' + message['content'] + '<｜tool▁output▁end｜>'}}{%- endif %}{%- endif %}{%- endfor -%}{% if is_tool %}{{'<｜tool▁outputs▁end｜>'}}{% endif %}{% if add_generation_prompt and not is_tool %}{{'<｜Assistant｜>'}}{% endif %}",
				bos_token: "<｜begin▁of▁sentence｜>",
				eos_token: "<｜end▁of▁sentence｜>",
				max_tokens: 2048,
			},
		},
	},
	{
		name: "meta-llama/Llama-2-70b-hf",
		label: "LLaMA-2 (70B)",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 4096,
		},
		cost: {
			inputCost: 0.9,
			outputCost: 0.9,
		},
		metadata: {
			uuid: "endpoint-291a09ed-e013-477f-b4eb-1606b88d6d61",
			link: "https://huggingface.co/api/models/meta-llama/Llama-2-70b-hf",
			description:
				"The LLaMA-2 model is a large language model trained on a mixture of data sources.",
			config: {
				stop: ["</s>"],
				chat_template: null,
				bos_token: "<s>",
				eos_token: "</s>",
			},
		},
	},
	{
		name: "deepseek-ai/DeepSeek-V3-p-dp",
		label: "DeepSeek V3",
		provider: "Together",
		type: "chat",
		modalities: [],
		context: {
			maxTokens: 131072,
		},
		cost: {
			inputCost: 1.25,
			outputCost: 1.25,
		},
		metadata: {
			link: "https://huggingface.co/deepseek-ai/DeepSeek-V3",
			description: "DeepSeek V3",
			config: {
				stop: ["<｜end▁of▁sentence｜>"],
				chat_template:
					"{% if not add_generation_prompt is defined %}{% set add_generation_prompt = false %}{% endif %}{% set is_first = false %}{% set is_tool = false %}{% set is_output_first = true %}{% set system_prompt='' %}{% set is_first_sp = true %}{%- for message in messages %}{%- if message['role'] == 'system' %}{%- if is_first_sp %}{% set system_prompt = system_prompt + message['content'] %}{% set is_first_sp = false %}{%- else %}{% set system_prompt = system_prompt + '\n\n' + message['content'] %}{%- endif %}{%- endif %}{%- endfor %}{% if tools %}{% set system_prompt = system_prompt + '\n\nYou can access the following functions. Use them if required -\n' + (tools | tojson) + '\n' %}{% endif %}{{bos_token}}{{system_prompt}}{%- for message in messages %}{%- if message['role'] == 'user' %}{%- set is_tool = false -%}{{'<｜User｜>' + message['content']}}{%- endif %}{%- if message['role'] == 'assistant' and message['content'] is none %}{%- set is_tool = false -%}{%- for tool in message['tool_calls']%}{%- if not is_first %}{{'<｜Assistant｜><｜tool▁calls▁begin｜><｜tool▁call▁begin｜>' + tool['type'] + '<｜tool▁sep｜>' + tool['function']['name'] + '\n' + '```json' + '\n' + tool['function']['arguments'] + '\n' + '```' + '<｜tool▁call▁end｜>'}}{%- set is_first = true -%}{%- else %}{{'\n' + '<｜tool▁call▁begin｜>' + tool['type'] + '<｜tool▁sep｜>' + tool['function']['name'] + '\n' + '```json' + '\n' + tool['function']['arguments'] + '\n' + '```' + '<｜tool▁call▁end｜>'}}{{'<｜tool▁calls▁end｜><｜end▁of▁sentence｜>'}}{%- endif %}{%- endfor %}{%- endif %}{%- if message['role'] == 'assistant' and message['content'] is not none %}{%- if is_tool %}{{'<｜tool▁outputs▁end｜>' + message['content'] + '<｜end▁of▁sentence｜>'}}{%- set is_tool = false -%}{%- else %}{{'<｜Assistant｜>' + message['content'] + '<｜end▁of▁sentence｜>'}}{%- endif %}{%- endif %}{%- if message['role'] == 'tool' %}{%- set is_tool = true -%}{%- if is_output_first %}{{'<｜tool▁outputs▁begin｜><｜tool▁output▁begin｜>' + message['content'] + '<｜tool▁output▁end｜>'}}{%- set is_output_first = false %}{%- else %}{{'\n<｜tool▁output▁begin｜>' + message['content'] + '<｜tool▁output▁end｜>'}}{%- endif %}{%- endif %}{%- endfor -%}{% if is_tool %}{{'<｜tool▁outputs▁end｜>'}}{% endif %}{% if add_generation_prompt and not is_tool %}{{'<｜Assistant｜>'}}{% endif %}",
				bos_token: "<｜begin▁of▁sentence｜>",
				eos_token: "<｜end▁of▁sentence｜>",
				max_tokens_hard_limit_streaming: 32768,
				max_tokens: 2048,
			},
		},
	},
];

export default models;
