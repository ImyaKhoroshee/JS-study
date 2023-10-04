// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:
// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = {
    albums: [
        { title: "Белая полоса", artist: "Зоопарк", year: "1984" },
        { title: "Blood on the Dance Floor", artist: "Майкла Джексона", year: "1997" },
        { title: "Reanimation", artist: "Linkin Park", year: "2002" },
    ],
    [Symbol.iterator]() {
    this.current = 0;
    return this;
    },
    next() {
        if (this.current < this.albums.length) {
            return { done: false, value: this.albums[this.current++] };
        } else {
            return { done: true };
        }
    }
}

for (let album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}
    


