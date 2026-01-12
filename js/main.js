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
    $('.header__language').click(function(){
        $(this).toggleClass('open');
    })


})