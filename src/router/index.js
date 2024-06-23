import { createRouter, createWebHistory } from 'vue-router';
import Weather from '../components/Weather.vue';
import Tugas1 from '../components/Tugas1.vue';
import Tugas2 from '../components/Tugas2.vue';
import Tugas3 from '../components/Tugas3.vue';
import Tugas4 from '../components/Tugas4.vue';
import Tugas5 from '../components/Tugas5.vue';
import Tugas6 from '../components/Tugas6.vue';

const routes = [
  { path: '/', name: 'Weather', component: Weather },
  { path: '/tugas1', name: 'Tugas1', component: Tugas1 },
  { path: '/tugas2', name: 'Tugas2', component: Tugas2 },
  { path: '/tugas3', name: 'Tugas3', component: Tugas3 },
  { path: '/tugas4', name: 'Tugas4', component: Tugas4 },
  { path: '/tugas5', name: 'Tugas5', component: Tugas5 },
  { path: '/tugas6', name: 'Tugas6', component: Tugas6 }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router;
