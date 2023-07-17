// Шпоргалка
// setItem() - Добавить ключ / значение в LocalStorage
// getItem() - Получить значение из LocalStorage
// removeItem() - Удалить значение по его ключу
// clear() - Удалить все элементы из LocalStorage
// key() - Получить ключ предмета из LocalStorage

// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    data.forEach(item => { localStorage.setItem(JSON.stringify(item.id), JSON.stringify(item)) });
}

getData('https://jsonplaceholder.typicode.com/users').catch((e) => console.log(`Что-то пошло не так! ${e}`));

// Отрисовка из LocalStorage
const body = document.querySelector('.body');

for (let i = 1; i <= localStorage.length; i++) {

    const itemOfLocalStorage = JSON.parse(localStorage.getItem(i));

    const userCard = document.createElement('div');
    userCard.classList.add('card');
    userCard.dataset.id = itemOfLocalStorage.id;
    body.append(userCard);

    const imageTop = document.createElement('img');
    imageTop.src = 'top.jpg';
    
    const imageBottom = document.createElement('img');
    imageBottom.src = 'bottom.jpg';

    const cardContent = document.createElement('div');
    cardContent.classList.add('card__content');
    

    userCard.append(imageTop, cardContent, imageBottom);

    const userName = document.createElement('h1');
    userName.classList.add('card__user-name');
    userName.textContent = itemOfLocalStorage.name;

    const userCompany = document.createElement('p');
    userCompany.classList.add('card__user-company');
    userCompany.textContent =  itemOfLocalStorage.company.name;

    const userInfoList = document.createElement('ul');
    userInfoList.classList.add('card__user-infolist');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('card__button');
    deleteButton.id = itemOfLocalStorage.id;
    deleteButton.textContent = 'Delete';


    cardContent.append(userName, userCompany, userInfoList, deleteButton);

    const userInfoItemFirstChild = document.createElement('li');
    userInfoItemFirstChild.classList.add('card__user-infoitem');
    userInfoItemFirstChild.textContent = 'Username: ' + itemOfLocalStorage.username;

    const userInfoItemSecondChild = document.createElement('li');
    userInfoItemSecondChild.classList.add('card__user-infoitem');
    userInfoItemSecondChild.textContent = 'Email: ' + itemOfLocalStorage.email;

    const userInfoItemThirdChild = document.createElement('li');
    userInfoItemThirdChild.classList.add('card__user-infoitem');
    userInfoItemThirdChild.textContent = 'Phone: ' + itemOfLocalStorage.phone;

    const userInfoItemFourthChild = document.createElement('li');
    userInfoItemFourthChild.classList.add('card__user-infoitem');
    userInfoItemFourthChild.textContent = 'Website: ' + itemOfLocalStorage.website;


    userInfoList.append(userInfoItemFirstChild, userInfoItemSecondChild, userInfoItemThirdChild, userInfoItemFourthChild);
    
}

// // Удаление карточки с экрана по клику на кнопку, а также из LocalStorage
// const deleteButtons = document.querySelectorAll('.card__button');

deleteButtons.forEach(button => {button.addEventListener('click', function (e) {
        
    e.target.closest(`[data-id='${e.target.id}']`).remove();
    localStorage.removeItem(e.target.id);
    }
)});



// Необязательная задача
// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

let count = 0;

let getTenDogs = setTimeout(function resuest() {
    
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(dog => {
            const dogBox = document.createElement('div');
            document.body.append(dogBox);

            const dogImage = document.createElement('img');
            dogImage.src = dog.message;
            dogImage.style.height = '200px';
            dogImage.style.width = 'auto';
            dogBox.append(dogImage);
        })
        .catch((e) => console.log(`Что-то пошло не так! ${e}`));
    
    count++;
    
    if (count < 10) {
      getTenDogs = setTimeout(resuest, 3000);   
    }
    
}, 3000);






