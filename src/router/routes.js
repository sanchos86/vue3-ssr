export const routes = [
  {
    name: 'HomePage',
    path: '/',
    components: {
      default: () => import('Pages/home-page/HomePage.vue'),
    },
  },
  {
    name: 'JokesCategoriesPage',
    path: '/jokes-categories',
    components: {
      default: () => import('Pages/jokes-categories-page/JokesCategoriesPage.vue'),
    },
  },
  {
    name: 'JokeByCategoryPage',
    path: '/jokes/:category',
    components: {
      default: () => import('Pages/joke-by-category-page/JokeByCategoryPage.vue'),
    },
  },
];
