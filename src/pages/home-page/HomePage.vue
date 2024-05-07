<template>
  <div>
    <LazyHydrationWrapper>
      <StaticContent />
    </LazyHydrationWrapper>
    <div :style="{ marginTop: '32px' }">
      <div><button @click="visible = !visible">Load random joke</button></div>
      <LazyRandomJoke v-if="visible" :style="{ marginTop: '16px' }" />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue';
import { LazyHydrationWrapper } from 'vue3-lazy-hydration';

import StaticContent from 'Components/static-content/StaticContent.vue';

const LazyRandomJoke = defineAsyncComponent(() => import('Components/random-joke/RandomJoke.vue'));
const visible = ref(false);
</script>
