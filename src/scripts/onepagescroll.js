const sections = $('.section');
const display = $('.maincontent');

let inScroll = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const canScroll = function(){
    return !$('.review__overlay').hasClass('review__overlay--active');
}

const canScrollMenu = function(){
    return !$('.menu__list').hasClass('menu__list--open');
}

const performTransition = sectionEq =>{

    if (inScroll) return

    inScroll = true;
    const position = sectionEq * -100;
  
    sections.eq(sectionEq).addClass('active').siblings().removeClass('active');

    display.css({
        transform : `translateY(${position}%)`
    });

   setTimeout(() =>{
       $('.pagination__item').eq(sectionEq).addClass('pagination__item--active').siblings().removeClass('pagination__item--active');
       inScroll = false;
   }, 1300);

};

const scrollSection = direction => {
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (nextSection.length && direction == 'next'){
        performTransition(nextSection.index());
    }

    if (prevSection.length && direction == 'prev'){
        performTransition(prevSection.index());
    }

}

$(window).on('wheel', e => {

    if (!canScroll()){
        return
    }

    if (!canScrollMenu()){
        return
    }

    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0){
        scrollSection('next');
    }

    if (deltaY < 0){
        scrollSection('prev');
    }

});

$(document).on('keydown', e => {
    const tagName = e.target.tagName.toLowerCase();

    if( tagName != 'input' && tagName != 'textarea') {

        switch(e.keyCode){
            case 38: 
            scrollSection('prev');
            break;
            case 40: 
            scrollSection('next');
            break;
        }

    }

});

$('[data-scroll-to]').on('click', e =>{
    e.preventDefault();
    const $this = $(e.currentTarget);
    const target = $this.attr('data-scroll-to');

    performTransition(target);
});


if (isMobile) {
    
    $("body").swipe( {
        swipe: (event, direction)  => {
          let scrollDirection;
             
          if (direction === "up") scrollDirection = "next";
          if (direction === "down") scrollDirection = "prev";
    
          scrollSection(scrollDirection); 
        },
    });
};



