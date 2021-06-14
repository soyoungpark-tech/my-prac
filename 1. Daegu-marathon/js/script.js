'use strict';

$(function(){
        /* ================= navbar ===================== */
        // var $navItem = $('.nav__item');
        // $navItem.click(function(e){
        //     e.preventDefault();
        //     var link = $(this).children('a').attr('data-link');
        //     var $target = $(link);
        //     var distance = $target.offset().top;
        //     $('html, body').animate({scrollTop: distance});
        //     $('.nav__container').removeClass('visible');
        //     $(this).siblings().removeClass('active');
        //     $(this).addClass('active');
        // })
    
        // /* nav toggle */
        // $('#navToggle, .nav__close').click(function(){
        //     $('.nav__container').toggleClass('visible');
        // })

        /* nav submenu */
        var $navbarItem = $('.nav__item'),
                $navbarMenu = $('.navbar__menu'),
                $subMenu = $('.navbar__submenu');
            console.log($subMenu)
            $subMenu.hide();

            $navbarItem.mouseenter(function(){
                $(this).children('.nav__submenu').stop().slideDown();
            });
            $navbarItem.mouseleave(function(){
                $(this).children('.nav__submenu').stop().slideUp();
            });
})