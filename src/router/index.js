import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
<<<<<<< HEAD
      component: HomeView,
=======
      component: Home,
>>>>>>> 7f3d1cc5dd5901a6ed4bb197e2f7891dc8e60b86
    },
  ],
});

export default router;
