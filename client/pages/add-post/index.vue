<template>
  <div class="add-post-page-component">
    <form id="contact-form">
      <div class="form-info">
        <label>Post Title
          <input type="text" name="title">
        </label>
        <label>Author
          <input type="text" name="author">
        </label>
      </div>
      <div class="form-text">
        <label>Post Text
          <textarea name="text"></textarea>
        </label>
      </div>
      <div class="form-button">
        <input type="submit" value="Submit">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddPostPage',
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
  textarea {
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
  }

  .form-button input {
    text-transform: uppercase;
    padding: 10px 15px;
    cursor: pointer;
  }

  .form-button input:hover {
    background-color: rgba(0,0,0,0.6);
  }
}
</style>
