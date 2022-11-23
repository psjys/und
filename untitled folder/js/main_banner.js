'use strict';

let slides = document.querySelector('.main-banner'),
    slide = document.querySelectorAll('.main-banner li'),
    currentIdx = 0,
    slideCount = slide.length,
    container = document.querySelector('.slide-container'),
    prevBtn = container.querySelector('.btn_left img'),
    nextBtn = container.querySelector('.btn_right img');

function moveSlide(num) {
    slides.style.left = -num * 100 + '%';
    currentIdx = num;
}

nextBtn.addEventListener('click', function (e) {
    // e.preventDefault();
    console.log(e.target);
    if (currentIdx < slideCount - 1) {
        moveSlide(currentIdx + 1);
    }
});

