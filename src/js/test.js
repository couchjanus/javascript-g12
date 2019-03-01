'use strict';
import $ from 'jquery';

window.jQuery = window.$ = $;

// Создание элементов массива возможно несколькими способами:

// var earth = new Array(4); /* массив из 4-х элементов*/
// earth[0] = "Earth";
// earth[1] = "24 h";
// earth[2] = 6378;
// earth[3] = 365.25;

// var earth = new Array("Earth", "24 h", 6378, 365.25);

// var earth = new Array(); // пустой массив
// var earth = []; // пустой массив

// earth.xtype = "Solar";
// earth.xday = "24 h";
// earth.radius = 6378;
// earth.period = 365.25;

// var country = ["UK", "USA", "GB"];

// Если вы указываете числа или значения true или false при определении массива, 
// то тип переменной будет числовой или булев тип, а не строковый.

// var arr = ['первый элемент', 'второй элемент'];
// console.log(arr[0]); // напечатает 'первый элемент'
// console.log(arr[1]); // напечатает 'второй элемент'


// доступ к элементам массива в javaScript:
// var mas = new Array(1, 25, 'Привет');
// mas[0] = 'Пока';
// mas[1] = 35;


// Свойство массивов length взаимосвязано с числовыми свойствами.
// var fruits = [];
// fruits.push('банан', 'яблоко', 'персик');
// console.log(fruits.length); // 3

// Длина length – не количество элементов массива, а последний индекс + 1.
// var arr = [];
// arr[1000] = true;
// console.log(arr.length); // 1001


// При уменьшении length массив укорачивается.
// var arr = [1, 2, 3, 4, 5];
// arr.length = 2; // укоротить до 2 элементов
// console.log(arr[3]);
// arr.length = 5; // вернуть length обратно, как было
// console.log(arr[3]); // undefined: значения не вернулись

//   Массивы в JavaScript индексируются с нуля: первый элемент массива имеет индекс, равный 0, а индекс последнего элемента равен значению свойства массива length минус 1.
// var arr = ['первый элемент', 'второй элемент'];
// console.log(arr[0]); // напечатает 'первый элемент'
// console.log(arr[1]); // напечатает 'второй элемент'
// console.log(arr[arr.length - 1]); // напечатает 'второй элемент'

// Удаление элементов массива
// в javascript удалить элемент массива можно при помощи оператора delete:

// var myColors = new Array("red", "green", "blue");
// delete myColors[1];
// console.log(myColors); // red,,blue

// Самый простой способ очистить массив - это arr.length=0.

// вывести элементы массива на экран, в качестве конечного значения счетчика цикла использовать свойство length

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log(arr.length);


// вывод элементов массива с использованием обычного цикла for:

// var mas = new Array(1, 25, 'Привет');
// mas[0] = 'Пока';
// mas[1] = 35;

// function showElement() {
//     for (i = 0; i < 3; i++) {
//         console.log(mas[i]);
//     }
// }
// showElement();


// использование цикла for in для перебора элементов массива:

// function showElement() {
//     for (var i in mas) {
//         console.log(mas[i]);
//     }
// }
// showElement();


// перебор элементов массива buy:
var buy = document.getElementsByClassName('buy-now');

// console.log('buy.length = ', buy.length);

// for (let i = 0; i < buy.length; i++) {
//     console.log(buy[i]);
// }

// for (let i = 0; i < buy.length; i++) {
//     buy[i].addEventListener('click', function (e) {
//         console.log(e);
//     });
// }


// for (let i = 0; i < buy.length; i++) {
//     buy[i].addEventListener('click', function (e) {
//         console.log(e.target);
//         e.target.style.display = 'none';
//     });
// }


// for (let i = 0; i < buy.length; i++) {
//     buy[i].addEventListener('click', function (e) {
//         document.querySelector('.product .product-name').style.display = 'none';
//         document.querySelector('.product .icon').style.display = 'none';
//         e.target.style.display = 'none';
//         document.querySelector('.product .product-detail').style.display = 'block';
//         document.querySelector('.product-menu').style.top = '40%';
//     });
// }

// Свойство parentNode

// for (let i = 0; i < buy.length; i++) {
//     buy[i].addEventListener('click', function (e) {
//         console.log(e.target.parentNode);
//         e.target.style.display = 'none';
//     });
// }

// for (let i=0; i<buy.length; i++ ) {
//  buy[i].addEventListener('click', function (e) {
//    console.log(e.target.parentNode);
//    e.target.parentNode.parentNode.querySelector('.product .product-name').style.display = 'none';
//    e.target.parentNode.parentNode.querySelector('.product .icon').style.display = 'none';
//    e.target.style.display = 'none';
//    e.target.parentNode.parentNode.querySelector('.product .product-detail').style.display = 'block';
//    e.target.parentNode.parentNode.querySelector('.product-menu').style.top = '40%';
//  });
// }


// for (let i=0; i<buy.length; i++ ) {
//     buy[i].addEventListener('click', function (e) {
//       console.log(e.target.parentNode);
//       e.target.parentNode.parentNode.querySelector('.product .product-name').style.display = 'none';
//       e.target.parentNode.parentNode.querySelector('.product .icon').style.display = 'none';
//       e.target.style.display = 'none';
//       e.target.parentNode.parentNode.querySelector('.product .product-detail').style.display = 'block';
//       e.target.parentNode.style.top = '40%';
//     });
// }


// Свойство childNodes - представление дочерних узлов.
// var el = document.getElementsByClassName('product-menu').childNodes;
// console.log(el);

// for (let i=0; i<buy.length; i++ ) {
//     buy[i].addEventListener('click', function (e) {
//       console.log(e.target.parentNode);
//       console.log(e.target.parentNode.childNodes); // length: 13
//       console.log(e.target.parentNode.childElementCount); // 6
//     });
// }

// Свойство Node.children возвращает коллекцию (HTMLCollection) дочерних элементов узла.

// for (let i=0; i<buy.length; i++ ) {
//     buy[i].addEventListener('click', function (e) {
//       console.log(e.target.parentNode);
//       console.log(e.target.parentNode.children); // length: 13
//       console.log(e.target.parentNode.childElementCount); // 6
//     });
// }


// for (let i=0; i<buy.length; i++ ) {
//     buy[i].addEventListener('click', function (e) {
//         console.log(e.target.parentNode);
//         console.log(e.target.parentNode.children[2]);
//         console.log(e.target.parentNode.querySelector('.product-detail'));
//         console.log(e.target.parentNode.parentNode.querySelector('.product-name'));
//         console.log(e.target.parentNode.parentNode.querySelector('.icon'));
//     });
// }

// firstChild - первый дочерний узел элемента,
// var el = document.getElementById('nav').firstChild;
// console.log(el);

// lastChild - последний дочерний узел.
// el = document.getElementById('nav').lastChild;
// console.log(el);

// nextSibling - узел после элемента,
// var el = document.getElementById('nav').nextSibling;
// console.log(el);

// previousSibling - узел до элемента.

// el = document.getElementById('nav').previousSibling;
// console.log(el);

