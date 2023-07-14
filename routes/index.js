const usersRoutes = require('./users');

module.exports = (app, client) => {
  usersRoutes(app, client);

  app.get('/', (req, res) => {
    // выводит текст на страницу
    // res.send('Home');
    // подключает файлы
    // res.sendFile(`${__dirname}/templates/index.html`);
    // подключение файлов с помощью шаблонизатора
    res.render("index");
  });

  app.get('/api/about', (req, res) => {
    // res.send('About');
    // res.sendFile(`${__dirname}/templates/about.html`);
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

  app.get('/api/test', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    // res.status(200).send('test');
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
