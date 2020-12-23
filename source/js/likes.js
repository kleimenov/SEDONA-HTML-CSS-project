let thumb = document.querySelectorAll('.photo-list__likes', ':after')
let likesNumber = document.querySelectorAll('.photo-list__like-count')



for (let index in thumb) {
  thumb[index].onclick = () => {
    if (thumb[index].classList.contains('added')) {
        likesNumber[index].textContent--;
    } else {
        likesNumber[index].textContent++;
    }
    thumb[index].classList.toggle('added');
  }
}
