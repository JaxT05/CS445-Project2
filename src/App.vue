<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';

</script>

<template>
  <head>
  </head>
  <main>
    <header>
      <img src="./assets/hamburger-menu.svg" alt="hamburger" width="30px" height="30px"/>
    </header>
    <Sidebar/>
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
</style>