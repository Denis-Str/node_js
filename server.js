const PORT = 3000;
const HOST = "localhost";
// const fs = require("fs");
//
// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text-plain; charset=utf-8"});
//     if (req.url === '/')
//         fs.createReadStream("./templates/index.html").pipe(res);
//     else if (req.url === '/about')
//         fs.createReadStream("./templates/about.html").pipe(res);
// });
//
// server.listen(PORT, HOST, () => {
//     console.log(`Server: ${HOST}:${PORT}`)
// })

const express = require('express');
const bodyParser = require('body-parser');

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ServerApiVersion} = require("mongodb");
const db = require('./config/db');

const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const client = new MongoClient(db.url, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  }
);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // const Db = await client.db("users");
    const db = await client.db();
    require('./routes')(app, db);
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

// require('./routes')(app, {});
app.listen(PORT, HOST, () => {
  console.log(`Server express started - http://${HOST}:${PORT}`);
})
