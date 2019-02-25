"use strict";

function messageShow() {
    alert('Документ и все ресурсы загружены!');
}

window.onload = function() {
    messageShow();
};

// document.addEventListener("DOMContentLoaded", function(){
//     console.log('Документ и все ресурсы загружены!');
// }, false);


window.onbeforeunload = function () {
    return "Точно перейти? И куда же ты собрался?";
};

// (function(){
//     console.log('Документ и все ресурсы загружены!');
// })();


// (function () {
//     console.log('Документ и все ресурсы загружены!');
//     document.getElementById("cart-toggle").addEventListener('click', function () {
//         document.querySelector(".aside").classList.add('show-sidebar');
//     });

// })();


// (function () {
//     console.log('Документ и все ресурсы загружены!');
//     document.getElementById("cart-toggle").addEventListener('click', function () {
//         if (document.querySelector(".aside").classList.contains("show-sidebar")) {
//             document.querySelector(".aside").classList.remove('show-sidebar');
//         } else {
//             document.querySelector(".aside").classList.add('show-sidebar');
//         }
//     });
// })();

// (function () {
//     console.log('Документ и все ресурсы загружены!');
//     document.getElementById("cart-toggle").addEventListener('click', function () {
//         document.querySelector(".aside").classList.toggle("show-sidebar");
//     });
// })();


// (function () {
//     console.log('Документ и все ресурсы загружены!');
//     document.getElementById("cart-toggle").addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(".aside").classList.toggle("show-sidebar");
//     });
// })();
