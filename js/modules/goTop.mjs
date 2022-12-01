
const goTop = () => {
   setInterval(() => {
      if ($(window).scrollTop() > 0)  {
         $('.go-top').addClass('go-top--active')
      } else {
         $('.go-top').removeClass('go-top--active')
      }
      
   }, 0);
   
   $('.go-top, .header__logo').on('click', function (e){
      e.preventDefault()
      var id =$(this).attr('href'),
      top = $(id).offset().top
      $('body,html').animate({ scrollTop: top}, 500)
   });
}

export default goTop