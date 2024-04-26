import { createUniversalApp } from './main';

const { app, router } = createUniversalApp();

router.isReady().then(() => {
  app.mount('#app');
});
