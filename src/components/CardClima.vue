<script setup>

import { parseCode } from '../utils/weatherCodes'
import { formatTemp } from '../utils/tempConverter'


defineProps({
  ciudad: {
    type: Object,
    required: true
  },
  clima: {
    type: Object,
    default: null
  },
  unidad: {
    type: String,
    default: 'C'
  }
})

// Sintaxis oficial para declarar eventos emisores
defineEmits(['ver-detalles'])
</script>

<template>
  <div class="card-clima">
    <h3>{{ ciudad.name }}</h3>
    
    <!-- Renderizado condicional seguro si los datos de la API existen -->
    <template v-if="clima">
      <div class="temp">
        {{ formatTemp(clima.temperature_2m, unidad) }}
      </div>
      <div class="condition">
        {{ parseCode(clima.weather_code) }}
      </div>
      <div class="extra-info">
        <span>💧 {{ clima.relative_humidity_2m }}% Humedad</span>
        <span>💨 {{ clima.wind_speed_10m }} km/h Viento</span>
      </div>
    </template>
    
    <!-- Estado de carga local por tarjeta mientras responde Open-Meteo -->
    <template v-else>
      <div class="loading-card">Consultando API...</div>
    </template>

    <button @click="$emit('ver-detalles', ciudad)" class="btn-detalles">
      Ver detalles
    </button>
  </div>
</template>

<style scoped>
.card-clima {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 20px;
  backdrop-filter: blur(4px);
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.temp { font-size: 2.5rem; font-weight: bold; margin: 10px 0; }
.condition { font-size: 1.1rem; margin-bottom: 10px; font-weight: 500; }
.extra-info { display: flex; flex-direction: column; font-size: 0.85rem; margin-bottom: 15px; text-align: left; gap: 4px; opacity: 0.9; }
.loading-card { padding: 30px 0; font-style: italic; opacity: 0.8; }
.btn-detalles {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
  color: white;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  font-weight: bold;
  transition: background 0.2s;
}
.btn-detalles:hover {
  background: rgba(255, 255, 255, 0.4);
}
</style>
