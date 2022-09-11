<template>

  <footer
    class="
      container
      d-flex
      flex-wrap
      justify-content-between
      align-items-center
      py-2
      border-top"
    >
      <p class="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>
      <a
        href="/"
        class="
          col-md-4
          d-flex
          align-items-center
          justify-content-center
          mb-3
          mb-md-0
          me-md-auto
          link-dark
          text-decoration-none"
      >
        <img
          src="eiimt.png"
          width="60"
          height="72"
          class="d-inline-block align-text-top"
        >
      </a>
      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">About</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-muted">Contact</a>
        </li>
      </ul>
  </footer>

  <!--
  <footer class="container mt-4">
    <div class="row">
      <div class="col">
        <p class="text-center">Created by <a href="#">MAD Insight</a></p>
      </div>
    </div>
  </footer>
  -->

</template>

<script>
  export default {
    name: 'FooterWrap',
    data() {
      return {}
    }
  }
</script>
