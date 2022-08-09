jQuery(document).ready(function () {
  jQuery('.eik-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: `<button class="eik-arrow-btn next-slide" aria-label="Next" type="button"><img src="" alt=">"></button>`,
    prevArrow: `<button class="eik-arrow-btn prev-slide" aria-label="Previous" type="button"><img src="" alt="<"></button>`,

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
