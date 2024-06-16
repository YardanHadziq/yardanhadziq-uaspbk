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
            <q-item clickable tag="a" v-for="(link, index) in dropdownLinks" :key="index" :href="link.url" target="_blank">
              <q-item-section>
                <q-item-label>{{ link.label }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container class="no-scroll">
      <q-page class="flex flex-center">
        <div class="search-container">
          <div class="search-content">
            <img :src="judul" alt="Judul" class="title-logo" />
            <q-input
              filled
              v-model="city"
              @keyup.enter="fetchWeather"
              label="Masukkan Nama Kota"
              class="search-input q-mb-md"
              dense
              color="black"
            />
            <q-btn @click="fetchWeather" label="Get Weather" class="search-btn" />
          </div>
          <div v-if="weather" class="weather-info">
            <h3>{{ weather.name }}, {{ weather.sys.country }}</h3>
            <p>Temperature: {{ weather.main.temp }}°C</p>
            <p>Weather: {{ weather.weather[0].description }}</p>
            <p>Humidity: {{ weather.main.humidity }}%</p>
            <p>Wind Speed: {{ weather.wind.speed }} m/s</p>
          </div>
        </div>
      </q-page>
    </q-page-container>

    <q-footer elevated class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar></q-avatar>
        </q-toolbar-title>
        <div class="text-center q-ml-auto">
          <div>&copy; 2024 Yardan Hadziq</div>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import axios from 'axios';
import logo from '../assets/logo.png'; 
import judul from '../assets/title.png'; 

export default {
  data() {
    return {
      city: '',
      weather: null,
      logo, 
      judul,
      dropdownLinks: [  
        { label: 'Tugas 1', url: 'https://yardanhadziq-portfolio-t1.netlify.app' },
        { label: 'Tugas 2', url: 'https://yardan-datanama-tp2.netlify.app' },
        { label: 'Tugas 3', url: 'https://yardan-todolist-t3.netlify.app' },
        { label: 'Tugas 4', url: 'https://yardan-wishlistgame-tp4.netlify.app' },
        { label: 'Tugas 5 (FREE TUGAS)', url: '#' },  // Tidak ada link untuk Tugas 5 (Free Tugas)
        { label: 'Tugas 6', url: 'https://yardan-tp6.netlify.app' },
      ]
    };
  },
  methods: {
    async fetchWeather() {
      const apiKey = "80af6eed93248604c28088608eda84fc"; 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`;
      try {
        const response = await axios.get(url);
        this.weather = response.data;
      } catch (error) {
        console.error("Error fetching the weather data:", error);
      }
    },
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
  background-image: url('../assets/background.png'); 
  background-size: cover;
  background-position: center;
}

.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  height: calc(100vh - 150px); 
}

.search-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title-logo {
  width: 500px; 
  margin-bottom: 30px;
}

.search-input {
  width: 100%;
  margin-bottom: 20px;
}

.search-btn {
  width: 200px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5); 
  backdrop-filter: blur(10px); 
  border: none;
  color: white; 
}

.q-btn.search-btn .q-btn__content {
  text-transform: none;
}

.weather-info {
  margin-top: 149px;
  background-color: rgba(165, 143, 231, 0.5); 
  padding: 20px;
  border-radius: 10%;
  backdrop-filter: blur(10px); 
  position: absolute;
  left: 30px;
  top: 0;
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
