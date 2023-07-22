const express = require('express');
const routes = express.Router();

const Post = require('../models/post');

routes.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.send(posts);
  } catch (e) {
    console.log(e);
  }
});

routes.get('/api/post/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.send(post);
  } catch (e) {
    console.log(e);
  }
});

routes.post('/api/post-add', async (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  try {
    const newPost = await post.save();
    res.send(newPost);
  } catch (e) {
    console.log(e);
  }
});

routes.put('/api/post-edit', async (req, res) => {
  const { id, title, author, text } = req.body;
  const post = await Post.findByIdAndUpdate(id, { title, author, text });
  try {
    const newPost = await post.save();
    res.send(newPost);
  } catch (e) {
    console.log(e);
  }
});

routes.delete('/api/post-remove/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
  }
});

module.exports = routes;
