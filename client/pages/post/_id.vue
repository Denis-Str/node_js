<template>
  <article class="post-page-component">
    <h3>Posts:</h3>
    <div class="wrap">
      <div class="info">
        <span>{{ currentDate }} -</span>
        <span>{{ post.author }}</span>
      </div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.text }}</p>
    </div>
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
  computed: {
    currentDate() {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const date = new Date(this.post.createdAt);
      return date.toLocaleDateString('ru-RU', options)
    },
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
  .wrap {
    background-color: rgba(0,0,0,0.4);
    padding: 10px 20px;
    border-radius: 3px;
    margin-bottom: 10px;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  h2 a {
    color: aqua;
  }
}
</style>
