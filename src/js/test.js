'use strict';
import $ from 'jquery';

window.jQuery = window.$ = $;

var log = function(a, b, c) {
	console.log(a, b, c);
};

//   Подобным образом использовать массив можно было и до появления оператора ... с помощью метода функций apply:
log.apply(null, [1, 2, 3]); // 1 2 3
// Равнозначно
log(...[1, 2, 3]); // 1 2 3
  
// Преобразование DOM коллекции в массив с помощью оператора spread выглядит следующим образом:
let plus = [...document.querySelectorAll('.plus')];
console.log(Array.isArray(plus)); // true

