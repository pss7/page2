$(function () {

    /* slide_wrap */
    var swiper = new Swiper(".slide_wrap", {
        spaceBetween: 20,
        slidesPerView: 'auto',
        loop: false,
        speed: 1000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        scrollbar: {
            el: '.slide_wrap .swiper-scrollbar',
            draggable: true,
        }
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
    $('.slide_wrap04').slick({
        dots: true,
        arrows: true,
        accessibility: false,
        slidesToShow: 1,
        fade: true,
        prevArrow: $('#com_rayout6 .com_control2 .prev'),
        nextArrow: $('#com_rayout6 .com_control2 .next'),
        autoplaySpeed: 1000,
        speed: 1000,
    });

    /* equipment */
    $('.introduce_wrap3 .equipment_content').hide();
    $('.introduce_wrap3 .equipment_content').first().show();

    $('.introduce_wrap3 .tab li').click(function () {
        $('.introduce_wrap3 .tab li').children().removeClass('active');
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.introduce_wrap3 .equipment_content').hide();
        $('.introduce_wrap3 .equipment_content').eq(Idx).show();
        $('.introduce_wrap3 .slick1').slick('setPosition');
        $('.introduce_wrap3 .slick2').slick('setPosition');
        $('.introduce_wrap3 .slick3').slick('setPosition');
        $('.introduce_wrap3 .slick4').slick('setPosition');
        $('.introduce_wrap3 .slick5').slick('setPosition');
        $('.introduce_wrap3 .slick6').slick('setPosition');
        $('.introduce_wrap3 .slick7').slick('setPosition');
        $('.introduce_wrap3 .slick8').slick('setPosition');
        return false;
    });

    $('.introduce_wrap3 .slick1').slick({
        variableWidth: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        focusOnSelect: true,
        asNavFor: '.slider-nav',
        prevArrow: $('.equipment_sub_wrap .control .prev'),
        nextArrow: $('.equipment_sub_wrap .control .next'),
    });
    $('.introduce_wrap3 .slick2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        fade: true,
        asNavFor: '.slider-for',
    });

    $('.introduce_wrap3 .slick3').slick({
        variableWidth: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        focusOnSelect: true,
        asNavFor: '.slider-nav',
        prevArrow: $('.equipment_sub_wrap .control2 .prev'),
        nextArrow: $('.equipment_sub_wrap .control2 .next'),
    });
    $('.introduce_wrap3 .slick4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        fade: true,
        asNavFor: '.slider-for',
    });

    $('.introduce_wrap3 .slick5').slick({
        variableWidth: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        focusOnSelect: true,
        asNavFor: '.slider-nav',
        prevArrow: $('.equipment_sub_wrap .control3 .prev'),
        nextArrow: $('.equipment_sub_wrap .control3 .next'),
    });
    $('.introduce_wrap3 .slick6').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        fade: true,
        asNavFor: '.slider-for',
    });

    $('.introduce_wrap3 .slick7').slick({
        variableWidth: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        focusOnSelect: true,
        asNavFor: '.slider-nav',
        prevArrow: $('.equipment_sub_wrap .control4 .prev'),
        nextArrow: $('.equipment_sub_wrap .control4 .next'),
    });
    $('.introduce_wrap3 .slick8').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        fade: true,
        asNavFor: '.slider-for',
    });

    /* hospital_wrap */
    $('.hospital_wrap .slick1').slick({
        autoplay: true,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        focusOnSelect: true,
        autoplaySpeed: 2000,
        speed: 1300,
        asNavFor: '.slider-for',
    });
    $('.hospital_wrap .slick2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplaySpeed: 2000,
        speed: 1300,
        asNavFor: '.slider-nav',
    });

    /* issued_wrap */
    $('.issued_content').hide();
    $('.issued_content').first().show();

    $('.reservation_wrap3 .com_tab01 li').click(function () {
        $('.reservation_wrap3 .com_tab01 li').children().removeClass('active');
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.reservation_wrap3 .issued_content').hide();
        $('.reservation_wrap3 .issued_content').eq(Idx).show();
        return false;
    });

    /* joint_wrap */
    $('#wrap.st2 .joint_wrap8 .tab li a').click(function(){
        $('#wrap.st2 .tab li a').removeClass('active');
        $(this).addClass('active');
    });
    
    /* map */
    $('.map_content_wrap .box').hide();
    $('.map_content_wrap .box').first().show();

    $('#map_box1 .com_tab01 li').click(function () {
        $('#map_box1 .com_tab01 li').children().removeClass('active');
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.map_content_wrap .box').hide();
        $('.map_content_wrap .box').eq(Idx).show();
        return false;
    });

    /* map */
    $('.map_content_wrap2 .box').hide();
    $('.map_content_wrap2 .box').first().show();

    $('#map_box3 .com_tab01 li').click(function () {
        $('#map_box3 .com_tab01 li').children().removeClass('active');
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.map_content_wrap2 .box').hide();
        $('.map_content_wrap2 .box').eq(Idx).show();
        return false;
    });
});


