//= canvas.js
var closeModal;

$(document).ready(function() {




    $('.side-lang__one').click(function() {
        var url = $(this).attr('href');
        var lang = function() {
            $(location).attr('href',url);
        };
        if ( !$(this).hasClass('current') ) {
            $('.side-lang__one').removeClass('current');
            $(this).addClass('current');
            setTimeout(lang, 3000);
        }
        return false;
    });


    $('.side').swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            if ( $('body').width() <= 760 ) { // мобильные
                var slideDelta = $('body').width()+40;
                    if ( ! $(this).hasClass('active') ) {
                        $('.side').animate({
                            'left':'-'+slideDelta+'px'
                        }, 200, function() {
                            runHomeSlider();
                        })
                        $('.hide-menu, .mobile-close').addClass('active');
                    } else {
                        var headWidth = ( $('body').width() - slideDelta ) + 'px';
                        $('.side').animate({
                            'left':'0'
                        }, 200, function() {
                            runHomeSlider();
                        })
                        $('.hide-menu, .mobile-close').removeClass('active');
                    }
            } else {  // пк и планшеты
                    var slideDelta = $('.side-menu').width();
                    if ( ! $(this).hasClass('active') ) {
                        $('.content').animate({
                            'marginLeft':'0'
                        }, 200);
                        $('.head').animate({
                            'width':'100%'
                        }, 200, function() {
                            runInnoSlider();
                        });
                        $('.side').animate({
                            'left':'-245px'
                        }, 200, function() {
                            runHomeSlider();
                        })
                        $(this).addClass('active');
                    } else {
                        $('.content').animate({
                            'marginLeft':''+slideDelta+'px'
                        }, 200);
                        var headWidth = ( $('body').width() - slideDelta ) + 'px';
                        $('.head').animate({
                            'width': headWidth
                        }, 200, function() {
                            runInnoSlider();
                        });
                        $('.side').animate({
                            'left':'0'
                        }, 200, function() {
                            runHomeSlider();
                        })
                        $(this).removeClass('active');
                    }
            }
        }
    })

    $('.place-one-slider').swipe({
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
            $('.place-one-slider').cycle('next');
        },
        swipeRight: function(event, direction, distance, duration, fingerCount) {
            $('.place-one-slider').cycle('prev');
        }
    })

    /**/
    var scrollTo = function(pos) {
        var pos;
        $('body').animate({scrollTop:pos}, '500');
    }

    var owloptions = {
        loop:true,
        margin:0,
        nav:true,
        navSpeed: 1000,
        dragEndSpeed: 1000,
        responsive:{
            0:{
                items:1
            }
        },
        navText: ['','']
    } 

    function owlResize($owl, options) {
        $owl.trigger('destroy.owl.carousel');
        $owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
        $owl.owlCarousel(options);
    }

    var $owl = $(".slide-2__slider-wrap").owlCarousel(owloptions);
    owlResize($owl, owloptions);

    $('.support-slider-inn').owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots: true,
        navSpeed: 1000,
        mouseDrag: false,
        touchDrag: false,
        responsive:{
            0:{
                items:1
            }
        },
        navText: ['',''],
        URLhashListener:true
    });

    $('.support-slider__nav a').on('click', function() {
        $('.support-slider__nav a').removeClass('active');
        $(this).addClass('active');
    });


    var owloptions2 = {
        loop:false,
        margin:0,
        nav:true,
        navSpeed: 1000,
        dragEndSpeed: 1000,
        dotsSpeed: 1000,
        smartSpeed: 1000,
        startPosition: '#one',
        responsive:{
            0:{
                items:1
            }
        },
        navText: ['',''],
        URLhashListener:true
    } 

    var $owl2 = $(".step-slider__wrap").owlCarousel(owloptions2);
    owlResize($owl2, owloptions2);




    $('.step-slider__wrap').on('changed.owl.carousel', function(event) {
        
        var idx = event.item.index;

        $('.progress li').each(function() {
            var elem = $(this).index();
            if ( elem > idx ) {  //правее активного
                $(this).attr('class','progress__last');
            } else if ( elem < idx ) { //левее активного
                $(this).attr('class','is-complete');
            }  else { //активный элемент
                $(this).attr('class','is-active');
            }
        });
    });

    function runInnoSlider() {
        if ( $(window).width() > 1024 ) {
            $('.content-slider--inno').carouFredSel({
                    responsive: false,
                    width: '100%',
                    auto: false,
                    infinite: false,
                    circular: false,
                    direction: 'up',
                    pagination: ".carusel-pager-inn",
                    items: {
                        start: 0,
                        visible: 1,
                        height: 'auto'
                    },
                    scroll: {
                        duration: 1000,
                        pauseOnHover: true
                    },
                    mousewheel: true,
                    swipe: {
                        onTouch: true
                    }
            });
        }
    }

    

    function runHomeSlider() {
        
        if ( $(window).width() >= 320 ) {
            $('.slide-fact-one__top abbr').each(function() {
                var start, end, box, timer;
                start = 0;
                box = $(this);
                end = parseInt(box.text(), 10);
                timer = setInterval(function() {
                    box.text(start++);
                    if (start > end) {
                        clearInterval(timer);
                    }
                }, 30);
            });

            $('.content-slider').carouFredSel({
                responsive: false,
                width: '100%',
                auto: false,
                infinite: false,
                circular: false,
                direction: 'up',
                pagination: ".carusel-pager-inn",
                items: {
                    start: 0,
                    visible: 1,
                    height: 'auto'
                },
                scroll: {
                    duration: 1000,
                    pauseOnHover: true,
                    onAfter: function() {
                            if ( $(this).triggerHandler('currentVisible').hasClass('slide-2') ) {
                                $('.slide-2__info abbr').each(function() {
                                    var start, end, box, timer;
                                    start = 0;
                                    box = $(this);
                                    end = parseInt(box.text(), 10);
                                    timer = setInterval(function() {
                                        box.text(start++);
                                        if (start > end) {
                                            clearInterval(timer);
                                        }
                                    }, 30);
                                });
                                clearFrame();
                            }
                            if ( $(this).triggerHandler('currentVisible').hasClass('slide-3') ) {
                                drawFrame();
                            }
                            if ( $(this).triggerHandler('currentVisible').hasClass('slide-4') ) {
                                clearFrame();
                            }
                            if ( $(this).triggerHandler('currentVisible').hasClass('slide-1') ) {
                                $('.slide-fact-one__top abbr').each(function() {
                                    var start, end, box, timer;
                                    start = 0;
                                    box = $(this);
                                    end = parseInt(box.text(), 10);
                                    timer = setInterval(function() {
                                        box.text(start++);
                                        if (start > end) {
                                            clearInterval(timer);
                                        }
                                    }, 30);
                                });
                            }
                            if ( $(this).triggerHandler('currentVisible').hasClass('slide-4') ) {
                                $('.slide-5__title').animate({'opacity':'0'},300);
                            }
                            if ( $(this).triggerHandler('currentVisible').hasClass('slide-5') ) {
                                $('.slide-5__title').animate({'opacity':'1'},300);
                                $('.slide-5__title abbr').each(function() {
                                    var start, end, box, timer;
                                    start = 0;
                                    box = $(this);
                                    end = parseInt(box.text(), 10);
                                    timer = setInterval(function() {
                                        box.text(start++);
                                        if (start > end) {
                                            clearInterval(timer);
                                        }
                                    }, 50);
                                });
                                $('.slide-5__title div').each(function() {
                                    var start, end, box, timer;
                                    start = 0;
                                    box = $(this);
                                    end = 99;
                                    timer = setInterval(function() {
                                        box.text(start++);
                                        if (start > end) {
                                            clearInterval(timer);
                                            box.text('00');
                                        }
                                    }, 10);
                                });
                            }
                            if ( $(this).triggerHandler('currentVisible').hasClass('slide-6') ) {
                                $('.project-list-one--1').delay(000).fadeIn(200);
                                $('.project-list-one--2').delay(500).fadeIn(200);
                                $('.project-list-one--3').delay(1000).fadeIn(200);
                                $('.project-list-one--4').delay(1500).fadeIn(200);
                            }
                    },
                    onBefore: function() {
                        if ( $(this).triggerHandler('currentVisible').hasClass('slide-5') ) {
                            $('.slide-5__title').animate({'opacity':'0'},300);
                        }
                        if ( $(this).triggerHandler('currentVisible').hasClass('slide-5') ) {
                            $('.project-list-one').fadeOut(300);
                        }
                    }
                },
                mousewheel: true,
                swipe: {
                    onTouch: true
                },
            });
        } else {
            drawFrame();
            /*$('.content-slider').swipe( {
                swipeUp:function(event, direction, distance, duration, fingerCount) {
                    var thisPos = $('body').scrollTop();
                    var scrollDelta = $('.content-slider__one').outerHeight();
                    scrollDown = thisPos + (scrollDelta);
                    $('body').animate({scrollTop:scrollDown}, 500);
                },
                swipeDown:function(event, direction, distance, duration, fingerCount) {
                    var thisPos = $('body').scrollTop();
                    var scrollDelta = $('.content-slider__one').outerHeight();
                    scrollDown = thisPos - (scrollDelta);
                    $('body').animate({scrollTop:scrollDown}, 500);
                },
                threshold:0
              });*/
        }
    }


    runInnoSlider();
    runHomeSlider();
    $(window).resize(function() {
        runHomeSlider();
        runInnoSlider();
    });

    
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal'); 
    var close = $('.modal__close'); 
    var modal = $('.modal'); 

    open_modal.click( function(event){ 
        modal.fadeOut(200);
        overlay.fadeOut(200);

        event.preventDefault(); 
        var div = $(this).attr('href'); 
        overlay.fadeIn(400);
        $(div).fadeIn(400);
    });

    close.click(function() {
        closeModal();
    });

    closeModal = function() {
        modal.fadeOut(200);
        overlay.fadeOut(200);
        $('body').removeClass('no-scroll');
    }



    overlay.click(function(event) {
        if ( $( event.target ).attr('id') == 'overlay' ) {
            $(this).fadeOut(200);
            modal.fadeOut(200);
        }
    });


    $('.media-list-row__title').click(function() {
        $(this).next().slideToggle(300);
    });

    $('.map-mark, .place-list-one, .project-one, .news-one__more').click(function(event) {

        event.preventDefault;
        
        $('.place-overlay').fadeIn();
        $('body').addClass('no-scroll');

            var owl = $('.place-detail-wrap').owlCarousel({
                loop:false,
                margin:0,
                nav:true,
                mouseDrag: false,
                touchDrag: false,
                navSpeed: 1000,
                autoHeight: true,
                items:1,
                navText: ['',''],
                URLhashListener:true,
                responsive:  false
            });
                
            
        var swiper = new Swiper('.place-one-slider', {
            loop: true,
            centeredSlides: true,
            paginationClickable: true,
            slidesPerView: 2,
            spaceBetween: 10,
            breakpoints: {
                760: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });

        setTimeout(function() {
            $('.swiper-slide').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                image: {
                    verticalFit: false
                },
                zoom: {
                    enabled: true,
                    duration: 300 // don't foget to change the duration also in CSS
                }
            });

            $('.owl-height').height( $('.owl-item.active').height() );
            
        }, 100);


        $('.place-one__close, .news-one__close').on('click',function() {
            $('.place-overlay').fadeOut();
            $('body').removeClass('no-scroll');
        });
    });
       

    

    $('.news-one').on('click', function(event) {

        if ( $('body').width() <= 1024 ) {
            $('.place-overlay').fadeIn();
            $('body').addClass('no-scroll');

            $('.place-detail-wrap').owlCarousel({
                loop:false,
                margin:0,
                nav:true,
                mouseDrag: false,
                touchDrag: false,
                navSpeed: 1000,
                autoHeight: true,
                items:1,
                navText: ['',''],
                URLhashListener:true,
                responsive:  false
            });
                    
            setTimeout(function() {
                $('.place-one-slider').cycle({
                    fx:      'scrollHorz',
                    timeout: 0,
                });
            }, 100);

            $('.place-one__close, .news-one__close').on('click',function() {
                $('.place-overlay').fadeOut();
                $('body').removeClass('no-scroll');
                $('.place-one-slider').cycle('destroy');
            });
        }
    });
    
    

    $('.place-one__close, .news-one__close').on('click',function() {

        $('.place-overlay').fadeOut();
        $('body').removeClass('no-scroll');

    });

    $('.place-select__arrow').mouseenter(function() {
        $('.place-select__text').animate({'right': '0'}, 300)
    });

    $('.place-select').mouseleave(function() {
        $('.place-select__text').animate({'right': '-160px'}, 100)
    });

    $('.place-select').on('click', function() {
        $('.place-map').slideToggle(0);
        $('.place-list').slideToggle(0);
        return false;
    });

    $('.content-slider-fact').click(function(event) {
        if ( !$(event.target).hasClass('content-slider-fact__file')) {
            if (  ! $(this).hasClass('active') ) {
                $(this).addClass('active')
                .find('.content-slider-fact__text').slideDown();
            } else {
                $(this).removeClass('active')
                .find('.content-slider-fact__text').slideUp();
            }
        }
    });

    $('.hide-menu, .mobile-close').on('click', function() {

            setTimeout(function() {
                owlResize($owl, owloptions);
                owlResize($owl2, owloptions);
            }, 300)

            if ( $('body').width() <= 760 ) { // мобильные
                var slideDelta = $('body').width()+40;
                    if ( ! $(this).hasClass('active') ) {
                        $('.side').animate({
                            'left':'-'+slideDelta+'px'
                        }, 200, function() {
                            runHomeSlider();
                        })
                        $('.hide-menu, .mobile-close').addClass('active');
                    } else {
                        var headWidth = ( $('body').width() - slideDelta ) + 'px';
                        $('.side').animate({
                            'left':'0'
                        }, 200, function() {
                            runHomeSlider();
                        })
                        $('.hide-menu, .mobile-close').removeClass('active');
                    }
            } else {  
                    if ( $('body').width() <= 1024 ) { // планшеты
                        var slideDelta = $('.side-menu').width();

                        if ( $(this).hasClass('active') ) {
                            $('.side').animate({
                                'left':'-245px'
                            }, 200)
                            $(this).removeClass('active').animate({
                                'left': '20'
                            }, 200);
                        } else {
                            $('.side').animate({
                                'left':'0'
                            }, 200)
                            $(this).addClass('active').animate({
                                'left': slideDelta+20
                            }, 200);
                        }
                    } else {
                        var slideDelta = $('.side-menu').width();
                        if ( ! $(this).hasClass('active') ) {
                            $('.content').animate({
                                'marginLeft':'0'
                            }, 200);
                            $('.head').animate({
                                'width':'100%'
                            }, 200, function() {
                                runInnoSlider();
                            });
                            $('.side').animate({
                                'left':'-245px'
                            }, 200, function() {
                                runHomeSlider();
                            })
                            $(this).addClass('active');
                        } else {
                            $('.content').animate({
                                'marginLeft':''+slideDelta+'px'
                            }, 200);
                            var headWidth = ( $('body').width() - slideDelta ) + 'px';
                            $('.head').animate({
                                'width': headWidth
                            }, 200, function() {
                                runInnoSlider();
                            });
                            $('.side').animate({
                                'left':'0'
                            }, 200, function() {
                                runHomeSlider();
                            })
                            $(this).removeClass('active');
                        }
                    }
            }


    });

    if ( $('.content-slider__one').hasClass('slide-1') ) {
        document.getElementById('video').play();
    }

    if ( $('body').width() <= 760 ) {
        $('.hide-menu').addClass('active');
        var menuSlide = $('body').width();
        $('.side').width(menuSlide-40);
        $('.side').css('left','-'+menuSlide+'px')
    }

});