import {createApp} from 'vue';
import App from './App.vue'
import './assets/scss/main.scss';
// Importar el archivo CSS de Leaflet
import 'leaflet/dist/leaflet.css';

const app = createApp(App);
app.mount('#app')
