$(function () {

    /*
       $('.com_link_list li a').click(function (){
        $('html, body').animate({scrollTop: $(this.hash).offset.top}, 300);
    });
    */

    var swiper = new Swiper('#com_rayout3 .swiper-container', {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        speed: 800,
        loop: false,
        navigation: {
            nextEl: '#com_rayout3 .swiper-button-next',
            prevEl: '#com_rayout3 .swiper-button-prev',
        },
        scrollbar: {
            el: "#com_rayout3 .swiper-scrollbar",

        },
        pagination: {
            el: "#com_rayout3 .swiper-pagination",
            type: "fraction",
        },
    });

    var swiper = new Swiper('#com_rayout4 .swiper-container', {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        speed: 800,
        loop: false,
        navigation: {
            nextEl: '#com_rayout4 .swiper-button-next',
            prevEl: '#com_rayout4 .swiper-button-prev',
        },
    });

    $('#com_rayout6 .slick').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('#com_rayout6 .count').html('<em>' + i + '</em> ' + slick.slideCount);
    });
    $('#com_rayout6 .slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('#com_rayout6 .text_box').fadeOut();
    });
    $('#com_rayout6 .slick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('#com_rayout6 .text_box').fadeIn();
    });
    $('#com_rayout6 .slick').slick({
        arrows: true,
        accessibility: false,
        slidesToShow: 1,
        fade: true,
        prevArrow: $('#com_rayout6 .com_control2 .prev'),
        nextArrow: $('#com_rayout6 .com_control2 .next'),
        autoplaySpeed: 1000,
        speed: 1000,
    });

});


$(window).load(function () {
    $('#section1').addClass('active');
});

