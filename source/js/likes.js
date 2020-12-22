let thumb = document.querySelectorAll('.photo-list__likes', ':after')
let likesNumber = document.querySelectorAll('.photo-list__like-count')
let likesCounter = 0;
/*
thumb.onclick = () => {
    likesNumber.textContent = cnt;
}
*/

for (let index in thumb) {
    thumb[index].onclick = () => {
        likesCounter++;
        likesNumber[index].textContent = likesCounter;
    }
}