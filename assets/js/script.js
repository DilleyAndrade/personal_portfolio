let openMenuMobile = document.querySelector('.burgerMenu')
let navMenuMobile = document.querySelector('.navMenuMobile')
let menuMobileNav = document.querySelector('.menuMobileNav')


openMenuMobile.addEventListener('click', () => {
  navMenuMobile.classList.toggle('hide')
})

menuMobileNav.addEventListener('click', () => {
  navMenuMobile.classList.toggle('hide')
})
