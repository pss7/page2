
$(function () {

    /* quick */
    $('aside .top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });
    $('aside .close').click(function () {
        $('aside').addClass('close');
    });
    $('aside .quick_menu').click(function () {
        $('aside').removeClass('close');
        $(this).addClass('active');
    });

    /* #section1 */
    $('#section1 .slick').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('#section1 .main_tit').hide();
    });
    $('#section1 .slick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('#section1 .main_tit').show();
    });
    var $slick_carousel = $('#section1 .slick');
    $slick_carousel.on('init', function (event, slick) {
        $slick_carousel.find('.slick-current').removeClass('slick-active');
        setTimeout(function () {
            $slick_carousel.find('.slick-current').addClass('slick-active');
        }, 100);
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

    /* header */
    $('#header .depth1 li a').mouseenter(function () {
        $('#header .menu_wrap').slideDown();
    });
    $('#header .menu_wrap').mouseleave(function () {
        $('#header .menu_wrap').slideUp();
    });

    $('#header .link_wrap > a').click(function () {
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
    $('#footer .consulting').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().slideUp();
        } else {
            $(this).addClass('active');
            $(this).next().slideDown();
        }
        return false;
    });

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('.scroll_wrap'),
        smooth: true,
        smoothMobile: true,
        paused: true,
        onUpdate: () => {
            window.dispatchEvent(new Event('resize'));
        },
        multiplier: 1,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        },
        useKeyboard: true,

    });

    var lastScrollTop = 0;
    var delta = 0;
    locoScroll.on('scroll', (position) => { });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".scroll_wrap", {
        scrollTop(value) {
            return arguments.length ?
                locoScroll.scrollTo(value, 0, 0) :
                locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector('.scroll_wrap').style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

});

