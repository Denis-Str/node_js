const usersRoutes = require('./users');

module.exports = (app, client) => {
  usersRoutes(app, client);

  app.get('/', (req, res) => {
    res.render("index");
  });

  app.get('/api/about', (req, res) => {
    res.render("about")
  });

  // app.get('/user/:username/:id', (req, res) => {
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

  app.post('/api/check-user', (req, res) => {
    const { userName } = req.body;
    if (userName === "" || userName === undefined) res.redirect('/about');
    else res.redirect(`user/${userName}`);
  });

  // роу для теста
  app.get('/api/test', (req, res) => {
    res.json({ message: 'Hello from Express!' })
  });

  // пример редиректа
  app.get('/api/about-us', (req, res) => {
    res.redirect('/about');
  })

  app.use((req, res) => {
    res
      .status(404)
      .send(`Page not found: ${req.url}`);
  })
};
