<script lang="ts">
</script>
<template>
    <h2>Daily Goals:</h2>
    <div class="goals-container">
        <div class="total-progress-bar">
            <div class="progress-bar"></div>
            <p class="percentage-complete"> 0% complete</p>
        </div>
        <p class="goal-information">Travel to any destination below to unlock its quests. Complete the tasks and earn XP, earning your spot on the leaderboard!</p>
        <div class="goal-details">
            <h3>Visit Marvin Gardens</h3>
            <div>
                <div class="progress-bar"></div>
                <p class="percentage-complete">0% complete</p>
            </div>
        </div>
        <p>Go!</p>
        <div class="goal-details">
            <h3>Visit Flower Island</h3>
            <div>
                <div class="progress-bar"></div>
                <p class="percentage-complete">0% complete</p>
            </div>
        </div>
        <p>Go!</p>
        <div class="goal-details">
             <h3>Go to the Trails</h3>
            <div>
                <div class="progress-bar"></div>
                <p class="percentage-complete">0% complete</p>
            </div>
        </div>
        <p>Go!</p>
    </div>
</template>

<style scoped>
.goals-container {
    display: flex;
    flex-direction: column;
    background: var(--white);
    border-radius: 10px;
    padding: 2rem;
    text-align: left;
}
.goal-information {
    margin: 0.75rem;
    text-align: center;
    font-size: 0.95rem;
}
.goal-details {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
}
.goal-details h3 {
    font-weight: 500;
}
.progress-bar {
    background: #ECECEC;
    border-radius: 60px;
    width: 100%;
    height: 1rem;

}
.percentage-complete {
    text-align: center;
    font-size: 0.75rem;
    margin: 0.25rem;
}
</style>