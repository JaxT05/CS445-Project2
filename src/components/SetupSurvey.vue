<script lang="ts">
</script>
<template>
    <div class="setup-container">
        <h2>What are you interested in?</h2>
        <form class="input-form" action="">
            <div>
                <input type="checkbox" id="checkbox" v-model="checked">
                <label for="checkbox">Hiking/Walking</label>
            </div>
            <div>
                <input type="checkbox" id="checkbox" v-model="checked">
                <label for="checkbox">Plant Identification</label>
            </div>

            <div>
                <input type="checkbox" id="checkbox" v-model="checked">
                <label for="checkbox">Animal Identification</label>
            </div>

        </form>
        <button type="submit" class="button">Submit</button>
    </div>
</template>

<style scoped>
p, label {
    font-family: "Maven Pro", sans-serif;
    font-size: 1.1rem;
}
.setup-container {
    display: flex;
    flex-direction: column;
    background: var(--white);
    border-radius: 10px;
    padding: 2rem;
    text-align: left;
    gap: 1rem;
}
.input-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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