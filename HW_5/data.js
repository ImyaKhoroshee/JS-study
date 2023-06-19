// Источник данных  https://dummyjson.com/docs/users

// Функция для корректного вывода минут, если меньше 10
function getCorrectTime(number) { 
    return (number < 10) ? '0' + number : number;
    }

// Header
const header = document.querySelector('.header');

// Icon
const icon = document.createElement('img');
icon.classList.add('header__icon');
icon.src = "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-office-team-building-flaticons-flat-flat-icons.png";
header.append(icon);

// Heading
const heading = document.createElement('h1');
heading.classList.add('header__heading');
heading.textContent = 'Phonebook';
header.append(heading);    

// Time
let time = new Date;
const localtime = document.createElement('div');
localtime.classList.add('header__time'); 
localtime.textContent = `${time.getHours()}:${getCorrectTime(time.getMinutes())}`;
header.append(localtime);

// Content
const content = document.querySelector('.content-box');

fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(item => item.users.forEach(user => {
        const userCard = document.createElement('div'); 
        userCard.classList.add('user-card'); 
        content.append(userCard);

        const userId = document.createElement('p');
        userId.classList.add('user-card__id');
        userId.textContent = user.id;
        userCard.append(userId);

        const userPersonalData = document.createElement('div'); 
        userPersonalData.classList.add('user-card__personaldata'); 
        userCard.append(userPersonalData);

        const userFirstLastName = document.createElement('p');
        userFirstLastName.classList.add('user-card__firstlastname');
        userFirstLastName.textContent = user.firstName + ' ' + user.lastName;
        userPersonalData.append(userFirstLastName);

        const userAddress = document.createElement('p');
        userAddress.classList.add('user-card__address');
        userAddress.textContent = user.address.address + ', ' + user.address.city + ', ' + user.address.state;
        userPersonalData.append(userAddress);

        const userTel = document.createElement('p');
        userTel.classList.add('user-card__telephone');
        userTel.textContent = user.phone;
        userPersonalData.append(userTel);
    
        const userEmail = document.createElement('p');
        userEmail.classList.add('user-card__email');
        userEmail.textContent = user.email;
        userPersonalData.append(userEmail);

        const userImage = document.createElement('img');
        userImage.classList.add('user-card__image');
        userImage.src = user.image;
        userCard.append(userImage);
    }));
            


       