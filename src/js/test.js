'use strict';
import $ from 'jquery';

window.jQuery = window.$ = $;

// Для создания элементов используется метод:
var child = document.createElement("div");

// Для создания текстового узла объект document имеет метод:
var childText = document.createTextNode("Hello Element!");

var element = document.createElement("article");
element.innerHTML = "<h2>Hello Article!</h2>";

// ========================appendChild================================
// Добавляет элемент в конец списка дочерних элементов родителя. Вставляемый узел становится последним в списке дочерних узлов элемента.
child.appendChild(childText);
var childElement = element.appendChild(child);

var aOne = document.createElement('a');
aOne.href = "http://google.com"
aOne.innerText = "Goodling!"
document.querySelector('.footer').appendChild(aOne);

// ======================insertBefore=========================
var parent = document.querySelector('.footer');
// Вставка в самое начало родителя, то есть перед первым узлом
parent.insertBefore(element, parent.firstChild);

// Вставка в конец родителя, аналогично appendChild()
parent.insertBefore(element, null);

// Вставка перед конкретным элементом parentChild
var parentChild = document.querySelector('.footer-socials');
parent.insertBefore(element, parentChild);

// Вставка после конкретного элемента parentChild
// здесь происходит вставка перед тем узлом, который находится сразу за узлом parentChild
parent.insertBefore(element, parentChild.nextSibling);

//====================replaceChild==========================

// Создаем новый пустой элемент
var sp1 = document.createElement("span");

// Присваиваем ему id 'newSpan'
sp1.setAttribute("id", "newSpan");

// Создаем строку.
var sp1_content = document.createTextNode("New replacement span element.");

// Добавляем контент в созданный нами узел
sp1.appendChild(sp1_content);

// создаем ссылку на элемент который будем заменять
var sp2 = document.querySelector('.footer-socials');
var parentDiv = sp2.parentNode;

// заменяем существующий элемент sp2 на созданный нами sp1
// parentDiv.replaceChild(sp1, sp2);

// =================insertAdjacentHTML===========================

var list = document.querySelector('.footer-socials');

/* добавляем новый элемент */
list.insertAdjacentHTML('beforeend', '<a href="#"><i class="fab fa-github"></i></a>'); 

// ============================text/template===========================

var templateSource = document.getElementById("template-item").innerHTML;       

var article = document.createElement("article");

article.innerHTML = document.getElementById("template-item").innerHTML;

document.querySelector('.footer').appendChild(article);

// ====================template====================================

let template =  document.getElementById("cells-to-repeat").content; 

document.querySelector('.table-row').append(document.importNode(template, true));

for(let i=0; i<6; i++){
    document.querySelector('.table-row').append(document.importNode(template, true));
}


// ============================jQuery===================================

// Очень часто встречающийся подход с использованием jQuery:

// $('.footer').append('<a href="http://google.com">Googling!</a>');

// кроссбраузерный и безопасный вариант:

$('<a>', { 
    href: 'http://google.com', 
    text: 'Googling!'
    }).appendTo('.footer');
    

// оригинал элемента с закрепленным за ним массивом
var $elem = $('<div>').data("arr",[1,2,3]);

// создадим копию элемента
// и перепишем в нем arr
let $clone = $elem.clone(true).data("arr", $.extend([], $elem.data("arr"))); 
console.log($clone.data("arr"));

let $template = $($('#cartItem').html());
$template.find(".item-quantity").text(33);
$template.find('.item-price').text(1234);
$(".cart-items").append($template);

console.log($(".cart-items").html());