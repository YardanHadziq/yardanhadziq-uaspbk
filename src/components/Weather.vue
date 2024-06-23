<template>
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
</template>

<script>
import axios from 'axios';
import judul from '../assets/title.png'; 

export default {
  data() {
    return {
      city: '',
      weather: null,
      judul,
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
</style>