
const speakersSlider = () => {
   $('.speakers__people').slick({
      infinity: true,
      slidesToShow: 4,
      arrows: false,
      waitForAnimate: false,
      dots: true,
      appendDots: ('.speakers__dots'),
      responsive: [
         {
            breakpoint: 1000,
            settings: {
               slidesToShow: 3,
            },
         },
         {
            breakpoint: 770,
            settings: {
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 526,
            settings: {
               slidesToShow: 1,
            },
         }
      ],
   })
}

export default speakersSlider