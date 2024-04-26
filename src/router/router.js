import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';

import { routes } from './routes.js';

export const createUniversalRouter = () => createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
});
