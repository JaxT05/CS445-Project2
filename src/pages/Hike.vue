<script setup>
import { ref } from 'vue';

const maps = {
  'Anna Vista': 'https://www.kestreltrust.org/wp-content/uploads/2018/11/Trail-map-featured-image-web.jpg',
  'Sentinel Hill': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5WkKYX4IcsmCiQ5VaNfn-pynCO2a9w7ypg&s',
  'Whispering Pines': 'https://montrails.org/wp-content/uploads/2016/09/MRTC_Brochure2016_FINAL_Web-1-1-1024x737.jpg',
};

const currentHikeState = ref('START_SCREEN');
const trailTitle = ref('Anna Vista');
const stepsCount = ref(0);
const distanceString = ref('0m');

const isLocationDropdownOpen = ref(false);
const trailOptions = Object.keys(maps);

const showEndSummaryOverlay = ref(false);
const showViewMapOverlay = ref(false);

const selectTrail = (newTrail) => {
  trailTitle.value = newTrail;
  isLocationDropdownOpen.value = false;
};

const handleStartPress = () => {
  currentHikeState.value = 'RUNNING';
};

const handlePausePress = () => {
  currentHikeState.value = 'PAUSED';
  stepsCount.value = 1000;
  distanceString.value = '0.1m';
};

const handleEndPress = () => {
  showEndSummaryOverlay.value = true;
};

const handleNewHike = () => {
  currentHikeState.value = 'START_SCREEN';
  stepsCount.value = 0;
  distanceString.value = '0m';
  showEndSummaryOverlay.value = false;
};

const toggleViewMapOverlay = () => {
  showViewMapOverlay.value = !showViewMapOverlay.value;
};
</script>

<template>
  <div class="main-content-area">
    
    <div class="where-hiking-section">
      <span class="where-label">Where I'm Hiking:</span>
      <div class="dropdown-wrapper">
        <div class="custom-dropdown" @click="isLocationDropdownOpen = !isLocationDropdownOpen">
          <span class="selected-text">{{ trailTitle }}</span>
          <span class="dropdown-arrow">{{ isLocationDropdownOpen ? '▲' : '▼' }}</span>
        </div>

        <div v-if="isLocationDropdownOpen" class="dropdown-menu">
          <div 
            v-for="trail in trailOptions" 
            :key="trail" 
            @click.stop="selectTrail(trail)" 
            class="dropdown-item"
          >
            {{ trail }}
          </div>
        </div>
      </div>
    </div>
    
    <div class="card-container control-card">
      <div v-if="currentHikeState === 'START_SCREEN'" class="state-layout">
        <button class="icon-circle" @click="handleStartPress">
          <span class="icon-symbol">▶</span> 
        </button>
        <span class="card-label">Start</span>
      </div>
      
      <div v-else-if="currentHikeState === 'RUNNING'" class="state-layout">
        <button class="icon-circle" @click="handlePausePress">
          <span class="icon-symbol">||</span> 
        </button>
        <span class="card-label">Pause</span>
      </div>
      
      <div v-else-if="currentHikeState === 'PAUSED'" class="paused-controls-row">
        <div class="control-stacked">
          <button class="icon-circle small" @click="handleStartPress">
            <span class="icon-symbol">▶</span>
          </button>
          <span class="card-label">Resume</span>
        </div>
        
        <div class="control-stacked">
          <button class="icon-circle small" @click="handleEndPress">
            <span class="icon-symbol">■</span> 
          </button>
          <span class="card-label">End</span>
        </div>
      </div>
    </div>
    
    <div class="stat-displays">
      <p>Steps Walked: {{ stepsCount }}</p>
      <p>Distance Walked: {{ distanceString }}</p>
    </div>
    
    <div class="card-container map-card" @click="toggleViewMapOverlay">
      <span class="map-label">View Map:</span>
      <div class="map-preview-frame">
        <img :src="maps[trailTitle]" alt="Map Preview" class="full-map-img" />
      </div>
    </div>

    <div v-if="showEndSummaryOverlay" class="overlay-container">
      <div class="summary-card shadow-card">
        <h2 class="summary-title">{{ trailTitle }}:</h2>
        <img :src="maps[trailTitle]" class="summary-map-img" alt="Hike Summary Map" />
        <div class="summary-stats">
          <p>Steps: {{ stepsCount }}</p>
          <p>Miles: {{ distanceString }}</p> 
        </div>
        <div class="summary-actions">
          <button class="green-btn">Continue</button>
          <button class="green-btn" @click="handleNewHike">New Hike</button>
        </div>
      </div>
    </div>

    <div v-if="showViewMapOverlay" class="overlay-container">
      <div class="map-popup-card shadow-card">
        <div class="popup-header">
          <h3>Map</h3>
          <span class="close-popup" @click="toggleViewMapOverlay">X</span>
        </div>
        <img :src="maps[trailTitle]" class="popup-map-img" />
      </div>
    </div>

  </div>
</template>

<style scoped>
.main-content-area {
  background-color: #F5E8D8;
  min-height: 100vh;
  padding: 1.5rem;
  font-family: sans-serif;
  color: #333;
}

.where-hiking-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 100;
}

.where-label {
  font-weight: 700;
  font-size: 1.1rem;
}

.dropdown-wrapper {
  position: relative;
  min-width: 150px;
}

.custom-dropdown {
  background-color: #546B41;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  width: 100%;
  background-color: #546B41;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.dropdown-item {
  color: white;
  padding: 0.8rem 1.2rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  cursor: pointer;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.card-container, .shadow-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.card-container {
  margin: 0 auto 2rem auto;
  padding: 2rem;
  width: 90%;
  max-width: 320px;
}

.icon-circle {
  background-color: #D3D3D3;
  border: none;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 1rem;
}

.icon-circle.small {
  width: 80px;
  height: 80px;
}

.icon-symbol {
  font-size: 2.5rem;
  color: #444;
}

.state-layout, .control-stacked {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.paused-controls-row {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.card-label {
  font-size: 1.4rem;
  font-weight: 600;
}

.stat-displays {
  text-align: center;
  margin: 2rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.8;
}

.map-label {
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
}

.map-preview-frame {
  height: 180px;
  border-radius: 12px;
  overflow: hidden;
}

.full-map-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay-container {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.summary-card, .map-popup-card {
  padding: 1.5rem;
  width: 85%;
  max-width: 340px;
}

.summary-title {
  margin: 0 0 1rem 0;
  font-size: 1.4rem;
}

.summary-map-img, .popup-map-img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.summary-stats {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.summary-actions {
  display: flex;
  gap: 1rem;
}

.green-btn {
  flex: 1;
  background-color: #556B2F;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.close-popup {
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>