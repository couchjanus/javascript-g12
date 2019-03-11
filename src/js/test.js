'use strict';
import $ from 'jquery';

window.jQuery = window.$ = $;

// Добавлять методы и свойства в объекты можно прямо при их создании:
const product = {
    id: 0,
    name: "Really Cool Cat",
    price: 177,
    picture: "cat3.jpg",
};


// Контент шаблона
const $template = document.getElementById("productItem").content;   

// $template.querySelector('.product-wrapper').setAttribute('productId', product.id);
// $template.querySelector('.product-name').textContent = product.name;
// $template.querySelector('img').setAttribute('src', "images/"+ product.picture);
// $template.querySelector('.product-price').textContent = product.price;

// // Клонирование шаблона
// document.querySelector('.main').append($template.cloneNode(true));


$template.querySelector('.product-wrapper').setAttribute('productId', product.id);
$template.querySelector('.product-name').textContent = product.name;
$template.querySelector('img').setAttribute('src', "images/"+ product.picture);
$template.querySelector('img').setAttribute('alt', product.name);
$template.querySelector('.product-price').textContent = '$'+product.price;
document.querySelector('.main').append($template.cloneNode(true));

// JQuery 
var $productTemplate = $($('#productItem').html());
$productTemplate.find('.product-wrapper').attr('productId', product["id"]);
$productTemplate.find('.product-name').text(product.name);
$productTemplate.find('img').attr('src', "images/"+ product.picture);
$productTemplate.find('img').attr('alt', product.name);
$productTemplate.find('.product-price').text('$'+product["price"]);

$(".main").append($productTemplate);


function makeProductItem($template, product) {
    $template.querySelector('.product-wrapper').setAttribute('productId', product.id);
    $template.querySelector('.product-name').textContent = product.name;
    $template.querySelector('img').setAttribute('src', "images/"+ product.picture);
    $template.querySelector('img').setAttribute('alt', product.name);
    $template.querySelector('.product-price').textContent = '$'+product.price;
    return $template;
}

document.querySelector('.main').append(makeProductItem($template, product).cloneNode(true));


function $makeProductItem($template, product){
    $template.find('.product-wrapper').attr('productId', product["id"]);
    $template.find('.product-name').text(product.name);
    $template.find('img').attr('src', "images/"+ product.picture);
    $template.find('img').attr('alt', product.name);
    $template.find('.product-price').text('$'+product["price"]);
    return $template;
}

$(".main").append($makeProductItem($productTemplate, product));


// При использовании цикла for .. in задаётся переменная, которую обычно называют key. С помощью этой переменной в теле цикла можно последовательно получить каждый ключ из итерируемого объекта. 

   var obj = {a:1, b:2, c:3};
   for (var key in obj) {
     console.log("obj." + key + " = " + obj[key]);
   }

// You can also use for…in to iterate over the index values of an iterable like an array or a string:
// Вы также можете использовать for… in для итерации по значениям индекса итерируемого типа массива или строки:
let str = 'Turn the page';

for (let index in str) {
  console.log(`Index of ${str[index]}: ${index}`);
}

var counter = 0;

for (var key in str) {
    counter++;
}
console.log('Количество свойств=', counter);


product.description = "Really Cool Cat";

// порядок перебора соответствует порядку присвоения свойства
for (var prop in product) {
    console.log( prop ); // id, name, price, picture, description
}


var users = {
    "9": 'Gertrude',
    "3": 'Henry',
    "1": 'Melvin'
  };

for (var key in users) {
    console.log( key ); // 1, 3, 9
}

var usersPlus = {
    "+9": 'Gertrude',
    "+3": 'Henry',
    "+1": 'Melvin' 
};
for (var key in usersPlus) {
    var value = usersPlus[key];
    key = +key; // ..если нужно именно число, преобразуем: "+1" -> 1
    console.log( key + ": " + value ); // 9, 3, 1 во всех браузерах
}

let animals = ['🐔', '🐷', '🐑', '🐇'];
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

for (let animal of animals) {
  // Random name for our animal
  let nameIdx = Math.floor(Math.random() * names.length);

  console.log(`${names[nameIdx]} the ${animal}`);
}

// Strings are also an iterable type, so you can use for…of on strings:

let string = 'abcde';

for (let char of string) {
  console.log(char.toUpperCase().repeat(3));
}

for (let key in product) { 
    console.log(key + ': ' + product[key]);
}

// Почему нельзя использовать форму obj.key?  Используя такую запись вы подразумеваете, что хотите получить значение свойства key итерируемого объекта, а не значение соответствующее данному ключу.


for (let key in product) {
    console.log(key + ': ' + product.key);
}


const data = [
    {
        id: 0,
        name: "Cool Cat",
        price: 177,
        picture: "cat1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    {
        id: 1,
        name: "Black Cat",
        price: 666,
        picture: "cat2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    {
        id: 2,
        name: "Red Cat",
        price: 555,
        picture: "cat3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    {
        id: 3,
        name: "Blue Cat",
        price: 444,
        picture: "cat4.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    {
        id: 4,
        name: "Green Cat",
        price: 333,
        picture: "cat5.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    {
        id: 5,
        name: "Grey Cat",
        price: 222,
        picture: "cat6.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    {
        id: 6,
        name: "Orange Cat",
        price: 777,
        picture: "cat7.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    {
        id: 7,
        name: "Pretty Cat",
        price: 888,
        picture: "cat8.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    ];



console.log(Object.keys(data)); 
// консоль: Array(8) [ "0", "1", "2", "3", "4", "5", "6", "7" ]

// Массивоподобный объект
console.log(Object.keys(data[1])); 
// консоль: Array(5) [ "id", "name", "price", "picture", "description" ]
 
// Построение каталога

// for (var i=0; i<Object.keys(data).length; i++) {
//     document.querySelector('.main').append(makeProductItem($template, data[i]).cloneNode(true));
// }

// JQuery

for (var i=0; i<data.length; i++) {
    let $$Template = $($('#productItem').html());
    $(".main").append($makeProductItem($$Template, data[i]));
}


