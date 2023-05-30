// // Задание 1
// // Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// // Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

// const num1 = +prompt('Введите первое число');
// const num2 = +prompt('Введите второе число');

// const check = (num1 <= 1 && num2 >= 3);    // если дальшейшее использование результата проверки не нужно
// console.log((check) ? 'Верно' : 'Ошибка'); // можно не вводить дополнительную переменную

// // Задание 2
// // Перепишите код к тернарному оператору

// // let test = true;
// // if (test === true) {
// // console.log('+++');
// // } else {
// // console.log('---');
// // }

// let test = true;
// console.log((test) ? '+++' : '---');

// // Задание 3
// // В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// const day = Math.floor(Math.random() * (31 - 1 + 1)) + 1; // Генерация случайного целого числа от 1 до 31 включительно

// if (day > 0 && day < 11) {
//     console.log(`${day}-е число это I декада месяца`);
// } else if (day > 10 && day < 21) {
//     console.log(`${day}-е число это II декада месяца`);
// } else {
//     console.log(`${day}-е число это III декада месяца`);
// }

// // Задание 4

// // Необходимо от пользователя получить число.
// // Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

// function digitPlaces(num) {
//     if (String(num).length === 1) {
//         console.log(`В числе ${num} количество сотен: 0, десятков: 0, единиц: ${num}`);
//     } else if (String(num).length === 2) {
//         console.log(`В числе ${num} количество сотен: 0, десятков: ${Math.floor(num / 10)}, единиц: ${num % 10}`);
//     } else if (String(num).length >= 3) {
//         let arr = String(num).split('');
//         console.log(`В числе ${num} количество сотен: ${arr[arr.length-3]}, десятков: ${arr[arr.length-2]}, единиц: ${arr[arr.length-1]}`);
//     }
// }

// digitPlaces(+prompt('Введите натуральное число'));

// // Урок 6

// // Задание 1
// // Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// const numberToCube = number => Math.pow(number, 3);

// const sum = (firstNum, secondNum) => firstNum + secondNum;

// const sumResult = sum(numberToCube(2), numberToCube(3));
// console.log(sumResult);

// // Задание 2
// // Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// // Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// const userSalaryAfterTax = function salaryAfterTax(SalaryBeforeTax) {
//     if (+SalaryBeforeTax > 0) {
//         let salaryMinusTax = +SalaryBeforeTax - (+SalaryBeforeTax * 13 / 100);
//         alert(`Размер заработной платы за вычетом налогов равен ${salaryMinusTax}`);
//         return salaryMinusTax;
//     } else {
//         alert('Ошибка ввода');
//         userSalaryAfterTax(prompt('Введите корректную сумму Вашей заработной платы до вычета налога')); // пока не надоест :)
//     }
// };

// userSalaryAfterTax(prompt('Введите сумму Вашей заработной платы до вычета налога'));

// // Задание 3
// // Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// function userInput() {
//     let userInput = prompt('Введите числа через пробел'); // Полагаюсь на корректность ввода :) Отработает не только для 3-х чисел
//     return userInput.split(' ');
// }

// const getMax = () => Math.max(...userInput());

// // Задание 4
// // Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них): 1. Сложение  2. Разность   3. Умножение  4. Деление
// // Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

// const sumOfNum = (a, b) => a + b;                                   // по условию на вход даются числа, поэтому без проверок и приведений.
// const differenceOfNum = (a, b) => (a > b) ? (a - b) : (b - a);
// const productOfNum = (a, b) => a * b;
// const quotientOfNum = (a, b) => a / b;

// Урок 8

// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

function sortAndPrintNumbers(lines) {
    console.log('0 – это ноль');
    for (let i = 1; i < lines; i++) {
        if (i % 2 === 0) console.log(`${i} – это четное число`);
        else console.log(`${i} – это нечетное число`);
    }
}
sortAndPrintNumbers(11);

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]     Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const testArray = [1, 2, 3, 4, 5, 6, 7];
testArray.splice(3, 2);
console.log(testArray);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// Функция для генерации случайного целого числа от min до max+1
const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

// Функция для создания числового массива с указанной длиной и необходимыми целыми числами в качестве элементов массива
function createRandomArray(length, rangeStart, rangeEnd) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array[i] = randomInteger(rangeStart, rangeEnd);
    }
    return array;
}

// Функция для нахождения суммы элементов в указанном числовом массиве
function sumOfArrayElement(arr) {
    let arrSum = 0;
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }
    return arrSum;
}

// Функция для нахождения минимального элемента в указанном числовом массиве
const getMinInArray = arr => Math.min(...arr);

// Функция для нахождения указанного элемента в заданном массиве
function findThePointedDigit(arr, number) {
    if (arr.indexOf(number) === -1) return false;
    else return true;
}

const randomArr = createRandomArray(5, 0, 9);
const sumArr = sumOfArrayElement(randomArr);
const minInArr = getMinInArray(randomArr);
const hasNumberInArr = findThePointedDigit(randomArr, 3);

// Вывод
console.log(`
    Массив: ${randomArr}
    Сумма элементов этого массива: ${sumArr}
    Минимальное число в этом массиве: ${minInArr}
    Есть ли в этом миссиве цифра 3: ${hasNumberInArr}`);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

// Функция для отрисовски горки с заданным символом и количеством строк
function simbolSlide(simbol, lines) {
    let original = simbol;
    for (let i = 0; i < lines; i++) {
        console.log(simbol);
        simbol += original;
    }
    return simbol;
}
simbolSlide('x', 20);
