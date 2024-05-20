<template>
  <div>
    <ul v-if="jokesCategories.length">
      <li v-for="category in jokesCategories" :key="category">
        <router-link :to="{ name: 'JokeByCategoryPage', params: { category } }" target="_blank">{{ category }}</router-link>
      </li>
    </ul>
    <p v-else>Ничего не найдено</p>
  </div>
</template>

<script setup>
import { computed, onServerPrefetch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const jokesCategories = computed(() => store.state.jokesCategories);

onServerPrefetch(async () => {
  await store.dispatch('FETCH_JOKES_CATEGORIES');
});
</script>
