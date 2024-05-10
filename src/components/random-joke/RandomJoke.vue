<template>
  <div>
    <h6>Random Joke</h6>
    <Suspense>
      <RandomJokeLoader  />

      <template #fallback>
        Loading...
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import RandomJokeLoader from 'Components/random-joke-loader/RandomJokeLoader.vue';
</script>
