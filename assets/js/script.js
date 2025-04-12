let openMenuMobile = document.querySelector('.burgerMenu')
let navMenuMobile = document.querySelector('.navMenuMobile')
let menuMobileNav = document.querySelector('.menuMobileNav')

openMenuMobile.addEventListener('click', openCloseNav)
menuMobileNav.addEventListener('click', openCloseNav)

function openCloseNav() {
  navMenuMobile.classList.toggle('hide')
}