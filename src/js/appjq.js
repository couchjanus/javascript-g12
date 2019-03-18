"use strict";
import $ from 'jquery';

window.jQuery = window.$ = $;

import {
    openCart,
    closeCart,
    makeProductItem,
    saveCart
} from './appjq.functions';


$(function () {
    const url = 'https://my-json-server.typicode.com/couchjanus/db/products';
    var data = [];

    $.ajax({
        url: url,
        method: 'GET'
    }).then(
        function(jsonData) {
        
        for(var i in jsonData) {
            data.push(jsonData[i]);
        }

    var shoppingCart = [];

    if (localStorage.shoppingCart) {
        shoppingCart = JSON.parse(localStorage.shoppingCart);
    }

    $("#cart-toggle").on('click', () => openCart(shoppingCart));
    $(".toggle-sidebar").on('click', () => closeCart());

    for (var i = 0; i < data.length; i++) {
        let $template = $($('#productItem').html());
        $(".main").append(makeProductItem($template, data[i]));
    }

    $(".buy-now").each(function (index, element) {
        $(element).on('click', function (e) {
            // ==========================fadeOut================================
            $(e.target).parents('.product').find('.product-name').fadeOut('slow', 'linear');
            $(e.target).parents('.product').find('.icon').fadeOut(600, 'linear');
            $(e.target).parents('.product').find('.buy-now').fadeOut('fast');

            $(e.target).parents('.product').find(' .product-detail').css('display', 'block');
            $(e.target).parents('.product-menu').css('top', '40%');
            // ==========================fadeTo================================
            $(e.target).parents('.product').find('img').fadeTo("slow", 0.5);
        });
    });

    $(".cancel").each(function (index, element) {
        $(element).on('click', function (e) {
            $(e.target).parents('.product').find('.product-name')
                .fadeIn('slow', 'linear');
            $(e.target).parents('.product').find('.icon').fadeIn('slow', 'linear');
            $(e.target).parents('.product').find('.buy-now').fadeIn('slow', 'swing');

            $(e.target).parents('.product').find(' .product-detail').css('display', 'none');
            $(e.target).parents('.product-menu').css('top', '80%');
            // ==========================fadeTo================================
            $(e.target).parents('.product').find('img').fadeTo("slow", 1);
        });
    });

    $(".plus").click(function () {
        var val = parseInt($(this).prev().attr('value'));
        $(this).prev().attr('value', val + 1);
    });
    $(".minus").click(function () {
        var val = parseInt($(this).next().attr('value'));
        $(this).next().attr('value', val - 1);
    });


    $(".product-detail").each(function (index, element) {
        $(element).on('click', function () {
            var templateDetail = $($('#productDetail').html());
            $("#main-content").empty();
            $("#main-content").append(templateDetail);
            $('.carousel-item').eq(0).addClass('active');

            var total = $('.carousel-item').length;
            var current = 0;

            $('#moveRight').on('click', function () {
                var next = current;
                current = current + 1;
                setSlide(next, current);
            });

            $('#moveLeft').on('click', function () {
                var prev = current;
                current = current - 1;
                setSlide(prev, current);
            });

            function setSlide(prev, next) {
                var slide = current;
                if (next > total - 1) {
                    slide = 0;
                    current = 0;
                }
                if (next < 0) {
                    slide = total - 1;
                    current = total - 1;
                }
                $('.carousel-item').eq(prev).removeClass('active');
                $('.carousel-item').eq(slide).addClass('active');
            }
        });
    });

    // ===========================Поиск элемента========================================
    $(".add-to-cart").each(function (index, element) {
        $(element).on('click', function () {

            let id = $(this).parents('.product').attr("productId");
            let price = $(this).parents(".product-menu").find(".product-price").text();
            let name = $(this).parents(".product").children(".product-name").text();
            let quantity = $(this).parents(".product").find(".quantity").val();
            let picture = $(this).parents(".product").find("img").attr('src');

            for (let i in shoppingCart) {
                if (shoppingCart[i].Id == id) {
                    shoppingCart[i].Quantity = parseInt(shoppingCart[i].Quantity) + parseInt(quantity);
                    saveCart(shoppingCart);
                    return;
                }
            }

            let item = {
                Id: id,
                Product: name,
                Price: price,
                Quantity: quantity,
                Picture: picture
            };

            shoppingCart.push(item);
            saveCart(shoppingCart);
            var imgToDrag = $(this).parents('.product').find("img").eq(0);

            if (imgToDrag) {
                var imgClone = imgToDrag.clone()
                    .offset({
                        top: imgToDrag.offset().top,
                        left: imgToDrag.offset().left
                    })
                    .css({
                        'opacity': '0.5',
                        'position': 'absolute',
                        'height': '150px',
                        'width': '150px',
                        'z-index': '100'
                    })
                    .appendTo($('body'))
                    .animate({
                        'top': $('#cart-toggle').offset().top + 10,
                        'left': $('#cart-toggle').offset().left + 10,
                        'width': 75,
                        'height': 75
                    }, 1000);

                imgClone.animate({
                    'width': 0,
                    'height': 0
                }, function () {
                    $(this).detach()
                });
            }

            var y = 180;
            $(this).parents('.product-wrapper')
                .css('transform', 'rotateY(' + y + 'deg)');
            $(this).parents('.product-wrapper').find('.product-back').addClass('back-is-visible');

            $(this).parents('.product-wrapper').delay(3000).queue(function () {
                $(this).css({
                    'transform': 'rotateY(0deg)'
                }).dequeue();
                $(this).parents('.product').find('p').slideDown();
                $(this).parents('.product').find('.product-menu').css('top', '80%');
                $(this).parents('.product').find('.product-detail').toggle();
                $(this).parents('.product').find('.buy-now').toggle();
                $(this).parents('.product').find('.icon').toggle();
            });
        });
    });
    // ========================Очистка всего хранилища======================
    $('body').on('click', '#cart-sidebar .clear-cart', function () {
        localStorage.removeItem('shoppingCart');
        $('.cart-items').empty();
        shoppingCart = [];
    });

    $('body').on('click', '.cart-items .remove-item', function () {
        var index = $(this).parent().attr("id");
        shoppingCart.splice(shoppingCart.indexOf(shoppingCart.find(x => x.Id === index)), 1);

        $(this).parents('li').remove();

        saveCart(shoppingCart);
    });

});

});