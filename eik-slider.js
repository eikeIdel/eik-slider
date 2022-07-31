jQuery(document).ready(function () {
  jQuery(".eik-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    arrows: true,
    prevArrow:
      '<button class="eik-arrow-btn prev-slide" aria-label="Next" type="button"><</button>',
    nextArrow:
      '<button class="eik-arrow-btn next-slide" aria-label="Previous" type="button">></button>',
  });
});
