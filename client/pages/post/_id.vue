<template>
  <article class="post-page-component">
    <div class="info">
      <span>{{ post.date }}</span>
      <span>{{ post.author }}</span>
    </div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.text }}</p>
  </article>
</template>

<script>
export default {
  name: 'PostPage',
  data() {
    return {
      post: {}
    }
  },
  async created() {
    try {
      const { id } = this.$route.params;
      this.post = await this.$axios.$get(`/api/post/${id}`);
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style scoped>
.post-page-component {
  background-color: rgba(0,0,0,0.4);
  padding: 10px 20px;
  border-radius: 3px;
  margin-bottom: 10px;

  .info {
    display: flex;
    justify-content: space-between;
  }

  h2 a {
    color: aqua;
  }
}
</style>
