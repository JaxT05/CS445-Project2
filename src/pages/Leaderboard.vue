<script lang="ts">
import { defineComponent, ref } from 'vue';

interface LeaderboardEntry {
  rank: number;
  name: string;
  xp: number;
  isUser?: boolean;
}

export default defineComponent({
  name: 'Leaderboard',
  setup() {
    const selectedCategory = ref('Hiking');
    const leaderboardData = ref<LeaderboardEntry[]>([
      { rank: 1, name: 'Username', xp: 1000 },
      { rank: 2, name: 'Username', xp: 950 },
      { rank: 3, name: 'Username', xp: 800 },
      { rank: 4, name: 'Username', xp: 790 },
      { rank: 5, name: 'Username', xp: 750 },
      { rank: 6, name: 'Username', xp: 700 },
      { rank: 7, name: 'Username', xp: 660 },
      { rank: 8, name: 'Username', xp: 650 },
      { rank: 9, name: 'Username', xp: 500 },
      { rank: 10, name: 'Your user', xp: 400, isUser: true },
      { rank: 11, name: 'Username', xp: 350 },
    ]);

    return { selectedCategory, leaderboardData };
  }
});
</script>

<template>
  <div class="leaderboard-container">
    <div class="header">
      <span class="label">Select Category:</span>
      <button class="category-pill">
        {{ selectedCategory }} 
        <span class="arrow">▲</span>
      </button>
    </div>

    <div class="list">
      <div 
        v-for="item in leaderboardData" 
        :key="item.rank" 
        class="list-item"
        :class="{ 'user-highlight': item.isUser }"
      >
        <span class="rank-name">{{ item.rank }}. {{ item.name }}</span>
        <span class="xp-value">- {{ item.xp }}XP</span>
      </div>
    </div>

    <div class="stats-card">
      <h2>Your Place: 10th</h2>
      <p class="xp-needed">+30 XP to go</p>
      <div class="suggested">
        <p>Suggested:</p>
        <ul>
          <li>• Visit Marvin Gardens (+5XP)</li>
          <li>• Visit Flower Island (+5XP)</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Color Palette */
:root {
  --bg-cream: #FAF5E6;
  --forest-green: #5B6D44;
  --highlight-tan: #DDCDB0;
  --card-green: #97A97C;
  --text-dark: #333333;
}

.leaderboard-container {
  background-color: #FAF5E6; /* Cream background */
  min-height: 100vh;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.category-pill {
  background-color: #5B6D44; /* Dark moss green */
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
}

.list {
  margin-bottom: 20px;
}

.list-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  font-size: 1.2rem;
  font-weight: 500;
}

.user-highlight {
  background-color: #DDCDB0; /* Tan highlight */
  border-radius: 4px;
}

.xp-value {
  font-weight: 400;
}

.stats-card {
  background-color: #97A97C; /* Light sage green */
  padding: 20px;
  border-radius: 12px;
  color: #1A1A1A;
}

.stats-card h2 {
  margin: 0;
  font-size: 1.6rem;
}

.xp-needed {
  font-size: 0.9rem;
  opacity: 0.7;
  margin: 5px 0 15px 0;
}

.suggested p {
  margin: 0;
  font-weight: bold;
  font-size: 0.9rem;
}

.suggested ul {
  list-style: none;
  padding: 0;
  margin: 5px 0 0 0;
  font-size: 0.9rem;
}

.suggested li {
  margin-bottom: 3px;
}
</style>