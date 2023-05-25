// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

const num1 = +prompt('Введите первое число');
const num2 = +prompt('Введите второе число');

const check = (num1 <= 1 && num2 >= 3);    // если дальшейшее использование результата проверки не нужно
console.log((check) ? 'Верно' : 'Ошибка'); // можно не вводить дополнительную переменную

// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

let test = true;
console.log((test) ? '+++' : '---');

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

const day = Math.floor(Math.random() * (31 - 1 + 1)) + 1; // Генерация случайного целого числа от 1 до 31 включительно

if (day > 0 && day < 11) {
    console.log(`${day}-е число это I декада месяца`);
} else if (day > 10 && day < 21) {
    console.log(`${day}-е число это II декада месяца`);
} else {
    console.log(`${day}-е число это III декада месяца`);
}

// Задание 4

// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

function digitPlaces(num) {
    if (String(num).length === 1) {
        console.log(`В числе ${num} количество сотен: 0, десятков: 0, единиц: ${num}`);
    } else if (String(num).length === 2) {
        console.log(`В числе ${num} количество сотен: 0, десятков: ${Math.floor(num / 10)}, единиц: ${num % 10}`);
    } else if (String(num).length >= 3) {
        let arr = String(num).split('');
        console.log(`В числе ${num} количество сотен: ${arr[arr.length-3]}, десятков: ${arr[arr.length-2]}, единиц: ${arr[arr.length-1]}`);
    }
}

digitPlaces(+prompt('Введите натуральное число'));

// Семинар 6

// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const numberToCube = number => Math.pow(number, 3);

const sum = (firstNum, secondNum) => firstNum + secondNum;

const sumResult = sum(numberToCube(2), numberToCube(3));
console.log(sumResult);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const userSalaryAfterTax = function salaryAfterTax(SalaryBeforeTax) {
    if (+SalaryBeforeTax > 0) {
        let salaryMinusTax = +SalaryBeforeTax - (+SalaryBeforeTax * 13 / 100);
        alert(`Размер заработной платы за вычетом налогов равен ${salaryMinusTax}`);
        return salaryMinusTax;
    } else {
        alert('Ошибка ввода');
        userSalaryAfterTax(prompt('Введите корректную сумму Вашей заработной платы до вычета налога')); // пока не надоест :)
    }
};

userSalaryAfterTax(prompt('Введите сумму Вашей заработной платы до вычета налога'));

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function userInput() {
    let userInput = prompt('Введите числа через пробел'); // Полагаюсь на корректность ввода :) Отработает не только для 3-х чисел
    return userInput.split(' ');
}

const getMax = () => Math.max(...userInput());

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них): 1. Сложение  2. Разность   3. Умножение  4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sumOfNum = (a, b) => a + b;                                   // по условию на вход даются числа, поэтому без проверок и приведений.
const differenceOfNum = (a, b) => (a > b) ? (a - b) : (b - a);
const productOfNum = (a, b) => a * b;
const quotientOfNum = (a, b) => a / b;

