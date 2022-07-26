$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.slider-first-screen').slick({
        arrows: false,
        dots:false, 
        adaptiveHeight: true, 
        slidesToShow: 1, 
        slidesTOScrool:1,
        speed: 800 ,
        infinite:0,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false
    });

    $('.ourservices-slider').slick({
        arrows: false,
        dots:false, 
        adaptiveHeight: true, 
        slidesToShow: 4, 
        slidesTOScrool:1,
        speed: 800 ,
        infinity :1,
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 1125,
              settings: {
                slidesToShow: 3,
                centerPadding: '10px',
              }
            },
            {
              breakpoint: 964,
              settings: {
                slidesToShow: 2,
                centerPadding: '0px',
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                centerPadding: '10px',
              }
            }
        ]
    });

    $('.partners-slider').slick({
        arrows: false,
        dots:false, 
        adaptiveHeight: true, 
        slidesToShow: 6, 
        slidesTOScrool:2,
        speed: 800 ,
        infinity :1,
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 1125,
              settings: {
                slidesToShow: 5,
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 4,
                }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                }
            },
        ]
    });

    $('.recalls-slider').slick({
      arrows: false,
      dots:false, 
      adaptiveHeight: true, 
      slidesToShow: 3, 
      // slidesTOScrool:1,
      // speed: 800 ,
      // infinity :1,
      // autoplay: true,
      // centerMode: true,
      // centerPadding: '0px',
      // pauseOnHover: false,
      responsive: [
          {
            breakpoint: 1125,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 964,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            }
          }
      ]
  });
});