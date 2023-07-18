<template>
  <div class="posts-page-component">
    <h3>Posts:</h3>
    <ul>
      <li>
        <article>
          <h2>
            <a href="/post/1">Post title</a>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.</p>
          <div class="info">
            <span>05.05.2021</span>
            <span>Yauhen</span>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostsPage',
};
</script>

<style scoped>
.posts-page-component {
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
