<template>
  <div class="default-layouts-component">
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/posts">Posts</nuxt-link>
      <nuxt-link to="/add-post">New Post</nuxt-link>
      <nuxt-link to="/contacts">Contacts</nuxt-link>
    </nav>
    <div class="wrap">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayouts',
};
</script>

<style>
.default-layouts-component {
  .wrap {
    margin: 0 auto;
    max-width: 1400px;
  }
}
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  background: linear-gradient(to bottom, #00d2ff, #928dab);
  color: #fff;
  margin: unset;
}

h1 {
  text-transform: uppercase;
}

nav {
  min-height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0,0,0,0.7);
}

nav ul {
  margin: 0;
  padding: 0;
  display: flex;
}

nav li {
  list-style: none;
}

nav a {
  text-decoration: none;
  color: #fff;
  min-height: 60px;
  display: block;
  padding: 10px 20px;
  line-height: 60px;
}

li {
  list-style: none;
}

ul {
  padding: 0;
}

a {
  text-decoration: none;
  color: #fff;
}
</style>
