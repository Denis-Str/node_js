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

  app.get('/about', (req, res) => {
    // res.send('About');
    // res.sendFile(`${__dirname}/templates/about.html`);
    res.render("about")
  });
  // app.get('/user/:username/:id', (req, res) => {
  //   res.send(`User: ${req.params.username} - ID ${req.params.id}`);
  // });


  app.get('/user/:username', (req, res) => {
    // res.send(`User: ${req.params.username}`);
    const params = { username: req.params.username, skills: ["vue", "nuxt", "node js"] }
    res.render('user', params);
  });

  app.post('/check-user', (req, res) => {
    const { userName } = req.body;
    if (userName === "" || userName === undefined) res.redirect('/about');
    else res.redirect(`user/${userName}`);
  });
};
