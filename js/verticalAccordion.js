var teamNames = document.getElementsByClassName('team__name');
document.addEventListener('DOMContentLoaded', function () {
    verticalAccordion();
});

function verticalAccordion() {
    var teamNames = document.getElementsByClassName('team__name');

    for (var i = 0; i < teamNames.length; i++) {
        var teamName = teamNames[i];
        teamName.addEventListener('click', clickOnName);
    }
}

function clickOnName(e) {
    e.preventDefault();
    var element = e.target;

    var parentElement = element.parentElement;

    if (parentElement.classList.contains('is-open')) {
        parentElement.classList.remove('is-open');

    } else {

        for (var i = 0; i < teamNames.length; i++) {
            var teamName = teamNames[i];
            teamName.parentElement.classList.remove('is-open');
        }

        parentElement.classList.add('is-open');
    }
}