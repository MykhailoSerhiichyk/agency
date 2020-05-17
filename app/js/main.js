$(function(){

    $('.main__slider-inner').slick({
        dots: true,
    });

    $('.time__slider-inner').slick();

    $('.experience__slider-inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 983,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 701,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
          ]
    });

});




