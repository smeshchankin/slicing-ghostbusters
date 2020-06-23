$(document).ready(function () {
    new Populator().all().then(init);

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
