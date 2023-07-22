const PORT= 5000;
const HOST= "localhost";

const express = require('express');
const app = express();
const routes = require('./routes');

// подключение шаблонизатора
app.set("view engine", "ejs");
// подключение статичной папки
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node-js', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connect to Db'))
  .catch((error) => console.log(error));


app.listen(PORT, HOST, (error) => {
  if (error) console.log(error);
  else console.log(`Server started - http://${HOST}:${PORT}`);
})
