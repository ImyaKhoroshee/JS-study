// Задание 1
// Представьте, что у вас есть класс для управления библиотекой.В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
class Library {
    #booksList = [];

    // Реализуйте геттер allBooks, который возвращает текущий список книг.
    get allBooks() {
        return this.#booksList;
    }
    // Реализуйте метод addBook(title), который позволяет добавлять книгу в список.Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
    addBook(title) {
        if (this.#booksList.includes(title)) throw new Error('Такая книга уже есть в нашей библиотеке');
        this.#booksList.push(title);
        return this.#booksList;
    }
    // Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию.Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
    removeBook(title) {
        const bookIndex = this.#booksList.indexOf(title);
        if (bookIndex === -1) throw new Error('Такой книги нет в библиотеке');
        this.#booksList.splice(bookIndex, 1);
        return this.#booksList;
    }
    // Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
    hasBook(title) {
        return this.#booksList.includes(title);
    }
    // Реализуйте конструктор, который принимает начальный список книг(массив) в качестве аргумента.Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
    constructor(bookArray) {
        bookArray.map(book => {
            if (this.#booksList.includes(book)) throw new Error(`Книга ${book} уже есть в библиотеке`);
            this.#booksList.push(book);
        });
    }
}

const library = new Library(['"Фея-колтунья и волшебный портал"', '"Большая прикольная книга кота Помпона"', '"Волшебные неудачники"']);
// const libraryTest = new Library(['"Фея-колтунья и волшебный портал"', '"Фея-колтунья и волшебный портал"', '"Большая прикольная книга кота Помпона"', '"Волшебные неудачники"']);
console.log(library.allBooks);
// console.log(library.addBook('"Фея-колтунья и волшебный портал"'));
console.log(library.addBook('"Вниз по волшебной реке"'));
console.log(library.hasBook('"Вниз по волшебной реке"'));
console.log(library.hasBook('"Бе-бе-бе"'));
// console.log(library.removeBook('"Вниз по волшебной реке"'));

