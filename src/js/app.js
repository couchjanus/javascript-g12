"use strict";

(function () {
    document.getElementById("cart-toggle").addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(".aside").classList.toggle("show-sidebar");
    });

    // document.querySelector('.buy-now').addEventListener('click', function () {
    //     document.querySelector('.product .product-name').style.display = 'none';
    //     document.querySelector('.product .icon').style.display = 'none';
    //     document.querySelector('.product .buy-now').style.display = 'none';
    //     document.querySelector('.product .product-detail').style.display = 'block';
    //     document.querySelector('.product-menu').style.top = '40%';
    // });

    // document.querySelector('.cancel').addEventListener('click', function () {
    //     document.querySelector('.product .product-name').style.display = 'block';
    //     document.querySelector('.product .icon').style.display = 'block';
    //     document.querySelector('.product .buy-now').style.display = 'block';
    //     document.querySelector('.product .product-detail').style.display = 'none';
    //     document.querySelector('.product-menu').style.top = '80%';
    // });



    // document.querySelector('.add-to-cart').addEventListener('click', function () {
    //     var y = 180;
    //     document.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
    //     document.querySelector('.product-back').classList.add('back-is-visible');
    // });

    // var buy = document.getElementsByClassName('buy-now');

    // for (let i=0; i<buy.length; i++ ) {
    //     buy[i].addEventListener('click', function (e) {
    //       e.target.parentNode.parentNode.querySelector('.product-name').style.display = 'none';
    //       e.target.parentNode.parentNode.querySelector('.icon').style.display = 'none';
    //       e.target.style.display = 'none';
    //       e.target.parentNode.querySelector('.product-detail').style.display = 'block';
    //       e.target.parentNode.style.top = '40%';
    //     });
    // }
       
    // var cancel = document.getElementsByClassName('cancel');

    // for (let i = 0; i < buy.length; i++) {
    //     cancel[i].addEventListener('click', function (e) {
    //         e.target.parentNode.parentNode.querySelector('.product-name').style.display = 'block';
    //         e.target.parentNode.parentNode.querySelector('.icon').style.display = 'block';
    //         e.target.parentNode.querySelector('.buy-now').style.display = 'block';
    //         e.target.parentNode.querySelector('.product-detail').style.display = 'none';
    //         e.target.parentNode.style.top = '80%';
    //     });
    // }

    // var addcart = document.getElementsByClassName('add-to-cart');
    // for (let i = 0; i < addcart.length; i++) {

    //     addcart[i].addEventListener('click', function (e) {
    //         var y = 180;
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
    //     });
    // }

    // let plus = document.getElementsByClassName('plus');
    // for (let i = 0; i < plus.length; i++) {
    //     plus[i].addEventListener('click', function (e) {
    //         let val = parseInt(e.target.previousElementSibling.getAttribute('value'));
    //         e.target.previousElementSibling.setAttribute('value', val + 1);
    //     });
    // }
    // let minus = document.getElementsByClassName('minus');
    // for (let i = 0; i < minus.length; i++) {
    //     minus[i].addEventListener('click', function (e) {
    //         let val = parseInt(e.target.nextElementSibling.getAttribute('value'));
    //         e.target.nextElementSibling.setAttribute('value', val - 1);
    //     });
    // }

})();