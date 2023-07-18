<template>
  <div class="error-page-component">
    <h2 class="error-code">404</h2>
    <p>Something going wrong...</p>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
};
</script>

<style>
.error-page-component {
  .error-code {
    text-transform: uppercase;
    font-size: 80px;
    margin-bottom: 20px;
  }
}
</style>
