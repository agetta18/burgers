const item = document.querySelector('.food__item');
const closeMore = document.querySelector('.food__close');

closeMore.addEventListener('click', function () {
    event.preventDefault();
    item.classList.remove('open');

})