<template>
  <div v-if="joke">
    <ul v-if="joke.categories.length">
      <li v-for="category in joke.categories" :key="category">{{ category }}</li>
    </ul>
    <RouterLink :to="{ name: 'JokeItem', params: { id: joke.id } }">{{ joke.value }}</RouterLink>
  </div>
  <div v-else-if="error" :style="{ color: 'red', fontWeight: 700 }">{{ error }}</div>
</template>

<script setup>
import { ref } from 'vue';
import { useHttpClient } from 'HttpClient/http-client';

const httpClient = useHttpClient();

const joke = ref(null);
const error = ref('');

try {
  const response = await httpClient.instance.request({
    url: Math.random() > 0.5 ? 'random' : 'test',
  });
  joke.value = response.data;
} catch (e) {
  error.value = e.message;
}
</script>
