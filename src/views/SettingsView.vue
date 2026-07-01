<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useWeatherStore } from '../stores/weather'

const store = useWeatherStore()
const router = useRouter()

const unidadSeleccionada = ref(store.unidad)
const formularioError = ref(null)

const guardarConfiguracion = () => {
  //  Manejo básico de errores en formularios
  if (!unidadSeleccionada.value) {
    formularioError.value = "Error: Debe marcar una de las dos unidades térmicas disponibles."
    return
  }
  
  formularioError.value = null
  store.unidad = unidadSeleccionada.value
  alert("Preferencias globales actualizadas con éxito.")
  router.push('/')
}
</script>

<template>
  <div class="settings-page">
    <div class="config-box">
      <h2>⚙️ Preferencias de la Aplicación</h2>
      <p class="subtitle">Modifica las configuraciones globales que afectan a tus componentes climáticos.</p>

      <div class="form-group">
        <label>Unidad de Medida del Sistema:</label>
        <div class="radio-group">
          <label class="radio-label">
            <input type="radio" value="C" v-model="unidadSeleccionada"> Grados Celsius (°C)
          </label>
          <label class="radio-label">
            <input type="radio" value="F" v-model="unidadSeleccionada"> Grados Fahrenheit (°F)
          </label>
        </div>
      </div>

      <!-- Mensaje de error controlado para el formulario -->
      <div v-if="formularioError" class="error-msg-form">{{ formularioError }}</div>

      <div class="actions-form">
        <button @click="guardarConfiguracion" class="btn-save">Guardar Cambios</button>
        <button @click="router.push('/')" class="btn-cancel">Volver</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings-page { background: linear-gradient(135deg, #2c3e50, #3498db); min-height: calc(100vh - 120px); display: flex; align-items: center; justify-content: center; padding: 20px; }
.config-box { background: white; color: #333; padding: 30px; border-radius: 8px; width: 100%; max-width: 500px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
h2 { color: #2c3e50; margin-bottom: 5px; }
.subtitle { font-size: 0.9rem; color: #7f8c8d; margin-bottom: 25px; }
.form-group { margin-bottom: 20px; }
label { display: block; font-weight: bold; margin-bottom: 10px; }
.radio-group { display: flex; gap: 20px; }
.radio-label { font-weight: normal; cursor: pointer; display: flex; align-items: center; gap: 5px; }
.error-msg-form { background: #f2dede; color: #a94442; padding: 10px; border-radius: 4px; font-size: 0.85rem; margin-bottom: 15px; font-weight: bold; }
.actions-form { display: flex; gap: 10px; margin-top: 25px; }
.btn-save { background: #27ae60; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-weight: bold; flex: 1; }
.btn-cancel { background: #95a5a6; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-weight: bold; }
</style>
