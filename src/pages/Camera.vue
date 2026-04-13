<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isScanned = ref(false);

const handleScan = () => {
  isScanned.value = true;
};

const handleRetake = () => {
  isScanned.value = false;
};

const handleSave = () => {
  router.push('/profile');
};
</script>

<template>
  <div class="camera-container">
    <div class="viewfinder">
      <div class="controls">
        <button @click="handleScan" class="shutter-button">
          <div class="inner-circle"></div>
        </button>
        <p class="scan-text">Tap to Scan</p>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="isScanned" class="popup-overlay">
        <div class="results-card">
          <div class="card-content">
            <h2 class="found-text">You Found: <strong>Sweet Mint</strong></h2>
            
            <img 
              src="https://bonnieplants.com/cdn/shop/articles/BONNIE_mint_iStock-543204012-1800px_4776f10c-e8a6-4153-9c6b-8607e25ad157.jpg?v=1766430011" 
              alt="Sweet Mint" 
              class="result-image" 
            />
            
            <p class="xp-text">Task Complete (+5XP)</p>
            
            <div class="button-group">
              <button @click="handleSave" class="btn save">SAVE</button>
              <button @click="handleRetake" class="btn retake">RETAKE</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.camera-container {
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url(../assets/qrcode.png);
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  font-family: sans-serif;
}

.viewfinder {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 40px;
}

.controls {
  text-align: center;
}

.shutter-button {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 4px solid white;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
}

.inner-circle {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: white;
}

.scan-text {
  background-color: #44db44;
  color: black;
  padding: 4px 12px;
  border-radius: 4px;
  font-weight: bold;
}

.popup-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.results-card {
  width: 85%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.found-text {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.result-image {
  width: 100%;
  border-radius: 4px;
  object-fit: cover;
  height: 150px;
}

.xp-text {
  font-style: italic;
  margin: 15px 0;
  color: #333;
}

.button-group {
  display: flex;
  gap: 10px;
}

.btn {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

.save { background-color: #5d7045; }
.retake { background-color: #6a7d52; }

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>