<template>
  <header class="navbar">
    <div class="nav-links">
      <router-link to="/" class="nav-item active">INICIO</router-link>
      <span class="nav-item">Historial</span>
      <span class="nav-item">Features</span>
    </div>
  </header>

 
  <router-view />

  <footer class="footer">
    <span>Autor: Yeilis Martínez</span>
    <span>Año: 2026</span>
  </footer>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.navbar {
  background-color: #7b4eb2;
  padding: 10px 20px;
}

.nav-links {
  display: flex;
  gap: 15px;
}

.nav-item {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
}

.nav-item.active, .nav-item:hover {
  color: #white;
}

.footer {
  background-color: #2b558c;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  padding: 15px 40px;
  font-size: 0.85rem;
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
