<template>
  <div class="add-post-page-component">
    <h3>{{ pageTitle }}</h3>
    <form id="contact-form">
      <div class="form-info">
        <label>Post Title
          <input v-model="title" type="text" name="title">
        </label>
        <label>Author
          <input v-model="author" type="text" name="author">
        </label>
      </div>
      <div class="form-text">
        <label>Post Text
          <textarea v-model="text" name="text"></textarea>
        </label>
      </div>
      <div role="button" class="form-button" @click="handleSubmit">Submit</div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddPostPage',
  data() {
    return {
      title: '',
      author: '',
      text: ''
    }
  },
  computed: {
    editID() {
      const { id } = this.$route.params;
      return id;
    },
    pageTitle() {
      return this.editID ? 'Edit post form:' : 'Add post form:';
    }
  },
  methods: {
    clearData() {
      this.title = '';
      this.author = '';
      this.text = '';
    },
    async editPost() {
      try {
        await this.$axios.$put('/api/post-edit', {
          id: this.editID,
          title: this.title,
          author: this.author,
          text: this.text
        })
        await this.$router.push('/posts');
      } catch (error) {
        console.log(error);
      }
    },
    async addPost() {
      try {
        await this.$axios.$post('/api/post-add', {
          title: this.title,
          author: this.author,
          text: this.text
        })
        await this.$router.push('/posts');
      } catch (error) {
        console.log(error);
      }
      this.clearData()
    },
    handleSubmit() {
      if (this.editID) this.editPost();
      else this.addPost();
    }
  },
  async mounted() {
    if (this.editID) {
      try {
        const { title, author, text } = await this.$axios.$get(`/api/post/${this.editID}`);
        this.title = title;
        this.author = author;
        this.text = text;
      } catch (e) {
        console.log(e);
      }
    }}
};
</script>

<style scoped>
.add-post-page-component {
  form {
    background-color: rgba(0,0,0,0.4);
    padding: 10px 20px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
  }

  form div {
    margin-bottom: 20px;
    display: flex;
  }

  form div label {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .form-info {
    justify-content: space-between;
    gap: 20px;
  }

  input,
  textarea,
  .form-button {
    min-height: 30px;
    border: 1px solid #000;
    background-color: rgba(0,0,0,0.4);
    color: #fff;
    font-size: 18px;
    padding: 3px 5px;
    outline: none;
  }

  textarea {
    resize: none;
    min-height: 150px;
  }

  .form-button {
    display: flex;
    justify-content: flex-end;
    margin-bottom: unset;
    max-width: 25%;
  }

  .form-button {
    align-self: end;
    text-transform: uppercase;
    text-align: center;
    padding: 10px 15px;
    cursor: pointer;
    min-height: unset;
  }

  .form-button:hover {
    background-color: rgba(0,0,0,0.6);
  }
}
</style>
