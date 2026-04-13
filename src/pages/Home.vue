<script setup lang="ts">
import Goals from '../components/Goals.vue';

</script>
<template>
    <div class="info-container">
        <h1>Welcome [name]!</h1>
        <div class="nav-container">
        <Button class="nav-button">
            <RouterLink to="/camera">Open Camera</RouterLink>
        </Button>
         <Button class="nav-button">
            <RouterLink to="/hike">Start Hike</RouterLink>
        </Button>
        <Button class="nav-button">
            <RouterLink to="/leaderboard">View Leaderboard</RouterLink>
        </Button>
    </div>
        <div class="info-details">
            <Goals/>
            <h2>Interested in Our Historical Exhibits?</h2>
            <Button class="button">Learn More</Button>
        </div>
    </div>
</template>
<style scoped>
.nav-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 3rem;
    row-gap: 1rem;
    width: 100%;
}
.nav-button {
    background: var(--light-green);
    border: none;
    border-radius: 10px;
    min-width: 11rem;
    padding: 0.75rem;
}
.nav-button a {
    font-family: "Maven Pro", sans-serif;
    font-weight: 500;
    font-size: 1.35rem;
    text-decoration: none;
    color: var(--white);
}
.info-container {
    display: flex;
    flex-direction: column;
    max-width: 25rem;
    padding: 1rem;
    margin: 0 auto;
    text-align: left;
}
.info-details {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>