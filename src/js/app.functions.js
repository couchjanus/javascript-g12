"use strict";

function raf(fn) {
    window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
            fn();
        });
    });
}


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

export { fadeOut, fadeIn, makeProductItem, addProductToCart };