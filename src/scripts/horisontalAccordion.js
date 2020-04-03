document.addEventListener('DOMContentLoaded', function () {
    horisontalAccordeon();
});

function horisontalAccordeon() {
    var titleLinks = document.getElementsByClassName('food__link');

    for (var title of titleLinks) {

        title.addEventListener('click', function (e) {
            event.preventDefault();

            var element = e.currentTarget;
            var parentElement = element.parentElement;

            if (parentElement.classList.contains('open')) {
                parentElement.classList.remove('open');

            } else {

                for (var title of titleLinks) {

                    title.parentElement.classList.remove('open');
                }

                parentElement.classList.add('open');
            }

        })
    }
}


