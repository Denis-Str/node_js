const PORT = 5000;
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
    require('./routes')(app, client);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

app.listen(PORT, HOST, (error) => {
  if (error) console.log(error);
  else console.log(`Server started - http://${HOST}:${PORT}`);
})
