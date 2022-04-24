import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import marketplace from './modules/marketplace/router';

const routes: RouteRecordRaw[] = [...marketplace];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
