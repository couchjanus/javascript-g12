"use strict";
import $ from 'jquery';

window.jQuery = window.$ = $;

$(function () {
    $("#cart-toggle").on('click', function () {
        $('.aside').toggleClass('open');
        $(".backdrop").toggleClass("backdrop--open");
    });

    $(".toggle-sidebar").on('click', function (e) {
        $(".aside").toggleClass("open");
        $(".backdrop").toggleClass("backdrop--open");
    });

    $(".buy-now").each(function (index, element) {
        $(element).on('click', function (e) {
            $(e.target).parents('.product').find('.product-name')
                .css('display', 'none');
            $(e.target).parents('.product').find('.icon').css('display', 'none');
            $(e.target).parents('.product').find('.buy-now').css('display', 'none');
            $(e.target).parents('.product').find(' .product-detail').css('display', 'block');
            $(e.target).parents('.product-menu').css('top', '40%');
        });
    });

    $(".cancel").each(function (index, element) {
        $(element).on('click', function (e) {
            $(e.target).parents('.product').find('.product-name')
                .css('display', 'block');
            $(e.target).parents('.product').find('.icon').css('display', 'block');
            $(e.target).parents('.product').find('.buy-now').css('display', 'block');
            $(e.target).parents('.product').find(' .product-detail').css('display', 'none');
            $(e.target).parents('.product-menu').css('top', '80%');
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

    const $template = $($('#cartItem').html());

    // $(".add-to-cart").each(function (index, element) {
    //     $(element).on('click', function (e) {
    //         var y = 180;
    //         $(e.target).parents('.product-wrapper')
    //             .css('transform', 'rotateY(' + y + 'deg)');
    //         $(e.target).parents('.product-wrapper').find('.product-back').addClass('back-is-visible');
    //         let template = $template.clone();
    //         template.find(".item-quantity").text($(this).parents(".product").find(".quantity").val());
    //         template.find(".product-name").text($(this).parents(".product").children(".product-name").text());
    //         template.find('.item-price').text($(this).parents(".product").find(".product-price").text());
    //         $(".cart-items").append(template);
    //     });
    // });


    // function addProductToCart(template, item) {
    //     template.find(".item-quantity").text(item.find(".quantity").val());
    //     template.find(".item-name").text(item.find(".product-name").text());
    //     template.find('.item-price').text(item.find(".product-price").text());
    //     template.find('.item-img img').attr('src', item.find(".product-picture img").attr('src'));
    //     return template;
    // }

    // $(".add-to-cart").each(function (index, element) {
    //     $(element).on('click', function () {
    //         var y = 180;
    //         $(this).parents('.product-wrapper')
    //             .css('transform', 'rotateY(' + y + 'deg)');
    //         $(this).parents('.product-wrapper').find('.product-back').addClass('back-is-visible');
    //         let template = $template.clone();
    //         $(".cart-items").append(addProductToCart(template, $(this).parents(".product")));
    //     });
    // });

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
});