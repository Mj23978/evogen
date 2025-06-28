export class EvogenError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EvogenError";
  }
}

export class EvogenNotImplementedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EvogenNotImplementedError";
  }
}

export class EvogenStorageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EvogenStorageError";
  }
}

export class EvogenProviderError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EvogenProviderError";
  }
}