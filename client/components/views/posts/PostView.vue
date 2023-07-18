<template>
  <li class="post-component">
    <article>
      <h2>
        <nuxt-link :to="`/post/${post.id}`">{{ post.title }}</nuxt-link>
      </h2>
      <p>{{ post.text }}</p>
      <div class="info">
        <span>{{ post.date }}</span>
        <span>{{ post.author }}</span>
      </div>
    </article>
  </li>
</template>

<script>
export default {
  name: "PostView",
  props: {
    post: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>


<style scoped>
.post-component {
  article {
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
