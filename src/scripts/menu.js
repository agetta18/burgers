document.addEventListener('DOMContentLoaded', function () {
    workMenu();

});

const hamb=document.getElementById('menu__hamburger');
const menu = document.getElementById('menu__list');
const icon = document.getElementById('icon__menu');

hamb.addEventListener('click', function() {
    menu.classList.remove('menu__list--open');
    icon.classList.remove('icon__menu-open');
})

function workMenu() {

    icon.addEventListener('click', function (e) {
        e.preventDefault();
        if (icon.classList.contains('icon__menu-open')) {
            menu.classList.remove('menu__list--open');
            icon.classList.remove('icon__menu-open');

        } else {
            menu.classList.add('menu__list--open');
            icon.classList.add('icon__menu-open');

        }
    })

}