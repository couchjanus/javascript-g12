"use strict";

function makeProductItem($template, product) {
    $template.find('.product').attr('productId', product.id);
    $template.find('.product-name').text(product.name);
    $template.find('img').attr('src', "images/" + product.picture);
    $template.find('img').attr('alt', product.name);
    $template.find('.product-price').text('$' + product.price);
    return $template;
}
function saveCart(shoppingCart) {
    // Store data
    localStorage.shoppingCart = JSON.stringify(shoppingCart);
    console.log(JSON.stringify(shoppingCart));
}

function productInCart(template, item) {
    template.find('.productInCart').attr('id', item.Id);
    template.find('.item-quantity').text(item.Quantity);
    template.find('.item-name').text(item.Product);
    template.find('.item-price').text(item.Price);
    template.find('.item-prices').text(parseFloat(item.Quantity) * parseFloat(item.Price.trim().substring(1)));
    template.find('.item-img img').attr('src', item.Picture);
    return template;
}

function showCart(shoppingCart) {
    if (shoppingCart.length == 0) {
        console.log("Your Shopping Cart is Empty!");
        return;
    }
    $(".cart-items").empty();

    shoppingCart.forEach(function (item) {
        var template = $($('#cartItem').html());
        productInCart(template, item);
        $(".cart-items").append(template);
    });
}

function openCart(shoppingCart) {
    showCart(shoppingCart);
    $('.aside').addClass('open');
    $(".backdrop").addClass("backdrop--open");
}

function closeCart() {
    $(".aside").removeClass("open");
    $(".backdrop").removeClass("backdrop--open");
}

export { openCart, closeCart, makeProductItem, saveCart };