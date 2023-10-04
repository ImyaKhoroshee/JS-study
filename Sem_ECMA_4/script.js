// // Задание 1(тайминг 20 минут)

// // 1.Создайте функцию delayedMessage(message, delay), которая принимает аргументы message(строка) и delay(число).Функция должна выводить заданное сообщение в консоль через указанную задержку.
// // 2.Вызовите функцию delayedMessage() три раза с разными сообщениями и задержками.
// // Например:
// // a.delayedMessage("Сообщение 1", 2000)
// // b.delayedMessage("Сообщение 2", 1000)
// // c.delayedMessage("Сообщение 3", 3000)
// // 3.После вызова всех функций delayedMessage(), добавьте сообщение вида "Конец программы" с помощью console.log().


// function delayedMessage(message, delay) {
//     setTimeout(function () {
//         console.log(message)
//     }, delay);
// };
// delayedMessage("Сообщение 1", 2000);
// delayedMessage("Сообщение 2", 1000);
// delayedMessage("Сообщение 3", 3000);
// console.log(`Конец программы`);

// // Задание 2
// // Напишите программу, которая загружает данные с сервера с использованием объекта XMLHttpRequest и отображает полученную информацию в консоли.
// // 1.Создайте функцию loadData(url), которая принимает аргумент url(строка) - адрес сервера для загрузки данных.
// // 2.Внутри функции loadData() создайте объект XMLHttpRequest с помощью new XMLHttpRequest().
// // 3.Зарегистрируйте обработчик события onreadystatechange, который будет вызываться при изменении состояния запроса.Проверьте, если readyState равен 4(успешно выполнен запрос) и status равен 200(успешный статус ответа сервера), то выведите полученные данные в консоль с помощью console.log(xhr.responseText).
// // 5. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип запроса, url - адрес сервера, true - асинхронный режим запроса.
// // 6.Отправьте запрос на сервер с помощью xhr.send().

// function loadData(url) {

//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true); //  true - асинхронный режим запроса.
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             console.log(xhr.responseText);
//         };
//     };
//     xhr.send();
// }

// loadData('https://api.github.com/users/imyakhoroshee');

// // Задание 3(тайминг 35 минут)
// // Напишите функцию getData, которая делает асинхронный запрос к API и возвращает данные в виде объекта.Внутри функции происходит асинхронный запрос к API с помощью функции fetch.Затем, с использованием оператора await, ожидается ответ от сервера и его парсинг в формате JSON с помощью метода response.json().Полученные данные возвращаются из функции.
// // В случае возникновения ошибки при выполнении асинхронных операций, используется конструкция try/catch для обработки и отображения ошибки. В функции main вызывается функция getData с использованием await, чтобы получить данные асинхронно. Полученные данные выводятся в консоль. Если происходит ошибка, она ловится и выводится сообщение об ошибке. Функция main также объявлена как асинхронная с использованием ключевого слова async. В конце вызывается функция main для запуска процесса получения данных.

// const getData = async (url) => {
//     try {
//         // Делаем запрос, и ждем его результат (указание await)
//         const response = await fetch(url);

//         // Парсим в формат JSON
//         const data = await response.json();
//         console.log(data);
        
//     //ловим ошибку
//     } catch (e) {
//     console.log(`Что-то пошло не так! ${e}`);
//   }
// }

// getData('https://api.github.com/users/octoca');

// Или вместо try catch так: getData(12345).catch((e) => console.log(`Что-то пошло не так! ${e}`));




// Дополнительное задание с семинара

// const getData = async (url) => {
//     try {
//         // Делаем запрос, и ждем его результат (указание await)
//         const response = await fetch(url);

//         // Парсим в формат JSON
//         const data = await response.json();
//         console.log(data);
        
//     //ловим ошибку
//     } catch (e) {
//     console.log(`Что-то пошло не так! ${e}`);
//   }
// }

// getData('https://api.nasa.gov/planetary/apod?api_key=I5KForIu8xDt59Jv4bZds5kVkQFdLArlZoP8aJlK&count=10');

const getData = async (url) => {
    try {
        // Делаем запрос, и ждем его результат (указание await)
        const response = await fetch(url); 

        // Парсим в формат JSON
        const data = await response.json();
        console.log(data);
        
    //ловим ошибку
    } catch (e) {
    console.log(`Что-то пошло не так! ${e}`);
  }
}

getData('https://api.nasa.gov/planetary/apod?api_key=I5KForIu8xDt59Jv4bZds5kVkQFdLArlZoP8aJlK&count=10');