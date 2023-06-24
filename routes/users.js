module.exports = (app, db) => {
  app.get('/users', async (req, res) => {
    console.log(db)
    // const users = { id: 1, user: { name: 'John', age: 30 } };
    // db.collection('users').insert(users, (err, result) => {
    //   if (err) res.send({ 'error': 'An error has occurred' });
    //   else {
    //     // res.send(result.ops[0]);
    //     console.log(result.ops[0])
    //   }
    // });
    // const users = await db.client.db("users");
    res.render('users', { users: [1, 2, 3, 4] });
  });

};
