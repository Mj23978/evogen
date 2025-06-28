# EvoGen

EvoGen is a TypeScript package that routes different Vercel SDK AI providers with a model name. It provides a flexible and extensible way to manage and interact with various AI providers.

## Table of Contents

- [EvoGen](#evogen)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Initialization](#initialization)
    - [Getting a Provider](#getting-a-provider)
    - [Getting Provider Configs](#getting-provider-configs)
    - [Getting Provider API Key](#getting-provider-api-key)
  - [API Documentation](#api-documentation)
    - [EvoGen Class](#evogen-class)
      - [Constructor](#constructor)
      - [getStorage](#getstorage)
      - [getProviderApiKey](#getproviderapikey)
      - [getProviderByType](#getproviderbytype)
      - [getProviderConfigs](#getproviderconfigs)
      - [getProvider](#getprovider)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

To install the package, use npm or yarn:

```sh
npm install evogen
```

or

```sh
yarn add evogen
```

## Usage

### Initialization

First, you need to initialize the `EvoGen` class with a map of strategies.

```typescript
import { EvoGen } from 'evogen';
import { BaseEvogenStorage } from 'evogen/core';

// Define your strategies
const strategies = new Map<string, BaseEvogenStorage<{}>>();
strategies.set('default', new YourDefaultStorageStrategy());

// Initialize EvoGen
const evoGen = new EvoGen(strategies);
```

### Getting a Provider

You can get a provider by its type and strategy.

```typescript
const provider = await evoGen.getProviderByType({
  type: 'Ollama',
  name: 'ollama-provider',
  config: { apiKey: 'your-api-key' }
}, 'default');
```

### Getting Provider Configs

Retrieve the configuration for a specific provider.

```typescript
const configs = await evoGen.getProviderConfigs('ollama-provider', 'default');
```

### Getting Provider API Key

Get the API key for a specific provider.

```typescript
const apiKey = await evoGen.getProviderApiKey({
  type: 'Ollama',
  name: 'ollama-provider',
  config: { apiKey: 'your-api-key' }
}, 'default');
```

## API Documentation

### EvoGen Class

#### Constructor

```typescript
constructor(strategies: Map<string, BaseEvogenStorage<{}>>)
```

Initializes the `EvoGen` instance with a map of strategies.

#### getStorage

```typescript
getStorage(strategy: string): BaseEvogenStorage<{}>
```

Retrieves the storage strategy for the given strategy name.

#### getProviderApiKey

```typescript
async getProviderApiKey(info: ProviderInfo, strategy: string, metadata?: Record<string, any>): Promise<string>
```

Retrieves the API key for the given provider.

#### getProviderByType

```typescript
async getProviderByType(info: ProviderInfo, strategy: string, metadata?: Record<string, any>): Promise<BaseEvogenProvider<any>>
```

Retrieves a provider instance by its type.

#### getProviderConfigs

```typescript
async getProviderConfigs(name: string, strategy: string, metadata?: Record<string, any>): Promise<Record<string, any>>
```

Retrieves the configuration for a specific provider.

#### getProvider

```typescript
async getProvider(name: string, strategy: string, config?: Record<string, any>, metadata?: Record<string, any>): Promise<BaseEvogenProvider<any>>
```

Retrieves a provider instance by its name.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.