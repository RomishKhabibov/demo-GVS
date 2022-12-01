
const videoSlider = () => {
   $('.video-content__list').slick({
      infinity: true,
      slidesToShow: 2,
      waitForAnimate: false,
      arrows: false,
      dots: true,
      appendDots: ('.video-content__dots'),
      responsive: [
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   })
}

export default videoSlider