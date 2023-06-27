const dataProduct = `[
    {
    "brand": "MANGO PEOPLE",
    "categoty": "T-SHIRT",
    "currency": "$",
    "price": "300",
    "color": "Red",
    "size": "XI",
    "quantity": "2",
    "image": "./images/image_one.svg"
    },
    {
    "brand": "ELLERY X M'O",
    "categoty": "CAPSULE",
    "currency": "$",
    "price": "52",
    "color": "Black",
    "size": "XI",
    "quantity": "1",
    "image": "./images/image_two.svg"
    }
]`;


// const product = document.querySelector('.product');

// JSON.parse(dataProduct).forEach(item => {
    
//     // Обертка для каждой карточки
//     const productCard = document.createElement('div');
//     productCard.classList.add('product-card');
//     product.append(productCard);

//     // Три блока: фото + описание + выход
//     const productImage = document.createElement('img');
//     productImage.classList.add('product-card__image');
//     productImage.src = item.image;
//     productCard.append(productImage);

//     const productCardDescription = document.createElement('div');
//     productCardDescription.classList.add('product-card__description');
//     productCard.append(productCardDescription);

//     const productCardExit = document.createElement('div');
//     productCardExit.classList.add('product-card__exit');
//     productCard.append(productCardExit);

//     // Контент внутри блока с описанием
//     const heading = document.createElement('a');
//     heading.classList.add('product-card__heading');
//     heading.href = '#';
//     heading.textContent = item.brand;
//     productCardDescription.append(heading);

//     const categoty = document.createElement('h3');
//     categoty.classList.add('product-card__category');
//     categoty.textContent = item.categoty;
//     productCardDescription.append(categoty);

//     const price = document.createElement('p');
//     price.classList.add('product-card__price');
//     price.textContent = 'Price: ';
//     productCardDescription.append(price);

//     const priceSpan = document.createElement('span');
//     priceSpan.classList.add('strong-price');
//     priceSpan.textContent = item.currency + item.price;
//     price.append(priceSpan);

//     const color = document.createElement('p');
//     color.classList.add('product-card__color');
//     color.textContent = `Color: ${item.color}`;
//     productCardDescription.append(color);

//     const size = document.createElement('p');
//     size.classList.add('product-card__size');
//     size.textContent = 'Size: ' + item.size;
//     productCardDescription.append(size);

//     const inventory = document.createElement('div');
//     inventory.classList.add('product-card__inventory');
//     productCardDescription.append(inventory);

//     const quantity = document.createElement('p');
//     quantity.classList.add('product-card__quantity');
//     quantity.textContent = 'Quantity: ';
//     inventory.append(quantity);

//     const inputCount = document.createElement('input');
//     inputCount.classList.add('product-card__count');
//     inputCount.value = item.quantity;
//     inventory.append(inputCount);

//     // Крестик
//     const exit = document.createElement('img');
//     exit.src = './images/cross.svg';
//     productCardExit.append(exit);
    
// });


const fs = require("fs");
let fileContent = fs.readFileSync("myJson.json", "utf8");
console.log(fileContent);