
let slides = document.getElementsByClassName('item')
let slidesLength = document.getElementsByClassName('item').length
let slideposition = 0

document
    .getElementById('forward')
    .addEventListener('click', function () {
        if (slideposition === slidesLength - 1) {
            slideposition = 0;
        } else {
            slideposition++;
        }
        updateSlide();
    })


document
    .getElementById('back')
    .addEventListener('click', function () {
        if (slideposition === 0) {
            slideposition = slidesLength - 1;
        } else {
            slideposition--;
        }
        updateSlide()
    })

function updateSlide() {
    for (let slide of slides) {
        slide.classList.remove('item-visible')
    }
    slides[slideposition].classList.add('item-visible')
}