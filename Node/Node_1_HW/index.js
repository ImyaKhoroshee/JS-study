// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов(404).
// — * На каждой странице реализуйте счетчик просмотров.Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require('http');
const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<a href="/about">Перейти на страницу обо мне!<a/><p>Счетчик странички home:<p/>' + home());
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<a href="/home">Перейти на страницу главная!<a/><p>Счетчик странички about:<p/>' + about());
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<h1>Страница 404<h1/>');
    }
});
const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

function count() {
    let counter = 0;
    return function increment() {
        return ++counter;
    }
}
const home = count();
const about = count();