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
        spaceBetween: 100,
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

    /* equipment */
    $('.equipment_wrap .equipment_content').hide();
    $('.equipment_wrap .equipment_content').first().show();

    $('.com_tab.st li').click(function () {
        $('.com_tab.st li').children().removeClass('active');
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.equipment_wrap .equipment_content').hide();
        $('.equipment_wrap .equipment_content').eq(Idx).show();
        $('.equipment_wrap .slick1').slick('setPosition');
        $('.equipment_wrap .slick2').slick('setPosition');
        $('.equipment_wrap .slick3').slick('setPosition');
        $('.equipment_wrap .slick4').slick('setPosition');
        $('.equipment_wrap .slick5').slick('setPosition');
        $('.equipment_wrap .slick6').slick('setPosition');
        $('.equipment_wrap .slick7').slick('setPosition');
        $('.equipment_wrap .slick8').slick('setPosition');
        return false;
    });

    $('.equipment_wrap .slick1').slick({
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
    $('.equipment_wrap .slick2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        fade: true,
        asNavFor: '.slider-for',
    });

    $('.equipment_wrap .slick3').slick({
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
    $('.equipment_wrap .slick4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        fade: true,
        asNavFor: '.slider-for',
    });

    $('.equipment_wrap .slick5').slick({
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
    $('.equipment_wrap .slick6').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        fade: true,
        asNavFor: '.slider-for',
    });

    $('.equipment_wrap .slick7').slick({
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
    $('.equipment_wrap .slick8').slick({
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
        slidesToShow: 5,
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

    /* joint_wrap8 */
    $('.joint_wrap8 .com_tab3 li a').click(function () {
        $('.joint_wrap8 .com_tab3 li a').removeClass('active');
        $(this).addClass('active');
    });

    /* issued_wrap */
    $('.issued_content').hide();
    $('.issued_content').first().show();

    $('.issued_wrap .com_tab2 li').click(function () {
        $('.issued_wrap .com_tab2 li').children().removeClass('active');
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.issued_content').hide();
        $('.issued_content').eq(Idx).show();
        return false;
    });

    /* map_wrap */
    $('.map_content').hide();
    $('.map_content').first().show();
    $('.map_wrap3 .com_tab2 li').click(function () {
        $('.map_wrap3 .com_tab2 li').children().removeClass('active');
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.map_content').hide();
        $('.map_content').eq(Idx).show();
        return false;
    });
    $('.map_box1 .map_box02').hide();
    $('.map_box1 .map_box01').show();
    $('.map_wrap1 .com_tab2 li:nth-child(2)').click(function () {
        $('.map_wrap1 .com_tab2 li').children().removeClass('active');
        $(this).children().addClass('active');
        $('.map_box1 .map_box02').show();
        $('.map_box1 .map_box01').hide();
        return false;
    });
    $('.map_wrap1 .com_tab2 li:nth-child(1)').click(function () {
        $('.map_wrap1 .com_tab2 li').children().removeClass('active');
        $(this).children().addClass('active');
        $('.map_box1 .map_box02').hide();
        $('.map_box1 .map_box01').show();
        return false;
    });

});

$(window).load(function () {
    $('#section1').addClass('active');
});

