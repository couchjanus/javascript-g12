"use strict";

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

    var buy = document.getElementsByClassName('buy-now');

    for (let i=0; i<buy.length; i++ ) {
        buy[i].addEventListener('click', function (e) {
          e.target.parentNode.parentNode.querySelector('.product-name').style.display = 'none';
          e.target.parentNode.parentNode.querySelector('.icon').style.display = 'none';
          e.target.style.display = 'none';
          e.target.parentNode.querySelector('.product-detail').style.display = 'block';
          e.target.parentNode.style.top = '40%';
        });
    }
       
    var cancel = document.getElementsByClassName('cancel');

    for (let i = 0; i < buy.length; i++) {
        cancel[i].addEventListener('click', function (e) {
            e.target.parentNode.parentNode.querySelector('.product-name').style.display = 'block';
            e.target.parentNode.parentNode.querySelector('.icon').style.display = 'block';
            e.target.parentNode.querySelector('.buy-now').style.display = 'block';
            e.target.parentNode.querySelector('.product-detail').style.display = 'none';
            e.target.parentNode.style.top = '80%';
        });
    }

    let plus = document.getElementsByClassName('plus');
    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener('click', function (e) {
            let val = parseInt(e.target.previousElementSibling.getAttribute('value'));
            e.target.previousElementSibling.setAttribute('value', val + 1);
        });
    }
    let minus = document.getElementsByClassName('minus');
    for (let i = 0; i < minus.length; i++) {
        minus[i].addEventListener('click', function (e) {
            let val = parseInt(e.target.nextElementSibling.getAttribute('value'));
            e.target.nextElementSibling.setAttribute('value', val - 1);
        });
    }

    var addcart = document.getElementsByClassName('add-to-cart');

    // for (let i = 0; i < addcart.length; i++) {
    //     addcart[i].addEventListener('click', function (e) {
    //         var y = 180;
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
    //         let content = document.getElementById("cartItem").content;
    //         document.querySelector('.cart-items').appendChild(content);
    //     });
    // }


    // for (let i = 0; i < addcart.length; i++) {
    //     addcart[i].addEventListener('click', function (e) {
    //         var y = 180;
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
            
    //         let content = document.getElementById("cartItem").content;
    //         document.querySelector('.cart-items').append(document.importNode(content, true));
    //     });
    // }

    // function addProductToCart(content){
    //     let content = document.getElementById("cartItem").content;
    //     document.querySelector('.cart-items').append(document.importNode(content, true));
    // }

    // function addProductToCart(content){
    //     content.querySelector('.item-name').textContent = "Red Cat";
    //     content.querySelector('.item-quantity').textContent = 22;
    //     content.querySelector('.item-price').textContent = 1234;
    //     content.querySelector('.item-img img').setAttribute('src', '/images/cat3.jpg');
    //     document.querySelector('.cart-items').append(document.importNode(content, true));
    // }
    
    // for (let i = 0; i < addcart.length; i++) {
    //     addcart[i].addEventListener('click', function (e) {
    //         var y = 180;
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
    //         let content = document.getElementById("cartItem").content;
    //         addProductToCart(content);
    //     });
    // }

    // function addProductToCart(content, item){
    //     content.querySelector('.item-name').textContent = item.querySelector(".product-name").textContent;
    //     content.querySelector('.item-quantity').textContent = item.querySelector(".quantity").value;
    //     content.querySelector('.item-price').textContent = item.querySelector(".product-price").textContent;
    //     content.querySelector('.item-img img').setAttribute('src', item.querySelector(".product-picture img").getAttribute('src'));
    //     document.querySelector('.cart-items').append(document.importNode(content, true));
    // }
    
    // for (let i = 0; i < addcart.length; i++) {
    //     addcart[i].addEventListener('click', function (e) {
    //         var y = 180;
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
    //         let content = document.getElementById("cartItem").content;
    //         addProductToCart(content, e.target.parentNode.parentNode.parentNode);
    //     });
    // }


    function addProductToCart(content, item){
        content.querySelector('.item-name').textContent = item.querySelector(".product-name").textContent;
        content.querySelector('.item-quantity').textContent = item.querySelector(".quantity").value;
        content.querySelector('.item-price').textContent = item.querySelector(".product-price").textContent;
        content.querySelector('.item-img img').setAttribute('src', item.querySelector(".product-picture img").getAttribute('src'));
        return content;
    }
    
    // for (let i = 0; i < addcart.length; i++) {
    //     addcart[i].addEventListener('click', function (e) {
    //         var y = 180;
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
    //         let content = document.getElementById("cartItem").content;
    //         document.querySelector('.cart-items').append(document.importNode(addProductToCart(content, e.target.parentNode.parentNode.parentNode), true));
    //     });
    // }

    const content = document.getElementById("cartItem").content;

    // for (let i = 0; i < addcart.length; i++) {
    //     addcart[i].addEventListener('click', function (e) {
    //         var y = 180;
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
    //         document.querySelector('.cart-items').append(addProductToCart(content.cloneNode(true), e.target.parentNode.parentNode.parentNode));
    //     });
    // }

    // for (let i = 0; i < addcart.length; i++) {
    //     addcart[i].addEventListener('click', function (e) {
    //         var y = 180;
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
    //         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
    //         document.querySelector('.cart-items').append(document.importNode(addProductToCart(content, e.target.parentNode.parentNode.parentNode), true));
    //     });
    // }

})();