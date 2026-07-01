# 🌦️ App de Clima - SPA en Vue 3 (MVP Final)

Aplicación de página única (SPA) interactiva y de alto rendimiento construida sobre **Vue 3 (Composition API)**. La plataforma consume datos meteorológicos en tiempo real desde una API externa y automatiza el cálculo de métricas e indicadores de alertas climáticas mediante una gestión de estado centralizada.

---

## 🛠️ Tecnologías y Módulos Utilizados

*   **Vue 3 (`<script setup>`)**: Framework progresivo para el desarrollo de la interfaz mediante componentes reactivos modulares.
*   **Vue Router**: Administrador de navegación nativo para habilitar la arquitectura SPA sin recargas de página.
*   **Pinia**: Patrón de desarrollo y contenedor de estado global oficial para la gestión centralizada de flujos de datos.
*   **Open-Meteo API**: Servicio externo e independiente utilizado para el consumo de variables climáticas mediante peticiones HTTP asíncronas (`fetch`).
*   **Vite**: Herramienta de empaquetado de última generación para una compilación y despliegue ágiles.

---

## 💡 Funcionalidades Implementadas (MVP)

### 1. Vista de Inicio (Home)
*   **Monitoreo Multiciudad:** Renderizado dinámico de una cuadrícula de estaciones meteorológicas de Chile (Osorno, Valdivia, Santiago, etc.).
*   **Consumo Masivo Eficiente:** Petición optimizada a la API externa agrupando coordenadas para actualizar todas las tarjetas en una sola llamada de red.
*   **Panel de Alérgenos:** Visualizador integrado de niveles de polen segmentado por categorías de riesgo en la interfaz.

### 2. Vista de Detalles y Métricas Avanzadas
*   **Pronóstico Extendido:** Desglose cronológico estructurado con la variación térmica para los próximos 7 días.
*   **Cálculo de Estadísticas Autónomas:** Algoritmos iterativos en la tienda global que procesan en tiempo real la temperatura mínima absoluta, la temperatura máxima absoluta y el promedio térmico semanal.
*   **Distribución del Cielo:** Contador de frecuencias climáticas que agrupa y totaliza los días soleados, nublados o lluviosos de la semana a partir de códigos WMO.

### 3. Sistema Integrado de Alertas
*   **Disparadores lógicos basados en reglas simples:**
    *   *Ola de calor:* Activación automática si alguna temperatura máxima prevista supera los 30°C.
    *   *Semana lluviosa:* Activación automática si el conteo semanal registra 3 o más días bajo condiciones de precipitación.

### 4. Vista Extra de Preferencias (Settings)
*   **Mutación Global:** Selector interactivo para alternar el formato térmico global entre Grados Celsius (°C) y Fahrenheit (°F).
*   **Persistencia Visual:** Formateadores utilitarios independientes que recalculan y transforman las métricas en cascada a través de todos los componentes reactivos.

### 5. Estabilidad y Resiliencia (Manejo de Errores)
*   **Estados de Carga:** Indicadores visuales explícitos ("Consultando API...") mientras se resuelven las peticiones asíncronas.
*   **Controladores Anti-Fallo:** Bloques interceptores `catch` que mitigan caídas del servidor o restricciones de red local (`CORS`), inyectando conjuntos de datos realistas de contingencia para mantener la app operativa.
*   **Validación de Formularios:** Restricciones lógicas en el panel de control que impiden el envío de campos vacíos, notificando al usuario mediante mensajes nativos.

---

## 📐 Metodologías de Desarrollo Aplicadas

*   **Arquitectura de Componentes Modulares:** Separación estricta de responsabilidades (Separation of Concerns). Las tarjetas de UI (`CardClima.vue`) operan como componentes funcionales puros que reciben datos mediante `props` y notifican eventos vía `emits`.
*   **Patrón de Estado Centralizado (Single Source of Truth):** Toda la lógica de negocio, las peticiones HTTP y las mutaciones de datos residen exclusivamente dentro del Store de Pinia. Las vistas (`HomeView`, `DetailsView`, `SettingsView`) actúan únicamente como capas de representación gráfica.
*   **Estrategia Inversa de Redirección Segura:** Implementación de guardas lógicas condicionales en la vista detallada para redirigir de forma automática al inicio si el estado en memoria se encuentra vacío debido a una recarga manual del navegador.

---

## 🚀 Instrucciones para Ejecución Local

Siga estos pasos para clonar, validar e iniciar el proyecto en su entorno local:

### 1. Clonar el repositorio
```bash
git clone <url-de-tu-repositorio-en-github>
cd mi-app-clima
```

### 2. Instalar dependencias del ecosistema
```bash
npm install
```

### 3. Levantar el servidor de desarrollo local
```bash
npm run dev
```
*Abra la dirección local suministrada por la consola (ej. `http://localhost:5173/`) en su navegador.*

### 4. Compilar para producción (Validación)
```bash
npm run build
```
*Este comando compilará y optimizará el código generando la carpeta `dist/` lista para su despliegue.*
