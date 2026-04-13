<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Profile',
  setup() {
    const userName = ref('[Name]');
    const userLevel = ref(9);
    const xpToGo = ref(30);
    const milesWalked = ref(5.0);

    const currentFilter = ref('Recent');

    const findsGrid = ref(Array(12).fill(null));

    return { 
      userName, 
      userLevel, 
      xpToGo, 
      milesWalked, 
      currentFilter, 
      findsGrid 
    };
  }
});
</script>

<template>
  <div class="profile-container">
    
    <header class="profile-header">
      <h1 class="user-name">{{ userName }}:</h1>
      
      <p class="stats-text">
        <span class="bold">Level: {{ userLevel }}</span>
        <span class="xp-needed">+{{ xpToGo }}XP to go</span>
      </p>
      
      <p class="stats-text">
        <span class="bold">Miles Walked: {{ milesWalked.toFixed(1) }}</span>
      </p>
    </header>

    <section class="finds-section">
      <div class="finds-controls">
        <h2 class="section-title">Finds:</h2>
        
        <div class="filter-wrapper">
          <span class="filter-label">Filter:</span>
          <button class="filter-dropdown">
            {{ currentFilter }} 
            <span class="arrow">▲</span>
          </button>
        </div>
      </div>

      <div class="finds-grid">
        <div 
          v-for="(index) in findsGrid" 
          :key="index" 
          class="grid-item"
        >
          </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.profile-container {
  background-color: #FAF5E6;
  min-height: 100vh;
  padding: 30px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1A1A1A;
}

.profile-header {
  margin-bottom: 40px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.user-name {
  font-size: 2.2rem;
  margin: 0 0 15px 0;
  font-weight: bold;
  width: 100%;
}

.stats-text {
  font-size: 1.3rem;
  margin: 8px 0;
  display: flex;
  align-items: baseline; 
}

.bold {
  font-weight: 500;
}

.xp-needed {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-left: 8px;
  font-weight: normal;
}

.finds-section {
  margin-top: 20px;
}

.finds-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-title {
  font-size: 1.6rem;
  margin: 0;
}

.filter-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.filter-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

.filter-dropdown {
  background-color: #5B6D44;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
}

.finds-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.grid-item {
  background-color: #E0E0E0;
  border-radius: 4px;
  aspect-ratio: 1 / 1; 
  border: 1px solid rgba(0,0,0,0.05); 
}
</style>