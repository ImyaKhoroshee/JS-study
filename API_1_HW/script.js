
const data = `[
    { "id": "1", "classRoom": "1", "classTitle": "Yoga", "instructorName": "Mari March", "classDate": "20/10/2023", "classTime": "11:30 AM", "classCapacity": "15", "classRecords": "15", "classLevel": "Intermediate", "classDescription": "Strength and flexibility", "image": "./assets/women.jpg" },
    { "id": "2", "classRoom": "2", "classTitle": "Zumba", "instructorName": "Grace Oliphant", "classDate": "20/10/2023", "classTime": "6:30 PM", "classCapacity": "20", "classRecords": "14", "classLevel": "Advanced", "classDescription": "Movement & Smile", "image": "./assets/zumba.jpg" },
    { "id": "3", "classRoom": "1", "classTitle": "Body Interval", "instructorName": "Rudd Manners", "classDate": "17/10/2023", "classTime": "8:45 AM", "classCapacity": "14", "classRecords": "13", "classLevel": "Beginner", "classDescription": "Cardio & Muscle", "image": "./assets/barbell.jpg" },
    { "id": "4", "classRoom": "3", "classTitle": "Pilates", "instructorName": "Mari March", "classDate": "18/10/2023", "classTime": "5:00 PM", "classCapacity": "7", "classRecords": "2", "classLevel": "Beginner", "classDescription": "Control & Stability", "image": "./assets/stretching.jpg" },
    {
        "id": "5", "classRoom": "4", "classTitle": "Body Sculp", "instructorName": "Farrel Cartwright", "classDate": "19/10/2023", "classTime": "3:40 PM", "classCapacity": "10", "classRecords": "7", "classLevel": "Intermediate", "classDescription": "Sculp your body", "image": "./assets/bodysculp.jpg"
    },

    { "id": "6", "classRoom": "3", "classTitle": "Cycle", "instructorName": "Enid Hilbourne", "classDate": "19/10/2023", "classTime": "11:00 AM", "classCapacity": "6", "classRecords": "4", "classLevel": "Advanced", "classDescription": "Feed off the incredible energy", "image": "./assets/cycle.jpg" }
]`;

const timetable = JSON.parse(data);

const cardBox = document.querySelector('.classes__cards-box');
cardRender();

cardBox.addEventListener('click', (e) => {
    if (e.target.classList.contains('button-join')) {
        timetable[e.target.id - 1].classRecords = Number(timetable[e.target.id - 1].classRecords) + 1;
        const student = document.querySelector(`[data-id="${e.target.id}"]`);
        student.textContent = timetable[e.target.id - 1].classRecords;

        const currentBtn = document.getElementById(`${e.target.id}`);

        currentBtn.classList.add('inactive');
        currentBtn.nextElementSibling.classList.remove('inactive');
    }
    if (e.target.classList.contains('button-cancel')) {
        let curentEl = timetable.filter((cls, index) => cls.classTitle === e.target.dataset.id);

        let index = Number(curentEl[0].id) - 1;

        timetable[index].classRecords = timetable[index].classRecords - 1;

        const student = document.querySelector(`[data-id="${index + 1}"]`);
        student.textContent = timetable[index].classRecords;

        const currentBtn = document.querySelector(`[data-id="${e.target.dataset.id}"]`);

        currentBtn.classList.add('inactive');
        currentBtn.previousElementSibling.classList.remove('inactive');
    }
});

