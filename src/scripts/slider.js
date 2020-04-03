const left = document.querySelector("#left");
const right = document.querySelector("#right");
const slider = document.querySelector("#slider");

right.addEventListener("click", function (e) {
    loop("right", e);
});
left.addEventListener('click', function (e) {
    loop("left", e);
});

function loop(direction, e) {
    e.preventDefault();
    if (direction === "right") {
        slider.appendChild(slider.firstElementChild);
    } else {
        slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
    }
}