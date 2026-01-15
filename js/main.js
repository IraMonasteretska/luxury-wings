$(document).ready(function () {

    
    if ($("#scene").length) {
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
    }
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
    $('.header__language span').click(function () {
        $(this).parent().toggleClass('open');
    })

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.header__language').length) {
            $('.header__language').removeClass('open');
        }
    });

    // testimonials
    var swiper = new Swiper(".testimonials-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 700,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {

            768: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
        },

    });

    // clients
    var swiper = new Swiper(".clients-slider", {
        // slidesPerView: 'auto',
        slidesPerView: 2,
        spaceBetween: 20,
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
        breakpoints: {
            575: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            991: {
                slidesPerView: 5,
                spaceBetween: 60,
            },
        },
    });

    // to top
    $('body').on('click', '.totop', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    // burger

    function openMenu() {
        $('body').addClass('hidden');
        $('.header__nav').addClass('show');

        // створюємо overlay якщо нема
        if (!$('.menu-overlay').length) {
            $('<div class="menu-overlay"></div>').appendTo('header');
        }

        setTimeout(function () {
            $('.menu-overlay').addClass('active');
        }, 10);
    }

    function closeMenu() {
        $('body').removeClass('hidden');
        $('.header__nav').removeClass('show');

        $('.menu-overlay').removeClass('active');

        setTimeout(function () {
            $('.menu-overlay').remove();
        }, 300);
    }

    $('.header__burger').on('click', function () {
        openMenu();
    });

    $('.closemenu').on('click', function () {
        closeMenu();
    });

    $(document).on('click', '.menu-overlay', function () {
        closeMenu();
    });

})