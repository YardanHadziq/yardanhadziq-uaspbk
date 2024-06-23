import { createApp } from 'vue';
import { Quasar, QBtn, QLayout, QHeader, QToolbar, QToolbarTitle, QAvatar, QPageContainer, QPage, QInput, QBtnDropdown, QList, QItem, QItemSection, QItemLabel, QFooter } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import router from './router/index.js';
import App from './App.vue';

const app = createApp(App);

app.use(Quasar, { 
  components: { QBtn, QLayout, QHeader, QToolbar, QToolbarTitle, QAvatar, QPageContainer, QPage, QInput, QBtnDropdown, QList, QItem, QItemSection, QItemLabel, QFooter }
});
app.use(router);
app.mount('#app');