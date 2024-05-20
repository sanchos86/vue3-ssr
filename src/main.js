import { createSSRApp } from 'vue';

import { createUniversalRouter } from 'Router/router';
import { createUniversalStore } from './store/store';
import App from 'Components/app/App.vue';

export const createUniversalApp = (initialState = {}) => {
  const app = createSSRApp(App);
  const router = createUniversalRouter();
  const store = createUniversalStore(initialState);

  app.use(router);
  app.use(store);

  return { app, router, store };
};
