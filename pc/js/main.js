$(function () {

    /* section2 */
    $('#section2 .slick').slick({
        variableWidth: true,
        autoplay: true,
        arrows: false,
        accessibility: true,
        draggable: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        zIndex: 1000,
        autoplaySpeed: 2000,
        speed: 700,
        swipe: true,
        pauseOnHover: false,
    });

    /* section3 */
    $('.video_box').hide();
    $('.video_box').first().show();
    $('#section4 .video_list li').click(function () {
        var Idx = $(this).index();
        $('.video_box').hide();
        $('.video_box').eq(Idx).show();
        //return false;
    });

    /* section4 */
    $('#section4 .slick').slick({
        variableWidth: true,
        autoplay: true,
        arrows: false,
        accessibility: true,
        draggable: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        zIndex: 1000,
        autoplaySpeed: 2000,
        speed: 700,
        swipe: true,
    });

});
