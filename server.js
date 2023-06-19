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
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');

const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

require('./api')(app);
require('./routes')(app, {});

app.listen(PORT, () => {
    console.log('Server express started');
})
