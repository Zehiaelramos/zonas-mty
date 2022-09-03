<template>
  <div id="app">

    <navbar-wrap/>

    <img alt="Vue logo" src="./assets/labnl.png" width="512px">

    <HelloWorld msg="Zonas de Monterrey"/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavbarWrap from './layout/NavbarWrap.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavbarWrap,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
