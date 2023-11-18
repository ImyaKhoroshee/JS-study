const http = require('http');
const server = http.createServer((req, res) => {
    console.log('Запрос получен');


    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        const homeCounter = count();
        res.end('<h1>Добро пожаловать на главную страницу!<h1/>');
    }
    if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        const aboutCounter = count();
        res.end('<h1>Добро пожаловать на страницу обо мне!<h1/>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<h1>Cтраница не найдена!<h1/>');
    }
});
const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

