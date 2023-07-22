const express = require('express');
const routes = express.Router();

const postsRoutes = require('./posts');
const contactsRoutes = require('./contacts');

routes.get('/', (req, res) => {
  res.render('index');
});

// роут для теста
routes.get('/api/home', (req, res) => {
  res.send('Hello from Express!');
  res.json({ message: 'Hello from Express!' })
});

routes.use(postsRoutes);
routes.use(contactsRoutes);

routes.use((req, res) => {
  res
    .status(404)
    .send(`Page not found: ${req.url}`);
})

module.exports = routes;
