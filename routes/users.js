module.exports = (app, client) => {
  const database = client.db('users');
  const usersCollection = database.collection('users');

  app.get('/api/users', async (req, res) => {
    await client.connect();
    // получить всю коллекцию
    const toArray = await usersCollection.find().toArray();
    // console.log(toArray)
    // res.render('users', { users: [1, 2, 3, 4] });
    res.json({ users: toArray })
    // res.render('users', { users: toArray });
  });

  app.post('/api/users', async (req, res) => {
    try {
      await client.connect();
      const user = { name: req.body.name, skills: req.body.skills };
      // const user = { name: 'Marty McFly 2', position: 'developer 2' };
      // добавление пользователя
      const users = await usersCollection.insertOne(user);
    } catch (e) {
      console.log(e)
    }
    console.log(req.body)
    res.send('users post');
  })
};
