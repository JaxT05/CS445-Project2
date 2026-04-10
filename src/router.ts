import { createWebHistory, createRouter } from 'vue-router';
import HomeView from "./pages/Home.vue";
import ProfileView from "./pages/Profile.vue";
import CameraView from "./pages/Camera.vue";
import HikeView from "./pages/Hike.vue";
import LeaderboardView from "./pages/Leaderboard.vue";
import SetupView from "./pages/Setup.vue";


export const router = createRouter({
    history: createWebHistory(),
    routes: [ 
        { path: "/", component: HomeView, meta: { title: 'Home' } },
        { path: "/setup", component: SetupView, meta: { title: '' } },
        { path: "/profile", component: ProfileView, meta: { title: 'Profile' } },
        { path: "/camera", component: CameraView, meta: { title: 'Camera' } },
        { path: "/hike", component: HikeView, meta: { title: 'Hiking' } },
        { path: "/leaderboard", component: LeaderboardView, meta: { title: 'Leaderboard' } }
    ],
})