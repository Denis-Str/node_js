const usersRoutes = require('./users');
const postsRoutes = require('./posts');

module.exports = (app, client) => {
  usersRoutes(app, client);
  postsRoutes(app, client);

  app.get('/', (req, res) => {
    res.render('index');
  });

  // app.get('/api/user/:username/:id', (req, res) => {
  //   res.send(`User: ${req.params.username} - ID ${req.params.id}`);
  // });

  app.get('/api/user/:username', (req, res) => {
    // res.send(`User: ${req.params.username}`);

    // поиск одного
    // const test = await usersCollection.findOne(query);
    // console.log(test)

    const params = { username: req.params.username, skills: ["vue", "nuxt", "node js"] }
    res.render('user', params);
  });

  // роу для теста
  app.get('/api/test', (req, res) => {
    res.render('Hello from Express!');
    res.json({ message: 'Hello from Express!' })
  });

  app.use((req, res) => {
    res
      .status(404)
      .send(`Page not found: ${req.url}`);
  })
};
