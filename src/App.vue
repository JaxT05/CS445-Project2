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
    <Transition name="slide">
      <Sidebar v-if="isActive" v-model="isActive"/>
    </Transition>
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
@keyframes fadeIn {
  from {opacity: 0.5;}
  to {opacity: 1};
}
@keyframes fadeOut {
  from {opacity: 1;}
  to {opacity: 0.5};
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s;
}

.slide-enter-from {
  transform: translateX(100%);
  animation: fadeIn 0.2s;
}
.slide-leave-to {
  transform: translateX(100%);
  animation: fadeOut 0.2s;
}
</style>