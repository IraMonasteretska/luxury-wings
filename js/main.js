$(document).ready(function () {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    // menu
    $('.has-submenu a').click(function (e) {
        e.preventDefault();
        $(this).next('.submenu').toggleClass('open');
        $(this).toggleClass('rotate');
    })

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.has-submenu').length) {
            $('.submenu').removeClass('open');
            $('.has-submenu a').removeClass('rotate');
        }
    });

    // language
    $('.header__language').click(function () {
        $(this).toggleClass('open');
    })

    // testimonials
    var swiper = new Swiper(".testimonials-slider", {
        slidesPerView: 2,
        spaceBetween: 24,

    });

    // clients
    var swiper = new Swiper(".clients-slider", {
        slidesPerView: 'auto',
        spaceBetween: 60,
        loop: true,
        speed: 700,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    // to top
    $('body').on('click', '.totop', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
    });


})