<template>
  <div id="app" class="container mt-2 mb-4">
    <input
      type="text"
      v-model="message"
    >
    <h2 class="message">{{ message }}</h2>
    <h3>Some Other Message</h3>
    <h4>One More Message</h4>
    <button class="btn btn-primary">Submit!</button>
  </div>
</template>

<script>
  export default {
    name: "AboutWrap",
    data() {
      return {
        message: '213',
      }
    },
  }
</script>