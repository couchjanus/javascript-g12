'use strict';
import $ from 'jquery';

window.jQuery = window.$ = $;

// Поиск элемента с заданным номером

var imgToDrag = $('.product').find("img").eq(0);

console.log(imgToDrag.offset()); // возвращает координаты первого div-элемента с классом content, относительно начала страницы.

console.log(imgToDrag.position()); // возвращает координаты первого div-элемента с классом content, относительно ближайшего родителя с заданным позиционированием.

imgToDrag.offset({top:250, left:100});  // устанавливает координаты относительно начала страницы, равные (100, 30) для элемента
