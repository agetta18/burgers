$(document).ready(() => {
    $('.review__btn').on('click', e => {
        e.preventDefault();
        $('.review__overlay').css('display','flex');
        $('body').css('overflow', 'hidden');
    });
    $('.review__btn--mob').on('click', e => {
        e.preventDefault();
        $('.review__overlay').css('display','flex');
        $('body').css('overflow', 'hidden');
    });
    $('.overlay__close').on('click', e =>{
        e.preventDefault();
        $('.review__overlay').css('display','none');
        $('body').css('overflow', 'scroll');
    })

});


