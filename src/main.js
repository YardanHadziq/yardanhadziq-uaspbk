import { createApp } from 'vue';
import { Quasar, QBtn, QLayout, QHeader, QToolbar, QToolbarTitle, QAvatar, QPageContainer, QPage, QInput, QBtnDropdown, QList, QItem, QItemSection, QItemLabel, QFooter } from 'quasar';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

// Import Vue Router
import { createRouter, createWebHistory } from 'vue-router';

// Import root component
import App from './App.vue';

// Import components for routing
import HomePage from './components/HomePage.vue';

// Define routes
const routes = [
  { path: '/', name: 'Home', component: HomePage },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Create Vue app
const app = createApp(App);

// Use Quasar
app.use(Quasar, { 
  components: { QBtn, QLayout, QHeader, QToolbar, QToolbarTitle, QAvatar, QPageContainer, QPage, QInput, QBtnDropdown, QList, QItem, QItemSection, QItemLabel, QFooter }
});

// Use router
app.use(router);

// Mount app
app.mount('#app');
