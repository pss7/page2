
$(function () {

    $(window).on('load', function () {
        AOS.init({
            duration: 1500
        });
    });

    /* quick */
    $('aside .top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });

    $('aside .quick_menu').click(function () {
        $('aside .quick_content').fadeIn();
        $('.quick_bg').fadeIn();
        return false;
    });
    $('.quick_bg').click(function () {
        $('aside .quick_content').fadeOut();
        $('.quick_bg').fadeOut();
    });

    /* header */
    $('#header .m_depth1 li h2 a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parent().next().removeClass('active');
        } else {
            $('#header .m_depth1 li h2 a').removeClass('active');
            $('#header .m_depth1 li h2 a').parent().next().removeClass('active');
            $(this).addClass('active');
            $(this).parent().next().addClass('active');
        }
        return false;
    });
    $('#header .mobile_menu_btn').click(function () {
        $('aside').addClass('active');
        $('#header .mobile_menu').animate({ right: 0 }, 300);
    });
    $('#header .mobile_menu .mobile_menu_close').click(function () {
        $('aside').removeClass('active');
        $('#header .mobile_menu').animate({ right: -3000 }, 300);
    });
    $('#header .box .link_wrap > a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().slideUp();
        } else {
            $(this).addClass('active');
            $(this).next().slideDown();
        }
        return false;
    });

    /* footer */
    $('#footer .footer_sns .site > a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().slideUp();
        } else {
            $(this).addClass('active');
            $(this).next().slideDown();
        }
        return false;
    });

});

