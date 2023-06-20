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
const bodyParser     = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
const db= require('./config/db');

const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

require('./api')(app);

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    // require('./routes')(app, database);

    // app.listen(PORT, HOST,() => {
    //     console.log(`Server express started - http://${HOST}:${PORT}`);
    // })
})

require('./routes')(app, {});
app.listen(PORT, HOST,() => {
    console.log(`Server express started - http://${HOST}:${PORT}`);
})
