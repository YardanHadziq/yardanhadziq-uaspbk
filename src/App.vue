<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img :src="logo" alt="Logo">
          </q-avatar>
          SyncCuaca
        </q-toolbar-title>
        
        <!-- Dropdown navigation -->
        <q-btn-dropdown flat icon="menu" class="text-white">
          <q-list>
            <q-item clickable tag="router-link" to="/">
              <q-item-section>
                <q-item-label>Home</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas1">
              <q-item-section>
                <q-item-label>Tugas 1</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas2">
              <q-item-section>
                <q-item-label>Tugas 2</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas3">
              <q-item-section>
                <q-item-label>Tugas 3</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas4">
              <q-item-section>
                <q-item-label>Tugas 4</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas5">
              <q-item-section>
                <q-item-label>Tugas 5</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="router-link" to="/tugas6">
              <q-item-section>
                <q-item-label>Tugas 6</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container class="no-scroll">
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar></q-avatar>
        </q-toolbar-title>
        <div class="text-center q-ml-auto">
          <div>&copy; 2024 Yardan Hadziq, SyncCuaca</div>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import logo from './assets/logo.png'; 

export default {
  data() {
    return {
      logo, 
    };
  },
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}

.no-scroll {
  overflow: hidden;
}

.q-layout {
  background: linear-gradient(to bottom, white, purple); 
  background-image: url('./assets/background.png'); 
  background-size: cover;
  background-position: center;
}

.q-btn.search-btn .q-btn__content {
  text-transform: none;
}

.text-center {
  text-align: center;
}

.q-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0;
}

.q-page-container {
  overflow: hidden;
}
</style>
