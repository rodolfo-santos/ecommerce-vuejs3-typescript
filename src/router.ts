import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import home from './modules/home/router';

const routes: RouteRecordRaw[] = [...home];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
