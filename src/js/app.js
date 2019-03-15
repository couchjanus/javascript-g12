"use strict";

// app.js
// import {
//     data
// } from './data.js';

import {
    fadeOut,
    fadeIn,
    makeProductItem,
    addProductToCart
} from './app.functions';

// ---------------------------------------------------------------------------------
(function () {
    document.getElementById("cart-toggle").addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(".aside").classList.toggle("open");
        document.querySelector(".backdrop").classList.toggle("backdrop--open");
    });

    document.querySelector(".toggle-sidebar").addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(".aside").classList.toggle("open");
        document.querySelector(".backdrop").classList.toggle("backdrop--open");
    });


    // Контент шаблона
    const $template = document.getElementById("productItem").content;
    const url = 'https://api.myjson.com/bins/wzxxy';
    // const url = 'https://my-json-server.typicode.com/couchjanus/db/products';
    fetch(url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                response.json().then(function (data) {

                    data.forEach(function (index) {
                        document.querySelector('.main').append(makeProductItem($template, index).cloneNode(true));
                    });

                    let plus = document.getElementsByClassName('plus');

                    plus = Array.prototype.slice.call(plus); // теперь plus - массив

                    plus.forEach(function (elem) {
                        elem.addEventListener('click', function () {
                            let val = parseInt(this.previousElementSibling.getAttribute('value'));
                            this.previousElementSibling.setAttribute('value', val + 1);
                        });
                    });

                    let minus = document.getElementsByClassName('minus');

                    minus = Array.prototype.slice.call(minus); // теперь minus - массив

                    minus.forEach(function (elem) {
                        elem.addEventListener('click', function () {
                            let val = parseInt(this.nextElementSibling.getAttribute('value'));
                            this.nextElementSibling.setAttribute('value', val - 1);
                        });
                    });


                    const byes = Array.from(document.getElementsByClassName('buy-now'));
                    byes.forEach(function (buy) {
                        buy.addEventListener('click', function (e) {
                            fadeOut(e.target.parentNode.parentNode.querySelector('.product-name'));
                            fadeOut(e.target.parentNode.parentNode.querySelector('.icon'));
                            e.target.style.display = 'none';
                            e.target.parentNode.querySelector('.product-detail').style.display = 'block';
                            e.target.parentNode.style.top = '40%';
                        });
                    });

                    const cancels = Array.from(document.getElementsByClassName('cancel'));
                    cancels.forEach(function (cancel) {
                        cancel.addEventListener('click', function (e) {
                            fadeIn(e.target.parentNode.parentNode.querySelector('.product-name'));
                            fadeIn(e.target.parentNode.parentNode.querySelector('.icon'));
                            e.target.parentNode.querySelector('.buy-now').style.display = 'block';
                            e.target.parentNode.querySelector('.product-detail').style.display = 'none';
                            e.target.parentNode.style.top = '80%';
                        });
                    });

                    const content = document.getElementById("cartItem").content;
                    const carts = Array.from(document.getElementsByClassName('add-to-cart'));
                    carts.forEach(function (cart) {
                        cart.addEventListener('click', function (e) {
                            let element = e.target.parentNode.parentNode;
                            document.querySelector('.cart-items').append(document.importNode(addProductToCart(content, element), true));

                            // Поиск элемента с заданным номером
                            var imgToDrag = element.querySelector("img");

                            let rectOrigin = imgToDrag.getBoundingClientRect();
                            let toLeftStart = rectOrigin.left + 'px';
                            let toTopStart = rectOrigin.top + 'px';
                            console.log(toLeftStart, toTopStart);

                            if (imgToDrag) {
                                var imgClone = imgToDrag.cloneNode(true);
                                imgClone.style.left = 0;
                                imgClone.style.top = 0;
                                imgClone.classList.add('offset-img');
                                imgClone.style.height = '150px';
                                imgClone.style.width = '150px';
                                document.body.appendChild(imgClone);

                                e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(180deg)';
                                e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');

                                let rect = document.querySelector('#cart-toggle').getBoundingClientRect();
                                let toLeft = rect.left - 50 + 'px';
                                let toTop = rect.top - 50 + 'px';

                                imgClone.animate([{
                                        transform: 'translate3D(' + toLeftStart + ',' + toTopStart + ', 0)'
                                    },
                                    {
                                        transform: 'translate3D(' + toLeft + ',' + toTop + ',0) perspective(500px) scale3d(0.1, 0.1, 0.2)'
                                    },
                                ], {
                                    duration: 2000,
                                }).onfinish = function () {
                                    imgClone.remove();
                                    e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(0deg)';
                                    fadeIn(e.target.parentNode.parentNode.querySelector('.product-name'));
                                    fadeIn(e.target.parentNode.parentNode.querySelector('.icon'));
                                    e.target.parentNode.querySelector('.buy-now').style.display = 'block';
                                    e.target.parentNode.querySelector('.product-detail').style.display = 'none';
                                    e.target.parentNode.style.top = '80%';
                                };
                            }
                        });

                    });

                    document.querySelector('.cart-items').addEventListener('click', function (e) {
                        if (e.target && e.target.matches(".remove-item")) {
                            // console.log(e.target.parentNode);
                            e.target.parentNode.remove();
                        }
                    }, false);


                });
            })
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });


    // ====================================================================
})();