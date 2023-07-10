module.exports = (app, client) => {
  app.get('/users', async (req, res) => {
    await client.connect();
    const database = client.db('users');
    const usersCollection = database.collection('users');

    // добавление пользователя
    // const user = { name: 'Marty McFly 2', position: 'developer 2' };
    // const users = await usersCollection.insertOne(user);


    // const query = { name: "Marty McFly" };
    // const cursor = await usersCollection.find(query);
    // if ((await usersCollection.countDocuments(query)) === 0) {
    //   console.log("No documents found!");
    // }
    // for await (const doc of cursor) {
    //   console.dir(doc);
    // }

    // получить всю коллекцию
    const toArray = await usersCollection.find().toArray();
    console.log(toArray)

    // поиск одного
    // const test = await usersCollection.findOne(query);
    // console.log(test)

    // res.render('users', { users: [1, 2, 3, 4] });
    res.render('users', { users: toArray });
  });
};
