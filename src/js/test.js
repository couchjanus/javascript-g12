'use strict';
import $ from 'jquery';

window.jQuery = window.$ = $;

console.log(jQuery('h1'));
        
// JQuery Получить DOM-элемент body
console.log($("body"));

// JQuery Получить все элементы div
console.log($('div'));

console.log($('#cart-sidebar'));

// JQuery Получить все элементы span внутри div
console.log($($('div span')));
      
// JQuery Получить все элементы span внутри div
console.log($($($('div').find('span'))));
       
// JQuery Получить все элементы span внутри div
console.log($($('div > span')));


// Например, выбрать все элементы, имеющие класс btn:
console.log($(".btn"));
// также можно записать следующим образом:
console.log($("*.btn"));


// JQuery Получить элемент перед .plus
console.log($('.plus').prev());

// JQuery Получить элемент после #banner
console.log($('.minus').next());



$(document).ready(
    function(){
        console.log('Bla, Bla, Bla...');
        // $('p').css('border', '3px solid blue');
        // // получим значение background у элемента a
        // var background = $('.nav li a').css('background-color');
        // console.log(background);     // выведем его в консоль

        // var cssProperties = $('p').css(['width','height']);
        // console.log(cssProperties);
        // $("a").css("color", "red");

        // $('div').css({
        //     'color':'green',
        //     'font-size':'16px'
        // });

        // var newCSS = {
        //     'color':'green',
        //     'font-size':'16px'
        // };
        
        // $('p').css(newCSS);

        // $('p').css({
        //     "padding-left": "+=10",
        //     "padding-right":"+=10", 
        //     "padding-top": "+=10"
        // });
            


    }
);

// $(document).ready(ready);
 


function square(x) {
    return x * x;
}

let i = 2;

function setMessageText(msg) {
    $('.footer').text(msg);
}

// setMessageText("The Square of " + i + " is " + square(i));

// $('.footer').click(() => {
//     i++;
//     setMessageText("The Square of " + i + " is " + square(i));
// })
