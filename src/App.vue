<script setup lang="ts">
import Sidebar from '../src/components/Sidebar.vue';
import { ref } from 'vue';

let isActive = ref(false);

</script>

<template>
  <head>
  </head>
  <main>
    <header>
      <button aria="menu button" @click="isActive = !isActive">
        <img src="./assets/hamburger-menu.svg" alt="hamburger" width="30px" height="30px"/>
      </button>
    </header>
    <Sidebar v-if="isActive"/>
      <RouterView/>
  </main>
</template>

<style scoped>
header {
  background-color: #546B41;
  height: fit-content;
  display: flex;
  flex-direction: row-reverse;
  align-items: space-between;
  padding: 2rem;
  position: sticky; 
  top: 0;
  z-index: 1001;
}
header button {
  background: none;
  border: none;
}
</style>