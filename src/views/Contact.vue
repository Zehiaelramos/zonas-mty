<template>
  <div class="container mt-3 mb-3 p-0">
    <div class="row">
      <card
        job="Senior Product"
        lang="Designer"
        country="Singapore"
        company="Reddit">
      </card>
      <card
        job="Junior Product"
        lang="Designer"
        country="Singapore"
        company="Apple">
      </card>
      <card
        job="Software Architect"
        lang="Java"
        country="USA"
        company="Microsoft">
      </card>
      <card
        lang="C++"
        company="Amazon">
      </card>
      <card
        lang="PHP"
        country="Mexico"
        company="Dribbble">
      </card>
      <card
        job="Software Architect"
        country="Colombia"
        company="Mailchimp">
      </card>
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