let menuBar = document.querySelector('.main-nav__toggle');
let popUp = document.querySelector('.site-list')

popUp.classList.add('hide-nav')

menuBar.addEventListener('click', (evt)=> {
    evt.preventDefault();
    console.log('Hello')
})