

jQuery(function($){
    'use strict'
    
    // Responsive Menu
    if($('.fa-bars').length) {
      $('.fa-bars').on('click', function(){
        $('.header_top .inner_header nav > ul').show()
        $(this).hide()
        $('.fa-times').show()
      })

      $('.fa-times').on('click', function(){
        $('.header_top .inner_header nav > ul').hide()
        $(this).hide()
        $('.fa-bars').show()

      })
    }

    if($('.home_slider').length){
        $('.home_slider').slick({
            vertical: true,
            arrows: false,
            dots: true
        });
    }

    // Tweeter slider
    if($('.content_slider_tweeter').length){
      $('.content_slider_tweeter').slick({
          vertical: true,
          appendArrows: $('.tweet_slider .arrows'),
          prevArrow: "<span class=\"top\"><i class=\"fas fa-arrow-up\"></i></span>",
          nextArrow: "<span class=\"down\"><i class=\"fas fa-arrow-down\"></i></span>"
          
      });
  }
    
    //Carousel slider for Shop Items
    if($('.shop_carusel').length){
        $('.shop_carusel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            appendArrows: $('.shop_slider_navigation'),
            prevArrow: "<div class=\"left\"><i class=\"fas fa-hand-point-left\"></i></div>",
            nextArrow: "<div class=\"right\"><i class=\"fas fa-hand-point-right\"></i></div>",
            responsive: [
              {
                breakpoint: 420,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
            ]
        });
    }
    
    // Carousel testimonials Person
    if($('.testimonials_carusel').length){
      $('.testimonials_carusel').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          appendArrows: $('.testimonial_slider_box'),
          prevArrow: "<div class=\"left_arrow\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
          nextArrow: "<div class=\"right_arrow\"><div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div></div>",
          responsive: [
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      });
      $('.testimonials_carusel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log(currentSlide);
        var tabs_container=$('.testimonial_tab_container')
        var current_index = currentSlide +1

        tabs_container.find($('.tab_item')).hide()
        tabs_container.find($('.tab-'+current_index)).show()
      });
    }

    if($('.open_video').length){
        $('.open_video').magnificPopup({
            type: 'iframe'
          });
    }
    
    if($('.testimonial_galery').length){
        $('.testimonial_galery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
          }
        });
    }
});