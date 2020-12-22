let thumb = document.querySelectorAll('.photo-list__likes', ':after')
let likesNumber = document.querySelectorAll('.photo-list__like-count')




for (let index in thumb) {
    let likesCounter = 0;
    thumb[index].onclick = () => {
        likesCounter++;
        likesNumber[index].textContent = likesCounter;
        thumb[index].classList.toggle('added');
    }
}
