<script>
</script>
<template>
    <nav>
        <RouterLink class="link" to="/"><h2>Home</h2></RouterLink>
        <RouterLink class="link" to="/setup"><h2>Setup</h2></RouterLink>
        <RouterLink class="link" to="/camera"><h2>Camera</h2></RouterLink>
        <RouterLink class="link" to="/profile"><h2>Profile</h2></RouterLink>
        <RouterLink class="link" to="/hike"><h2>Hiking</h2></RouterLink>
        <RouterLink class="link" to="/leaderboard"><h2>Leaderboard</h2></RouterLink> 
      </nav>
</template>
<style scoped>
nav {
    background-color: #99AD7A;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
nav h2 { 
    color: var(--text-light);
}
nav a {
    text-decoration: none;
}
</style>