const cards = document.querySelectorAll('.card');
let lock = false;
let hasTurnedCard = false;
let firstCard, secondCard;

function onClick() {
    if (lock) return;
    if (this === firstCard) return;
console.log("click")
    this.classList.toggle('turn');
    if (!hasTurnedCard) {
        hasTurnedCard = true;
        firstCard = this;
        return;
    }

    hasTurnedCard = false;
    secondCard = this;
}
    cards.forEach(card => card.addEventListener('click', onClick));