import { renderToString } from '@vue/server-renderer';

import { createUniversalApp } from './main';
import { httpClientProvider } from 'HttpClient/http-client';

export const render = async (url) => {
  const ctx = {};
  const { app, router, store } = createUniversalApp();

  await router.push(url);
  await router.isReady();

  store.$httpClient = httpClientProvider(app, {
    baseURL: import.meta.env.VITE_HTTP_CLIENT_BASE_URL,
  });

  const appHtml = await renderToString(app, ctx);
  const initialState = `<script>
    window.__INITIAL_STATE__ = ${JSON.stringify(store.state)};
  </script>`;

  return { appHtml, initialState };
};
