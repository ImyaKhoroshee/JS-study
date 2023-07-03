
// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9]
Math.min(...arr);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    return {
        increment: (counter) => ++counter,
        decrement: (counter) => --counter,
    }
}

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.


const result = function findElementByClass(element, classs = 'hero__heading') {

    for (let i = 0; i < element.children.length; i++) {

        (element.children[i].classList.contains(classs)) ? console.log(element.children[i]) : findElementByClass(element.children[i]);
    }
}

result(document.getElementById('root'));