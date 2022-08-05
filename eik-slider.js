jQuery(document).ready(function () {
  jQuery('.eik-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    arrows: true,
    prevArrow:
      '<button class="eik-arrow-btn prev-slide" aria-label="Next" type="button"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow:
      '<button class="eik-arrow-btn next-slide" aria-label="Previous" type="button">></button>',

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 750,
        settings: {},
      },
    ],
  });
});
