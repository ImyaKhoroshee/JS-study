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

// // ****** Задача необязательная для выполнения:
// // Это расширенная версия задачи с банком, которую мы решлали на семинаре:
// // Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

class Bank {
    
    listOfClient = [];
    listOfAccounts = [];

    constructor(bankTitle) {
        this.bankTitle = bankTitle;
    }
    addClient(client) {
        this.listOfClient.push({clientId: client.id, nameClient: client.name, ageClient: client.age});
    }
    openAccount(client, account) {
        this.listOfAccounts.push({
            accountId: client.id,
            accountNumber: account.accountNumber,
            accountBalance: account.balance
        });
    }
    deposit(clientAccount, amountToDeposit) {
        this.listOfAccounts.forEach(account => {
            if (account.accountId === clientAccount) {
                account.accountBalance += amountToDeposit;
                console.log(`Баланс счета №${account.accountId} после пополнения: ${account.accountBalance}`);
            }
        });
        return this.listOfAccounts;
    }
    withdraw(clientAccount, amountTowithdraw) {
        this.listOfAccounts.forEach(account => {
            if (account.accountId === clientAccount) {
                if (account.accountBalance > amountTowithdraw) {
                    account.accountBalance -= amountTowithdraw;
                    console.log(`Баланс счета №${account.accountId} после списания: ${account.accountBalance}`);
                } else {
                    console.log(`Недостаточно средств для снятия`);
                }
            }
        });
        return this.listOfAccounts;
    }
    checkBalance(clientAccount) {
        this.listOfAccounts.forEach(account => {
            if (account.accountNumber === clientAccount) {
                console.log(account.accountBalance);
            }
        });
    }
}

class Client {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

class Account extends Client {

    constructor(client, accountNumber, balance) {
        super(client.id);
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
}

const bank = new Bank("Мой Банк");

const client1 = new Client(1, "Иван", 25);
const client2 = new Client(2, "Мария", 30);

const account1 = new Account(client1, 223344, 5000);
const account2 = new Account(client2, 556677, 1000);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, account1);
bank.openAccount(client2, account2);

console.log(bank.listOfClient);
console.log(bank.listOfAccounts);

bank.deposit(1, 1000);
bank.deposit(2, 1000);

bank.withdraw(1, 500);
bank.withdraw(2, 500);

bank.checkBalance(223344);
bank.checkBalance(556677);

