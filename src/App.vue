<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';

</script>

<template>
  <head>
  </head>
  <main>
    <header></header>
    <Sidebar/>
      <RouterView/>
  </main>
</template>

<style scoped>
header {
  background-color: #546B41;
  height: 2rem;
}
</style>