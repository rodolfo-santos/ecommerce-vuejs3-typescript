import { RouteRecordRaw } from 'vue-router';
import HomePage from './pages/home.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }
] as RouteRecordRaw[];
