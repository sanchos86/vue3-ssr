import { createUniversalApp } from './main';
import { httpClient } from 'HttpClient/http-client';

const initialState = window.__INITIAL_STATE__ || {};
const { app, router } = createUniversalApp(initialState);

// TODO move to createUniversalApp
app.use(httpClient, {
  baseURL: import.meta.env.VITE_HTTP_CLIENT_BASE_URL,
});

router.isReady().then(() => {
  app.mount('#app');
});
