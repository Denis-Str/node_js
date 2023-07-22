const Post = require('../models/post');

getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.send(posts);
  } catch (e) {
    console.log(e);
  }
}

getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.send(post);
  } catch (e) {
    console.log(e);
  }
}

addPost = async (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({ title, author, text });
  try {
    const newPost = await post.save();
    res.send(newPost);
  } catch (e) {
    console.log(e);
  }
}

postEdit = async (req, res) => {
  const { id, title, author, text } = req.body;
  const post = await Post.findByIdAndUpdate(id, { title, author, text });
  try {
    const newPost = await post.save();
    res.send(newPost);
  } catch (e) {
    console.log(e);
  }
}

postDelete = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.send(post);
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getPosts, getPost, addPost, postEdit, postDelete
}
