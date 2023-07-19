const PORT= 5000;
const HOST= "localhost";

const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose');

async function run() {
  try {
    require('./routes')(app);
    await mongoose.connect('mongodb://localhost:27017/node-js', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connect to Db');
  } catch (e) {
    console.log(e);
  }
}

run().catch(console.dir);

app.listen(PORT, HOST, (error) => {
  if (error) console.log(error);
  else console.log(`Server started - http://${HOST}:${PORT}`);
})
