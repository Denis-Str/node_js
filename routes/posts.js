const Post = require('../models/post');

module.exports = (app) => {
  app.get('/api/posts', async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: -1 });
      res.send(posts);
    } catch (e) {
      console.log(e);
    }
  });

  app.get('/api/post/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.send(post);
    } catch (e) {
      console.log(e);
    }
  });

  app.post('/api/post-add', async (req, res) => {
    const { title, author, text } = req.body;
    const post = new Post({ title, author, text });
    try {
      const newPost = await post.save();
      res.send(newPost);
    } catch (e) {
      console.log(e);
    }
  });

  app.put('/api/post-edit', async (req, res) => {
    const { id, title, author, text } = req.body;
    const post = await Post.findByIdAndUpdate(id, { title, author, text });
    try {
      const newPost = await post.save();
      res.send(newPost);
    } catch (e) {
      console.log(e);
    }
  });

  app.delete('/api/post-remove/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await Post.findByIdAndDelete(id);
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
    }
  });
}
