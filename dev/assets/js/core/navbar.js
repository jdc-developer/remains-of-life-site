$(function() {
    openMobileMenu = function() {
        $('.mobile-menu').addClass('animate__slideInLeft');
        $('.mobile-menu').removeClass('animate__slideOutLeft');
        $('.mobile-menu').addClass('align-center');
    }

    closeMobileMenu = function() {
        $('.mobile-menu-icon').removeClass('menu-open');
        $('.mobile-menu').addClass('animate__slideOutLeft');
        $('.mobile-menu').removeClass('animate__slideInLeft');
        setTimeout(function() {
            $('.mobile-menu').removeClass('align-center');
        }, 700);
    }

    $('.mobile-menu-icon').on('click', function() {
        $(this).toggleClass('menu-open');

        $(this).addClass('animate__bounceIn');
        setTimeout(function() {
            $('.mobile-menu-icon').removeClass('animate__bounceIn');
        }, 500);

        if($(this).hasClass('menu-open')) {
            openMobileMenu();
        } else {
            closeMobileMenu();
        }
    });

    var windowWidth = $(window).width();
    $('*').on('click', function(e) {
        var target = $(e.target);

        if(windowWidth <= 768 && !target.hasClass('mobile-menu') && !target.hasClass('mobile-menu-icon') && 
            !target.closest('.nav-mobile').length) {
            if($('.mobile-menu-icon').hasClass('menu-open')) {
                closeMobileMenu();
            }
        }
    });
});