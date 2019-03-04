"use strict";

(function () {

    document.querySelector('.carousel-item').classList.add('active');
    var total = document.querySelectorAll('.carousel-item').length;
    var current = 0;

    document.getElementById('moveRight').addEventListener('click', function () {
        var next = current;
        current = current + 1;
        setSlide(next, current);
    });

    document.getElementById('moveLeft').addEventListener('click', function () {
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
        document.querySelectorAll('.carousel-item')[prev].classList.remove('active');
        document.querySelectorAll('.carousel-item')[slide].classList.add('active');
    }
})();