<template>
  <div>
    <ul v-if="joke.categories.length" :style="{ marginBottom: '16px' }">
      <li v-for="category in joke.categories" :key="category">{{ category }}</li>
    </ul>
    <div>
      <RouterLink target="_blank" :to="{ name: 'JokeItem', params: { id: joke.id } }">{{ joke.value }}</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// load joke randomly and show spinner
const joke = ref({ categories: [], created_at: '2020-01-05 13:42:28.420821', icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png', id: 'EOwO-jzKQ02ykp6-MI4fiw', updated_at: '2020-01-05 13:42:28.420821', url: 'https://api.chucknorris.io/jokes/EOwO-jzKQ02ykp6-MI4fiw', value: 'Hercules is the strongest man in the world but he lost a game of mercy to Chuck Norris.' });
</script>
