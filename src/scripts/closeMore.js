$(document).ready(() => {
    $('.food__close').on('click', e => {
        e.preventDefault();
        $('.food__item').removeClass('open');
    });
});