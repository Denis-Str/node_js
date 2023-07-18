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
      const res = await this.$axios.$get('/api/test');
      console.log(res)
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style>
</style>
