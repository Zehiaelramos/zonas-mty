<template>
  <div id="app" class="container mt-3 mb-3 p-0">

    <div class="row">
      <Card
        job="Senior Product"
        lang="Designer"
        country="Singapore"
        company="reddit">
      </Card>
      <Card
        job="Junior Product"
        lang="Designer"
        country="Singapore"
        company="apple">
      </Card>
      <Card
        job="Software Architect"
        lang="Java"
        country="USA"
        company="microsoft">
      </Card>
      <Card
        lang="C++"
        company="amazon">
      </Card>
      <Card
        lang="PHP"
        country="Mexico"
        company="dribbble">
      </Card>
      <Card
        job="Software Architect"
        country="Colombia"
        company="mailchimp">
      </Card>
    </div>

  </div>
</template>

<script>
  import Card from './../components/Card.vue';

  export default {
    name: "ContactWrap",
    components: {
      Card,
    },
    data() {
      return {
        message: 'Hello Contact!',
      }
    },
  }
</script>

<style scoped>
</style>
