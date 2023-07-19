const Post = require('../models/post');

module.exports = (app) => {
  const post = {
    id: 1,
    title: 'Post title',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
    date: '05.05.2021',
    author: 'Yauhen'
  }

  let posts = [post, {...post, id: 2}]

  app.get('/api/posts', async (req, res) => {
    res.json(posts);
  });

  app.get('/api/post/:id', (req, res) => {
    console.log('req', req.params.id)
    res.json(post);
  });

  app.post('/api/post-add', async (req, res) => {
    const { title, author, text } = req.body;
    const post = new Post({title, author, text });
    try {
      const newPost = await post.save();
      res.send(newPost);
    } catch (e) {
      console.log(e);
    }
  });
}
