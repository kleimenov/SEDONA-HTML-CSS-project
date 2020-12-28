let menuBar = document.querySelector('.main-nav__toggle');
let navBarPopUp = document.querySelector('.site-list');
let navList = document.querySelector('.main-nav__list');
let navLogo = document.querySelector('.page-header__logo-image');

if(window.innerWidth < 530) {
    navBarPopUp.classList.add('nav--hide');
}


menuBar.addEventListener('click', (evt)=> {
    evt.preventDefault();
    navBarPopUp.classList.toggle('nav--hide')
    navLogo.classList.toggle('nav--hide')
})