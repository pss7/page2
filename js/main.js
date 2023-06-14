$(function () {

    /* section2 */
    $('#section2 .slick').slick({
        variableWidth: true,
        autoplay: true,
        arrows: false,
        accessibility: true,
        draggable: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        zIndex: 1000,
        autoplaySpeed: 3000,
        speed: 700,
    });

    /* section3 */
    $('.video_box').hide();
    $('.video_box').first().show();
    $('#section4 .video_list li').click(function () {
        var Idx = $(this).index();
        $('.video_box').hide();
        $('.video_box').eq(Idx).show();
        return false;
    });

});
