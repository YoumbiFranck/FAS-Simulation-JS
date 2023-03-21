let date = document.getElementById("date");
function resizeHeaderOnScroll() {

    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 200,
        headerEl = document.getElementById('js-header');

    if (distanceY > shrinkOn) {
        headerEl.classList.add("smaller");
    } else {
        headerEl.classList.remove("smaller");
    }
}

window.addEventListener('scroll', resizeHeaderOnScroll);
//# sourceURL=pen.js
let today = new Date();
let yyyy = today.getFullYear();
date.innerText = yyyy;

