// Запрос одной фотографии на тему спорт
const getRandomSportImage = async () => {
    const key = 'jQETO-7ya0WZ8WOuPwWzD3woeUSAa-v8IVl0CqVqPuI';
    const theme = 'fitness';
    const url = `https://api.unsplash.com/photos/random/?query=${theme}&client_id=${key}&count=1`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        // При положительном ответе вызываем функцию отрисовки картинки
        if (response.ok) {
            renderImage(data);
        }
    } catch (error) {
        console.log(`Something wrong happened: ${error}`);
    }
};
getRandomSportImage();

const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');

// Функция отрисовки картинки
function renderImage(array) {
    const newImage = localStorage.getItem(array[0].id);

    if (newImage !== null) { getRandomSportImage(); }

    const html = `
    <div class="box">
        <div class="author">
            <a id="linkPortfolio" target="_blank" href=${array[0].user.links.html}><img class="author-photo" id="authorPhoto" class="author_photo" src=${array[0].user.profile_image.medium} alt="people"><a/>
                <p id="authorName" class="author_name">by ${array[0].user.name}</p>
        </div>
        <div class="make-like">
            <img id="likeImage" data-id=${array[0].id} data-link="${array[0].urls.regular}" class="like-icon" src="./assets/like.png" alt="like-icon">
            <p id="likeCounter"  class="like-counter">0</p>
        </div>
    <div/>`;

    saveData(array[0].id, array[0].urls.regular, array[0].user.name, array[0].user.links.html, array[0].user.profile_image.medium); // Вызываем функцию сохранения данных
    saveImageHistory(array[0].id); // Вызываем функцию сохранения истории

    imageBox.dataset.id = `${array[0].id}`;
    imageBox.innerHTML = html;
    imageBox.style.background = `url(${array[0].urls.regular}`;
    imageBox.style.backgroundPosition = 'center';
    imageBox.style.backgroundRepeat = 'no-repeat';
    imageBox.style.backgroundSize = 'cover';

    // Если в localStorage уже есть какие-то картинки, делаем кнопку "Предыдущая фотография" активной. В разметке обе кнопки неактивны.
    const check = JSON.parse(localStorage.getItem('imagesId'));
    if (check.length > 1) {
        previousButton.classList.remove('non-active');
    }
}
// Событие клика на кнопку "Поставить лайк"
let degree = 0;
document.addEventListener('click', (e) => {
    if (e.target.id === 'likeImage') {
        degree += 360;
        likeImage.style.transition = '.3s linear';
        likeImage.style.transform = `rotateY(${degree}deg)`; // Анимация на кнопку лайка
        increaseLike(e.target.dataset.id); // Вызов функции увеличения лайка
    }
})
// Функция сохранения лайка в localStorage к имеющемуся ключу
function saveLikes(id) {
    const data = JSON.parse(localStorage.getItem(id));
    data[0] = parseInt(data[0]) + 1;
    localStorage.setItem(id, JSON.stringify(data));
}
// Функция увеличения и отрисовки лайков 
function increaseLike(id) {
    const data = JSON.parse(localStorage.getItem(id));
    likeCounter.innerHTML = parseInt(data[0] + 1);
    saveLikes(id); // Вызываем функцию сохранения лайка
}
// Функция сохранения данных
function saveData(id, link, name, profile, photo) {
    localStorage.setItem(id, JSON.stringify([0, link, name, profile, photo]));
}
// Функция сохранения истории фотографий
function saveImageHistory(id) {
    let imagesArray = [];
    const allImages = localStorage.getItem('imagesId');
    if (allImages === null) {
        imagesArray.push(id);
        localStorage.setItem('imagesId', JSON.stringify(imagesArray));
    } else {
        imagesArray = JSON.parse(allImages);
        imagesArray.push(id);
        localStorage.setItem('imagesId', JSON.stringify(imagesArray));
    }
}

// Событие на кнопках "Предыдущая фотография" и "Следующая фотография"
let currentIndex = JSON.parse(localStorage.getItem('imagesId')).length;

buttonsAfterRandomImageBox.addEventListener('click', (e) => {
    if (e.target.id === 'previousPhotoButton') {
        nextButton.classList.remove('non-active');
        currentIndex -= 1;
        setNewImage();
        if (currentIndex === 0) {
            previousButton.classList.add('non-active');
        }
    }
    else if (e.target.id === 'nextPhotoButton') {
        previousButton.classList.remove('non-active');
        currentIndex += 1;
        setNewImage();
        if (currentIndex === JSON.parse(localStorage.getItem('imagesId')).length - 1) {
            nextButton.classList.add('non-active');
        }
    }
});
// Функци отрисовки фотографии, автора, лайков из истории в localStorage
function setNewImage() {
    const array = JSON.parse(localStorage.getItem('imagesId'));
    const id = array[currentIndex];
    const imageObj = JSON.parse(localStorage.getItem(id));

    imageBox.style.background = `url(${imageObj[1]}`;
    likeCounter.innerText = imageObj[0];
    likeImage.dataset.id = id;
    authorName.innerText = imageObj[2];
    linkPortfolio.href = `${imageObj[3]}`;
    authorPhoto.src = `${imageObj[4]}`;
    imageBox.style.backgroundPosition = 'center';
    imageBox.style.backgroundRepeat = 'no-repeat';
    imageBox.style.backgroundSize = 'cover';
}