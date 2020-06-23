$(document).ready(function () {
    const p = new Populator();
    p.populate()
        .then(p.copy())
        .then(p.clone())
        .then(p.tabs())
        .then(init);

    function init() {
        new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 25,
            loop: true,
            breakpoints: {
                992: {
                    slidesPerView: 4
                },
                768: {
                    slidesPerView: 2
                },
                320: {
                    slidesPerView: 1,
                    navigation: {
                        nextEl: '.button-next'
                    }
                }
            }
        });
    }
});