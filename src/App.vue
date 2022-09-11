<template>
  <div id="app">

    <navbar/>

    <!--
    <img alt="Vue logo" src="./assets/labnl.png" width="512px">
    -->

    <router-view
      @routerViewReload="reload"
      :key="state ? $route.fullPath : [$route.fullPath, value]"
    />

  </div>
</template>

<script>
import Navbar from './layout/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
#app-style {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
