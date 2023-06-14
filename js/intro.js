$(function () {

    /* intro */
    $(window).load(function () {
        $('#intro_wrap .intro_main').addClass('active');
    });

    $('#intro_wrap .intro_link > li').mouseover(function () {
        var Idx = $(this).index();
        $('#intro_wrap .hover_img').removeClass('active');
        $('#intro_wrap .hover_img').eq(Idx).addClass('active');
        $('#intro_wrap .hover').removeClass('active');
        $(this).children('.hover').addClass('active');
        $('#intro_wrap .link_tit').show();
        $(this).children('.link_tit').hide();
    });
    $('#intro_wrap .intro_link').mouseleave(function () {
        $('#intro_wrap .hover_img').removeClass('active');
        $('#intro_wrap .hover').removeClass('active');
        $('#intro_wrap .link_tit').show();
    });

});