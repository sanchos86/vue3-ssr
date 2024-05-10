<template>
  <div>
    <LazyHydrationWrapper>
      <StaticContent />
    </LazyHydrationWrapper>
    <div :style="{ marginTop: '32px' }">
      <div><button @click="visible = !visible">Load random joke</button></div>
      <LazyRandomJoke v-if="visible" :style="{ marginTop: '16px' }" />
    </div>
    <div :style="{ marginTop: '32px' }">
      <div>
        <button @click="visibleWithLoadingStateAndError = !visibleWithLoadingStateAndError">
          Load component with loading state and error
        </button>
      </div>
      <LazyWithLoadingStateAndError v-if="visibleWithLoadingStateAndError" :style="{ marginTop: '16px' }" />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, h, ref } from 'vue';
import { LazyHydrationWrapper } from 'vue3-lazy-hydration';

import StaticContent from 'Components/static-content/StaticContent.vue';

const LoadingComponent = h('div', { style: { fontSize: '32px', color: 'purple' } }, 'Loading...');
const ErrorComponent = h('div', { style: { fontSize: '24px', color: 'red' } }, 'Error when loading component');

const LazyRandomJoke = defineAsyncComponent(() => import('Components/random-joke/RandomJoke.vue'));
const LazyWithLoadingStateAndError = defineAsyncComponent({
  loader: () => new Promise((_, reject) => {
    setTimeout(() => {
      reject(null);
    }, 2500);
  }),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
});
const visible = ref(false);
const visibleWithLoadingStateAndError = ref(false);
</script>
