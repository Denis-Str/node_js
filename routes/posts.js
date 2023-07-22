const express = require('express');
const routes = express.Router();
const { getPosts, getPost, addPost, postEdit, postDelete } = require('../controllers/post-controler');

routes.get('/api/posts', getPosts);

routes.get('/api/post/:id', getPost);

routes.post('/api/post-add', addPost);

routes.put('/api/post-edit', postEdit);

routes.delete('/api/post-remove/:id', postDelete);

module.exports = routes;
