<script setup lang="ts">
import Goals from '../components/Goals.vue';
import SetupSurvey from '../components/SetupSurvey.vue';

</script>
<template>
    <div class="info-container">
        <h1>Welcome!</h1>
        <p class="setup-info"> Here at Conner Prairie, guests explore history through hands-on experiences while enjoying nature with trails, gardens, and outdoor spaces. </p>
        <div class="info-details">
            <SetupSurvey/>
            <h2>Interested in Our Historical Exhibits?</h2>
            <Button class="button"><a href="https://www.connerprairie.org/calendar/?cal-477189-endDate=2025-12-31&cal-477189-page=1&cal-477189-startDate=2025-10-01&cal-477189-tags=65869">Learn More</a></Button>
        </div>
    </div>
</template>
<style scoped>
.info-container {
    display: flex;
    flex-direction: column;
    max-width: 30rem;
    padding: 2rem;
    margin: 0 auto;
    text-align: left;
}
.setup-info {
    font-family: "Maven Pro", sans-serif;
    font-size: 1.1rem;
    text-align: center;
}
.info-details {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
