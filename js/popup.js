var openButton = document.querySelector('.review__btn');
        var overlayElement = document.querySelector('.review__overlay');

        openButton.addEventListener("click", function () {
            event.preventDefault();
            overlayElement.style.display = "flex";
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
        });

        var closeButton = document.querySelector('.overlay__close');
        closeButton.addEventListener('click', function (e) {
            e.preventDefault();
            overlayElement.style.display = 'none';
            document.getElementsByTagName("body")[0].style.overflow = "scroll";

        });