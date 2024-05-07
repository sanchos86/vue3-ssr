export const routes = [
  {
    name: 'HomePage',
    path: '/',
    components: {
      default: () => import('Pages/home-page/HomePage.vue'),
    },
  },
  {
    name: 'Jokes',
    path: '/jokes',
    components: {
      default: () => import('Pages/jokes/Jokes.vue'),
    },
  },
  {
    name: 'JokeItem',
    path: '/jokes/:id',
    components: {
      default: () => import('Pages/joke-item/JokeItem.vue'),
    },
  },
];
