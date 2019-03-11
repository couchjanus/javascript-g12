"use strict";
import $ from 'jquery';

window.jQuery = window.$ = $;

// appjq.js
import {data} from './data.js'; // нужно точно указать имя сущности


$(function () {
    $("#cart-toggle").on('click', function () {
        $('.aside').toggleClass('open');
        $(".backdrop").toggleClass("backdrop--open");
    });

    $(".toggle-sidebar").on('click', function (e) {
        $(".aside").toggleClass("open");
        $(".backdrop").toggleClass("backdrop--open");
    });

    function makeProductItem($template, product){
        $template.find('.product-wrapper').attr('productId', product.id);
        $template.find('.product-name').text(product.name);
        $template.find('img').attr('src', "images/"+ product.picture);
        $template.find('img').attr('alt', product.name);
        $template.find('.product-price').text('$'+product.price);
        return $template;
    }

    for (var i=0; i<data.length; i++) {
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

    const $template = $($('#cartItem').html());

    function addProductToCart(template, item) {
        template.find(".item-quantity").text(item.find(".quantity").val());
        template.find(".item-name").text(item.find(".product-name").text());
        template.find('.item-price').text(item.find(".product-price").text());
        template.find('.item-img img').attr('src', item.find(".product-picture img").attr('src'));
        template.find(".remove-item").on('click', function() {
            $(this).parent().remove();
        });
        return template;
    }
    // ===========================Поиск элемента========================================
    $(".add-to-cart").each(function (index, element) {
        $(element).on('click', function () {
            
            let template = $template.clone();
            
            $(".cart-items").append(addProductToCart(template, $(this).parents(".product")));

            // Поиск элемента с заданным номером

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
    // ====================================================================

});