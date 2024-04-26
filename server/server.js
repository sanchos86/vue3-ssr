import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import express from 'express';
import favicon from 'serve-favicon';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;

const templateHtml = isProduction
  ? readFileSync(resolve(process.cwd(), './dist/client/index.html'), 'utf-8')
  : '';
const ssrManifest = isProduction
  ? readFileSync(resolve(process.cwd(), './dist/client/.vite/ssr-manifest.json'), `utf-8`)
  : undefined;

const app = express();
app.use(favicon(resolve(process.cwd(), './public/favicon.png')));

let vite;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);
}

if (isProduction) {
  app.use(express.static(resolve(process.cwd(), 'dist/client'), {
    index: false,
    etag: true,
  }));
}

app.use('*', async (req, res, next) => {
  try {
    const url = req.originalUrl;

    let template;
    let render;

    if (!isProduction) {
      template = readFileSync(resolve(process.cwd(), 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.js')).render;
    } else {
      template = templateHtml;
      render = (await import('../dist/server/entry-server.js')).render;
    }

    const rendered = await render(url, ssrManifest);

    const html = template
      .replace(`<!--app-html-->`, rendered.appHtml ?? '');

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    next(e);
  }
});

// eslint-disable-next-line no-unused-vars
app.use((e, req, res, next) => {
  res.status(500).end(e.stack);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
