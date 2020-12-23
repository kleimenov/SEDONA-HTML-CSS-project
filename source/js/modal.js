let popUp = document.querySelector('.modal');
let openButton = document.querySelector('.booking__link');
let closeButton = document.querySelector('.modal__button')

openButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    popUp.classList.add('modal--show')
})

closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    popUp.classList.remove('modal--show');
})