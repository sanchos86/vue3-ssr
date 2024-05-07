<template>
  <div>
    <nav>
      <router-link :to="{ name: 'HomePage' }">Home</router-link> | <router-link :to="{ name: 'Jokes' }">Jokes</router-link>
    </nav>
    <router-view />
    <router-view name="footer" />
  </div>
</template>