function cardRender() {
    timetable.forEach(sportClass => {
        let card = `<article class="card">
                <div class="card__img-box">
                    <img class="card__img" src="${sportClass.image}" alt="women">
                </div>
                <div class="card__title-box">
                    <p class="card__title"><svg class="svg-dot" width="8" height="8" viewBox="0 0 8 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="url(#paint0_linear_5_98)" />
                            <defs>
                                <linearGradient id="paint0_linear_5_98" x1="-0.506024" y1="0" x2="8.31325"
                                    y2="-3.69701e-08" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF4300" />
                                    <stop offset="1" stop-color="#FF6400" />
                                </linearGradient>
                            </defs>
                        </svg>${sportClass.classTitle}</p>
                    <div class="card__quantity-box">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.4997 10.4166C14.8009 10.4166 16.6663 8.55117 16.6663 6.24998C16.6663 3.94879 14.8009 2.08331 12.4997 2.08331C10.1985 2.08331 8.33301 3.94879 8.33301 6.24998C8.33301 8.55117 10.1985 10.4166 12.4997 10.4166Z"
                                stroke="white" stroke-width="1.5" />
                            <path opacity="0.5"
                                d="M18.75 9.37496C20.476 9.37496 21.875 8.20829 21.875 6.77079C21.875 5.33329 20.476 4.16663 18.75 4.16663M6.25 9.37496C4.52396 9.37496 3.125 8.20829 3.125 6.77079C3.125 5.33329 4.52396 4.16663 6.25 4.16663"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            <path
                                d="M12.5 21.875C15.9518 21.875 18.75 20.0095 18.75 17.7083C18.75 15.4071 15.9518 13.5416 12.5 13.5416C9.04822 13.5416 6.25 15.4071 6.25 17.7083C6.25 20.0095 9.04822 21.875 12.5 21.875Z"
                                stroke="white" stroke-width="1.5" />
                            <path opacity="0.5"
                                d="M20.8332 19.7916C22.6603 19.3906 23.9582 18.376 23.9582 17.1875C23.9582 15.9989 22.6603 14.9844 20.8332 14.5833M4.1665 19.7916C2.33942 19.3906 1.0415 18.376 1.0415 17.1875C1.0415 15.9989 2.33942 14.9844 4.1665 14.5833"
                                stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                        <p data-id=${sportClass.id} class="card__people">${sportClass.classRecords}</p>
                        <p class="card__people-text">Students</p>
                    </div>
                </div>
                <div class="card__content">
                    <h3 class="card__content-description">${sportClass.classDescription}</h3>
                    <p class="card__content-text">Instructor: <span>${sportClass.instructorName}</span></p>
                    <p class="card__content-text"><svg class="svg-dot" width="8" height="8" viewBox="0 0 8 8"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="white" />
                        </svg>
                        Class capacity: <span id="capacity">${sportClass.classCapacity}</span></p>
                    <p class="card__content-text"><svg class="svg-dot" width="8" height="8" viewBox="0 0 8 8"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="white" />
                        </svg>
                        Difficulty: <span>${sportClass.classLevel}</span></p>
                    <p class="card__content-text"><svg class="svg-dot" width="8" height="8" viewBox="0 0 8 8"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="white" />
                        </svg>
                        Date: <span>${sportClass.classDate}</span></p>
                    <p class="card__content-text"><svg class="svg-dot" width="8" height="8" viewBox="0 0 8 8"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="white" />
                        </svg>
                        Time: <span>${sportClass.classTime}</span></p>
                    <p class="card__content-text"><svg class="svg-dot" width="8" height="8" viewBox="0 0 8 8"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="white" />
                        </svg>
                        Room No: <span>${sportClass.classRoom}</span></p>
                </div>
                <div class="card__buttons">
                    <button id=${sportClass.id} class="button-join">Join</button>
                    <button data-id="${sportClass.classTitle}" class="button-cancel inactive">Reject record</button>
                </div>
            </article>`
        cardBox.insertAdjacentHTML('beforeend', card);

        // Set inactive class if there are no vacant places in the class
        if (Number(sportClass.classCapacity) === Number(sportClass.classRecords)) {
            const joinBtn = document.getElementById(`${sportClass.id}`);
            joinBtn.classList.add('inactive');
        }
    });
}
// Slider About
const sliderImages = document.querySelectorAll('.slider-item__wrapper');
const arrowPrevious = document.querySelector('.slider-arrow-previous');
const arrowNext = document.querySelector('.slider-arrow-next');
const sliderPagination = document.querySelectorAll('.slider-pagination__button-wrapper');
const sliderContentWidth = document.querySelector('.slider-wrapper');

window.addEventListener("resize", () => {
    if (window.innerWidth >= 1440) {
        if (sliderCounter === 4) {
            sliderCounter = 2;
        }
        if (sliderCounter === 3) {
            sliderCounter = 1;
        }
    }
    slideChange();
    changePaginationColor(sliderCounter);
});

let sliderCounter = 0;

function previousSlide() {
    if (sliderCounter === 0) {
        sliderCounter = sliderImages.length - 1
        slideChange();
        changePaginationColor(sliderCounter);
    } else {
        sliderCounter -= 1;
        slideChange();
        changePaginationColor(sliderCounter);
    }
}
function nextSlide() {
    if (sliderCounter === sliderImages.length - 1) {
        sliderCounter = 0;
        slideChange();
        changePaginationColor(sliderCounter);
    } else {
        sliderCounter += 1;
        slideChange();
        changePaginationColor(sliderCounter);
    }



}

arrowPrevious.addEventListener('click', previousSlide);
arrowNext.addEventListener('click', nextSlide);

function slideChange() {
    sliderContentWidth.style.transform = `translateX(${((-sliderCounter * 410))}px)`;
}

function changePaginationColor(position) {
    if (document.querySelector('.slider-pagination__button_active') !== null) {
        document.querySelector('.slider-pagination__button_active').classList.remove('slider-pagination__button_active');
    }
    sliderPagination[position].firstElementChild.classList.add('slider-pagination__button_active');
}
sliderPagination.forEach((circle, position) => {
    circle.addEventListener('click', () => {
        sliderCounter = position;
        slideChange();
        changePaginationColor(sliderCounter);
    })
});