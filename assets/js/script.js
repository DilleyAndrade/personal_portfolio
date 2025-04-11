let openMenuMobile = document.querySelector('.burgerMenu')
let navMenuMobile = document.querySelector('.navMenuMobile')


openMenuMobile.addEventListener('click', () => {
  console.log('ok')
  navMenuMobile.classList.toggle('hide')
})