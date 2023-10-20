$(function () {

    /* #section1 
    var $slick_carousel = $('#section1 .slick');
    $slick_carousel.on('init', function (event, slick) {
        $slick_carousel.find('.slick-current').removeClass('slick-active');
        setTimeout(function () {
            $slick_carousel.find('.slick-current').addClass('slick-active');
        }, 100);
    });
    */

    $('#section1 .slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('#section1 .main_tit').hide();
    });
    $('#section1 .slick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('#section1 .main_tit').show();
    });
    $('#section1 .slick').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('#section1 .count').html('<em>' + i + '</em> ' + slick.slideCount);
    });
    $('#section1 .slick').slick({
        autoplay: true,
        arrows: true,
        accessibility: false,
        draggable: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        zIndex: 1000,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 1500,
        prevArrow: $('#section1 .control .prev'),
        nextArrow: $('#section1 .control .next'),
    });

    /* section2 */
    $('#section2 .slick').slick({
        variableWidth: true,
        autoplay: true,
        arrows: false,
        centerMode: true,
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
    var swiper = new Swiper("#section3 .swiper-container", {
        spaceBetween: 20,
        slidesPerView: 'auto',
        loop: false,
        speed: 1000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        scrollbar: {
            el: '#section3 .swiper-scrollbar',
            draggable: true,
        }
    });

    /* section4 */
    var swiper = new Swiper("#section4 .swiper-container", {
        spaceBetween: 20,
        slidesPerView: 'auto',
        loop: false,
        speed: 1000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        scrollbar: {
            el: '#section4 .swiper-scrollbar',
            draggable: true,
        }
    });

});
