<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useWeatherStore } from '../stores/weather'
import CardClima from '../components/CardClima.vue'

const store = useWeatherStore()
const router = useRouter()

const verDetalles = async (ciudad) => {
  await store.fetchDetalleLugar(ciudad)
  if (!store.error) {
    router.push('/detalles')
  }
}

onMounted(() => {
  store.fetchClimaHome()
})
</script>

<template>
  <div class="clima-container">
    <div class="header-home">
      <h1>CLIMA ACTUAL</h1>
      <button @click="router.push('/configuracion')" class="btn-settings">⚙️ Preferencias</button>
    </div>

    <!-- Requisito: Manejo básico de estados visuales -->
    <div v-if="store.loading" class="status-msg">Cargando estaciones desde API externa...</div>
    <div v-if="store.error" class="status-msg error">{{ store.error }}</div>

    <div v-if="!store.loading" class="grid-clima">
      <CardClima 
        v-for="ciudad in store.ciudades" 
        :key="ciudad.id"
        :ciudad="ciudad"
        :clima="store.climaData[ciudad.id]"
        @ver-detalles="verDetalles"
      />
    </div>

    <!-- Sección de niveles de polen integrada al diseño -->
    <div class="polen-section">
      <h3>| Niveles de Polen</h3>
      <div class="badges">
        <span class="badge bueno">Polen de pasto: Bueno</span>
        <span class="badge regular">Polen: Poco Saludable</span>
        <span class="badge malo">Polen de ambrosia</span>
        <span class="badge arbol">Polen de árbol</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clima-container { background: linear-gradient(135deg, #4ea1a1, #5b62b6); min-height: calc(100vh - 120px); padding: 40px 20px; color: white; text-align: center; }
.header-home { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto 30px auto; }
.btn-settings { background: rgba(255,255,255,0.2); border: 1px solid white; color: white; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.grid-clima { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; max-width: 1200px; margin: 0 auto; }
.status-msg { font-size: 1.2rem; margin: 40px 0; }
.status-msg.error { color: #ff8a8a; background: rgba(255, 0, 0, 0.2); padding: 12px; border-radius: 6px; display: inline-block; }
.polen-section { background: white; color: #333; margin-top: 40px; padding: 15px; border-radius: 8px; text-align: left; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; }
.badge { padding: 6px 12px; border-radius: 20px; margin: 5px; color: white; font-size: 0.8rem; font-weight: bold; display: inline-block; }
.bueno { background: #4caf50; }
.regular { background: #ff9800; }
.malo { background: #f44336; }
.arbol { background: #00bcd4; }
</style>
