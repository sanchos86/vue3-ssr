import axios from 'axios';
import { inject } from 'vue';

import { HTTP_CLIENT_KEY } from './injection-symbols';

class HttpClient {
  $http;

  constructor(config) {
    this.$http = axios.create(config);
  }
}

export const httpClient = {
  install(app, options) {
    app.provide(HTTP_CLIENT_KEY, new HttpClient(options));
  },
};

export function useHttpClient() {
  return inject(HTTP_CLIENT_KEY);
}
