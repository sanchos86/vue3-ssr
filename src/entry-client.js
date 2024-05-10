import { createUniversalApp } from './main';
import { httpClient } from 'HttpClient/http-client';

const { app, router } = createUniversalApp();

// TODO move to createUniversalApp
app.use(httpClient, {
  baseURL: import.meta.env.VITE_HTTP_CLIENT_BASE_URL,
});

router.isReady().then(() => {
  app.mount('#app');
});
