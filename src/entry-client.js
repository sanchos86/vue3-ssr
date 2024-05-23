import { createUniversalApp } from './main';
import { httpClientProvider } from 'HttpClient/http-client';

const initialState = window.__INITIAL_STATE__ || {};
const { app, router, store } = createUniversalApp(initialState);

router.isReady().then(() => {
  store.$httpClient = httpClientProvider(app, {
    baseURL: import.meta.env.VITE_HTTP_CLIENT_BASE_URL,
  });

  app.mount('#app');
});
