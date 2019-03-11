"use strict";

// app.js
import {
    data
} from './data.js';

// import {
//     fadeOut,
//     fadeIn,
//     makeProductItem,
//     addProductToCart
// } from './app.functions';

function fadeOut(item) {
    let hendler = function () {
        item.style.display = 'none';
        item.classList.remove('fade-active');
        item.removeEventListener('transitionend', hendler);
    };
    item.classList.add('fade-active');
    item.addEventListener('transitionend', hendler);
}

function fadeIn(item) {
    let hendler = function () {
        item.classList.remove('fade-active');
        item.removeEventListener('transitionend', hendler);
    };
    item.style.display = 'block';
    item.classList.add('fade');

    raf(function () {
        item.classList.add('fade-passive');
        item.classList.remove('fade');
    });

    item.addEventListener('transitionend', hendler);
}

function raf(fn) {
    window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
            fn();
        });
    });
}

function makeProductItem($template, product) {
    $template.querySelector('.product-wrapper').setAttribute('productId', product.id);
    $template.querySelector('.product-name').textContent = product.name;
    $template.querySelector('img').setAttribute('src', "images/"+ product.picture);
    $template.querySelector('img').setAttribute('alt', product.name);
    $template.querySelector('.product-price').textContent = '$'+product.price;
    return $template;
}

function addProductToCart(content, item) {
    content.querySelector('.item-name').textContent = item.querySelector(".product-name").textContent;
    content.querySelector('.item-quantity').textContent = item.querySelector(".quantity").value;
    content.querySelector('.item-price').textContent = item.querySelector(".product-price").textContent;
    content.querySelector('.item-img img').setAttribute('src', item.querySelector(".product-picture img").getAttribute('src'));

    
    return content;
}

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

    for (var i = 0; i < Object.keys(data).length; i++) {
        document.querySelector('.main').append(makeProductItem($template, data[i]).cloneNode(true));
    }

    // let plus = document.getElementsByClassName('plus');
    // for (let i = 0; i < plus.length; i++) {
    //     plus[i].addEventListener('click', function (e) {
    //         let val = parseInt(e.target.previousElementSibling.getAttribute('value'));
    //         e.target.previousElementSibling.setAttribute('value', val + 1);
    //     });
    // }


    let plus = document.getElementsByClassName('plus');

    plus = Array.prototype.slice.call(plus); // теперь plus - массив

    plus.forEach(function (elem) {
        elem.addEventListener('click', function () {
            let val = parseInt(this.previousElementSibling.getAttribute('value'));
            this.previousElementSibling.setAttribute('value', val + 1);
        });
    });


    // let minus = document.getElementsByClassName('minus');
    // for (let i = 0; i < minus.length; i++) {
    //     minus[i].addEventListener('click', function (e) {
    //         let val = parseInt(e.target.nextElementSibling.getAttribute('value'));
    //         e.target.nextElementSibling.setAttribute('value', val - 1);
    //     });
    // }

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
                // console.log(toLeft, toTop);

                imgClone.animate([{
                        transform: 'translate3D(0, 0, 0)'
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
        
    document.querySelector('.cart-items').addEventListener('click', function(e) {
        if (e.target && e.target.matches(".remove-item")) {
            // console.log(e.target.parentNode);
            e.target.parentNode.remove();
        }
    }, false);
    
    // ====================================================================
})();