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
  display: flex;
  align-items: center;
  background-color: #546B41;
  height: 4rem;
  color:white;
  font-weight: bold;
  font-size: 2rem;
  padding:1rem;
}
</style>