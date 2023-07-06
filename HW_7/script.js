// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    title;
    author;
    pages;
    
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`\nНазвание книги: ${this.title}\nАвтор: ${this.author}\nКоличество страниц: ${this.pages}`);
    }
}

const book1 = new Book('Повелитель мух', 'Уильям Голдинг', 320);
const book2 = new Book('Спящая красавица', 'Шарль Перро', 35);
book1.displayInfo();
book2.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

class Student {
    name;
    age;
    grade;

    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log(`\nName: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`);
    }
}

const student1 = new Student('John Smith', 16, '10th grade');
const student2 = new Student('Jane Doe', 17, '11th grade');

student1.displayInfo();
student2.displayInfo();
