<template>
  <main>
    <h1>Personal Blog</h1>
    <p>Build with Node.js Express, EJS, MongoDB</p>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  async mounted() {
    try {
      const { message } = await this.$axios.$get('/api/home');
      console.log(message)
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style>
</style>
