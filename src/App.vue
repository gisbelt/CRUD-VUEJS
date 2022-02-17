<template>

  <nav class="navbar navbar-expand navbar-light bg-light justify-content-center">
      <div class="nav navbar-nav">
        <!-- Rutas que nos llevan a las urls   -->
        <!-- <router-link to="/">Home</router-link> | -->
        <!-- <router-link to="/about">About</router-link> -->
        <router-link to="/crear" class="nav-link">Crear</router-link>
        <router-link to="/listar" class="nav-link">Empleados</router-link>
      </div>
  </nav>
  <br>
  <router-view/>
</template>

<style>

</style>
