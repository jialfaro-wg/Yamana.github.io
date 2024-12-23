// Index of jQuery Active Code

// :: 1.0 PRELOADER ACTIVE CODE
// :: 2.0 NAVIGATION MENU ACTIVE CODE
// :: 3.0 STICKY HEADER ACTIVE CODE
// :: 4.0 SCROLL TO TOP ACTIVE CODE
// :: 5.0 SCROLL LINK ACTIVE CODE
// :: 6.0 SMOOTH SCROLLING ACTIVE CODE
// :: 7.0 AOS ACTIVE CODE
// :: 8.0 WOW ACTIVE CODE
// :: 9.0 PREVENT DEFAULT ACTIVE CODE
// :: 10.0 COUNTERUP ACTIVE CODE
// :: 11.0 FANCYBOX VIDEO POPUP ACTIVE CODE
// :: 12.0 CIRCLE ANIMATION ACTIVE CODE
// :: 13.0 REVIEWS ACTIVE CODE
// :: 14.0 PORTFOLIO ACTIVE CODE
// :: 15.0 CONTACT FORM ACTIVE CODE
// :: 16.0 CURVA SCROLL CODE


(function ($) {
    'use strict';

    var $window = $(window);
    var zero = 0;

    // :: 1.0 PRELOADER ACTIVE CODE
    $(window).on("load", function () {
        $("#digimax-preloader").addClass("loaded");

        if ($("#digimax-preloader").hasClass("loaded")) {
            $("#preloader").delay(900).queue(function () {
                $(this).remove();
            });
        }
    });

    // :: 2.0 NAVIGATION MENU ACTIVE CODE
    jQuery(function ($) {
        'use strict';

        // RESPONSIVE NAVIGATION
        function navResponsive() {
            let navbar = $('.navbar .items');
            let menu = $('#menu .items');

            menu.html('');
            navbar.clone().appendTo(menu);

            $('.menu .fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
        }

        navResponsive();

        $(window).on('resize', function () {
            navResponsive();
        });

        // PREVENT DROPDOWN
        $('.menu .dropdown-menu').each(function () {
            var children = $(this).children('.dropdown').length;
            $(this).addClass('children-' + children);
        });

        $('.menu .nav-item.dropdown').each(function () {
            var children = $(this).children('.nav-link');
            children.addClass('prevent');
        });

        // :: EVENTO PARA ENLACES DEL MENÚ
        $(document).on('click', '#menu .nav-item .nav-link', function (e) {
            if ($(this).hasClass('prevent')) {
                e.preventDefault();
            }
        
            var nav_link = $(this);
        
            // Si el enlace tiene desplazamiento suave
            if (nav_link.hasClass('smooth-anchor')) {
                var target = nav_link.attr('href');
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 500);
        
                // Cerramos el menú y el overlay después de navegar
                setTimeout(function () {
                    $('#menu').removeClass('show'); // Oculta el menú
                    $('.menu-overlay').removeClass('active'); // Oculta el overlay (si existe)
                    $('#menu').css('display', 'none'); // Restablece el estilo
                }, 500);
            } else {
                // Si no tiene desplazamiento suave, alterna el submenú
                nav_link.next().toggleClass('show');
            }
        
            // Aseguramos cerrar siempre el menú tras el clic
            $('#menu').removeClass('show'); // Oculta el menú
            $('.menu-overlay').removeClass('active'); // Oculta el overlay
            $('main').css('display', 'none'); // Restablece el estilo del main
        });
        
        
        
    });

    // :: 3.0 STICKY HEADER ACTIVE CODE
    $window.on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.navbar').addClass('navbar-sticky');
            $('.navbar .navbar-nav.action .btn').addClass('btn-bordered');
            $('.navbar .navbar-nav.action .btn').removeClass('btn-bordered-white');
        } else {
            $('.navbar').removeClass('navbar-sticky');
            $('.navbar .navbar-nav.action .btn').removeClass('btn-bordered');
            $('.navbar .navbar-nav.action .btn').addClass('btn-bordered-white');
        }
    });

    $window.on('scroll', function () {
        $('.navbar-sticky').toggleClass('hide', $(window).scrollTop() > zero);
        zero = $(window).scrollTop();
    });

    // :: 4.0 SCROLL TO TOP ACTIVE CODE
    var offset = 300;
    var duration = 500;

    $window.on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $("#scrollUp").fadeIn(duration);
        } else {
            $("#scrollUp").fadeOut(duration);
        }
    });

    $("#scrollUp").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, duration);
    });

    // :: 5.0 SCROLL LINK ACTIVE CODE
    var scrollLink = $('.scroll');

    // :: 6.0 SMOOTH SCROLLING ACTIVE CODE
    scrollLink.on('click', function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // :: 7.0 AOS ACTIVE CODE
    AOS.init();

    // :: 8.0 WOW ACTIVE CODE
    new WOW().init();

    // :: 9.0 PREVENT DEFAULT ACTIVE CODE
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 10.0 COUNTERUP ACTIVE CODE
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // :: 11.0 FANCYBOX VIDEO POPUP ACTIVE CODE
    $(".play-btn").fancybox({
        animationEffect: "zoom-in-out",
        transitionEffect: "circular",
        maxWidth: 800,
        maxHeight: 600,
        youtube: {
            controls: 0
        }
    });

    // :: 12.0 CIRCLE ANIMATION ACTIVE CODE
    $(window).on("load", function () {
        $('.profile-circle-wrapper').addClass('circle-animation');
        $('.profile-icon').fadeIn();
    });

    // :: 13.0 REVIEWS ACTIVE CODE
    $('.client-reviews.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        margin: 40,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 6500,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        responsive: {
            0: {
                items: 1,
                autoplayTimeout: 8500
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    }).on('drag.owl.carousel translate.owl.carousel', function(event) {
        // Desactivar autoplay cuando se arrastra o se interactúa con el carrusel
        $(this).trigger('stop.owl.autoplay');
    }).on('translated.owl.carousel', function(event) {
        // Reactivar autoplay cuando se deja de interactuar con el carrusel
        $(this).trigger('play.owl.autoplay', [6500]);
    }).on('click', '.single-review', function() {
        // Desactivar autoplay cuando se cliquea una tarjeta
        $(this).closest('.client-reviews.owl-carousel').trigger('stop.owl.autoplay');
    }).on('mouseleave', '.client-reviews.owl-carousel', function() {
        // Reactivar autoplay cuando se suelta la tarjeta (cuando se deja de interactuar)
        $(this).trigger('play.owl.autoplay', [6500]);
    });

    // :: 14.0 PORTFOLIO ACTIVE CODE
    $('.cursos-area').each(function(index) {

        var count = index + 1;

        $(this).find('.cursos-items').removeClass('cursos-items').addClass('cursos-items-'+count);
        $(this).find('.cursos-item').removeClass('cursos-item').addClass('cursos-item-'+count);
        $(this).find('.cursos-btn').removeClass('cursos-btn').addClass('cursos-btn-'+count);

        var Shuffle = window.Shuffle;
        var Filter  = new Shuffle(document.querySelector('.cursos-items-'+count), {
            itemSelector: '.cursos-item-'+count,
            buffer: 1,
        })

        $('.cursos-btn-'+count).on('change', function (e) {

            var input = e.currentTarget;

            if (input.checked) {
                Filter.filter(input.value);
            }
        })

        document.querySelector('.case-studies-overlay').addEventListener('click', function(event) {
            console.log('Enlace clicado');
        })
    });

    // :: 15.0 CONTACT FORM ACTIVE CODE
    // Get the form.
    var form = $('#contact-form');
    // Get the messages div.
    var formMessages = $('.form-message');
    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();
        // Serialize the form data.
        var formData = $(form).serialize();
        // Submit the form using AJAX.
        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#contact-form input,#contact-form textarea').val('');
            })
            .fail(function (data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
    });

    
    
    

}(jQuery));


