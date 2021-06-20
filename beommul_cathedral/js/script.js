'use strict';

$(function(){
    
/* ================= navbar ===================== */
        var $navItem = $('.nav__container ul li a'),
        $subMenu = $('.nav__submenu');
        // console.log($navItem);
        $subMenu.hide();

        $navItem.mouseover(function(){
            $($subMenu).stop().slideDown();
        });
        $subMenu.mouseleave(function(){
            $(this).stop().slideUp();
        });

/* ================= main banner ===================== */
    $('.main__banner').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

/* ================= tab menu ===================== */
    var $desc = $('.tab__desc');
    var $tabMenu = $('.tab__menu a');
    var $secondDesc = $('.tab__desc:nth-of-type(2)')
    var $thirdDesc = $('.tab__desc:nth-of-type(3)')
    // 초기 세팅

    $secondDesc.hide();
    $thirdDesc.hide();
    // $desc.eq(0).show();
    // $tabMenus
    $tabMenu.mouseover(function(){
        var idx = $(this).index();
        $tabMenu.removeClass('selected');
        $(this).addClass('selected');
        $desc.hide();
        $desc.eq(idx).stop().slideDown();
    });
        

})