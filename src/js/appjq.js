"use strict";
import $ from 'jquery';

window.jQuery = window.$ = $;

$(function () {
    $("#cart-toggle").on('click', function () {
        $('.aside').toggleClass('show-sidebar');
    });

    // $('.buy-now').on('click', function () {
    //     $('.product .product-name').css('display', 'none');
    //     $('.product .icon').css('display', 'none');
    //     $('.product .buy-now').css('display','none');
    //     $('.product .product-detail').css('display', 'block');
    //     $('.product-menu').css('top', '40%');
    // });


    // $('.cancel').on('click', function () {
    //     $('.product .product-name').css('display', 'block');
    //     $('.product .icon').css('display', 'block');
    //     $('.product .buy-now').css('display','block');
    //     $('.product .product-detail').css('display', 'none');
    //     $('.product-menu').css('top', '80%');
    // });

    // $('.add-to-cart').on('click', function () {
    //     var y = 180;
    //     $('.product-wrapper').css('transform', 'rotateY(' + y + 'deg)');
    //     $('.product-back').addClass('back-is-visible');
    // });


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

    $(".add-to-cart").each(function (index, element) {
        $(element).on('click', function (e) {
            var y = 180;
            $(e.target).parents('.product-wrapper')
                .css('transform', 'rotateY(' + y + 'deg)');
            $(e.target).parents('.product-wrapper').find('.product-back').addClass('back-is-visible');
        });
    });

    // $(".plus").click(function (e) {
    //     var val = parseInt($(e.target).prev().attr('value'));
    //     $(this).prev().attr('value', val + 1);
    // });
    // $(".minus").click(function (e) {
    //     var val = parseInt($(e.target).next().attr('value'));
    //     $(this).next().attr('value', val - 1);
    // });

    $(".plus").click(function () {
        var val = parseInt($(this).prev().attr('value'));
        $(this).prev().attr('value', val + 1);
    });
    $(".minus").click(function () {
        var val = parseInt($(this).next().attr('value'));
        $(this).next().attr('value', val - 1);
    });
});