
const hamburger = document.querySelector('.hamburger');
const activate = document.querySelector('.mainNav');

hamburger.addEventListener('click', togu)

function togu() {
    activate.classList.toggle('activate')
}