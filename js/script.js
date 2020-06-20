$(document).ready(function () {
    const mobileMenuButton = $('.mobile-menu-button');
    const mobileMenu = $('.mobile-menu');
    mobileMenuButton.on('click', function() {
        mobileMenu.toggleClass('active');
        $('body').toggleClass('no-scroll');
    });
});