
$(window).on('load', function () {
    $('html,body').scrollTop(0);
    var popup = localStorage.getItem('newsletter-popup');
    if (popup != 0) {
        $("body").addClass("overflow");
        $(".mo-modal-overlay").fadeIn(500)
        $(".mo-modal").addClass("mo-modal-in");
    } else {
        $("body").removeClass("overflow");
    }
});
$(document).ready(function () {
    ///////// **fixed** /////////
    $(".static-header").height($('header').outerHeight());
    if ($(this).scrollTop() >= 50) {
        $("body").addClass("header-scroll");
        $(".header-message").hide();
    } else {
        $("body").removeClass("header-scroll");
        $(".header-message").show();
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $("body").addClass("header-scroll");
            $(".header-message").slideUp(300);
        } else {
            $("body").removeClass("header-scroll");
            $(".header-message").slideDown(300);
        }
    });
    $(".arrow-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });
    $(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(300) : $(".arrow-top").fadeOut(300);

    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(300) : $(".arrow-top").fadeOut(300);
    });
    //////////** header msg **//////////
    $(".header-message span.msg-close").click(function () {
        $(".header-message").slideUp(function () {
            $(".header-message").remove();
            $(".static-header").height($('header').outerHeight());
        });
    });
    ///////// **modal** /////////
    $('.mo-modal-overlay').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
        localStorage.setItem('newsletter-popup', 0);
    });
    $('.mo-modal').click(function (e) {
        e.stopPropagation();
    });
    $('.mo-modal-close').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
        localStorage.setItem('newsletter-popup', 0);
    });
    //////////** brands slider **//////////
    var brandswiper = new Swiper('.brands-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.brands-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    });
    //////////** feats slider **//////////
    var featswiper = new Swiper('.feats-slider .swiper-container', {
        loop: true,
        simulateTouch: false,
        pagination: {
            el: '.feats-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
                simulateTouch: true
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 30,
                simulateTouch: true
            },
            767: {
                slidesPerView: 4,
                spaceBetween: 30,
                simulateTouch: true
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
    //////////** search **//////////
    $('.search-icon').click(function () {
        $(".search-overlay, .search-cont").slideDown(300);
        $(this).addClass("active");
    });

    $('.search-overlay').click(function () {
        $(".search-overlay, .search-cont").slideUp(400);
        $(this).removeClass("active");
    });
    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-head").addClass("mo-accordion");
        $(".footer-list").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
    ///////// **manu** /////////

    if ($(window).width() <= 991) {

        $('.has-sub>a>i').click(function (e) {
            e.preventDefault()
            var item = $(this).parents(".has-sub>a");
            $(".has-sub>a").not(item).removeClass("active");
            $(item).toggleClass("active");
            if ($(item).siblings().css('display') == 'none') {
                $(item).siblings().slideDown(500);
            } else {
                $(item).siblings().slideUp(500);
            }
            $(".has-sub>a").not(item).siblings().slideUp(500);
        })
        $('.has-level3>a>i').click(function (e) {
            e.preventDefault()
            var item = $(this).parents(".has-level3>a");
            $(".has-level3>a").not(item).removeClass("active");
            $(item).toggleClass("active");
            if ($(item).siblings().css('display') == 'none') {
                $(item).siblings().slideDown(500);
            } else {
                $(item).siblings().slideUp(500);
            }
            $(".has-level3>a").not(item).siblings().slideUp(500);
        })
        $(".header-setting").click(function () {
            $(this).addClass("active");
            $(".opts-overlay").show();
        });
        $(".opts-overlay").click(function () {
            $(".header-setting").removeClass("active");
            $(".opts-overlay").hide();
        });
        $('.menubtn').click(function () {
            $("nav").addClass("active");
            $("body").addClass("overflow");
            $(".menu-overlay").fadeIn(400);
        });
        $('.menu-overlay,.close-menu').click(function () {
            $("nav").removeClass("active");
            $("body").removeClass("overflow");
            $(".menu-overlay").fadeOut(400);
        });
    }
});