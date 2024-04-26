export const routes = [
  {
    name: 'Home',
    path: '/',
    components: {
      default: () => import('Pages/home/Home.vue'),
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
