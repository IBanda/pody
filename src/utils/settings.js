const settings = {
  dots: false,
  slidesToShow: 7,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  lazyLoad: true,
  infinite: true,
  autoplay: true,
  swipe: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};
export default settings;
