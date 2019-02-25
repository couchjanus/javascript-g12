'use strict';

console.log(document.body); // BODY
console.log(document.title); // title

console.log(document['body']); // BODY
console.log(document['title']); // title

// ================nodeType==========================
console.log("тип узла: " + document.nodeType);
// тип узла: 9 

// ================nodeName==========================
console.log("Имя узла: " + document.nodeName);
// Имя узла: #document

// ================nodeValue==========================
console.log("значение узла: " + document.nodeValue);
// значение узла: null

// ================Доступ к элементам==========================
console.log("Document Element: " + document.documentElement);
// Document Element: [object HTMLHtmlElement]
console.log("Body Element: " + document.body);
// Body Element: [object HTMLBodyElement], если есть в документе (обязан быть). 

// Все дочерние элементы, включая текстовые находятся в массиве childNodes.
console.log('Все дочерние элементы ', document.body.childNodes);

// имя тага
console.log(document.body.tagName); // BODY

// Можно поменять цвет BODY: -->
document.body.style.backgroundColor = 'red';

// Можно поменять цвет текста:
document.body.style.color = 'white';

// innerHTML
// document.body.innerHTML = '<h1 id="bye" class="see">Bye! See ya!</h1>';

// getElementById
// document.getElementById("bye").style.color ="yellow";

document.getElementById("main").innerHTML = '<h1 id="bye" class="see">Bye! See ya!</h1><div id="content-holder"><div id="content">Элемент</div></div>';
document.getElementById("bye").style.color ="yellow";

document.getElementById('content').innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero tempore necessitatibus obcaecati accusamus ullam autem ut iste, vel suscipit adipisci officiis doloribus dolores quasi minus pariatur ex omnis modi neque?'; 
document.getElementById('content-holder').style.color ="white"; 

// getElementsByTagName
document.body.getElementsByTagName('h1')[0].innerHTML="Hello world";

// querySelectorAll
document.querySelectorAll('h1')[0].textContent = 'Hello Text Content!';

// querySelector
document.querySelector('h1').textContent = 'Hello JavaScript!';

// getElementsByClassName
document.getElementsByClassName('see')[0].innerHTML = 'Hello JavaScript ClassName!';