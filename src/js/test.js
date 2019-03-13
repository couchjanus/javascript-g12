'use strict';
import $ from 'jquery';

window.jQuery = window.$ = $;

var shoppingCart = [];

// if (window.sessionStorage && window.localStorage) {
// 	// объекты sessionStorage и localStorage поддерживаются
// 	console.log('объекты sessionStorage и localStorage поддерживаются');
// } else {
// 	// объекты sessionStorage и localStorage не поддерживаются
// 	console.log('объекты sessionStorage и localStorage не поддерживаются');
// }

// try {
// 	localStorage.setItem('ключ', 'значение');
// } catch (e) {
// 	if (e == QUOTA_EXCEEDED_ERR) {
// 		console.log('Превышен лимит');
// 	}
// }

// var numbers = '[0, 1, 2, 3]';
// numbers = JSON.parse(numbers);
// console.log(numbers[1]); // 1

// var user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// user = JSON.parse(user);
// console.log(user.friends[1]); // 1

// function saveCart(shoppingCart) {
//     if (window.localStorage) {
//         console.log(JSON.stringify(shoppingCart));
//     }
// }

// function saveCart(shoppingCart) {
// 	if (window.localStorage) {
// 		//    localStorage.setItem('shoppingCart',  JSON.stringify(shoppingCart));
// 		localStorage.shoppingCart = JSON.stringify(shoppingCart);
// 	}
// }

// let item = {
// 	Id: 1,
// 	Product: 'name',
// 	Price: 111,
// 	Quantity: 2,
// 	Picture: 'picture'
// };

// var shoppingCart = [];
// shoppingCart.push(item);

// Вызываем функцию
// saveCart(shoppingCart);

// Результат работы JSON.stringify [{"Id":1,"Product":"name","Price":111,"Quantity":2,"Picture":"picture"}]

// Получим наш сериализованный объект через API

// var shoppingCartObj = localStorage.getItem("shoppingCart");
// console.log(shoppingCartObj);

// if (localStorage.shoppingCart) {
//     shoppingCart = JSON.parse(localStorage.shoppingCart);
// }

// Получим наш сериализованный объект через API
// Одновременно преобразуем к обычному объекту JavaScript
// var shoppingCartObj = JSON.parse(localStorage.getItem("shoppingCart"));
// console.log(shoppingCartObj);

// function showCart(shoppingCart){
//     if (shoppingCart.length == 0) {
//         console.log("Your Shopping Cart is Empty!");
//         return;
//     } else { console.log("Your Shopping Cart Contains: ", shoppingCart.length, " Items");
//       return;
//     }
// }

// JQuery

// function openCart(){
//     showCart(shoppingCart);
//     $('.aside').addClass('open');
//     $(".backdrop").addClass("backdrop--open");
// }

// function closeCart(){
//     $(".aside").removeClass("open");
//     $(".backdrop").removeClass("backdrop--open");
// }

// $("#cart-toggle").on('click', () => openCart());
// $(".toggle-sidebar").on('click', () => closeCart());

// Vanila JS

// function openCart(e) {
// 	showCart(shoppingCart);
// 	e.preventDefault();
// 	document.querySelector('.aside').classList.toggle('open');
// 	document.querySelector('.backdrop').classList.toggle('backdrop--open');
// }

// function closeCart(e) {
// 	e.preventDefault();
// 	document.querySelector('.aside').classList.toggle('open');
// 	document.querySelector('.backdrop').classList.toggle('backdrop--open');
// }

// document.getElementById('cart-toggle').addEventListener('click', (e) => openCart(e));
// document.querySelector('.toggle-sidebar').addEventListener('click', (e) => closeCart(e));


// JQuery
$('.buy-now').each(function(index, element) {
	$(element).on('click', function(e) {
		$(e.target).parents('.product').find('.product-name').fadeOut('slow', 'linear');
		$(e.target).parents('.product').find('.icon').fadeOut(600, 'linear');
		$(e.target).parents('.product').find('.buy-now').fadeOut('fast');
		$(e.target).parents('.product').find(' .product-detail').css('display', 'block');
		$(e.target).parents('.product-menu').css('top', '40%');
		$(e.target).parents('.product').find('img').fadeTo('slow', 0.5);
	});
});

// $('.add-to-cart').each(function(index, element) {
// 	$(element).on('click', () => {
// 		let id = $(this).parents('.product-wrapper').attr('productId');
// 		console.log(id);
// 		let price = $(this).parents('.product-menu').find('.product-price').text();
// 		console.log(price);
// 		let name = $(this).parents('.product').children('.product-name').text();
// 		console.log(name);
// 		let quantity = $(this).parents('.product-menu').find('.quantity').val();
// 		console.log(quantity);
// 		let picture = $(this).parents('.product').find('img').attr('src');
// 		console.log(picture);

// 		let item = {
// 			Id: id,
// 			Product: name,
// 			Price: price,
// 			Quantity: quantity,
// 			Picture: picture
// 		};
// 		console.log(item);

// 		shoppingCart.push(item);

// 		saveCart(shoppingCart);
// 	});
// });

// =================Удаление значения===========================
// localStorage.removeItem("Ключ");

// Удаление значения
// delete localStorage["Ключ"];

// Очистка всего хранилища
// localStorage.clear();

//Добавляем или изменяем значение:
// localStorage.setItem('myKey', 'myValue');
// теперь в localStorage хранится ключ "myKey" cо значением "myValue"

//Выводм его в консоль:
// var localValue = localStorage.getItem('myKey');
// console.log(localValue); //"myValue"

// То же самое, только с квадратными скобками:
// localStorage["Ключ"] = "Значение"; //установка значения
// localStorage["Ключ"]; // Получение значения
// delete localStorage["Ключ"]; // Удаление значения

// localStorage работает и с вложенными структурами, например, объектами.

//создадим объект
// var obj = {
//  item1: 1,
//  item2: [123, "two", 3.0],
//  item3:"hello"
// };

// var serialObj = JSON.stringify(obj);  //сериализуем его
// localStorage.setItem("myKey", serialObj); //запишем его в хранилище по ключу "myKey"
// var returnObj = JSON.parse(localStorage.getItem("myKey")); // парсим его обратно в объект

// ========================Очистка всего хранилища======================
// $('body').on('click', '#cart-sidebar .clear-cart', function() {
// 	localStorage.removeItem('shoppingCart');
// 	$('.cart-items').empty();
// 	shoppingCart = [];
// });
