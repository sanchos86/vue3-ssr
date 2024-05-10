import { renderToString } from '@vue/server-renderer';

import { createUniversalApp } from './main';
import { httpClient } from 'HttpClient/http-client';

export const render = async (url) => {
  const ctx = {};
  const { app, router } = createUniversalApp();

  // TODO move to createUniversalApp
  app.use(httpClient, {
    baseURL: import.meta.env.VITE_HTTP_CLIENT_BASE_URL,
  });

  await router.push(url);
  await router.isReady();

  const appHtml = await renderToString(app, ctx);

  return { appHtml };
};
