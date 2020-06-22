$(document).ready(function () {
    const p = new Populator();
    p.populate()
        .then(p.copy())
        .then(init);

    function init() {
        const mobileMenuButton = $('.mobile-menu-button');
        const mobileMenu = $('.mobile-menu');
        const tabs = $('.tab');

        mobileMenuButton.on('click', function() {
            mobileMenu.toggleClass('active');
            $('body').toggleClass('no-scroll');
        });

        tabs.on('click', function() {
            tabs.removeClass('active');
            $(this).toggleClass('active');

            const activeTabContent = $(this).attr('data-target');
            $('.tab-content').removeClass('visible');
        $(activeTabContent).toggleClass('visible');
        });

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