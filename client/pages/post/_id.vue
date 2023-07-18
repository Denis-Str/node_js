<template>
  <article class="post-page-component">
    <div class="info">
      <span>05.05.2021</span>
      <span>Yauhen</span>
    </div>
    <h1>Post title</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.
    </p>
  </article>
</template>

<script>
export default {
  name: 'PostPage',
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
