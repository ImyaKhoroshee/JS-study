// const VacuumCleaner = {
//     Model: "vacuumcleaner",
//     counterOfStarts: 0,
//     isFull: false,
//     isObstacle: false
// };

// const DancingSeries = {
//     Model: "dancingseries",
//     power: 200,
//     batterySize: 2100,
//     boxSize: 0.5
// };

// const Blues = {
//     Model: "Bluees-1",
//     power: 250,
//     batterySize: 2500,
//     workTime: 50
// };
// Object.setPrototypeOf(DancingSeries, VacuumCleaner);
// Object.setPrototypeOf(Blues, DancingSeries);

// Задание 1(тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта obj.Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом Object.prototype.

// const prototypeList = [];

// function getPrototypeChain(obj) {
    
//     if (Object.getPrototypeOf(obj) !== null) {
//         prototypeList.push(Object.getPrototypeOf(obj));
//         getPrototypeChain(Object.getPrototypeOf(obj));
//     }
//     return prototypeList;
// }

// console.log(getPrototypeChain(Blues));

// function getPrototypeChain(obj) {
// 	let prototypes = [];

// 	while (obj !== null) {
// 		prototypes.push(obj);
// 		obj = Object.getPrototypeOf(obj);
// 	}

// 	return prototypes;
// }

// console.log(getPrototypeChain({ arg1: 1 }));


// Задание 2 (20минут)
// Напишите конструктор объекта Person, который принимает два аргумента: name(строка) и age(число).Конструктор должен создавать объект с указанными свойствами name и age и методом introduce(), который выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// Пример: const person1 = new Person("John", 25); person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.

// function Person (name, age) {
    
//     this.name = name;
//     this.age = age;
//     this.introduce = function() {
//         console.log(`Меня зовут ${this.name} и мне ${this.age}.`);
//     };
// }


// const person1 = new Person("John", 25);
// person1.introduce();

// Задание 3(call, apply  20 минут)
// Напишите конструктор объекта BankAccount, который будет представлять банковский счет.Конструктор должен принимать два аргумента: accountNumber(строка) и balance(число).Конструктор должен создавать объект с указанными свойствами accountNumber и balance и следующими методами: 1.deposit(amount): принимает аргумент amount(число) и увеличивает баланс на указанную сумму. 2.withdraw(amount): принимает аргумент amount(число) и уменьшает баланс на указанную сумму, если на счету есть достаточно средств.Если средств недостаточно, выводится сообщение "Недостаточно средств на счете.". 3.getBalance(): возвращает текущий баланс счета.

// class BankAccount {

//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }
    
//     deposit(amount) {
//         return this.balance += amount;
//     };

//     withdraw(amount) {
//         if (this.balance >= amount) {
//             return this.balance -= amount;
//         } else {
//             return "Недостаточно средств на счете.";
//         }
//     }

//    getBalace() {
//             return this.balance;
//     }

// }

// const myAccount = new BankAccount(12345, 1500);
// console.log(myAccount.deposit(1000));
// console.log(myAccount.withdraw(2200));
// console.log(myAccount.getBalace());


// Задание 4 (Class 30 минут)
// Создайте класс Animal, который будет представлять животное.У класса Animal должны быть следующие свойства и методы: ●Свойство name(строка) - имя животного. ●Метод speak() - выводит в консоль звук, издаваемый животным.Создайте подкласс Dog, который наследует класс Animal.Для подкласса Dog добавьте дополнительное свойство и метод: ●Свойство breed(строка) - порода собаки. ●Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч.".

class Animal {
    
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} говорит так:`);
    }
}

class Dog extends Animal {

    constructor(name, breed) {
        super(name);
        this.breed = breed;
        this.voice = 'гав гав';
    }
    speak() {
        console.log(`Животное ${this.name} говорит так: ${this.voice}`);
    }
    fetch() {
        console.log(`Собака ${this.name} принесла мяч`);
    }
}

const animal1 = new Animal('Животное');
animal1.speak(); // Вывод: Животное издает звук. 

const dog1 = new Dog('Бобик', 'Дворняжка');

dog1.speak(); // Вывод: Животное Бобик издает звук. 
console.log(dog1.breed); // Вывод: Дворняжка 
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.);