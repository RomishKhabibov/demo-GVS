
const burger = () => {
   setInterval(() => {
      if ($(window).scrollTop() > 0 && $('.header__fixed').hasClass('header__fixed--open') === false)  {
         $('.burger').addClass('burger--follow')
      } else {
         $('.burger').removeClass('burger--follow')
      }
      if ($('.header__fixed').hasClass('header__fixed--open')) {
         $('.burger').addClass('burger--active')
         $('.logo-container').addClass('logo-container--active')
      } else {
         $('.burger').removeClass('burger--active')
         $('.logo-container').removeClass('logo-container--active')
      };
   }, 0);

   $('.burger, .overlay').on('click', function (e) {
      e.preventDefault()
      $('.header__fixed').toggleClass('header__fixed--open')
      $('.logo-container').toggleClass('logo-container--active')
      $('.overlay').toggleClass('overlay--show')
   })
   $('.header__logo').on('click', function (e) {
      e.preventDefault()
      $('.overlay').removeClass('overlay--show')
      $('.header__fixed').removeClass('header__fixed--open')
   });
}

export default burger;