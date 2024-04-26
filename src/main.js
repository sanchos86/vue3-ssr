import { createSSRApp } from 'vue';

import { createUniversalRouter } from 'Router/router';
import App from 'Components/app/App.vue';

export const createUniversalApp = () => {
  const app = createSSRApp(App);
  const router = createUniversalRouter();

  app.use(router);

  return { app, router };
};
