$(document).ready(() => {
    $('.review__btn').on('click', e => {
        e.preventDefault();
        $('.review__overlay').addClass('review__overlay--active');
        $('body').css('overflow', 'hidden');
    });
    $('.review__btn--mob').on('click', e => {
        e.preventDefault();
        $('.review__overlay').addClass('review__overlay--active');
        $('body').css('overflow', 'hidden');
    });
    $('.overlay__close').on('click', e =>{
        e.preventDefault();
        $('.review__overlay').removeClass('review__overlay--active');
        $('body').css('overflow', 'scroll');
    })
});


