import { API_URL } from '@/config';

interface ClientConfig {
  url?: string;
}

interface RequestConfig {}

export class Client {
  private static instance: Client;
  static getInstance(config?: ClientConfig) {
    if (!this.instance) {
      this.instance = new Client(config);
    }

    return this.instance;
  }

  private constructor(config: Partial<ClientConfig> = {}) {}
}
