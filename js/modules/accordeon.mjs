
const accordeon = () => {
   $('.why__acc-link').on('click', function(e) {
      e.preventDefault()
      if ($(this).hasClass('why__acc-link--active')) {
         $(this).removeClass('why__acc-link--active')
         $(this).children('.why__acc-text').slideUp()
      } else {
         $('.why__acc-link').removeClass('why__acc-link--active')
         $('.why__acc-text').slideUp()
         $(this).addClass('why__acc-link--active')
         $(this).children('.why__acc-text').slideDown()
      }
      
   });
   
   $('.ticket__acc-link').on('click', function(e) {
      e.preventDefault()
      $(this).children('.ticket__acc-func').slideToggle()
   });
}

export default accordeon;