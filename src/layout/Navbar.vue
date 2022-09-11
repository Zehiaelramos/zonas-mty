<template>

  <div id="nav">
    <nav class="container navbar navbar-expand-lg navbar-light py-2">
      <a class="navbar-brand" href="/">
        <img src="eiimt.png" width="60" height="72" class="d-inline-block">
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/about" class="nav-item nav-link">About</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
      </div>
      <router-link to="login" class="btn btn-outline-secondary float-end">
        <i class="bi-key"></i>&nbsp;Login
      </router-link>
    </nav>
  </div>

</template>

<script>
  export default {
    name: 'NavbarWrap',
    data() {
      return {}
    }
  }
</script>