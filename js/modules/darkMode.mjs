const darkMode = () => {
   $('.dark-style__btn--sun').on('click', e => {
      e.preventDefault();
      document.querySelector('[title="theme"]').setAttribute('href', './css/dark-theme.css')
      localStorage.setItem('theme', 'dark')
   })
   $('.dark-style__btn--moon').on('click', e => {
      e.preventDefault();
      document.querySelector('[title="theme"]').setAttribute('href', '#')
      localStorage.setItem('theme', 'light')
   })


   if(localStorage.theme === 'dark') {
      document.querySelector('[title="theme"]').setAttribute('href', './css/dark-theme.css')
   } else {
      document.querySelector('[title="theme"]').setAttribute('href', '#')
   }
}

export default darkMode