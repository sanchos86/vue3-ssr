import axios from 'axios';
import { inject } from 'vue';

import { HTTP_CLIENT_KEY } from './injection-symbols';

class HttpClient {
  instance;

  constructor(config) {
    this.instance = axios.create(config);
  }
}

export const httpClientProvider = (app, options) => {
  const httpClient = new HttpClient(options);

  app.provide(HTTP_CLIENT_KEY, httpClient);

  return httpClient;
};

export function useHttpClient() {
  return inject(HTTP_CLIENT_KEY);
}
