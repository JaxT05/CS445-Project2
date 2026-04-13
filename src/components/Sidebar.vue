<script>
</script>
<template>
    <nav>
        <RouterLink class="link" to="/"><h2>Home</h2></RouterLink>
        <!-- <RouterLink class="link" to="/setup"><h2>Setup</h2></RouterLink> -->
        <RouterLink class="link" to="/camera"><h2>Camera</h2></RouterLink>
        <RouterLink class="link" to="/profile"><h2>Profile</h2></RouterLink>
        <RouterLink class="link" to="/hike"><h2>Hiking</h2></RouterLink>
        <RouterLink class="link" to="/leaderboard"><h2>Leaderboard</h2></RouterLink> 
      </nav>
</template>
<style scoped>
nav {
    position: fixed;
    z-index: 1000;
    right: 0;
    top: 4rem;
    width: fit-content;
    height: 100vh;
    background-color: var(--light-green);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 2rem;
    box-shadow: 2px 2px 8px var(--text-dark);
}
nav h2 { 
    color: var(--text-light);
    text-align: left;
}
nav a {
    text-decoration: none;
    border-bottom: 2px solid var(--text-light);
    padding: 1rem;

}
nav a:last-child{
    border: none;
}

nav a:active{
    color: var(--text-dark);
}
</style>