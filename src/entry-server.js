import { renderToString } from '@vue/server-renderer';

import { createUniversalApp } from './main';

export const render = async (url) => {
  const ctx = {};
  const { app, router } = createUniversalApp();

  await router.push(url);
  await router.isReady();

  const appHtml = await renderToString(app, ctx);

  return { appHtml };
};
