"use strict";

import {
    fadeOut,
    fadeIn,
    makeProductItem,
    openCart,
    closeCart,
    saveCart,
    getElement,
    _translate,
    updateTotal
} from './app.functions';

import {
    Product
} from './Product';

// ---------------------------------------------------------------------------------
(function () {
    // Контент шаблона
    const $template = document.getElementById("productItem").content;

    const url = 'http://localhost:3000/products';


    // Get the modal
    const modal = document.getElementById('myModal');

    // Get the button that opens the modal
    const openModal = document.getElementById("openModal");

    // Get the <span> element that closes the modal
    const closeModal = document.querySelector(".close-modal");

    // When the user clicks the button, open the modal 
    openModal.onclick = function () {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
   
   
    document.getElementById('product--picture').addEventListener('change', function() {
        this.value = this.options[this.selectedIndex].value;
    });

    document.getElementById("save-product").addEventListener('click', () => {
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            
            body: JSON.stringify({
                name: document.getElementById('product--name').value,
                price: document.getElementById('product--price').value,
                picture: document.getElementById('product--picture').value,
                description: document.getElementById('product--description').value
            })
        }).then((res)=> { 
            return res.json(); 
        }).then(
            () => modal.style.display = "none"
        );
    });
    
    var shoppingCart = [];

    if (localStorage.shoppingCart) {
        shoppingCart = JSON.parse(localStorage.shoppingCart);
    }

    document.getElementById("cart-toggle").addEventListener('click', () => openCart(shoppingCart));
    document.querySelector(".toggle-sidebar").addEventListener('click', () => closeCart());


    fetch(url)
        .then(
            (response) => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' + response.status);
                    return;
                }
                response.json().then((data) => {

                    data.forEach((index) => {
                        document.querySelector('.main').append(document.importNode(makeProductItem($template, index), true));
                    });

                    // let plus = document.getElementsByClassName('plus');
                    // plus = Array.prototype.slice.call(plus); // теперь plus - массив

                    let plus = [...document.querySelectorAll('.plus')];
                    // Array.isArray(plus); // true

                    plus.forEach(function (elem) {
                        elem.addEventListener('click', function () {
                            let val = parseInt(this.previousElementSibling.getAttribute('value'));
                            this.previousElementSibling.setAttribute('value', val + 1);
                        });
                    });

                    // let minus = document.getElementsByClassName('minus');
                    // minus = Array.prototype.slice.call(minus); // теперь minus - массив
                    let minus = [...document.querySelectorAll('.minus')];

                    minus.forEach((elem) => {
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
                    // ==================================================================
                    const carts = Array.from(document.getElementsByClassName('add-to-cart'));

                    // carts.forEach(function (cart) {
                    //     cart.addEventListener('click', function (e) {
                    //         let element = e.target.parentNode.parentNode;
                    //         let id = element.getAttribute("productId");
                    //         let price = e.target.parentNode.querySelector(".product-price").textContent;
                    //         let name = element.querySelector(".product-name").textContent;
                    //         let quantity = element.querySelector(".quantity").value;
                    //         let picture = element.querySelector("img").getAttribute('src');

                    //         for (let i in shoppingCart) {
                    //             if (shoppingCart[i].Id == id) {
                    //                 shoppingCart[i].Quantity = parseInt(shoppingCart[i].Quantity) + parseInt(quantity);
                    //                 saveCart(shoppingCart);
                    //                 return;
                    //             }
                    //         }

                    //         let item = {
                    //             Id: id,
                    //             Product: name,
                    //             Price: price,
                    //             Quantity: quantity,
                    //             Picture: picture
                    //         };

                    //         shoppingCart.push(item);
                    //         saveCart(shoppingCart);

                    //         // Поиск элемента с заданным номером
                    //         var imgToDrag = e.target.parentNode.parentNode.querySelector("img");

                    //         let rectOrigin = imgToDrag.getBoundingClientRect();
                    //         let toLeftStart = rectOrigin.left + 'px';
                    //         let toTopStart = rectOrigin.top + 'px';
                    //         console.log(toLeftStart, toTopStart);

                    //         if (imgToDrag) {
                    //             var imgClone = imgToDrag.cloneNode(true);
                    //             imgClone.style.left = 0;
                    //             imgClone.style.top = 0;
                    //             imgClone.classList.add('offset-img');
                    //             imgClone.style.height = '150px';
                    //             imgClone.style.width = '150px';
                    //             document.body.appendChild(imgClone);

                    //             e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(180deg)';
                    //             e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');

                    //             let rect = document.querySelector('#cart-toggle').getBoundingClientRect();
                    //             let toLeft = rect.left - 50 + 'px';
                    //             let toTop = rect.top - 50 + 'px';

                    //             imgClone.animate([{
                    //                     transform: 'translate3D(' + toLeftStart + ',' + toTopStart + ', 0)'
                    //                 },
                    //                 {
                    //                     transform: 'translate3D(' + toLeft + ',' + toTop + ',0) perspective(500px) scale3d(0.1, 0.1, 0.2)'
                    //                 },
                    //             ], {
                    //                 duration: 2000,
                    //             }).onfinish = function () {
                    //                 imgClone.remove();
                    //                 e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(0deg)';
                    //                 fadeIn(e.target.parentNode.parentNode.querySelector('.product-name'));
                    //                 fadeIn(e.target.parentNode.parentNode.querySelector('.icon'));
                    //                 e.target.parentNode.querySelector('.buy-now').style.display = 'block';
                    //                 e.target.parentNode.querySelector('.product-detail').style.display = 'none';
                    //                 e.target.parentNode.style.top = '80%';
                    //             };
                    //         }
                    //     });

                    // });

                    //===================================================================

                    carts.forEach(function (cart) {
                        cart.addEventListener('click', function (e) {

                            let element = e.target.parentNode.parentNode;
                            let o = getElement(e.target);

                            console.log(shoppingCart);

                            for (let i in shoppingCart) {
                                if (shoppingCart[i].Id == o.id) {
                                    shoppingCart[i].Quantity = parseInt(shoppingCart[i].Quantity) + parseInt(o.quantity);
                                    saveCart(shoppingCart);
                                    return;
                                }
                            }

                            // let item = {
                            //     Id: o.id,
                            //     Product: o.name,
                            //     Price: o.price,
                            //     Quantity: o.quantity,
                            //     Picture: o.picture
                            // };

                            let item = new Product(o.id, o.name, o.price, o.quantity, o.picture);

                            shoppingCart.push(item);
                            saveCart(shoppingCart);

                            // Поиск элемента с заданным номером
                            var imgToDrag = element.querySelector("img");

                            if (imgToDrag) {
                                var imgClone = imgToDrag.cloneNode(true);
                                imgClone.classList.add('offset-img');
                                document.body.appendChild(imgClone);

                                element.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(180deg)';
                                element.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');

                                imgClone.animate([{
                                        transform: _translate(imgToDrag)
                                    },
                                    {
                                        transform: _translate(document.querySelector('#cart-toggle'), 50) + 'perspective(500px) scale3d(0.1, 0.1, 0.2)'
                                    },
                                ], {
                                    duration: 2000,
                                }).onfinish = function () {
                                    imgClone.remove();
                                    element.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(0deg)';
                                    fadeIn(element.querySelector('.product-name'));
                                    fadeIn(element.querySelector('.icon'));
                                    e.target.parentNode.querySelector('.buy-now').style.display = 'block';
                                    e.target.parentNode.querySelector('.product-detail').style.display = 'none';
                                    e.target.parentNode.style.top = '80%';
                                };
                            }
                        });
                    });

                    // =================Очистка всего хранилища================

                    document.querySelector('.clear-cart').addEventListener('click', () => {
                        localStorage.removeItem('shoppingCart');
                        document.querySelector('.cart-items').innerHTML = '';
                        shoppingCart = [];
                        updateTotal();
                    });

                    document.querySelector('.cart-items').addEventListener('click', (e) => {
                        if (e.target && e.target.matches(".remove-item")) {
                            var index = e.target.parentNode.querySelector('.productInCart').getAttribute("id");
                            shoppingCart.splice(shoppingCart.indexOf(shoppingCart.find(x => x.Id === index)), 1);
                            e.target.parentNode.remove();
                            saveCart(shoppingCart);
                            updateTotal();
                        }
                    }, false);
                });
            })
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });


    // ====================================================================
})();