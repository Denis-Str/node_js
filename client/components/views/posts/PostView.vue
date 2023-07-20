<template>
  <li class="post-component">
    <article>
      <h2>
        <nuxt-link :to="`/post/${post._id}`">{{ post.title }}</nuxt-link>
      </h2>
      <p>{{ post.text }}</p>
      <div class="info">
        <span>{{ currentDate }}</span>
        <span>{{ post.author }}</span>
      </div>
    </article>
    <div class="btn-edit" @click="editPost">Edit</div>
    <div class="btn" @click="deletePost">Del</div>
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
    }
  },
  methods: {
    deletePost() {
      this.$emit("deletePost", this.post._id);
    },
    editPost() {
      this.$router.push(`/add-post/${this.post._id}`);
    }
  }
}
</script>


<style scoped>
.post-component {
  position: relative;

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

  .btn,
  .btn-edit {
    position: absolute;
    top: 15px;
    right: 35px;
  }

  .btn-edit {
    right: 85px;
  }
}
</style>
