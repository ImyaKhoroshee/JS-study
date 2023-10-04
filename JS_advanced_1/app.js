// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

// Сущность Блюда и повара
const dishesAndCookers = new Map;
dishesAndCookers.set('Пицца "Маргарита"', 'повар: Виктор')
    .set('Пицца "Пепперони"', 'повар: Виктор')
    .set('Суши "Филадельфия"', 'повар: Ольга')
    .set('Суши "Калифорния"', 'повар: Ольга')
    .set('Десерт "Тирамису"', 'повар: Дмитрий')
    .set('Десерт "Чизкейк"', 'повар: Дмитрий');


// Model
const restaurantModel = {
    listOfOrders: new Map(),
    cookers: dishesAndCookers,
    executors: [],
};

// View
const restaurantView = {
    addToList() {
        menu.addEventListener('click', (e) => {
            const li = `<li class="goods-in-chart">${e.target.dataset.id}</li>`;
            clientChoice.insertAdjacentHTML('beforeend', li);
        });
    },
    sendOrder() {
        order.addEventListener('click', function () {
            const client = { name: clientName.value };
            const choice = [];

            const item = Array.from(clientChoice.children);
            item.forEach((product) => {
                choice.push(product.textContent);
            });
            restaurantController.makeOrder(client, choice);
            clientName.value = '';
            let goodsBox = document.querySelectorAll('.goods-in-chart');
            goodsBox.forEach((child) => { child.remove() });
        })
    },
    showExecutor(array) {
        const executors = [];
        array.forEach((product) => {
            executors.push(dishesAndCookers.get(product));
        })
        return executors;
    },
    showOrders() {
        let box = document.querySelector('#orderBox');
        box.lastElementChild.remove();
        const ul = document.createElement('ul');
        for (let order of restaurantModel.listOfOrders) {
            const li = document.createElement('li');
            li.textContent = `Клиент: ${order[0].name} заказал(а): ${order[1]} Исполнители: ${this.showExecutor(order[1])}`;
            ul.append(li);
        }
        orderBox.append(ul);
    },
    generateOrder(client, choice) {
        client.orderId = listOfOrders.size() + 1;
        listOfOrders.set(client, choice);
    }
};
restaurantView.addToList();
restaurantView.sendOrder();

// Controller
const restaurantController = {
    restaurant: restaurantModel,
    makeOrder(client, choice) {
        restaurantModel.listOfOrders.set(client, choice);
        restaurantView.showOrders();
    }
}
