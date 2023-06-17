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
const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', (req, res) => {
    // выводит текст на страницу
    // res.send('Home');
    // подключает файлы
    // res.sendFile(`${__dirname}/templates/index.html`);
    // подключение файлов с помощью шаблонизатора
    res.render("index");
});
app.get('/about', (req, res) => {
    // res.send('About');
    // res.sendFile(`${__dirname}/templates/about.html`);
    res.render("about")
});
// app.get('/user/:username/:id', (req, res) => {
//     res.send(`User: ${req.params.username} - ID ${req.params.id}`);
// });
app.get('/users', (req, res) => {
    res.render('users', { users: [1, 2, 3, 4] });
});

app.get('/user/:username', (req, res) => {
    // res.send(`User: ${req.params.username}`);
    const params = { username: req.params.username, skills: ["vue", "nuxt", "node js"] }
    res.render('user', params);
});

app.listen(PORT, () => {
    console.log('Server express started');
})
