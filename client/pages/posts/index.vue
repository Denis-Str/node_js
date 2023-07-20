<template>
  <div class="posts-page-component">
    <h3>Posts:</h3>
    <template v-if="posts.length > 0">
      <ul class="post-list">
        <post
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @deletePost="deletePost"
        />
      </ul>
    </template>
    <template v-else>is Empty...</template>
  </div>
</template>

<script>
import Post from "~/components/views/posts/PostView.vue";
export default {
  name: 'PostsPage',
  components: {
    Post
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async deletePost(id) {
      try {
        await this.$axios.$delete(`/api/post-remove/${id}`);
        this.posts = await this.$axios.$get('/api/posts');
      } catch (e) {
        console.log(e)
      }
    },
  },
  async created() {
    try {
      this.posts = await this.$axios.$get('/api/posts');
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style scoped>
.posts-page-component {
}
</style>
