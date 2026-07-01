<script setup>
import { useRouter } from 'vue-router'
import { useWeatherStore } from '../stores/weather'
import { formatTemp } from '../utils/tempConverter'

const store = useWeatherStore()
const router = useRouter()

if (!store.lugarSeleccionado) {
  router.push('/')
}
</script>

<template>
  <div class="detalle-page" v-if="store.lugarSeleccionado">
    <div class="content-wrapper">
      <button @click="router.push('/')" class="btn-back">⬅ Volver al Inicio</button>
      
      <h2>Pronóstico Extendido: {{ store.lugarSeleccionado.nombre }}</h2>

      <!-- Requisito: Alertas meteorológicas dinámicas -->
      <div class="alerta-card">
        <h4>Notificación del Sistema:</h4>
        <p>{{ store.lugarSeleccionado.alerta }}</p>
      </div>

      <!-- Requisito: Bloque de Estadísticas Semanales Calculadas -->
      <div class="estadisticas-container">
        <h3>Métricas Críticas de la Semana</h3>
        <div class="stats-grid">
          <div class="stat-item">
            <span>Mínima Absoluta</span>
            <strong>{{ formatTemp(store.lugarSeleccionado.estadisticas.minAbsoluta, store.unidad) }}</strong>
          </div>
          <div class="stat-item">
            <span>Máxima Absoluta</span>
            <strong>{{ formatTemp(store.lugarSeleccionado.estadisticas.maxAbsoluta, store.unidad) }}</strong>
          </div>
          <div class="stat-item">
            <span>Promedio de Máximas</span>
            <strong>{{ formatTemp(store.lugarSeleccionado.estadisticas.promedioMax, store.unidad) }}</strong>
          </div>
        </div>
        <div class="conteo-box">
          <p><strong>Conteo de tipos de clima semanales:</strong> 
            ☀️ Soleado: {{ store.lugarSeleccionado.estadisticas.conteoClimas.soleado }} días | 
            ☁️ Nublado: {{ store.lugarSeleccionado.estadisticas.conteoClimas.nublado }} días | 
            🌧️ Lluvia: {{ store.lugarSeleccionado.estadisticas.conteoClimas.lluvioso }} días
          </p>
        </div>
      </div>

      <!-- Requisito: Pronóstico de varios días (Tabla) -->
      <div class="tabla-pronostico">
        <h3>Variación Diaria</h3>
        <div v-for="(fecha, idx) in store.lugarSeleccionado.pronostico.time" :key="idx" class="tabla-fila">
          <span class="fecha">📅 {{ fecha }}</span>
          <span class="max">Máx: {{ formatTemp(store.lugarSeleccionado.pronostico.temperature_2m_max[idx], store.unidad) }}</span>
          <span class="min">Mín: {{ formatTemp(store.lugarSeleccionado.pronostico.temperature_2m_min[idx], store.unidad) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detalle-page { background: linear-gradient(135deg, #3d7e7e, #474b8c); min-height: calc(100vh - 120px); padding: 40px 20px; color: white; }
.content-wrapper { max-width: 800px; margin: 0 auto; }
.btn-back { background: rgba(255,255,255,0.2); color: white; border: 1px solid white; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-bottom: 25px; font-weight: bold; }
.alerta-card { background-color: #d9534f; padding: 15px; border-radius: 6px; margin: 20px 0; font-weight: bold; }
.estadisticas-container { background: rgba(255, 255, 255, 0.1); padding: 20px; border-radius: 8px; margin-bottom: 25px; }
.stats-grid { display: flex; justify-content: space-between; margin: 15px 0; gap: 10px; }
.stat-item { background: rgba(0, 0, 0, 0.2); padding: 15px; border-radius: 6px; flex: 1; text-align: center; }
.stat-item span { display: block; font-size: 0.85rem; opacity: 0.8; margin-bottom: 5px; }
.stat-item strong { font-size: 1.4rem; }
.conteo-box { background: rgba(255,255,255,0.1); padding: 10px; border-radius: 4px; text-align: center; margin-top: 10px; font-size: 0.9rem; }
.tabla-pronostico { background: rgba(255, 255, 255, 0.15); padding: 20px; border-radius: 8px; }
.tabla-fila { display: flex; justify-content: space-between; padding: 12px 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
.tabla-fila:last-child { border-bottom: none; }
</style>
