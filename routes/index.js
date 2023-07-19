const postsRoutes = require('./posts');

const Contacts = require('../models/contacts');

module.exports = (app) => {
  postsRoutes(app);

  app.get('/', (req, res) => {
    res.render('index');
  });

  // роут для теста
  app.get('/api/test', (req, res) => {
    res.send('Hello from Express!');
    res.json({ message: 'Hello from Express!' })
  });

  app.get('/api/contacts', async (req, res) => {
    const contacts = await Contacts.find();
    res.json(contacts);
  })

  app.use((req, res) => {
    res
      .status(404)
      .send(`Page not found: ${req.url}`);
  })
};
