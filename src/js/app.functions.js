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
    $template.querySelector('.product').setAttribute('productId', product.id);
    $template.querySelector('.product-name').textContent = product.name;
    $template.querySelector('img').setAttribute('src', "images/"+ product.picture);
    $template.querySelector('img').setAttribute('alt', product.name);
    $template.querySelector('.product-detail').setAttribute('alt', product.name);
    $template.querySelector('.product-price').textContent = '$'+product.price;
    return $template;
}

function updateTotal() {
    var quantities = 0,
    total = 0,
    $cartTotal = document.querySelector('.cart-total span'),
    items = document.querySelector('.cart-items').children;
    Array.from(items).forEach(function (item) {
        total += parseFloat(item.querySelector('.item-prices').textContent);
    });
    $cartTotal.textContent = parseFloat(Math.round(total * 100) / 100).toFixed(2);

}


function saveCart(shoppingCart) {
    // Store data
    localStorage.shoppingCart = JSON.stringify(shoppingCart);
    console.log(JSON.stringify(shoppingCart));
}

function productInCart(template, item) {
    template.querySelector('.productInCart').setAttribute('id', item.Id);
    template.querySelector('.item-quantity').textContent = item.Quantity;
    template.querySelector('.item-name').textContent = item.Product;
    template.querySelector('.item-price').textContent = item.Price;
    template.querySelector('.item-prices').textContent = parseFloat(item.Quantity) * parseFloat(item.Price.trim().substring(1));
    template.querySelector('.item-img img').setAttribute('src', item.Picture);
    return template;
}

function showCart(shoppingCart) {
    if (shoppingCart.length == 0) {
        console.log("Your Shopping Cart is Empty!");
        return;
    }
    document.querySelector(".cart-items").innerHTML = '';
    shoppingCart.forEach(function (item) {
        let template = document.getElementById("cartItem").content;
        productInCart(template, item);
        document.querySelector(".cart-items").append(document.importNode(productInCart(template, item), true));
    });
    updateTotal();
}

function openCart(shoppingCart) {
    showCart(shoppingCart);
    document.querySelector(".aside").classList.add("open");
    document.querySelector(".backdrop").classList.add("backdrop--open");
}

function closeCart() {
    document.querySelector(".aside").classList.remove("open");
    document.querySelector(".backdrop").classList.remove("backdrop--open");
}

function getElement(e) {
    let element = e.parentNode.parentNode;
    
    return {
        id: element.getAttribute("productId"),
        price:e.parentNode.querySelector(".product-price").textContent,
        name:element.querySelector(".product-name").textContent,
        quantity:element.querySelector(".quantity").value,
        picture:element.querySelector("img").getAttribute('src')
	}
    
}

function _translate(img, offset=0){
    let rect = img.getBoundingClientRect();
    let elements = ['translate3D('];
    elements.push(rect.left - offset + 'px,');
    elements.push(rect.top - offset + 'px,0)');
    return elements.join('');
}

export { fadeOut, fadeIn, makeProductItem, openCart, closeCart, saveCart, getElement, _translate, updateTotal };