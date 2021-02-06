const settings = {
  dots: false,
  slidesToShow: 4,
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
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '10px',
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        centerMode: true,
        centerPadding: '10px',
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};
export default settings;
