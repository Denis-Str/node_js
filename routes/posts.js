module.exports = (app, client) => {
  const database = client.db('posts');
  const postsCollection = database.collection('posts');

  const post = {
    id: 1,
    title: 'Post title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
    date: '05.05.2021',
    author: 'Yauhen'
  }

  app.get('/api/posts', async (req, res) => {
    const posts = [post];
    res.json(posts);
  });

  app.get('/api/post/:id', (req, res) => {
    console.log('req', req.params.id)
    res.json(post);
  })
}
