<script setup>
import {onMounted, ref} from "vue";
import L from 'leaflet';

const {data} = defineProps({
  getData: Function,
  data: Array
})
//DATA
const map = ref(null);
const mapData = ref([...data]);

// METHODS
onMounted(() => {
  initMap()
})
const initMap = () => {
  // Inicializar el mapa
  map.value = L.map("map").setView([0, 0], 1);

  // Añadir una capa de mapa
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
  }).addTo(map.value);

  // Añadir marcadores para cada usuario
  mapData.value.forEach((user) => {
    L.marker([user.address.geo.lat, user.address.geo.lng])
        .addTo(map.value)
        .bindPopup(user.name);
  });
}
</script>

<template>
  <div class="container">
    <div id="map"></div>
  </div>
</template>

<style scoped>
#map {
  height: 500px;
}
</style>