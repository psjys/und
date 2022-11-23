'use strict';

let slides = document.querySelector('.main-banner'),
    slide = document.querySelectorAll('.main-banner li'),
    // slideWidth = slide.style.width,
    currentIdx = 0,
    slideCount = slide.length,
    container = document.querySelector('.slide-container'),
    prevBtn = container.querySelector('.btn_left img'),
    nextBtn = container.querySelector('.btn_right img');

function moveSlide(num) {
    // li 1200일때는 1200씩 늘리기 
    // for (let i = 0 ; i<slideCount ; i++) {
        // if (slideWidth == 1200 + 'px') {
            // slides[i].style.marginLeft = -num * 1200 + 'px';
        // } else {
            slides.style.marginLeft = -num * 100 + '%';
            currentIdx = num;
        // }
    // }
}

nextBtn.addEventListener('click', function (e) {
    if (currentIdx < slideCount - 1) {
        moveSlide(currentIdx + 1);
    } else {
        moveSlide(0);
    }
});

prevBtn.addEventListener('click', function (e) {
    if (currentIdx > 0) {
        moveSlide(currentIdx - 1);
    } else {
        moveSlide(slideCount - 1);
    }
});

