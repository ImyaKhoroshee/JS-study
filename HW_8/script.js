// Задание 1: "Управление персоналом компании"
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Employee {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Сотрудник: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    displayInfo() {
        console.log(`Сотрудник: ${this.name}. Отдел: ${this.department}`);
    }
}

const employee = new Employee('Петров Петр Петрович');
employee.displayInfo();

const manager = new Manager('Иванов Иван Иванович', 'Закупки');
manager.displayInfo();


// Задание 2: "Управление списком заказов"
// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {

    listOfProducts = [];

    constructor(orderNumber) {
        this.orderNumber = orderNumber;
    }
    addProduct(product) {
        this.listOfProducts.push(product);
    }
    getTotalPrice() {
        return this.listOfProducts.reduce((acc, element) => acc += element.price, 0);
    }
}

const order = new Order(12345);
console.log(`Номер заказа: ${order.orderNumber}\n`);

const product1 = new Product('iPhone 12', 500);
console.log(`Товар №1: ${product1.name}. Стоимость: ${product1.price} рублей`);
order.addProduct(product1);

const product2 = new Product('Apple Watch', 100);
console.log(`Товар №2: ${product2.name}. Стоимость: ${product2.price} рублей\n`);
order.addProduct(product2);

console.log(`Cписок покупок: ${order.listOfProducts.map(el => el.name)}`);
console.log(`Общая стоимость заказа ${order.getTotalPrice()} рублей`);
