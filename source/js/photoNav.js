let menuBar = document.querySelector('.main-nav__toggle');
let navBarPopUp = document.querySelector('.site-list');
let navList = document.querySelector('.main-nav__list');
let navLogoP = document.querySelector('.page-header__logo-imageP');


if(window.innerWidth < 530) {
    navBarPopUp.classList.add('nav--hide');
}


menuBar.addEventListener('click', (evt)=> {
    evt.preventDefault();
    navBarPopUp.classList.toggle('nav--hide');
    navLogoP.classList.toggle('nav--hide');
    
})

window.addEventListener('resize', function() {
    if(window.innerWidth < 530) {
        navBarPopUp.classList.add('nav--hide');
    } else {
        navBarPopUp.classList.remove('nav--hide');
    }
});