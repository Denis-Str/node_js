module.exports = (app, client) => {
  app.get('/users', async (req, res) => {
    await client.connect();
    const database = client.db('users');
    const usersCollection = database.collection('users');

    // получить всю коллекцию
    const toArray = await usersCollection.find().toArray();
    console.log(toArray)


    // res.render('users', { users: [1, 2, 3, 4] });
    res.render('users', { users: toArray });
  });
  app.post('users', async (req, res) => {
    // добавление пользователя
    // const user = { name: 'Marty McFly 2', position: 'developer 2' };
    // const users = await usersCollection.insertOne(user);
    res.render('users', 'kjdckjsd');
  })
};
