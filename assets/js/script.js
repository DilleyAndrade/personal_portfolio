//Menu Mobile Scripts ----------------------------------------------------------
let openMenuMobile = document.querySelector('.burgerMenu')
let navMenuMobile = document.querySelector('.navMenuMobile')
let menuMobileNav = document.querySelector('.menuMobileNav')

openMenuMobile.addEventListener('click', openCloseNav)
menuMobileNav.addEventListener('click', openCloseNav)

function openCloseNav() {
  navMenuMobile.classList.toggle('hide')
}

//Menu Desktop Scripts ---------------------------------------------------------
let logoDilley = document.querySelector('.logoDilley')
let text1 = document.querySelector('.textLogo1')
let text2 = document.querySelector('.textLogo2')

logoDilley.addEventListener('mouseenter', () => {
  text1.classList.toggle('hide')
  text2.classList.toggle('hide')
})

logoDilley.addEventListener('mouseleave', () => {
  text1.classList.toggle('hide')
  text2.classList.toggle('hide')
})