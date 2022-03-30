const cards = document.querySelectorAll('.card');
let lock = false;
let hasTurnedCard = false;
let firstCard, secondCard;
let pairsLeft = 10;
let nomatches = 0;
document.getElementById('pairsleft').innerHTML = pairsLeft;
document.getElementById('nomatches').innerHTML = nomatches;

/*-- ===== Turn Cards ==== -- */
function onClick() {
    if (lock) return;
    if (this === firstCard) return;
    this.classList.toggle('turn');
    if (!hasTurnedCard) {
        hasTurnedCard = true;
        firstCard = this;
        return;
    }

    hasTurnedCard = false;
    secondCard = this;
    checkForPair();
}
cards.forEach(card => card.addEventListener('click', onClick));

/*-- ===== check pair found ==== -- */
function checkForPair() {
    let isMatch = firstCard.dataset.type === secondCard.dataset.type;
    isMatch ? disableCards() : turnBackCards();
    checkEndGame();
}

function disableCards() {
    firstCard.removeEventListener('click', onClick);
    secondCard.removeEventListener('click', onClick);
    pairsLeft--;
    document.getElementById('pairsleft').innerHTML = pairsLeft;
}

/*-- ===== Unturn card ==== -- */
function turnBackCards() {
    lock = true;
    setTimeout(() => {
        firstCard.classList.remove('turn');
        secondCard.classList.remove('turn');
        lock = false;
    }, 950);
    nomatches++;
    document.getElementById('nomatches').innerHTML = nomatches;
}

/*-- ===== shuffle ==== -- */
function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20);
        card.style.order = randomPos;
    });
}
shuffle();

/*-- ===== Check End Game ==== -- */
function checkEndGame() {
    if (pairsLeft == 0) {
        alert("Nice One!");
        showButton();
    }
}

/*-- ===== Play Again ==== -- */
function playAgain() {
    location.reload();
}


/*-- ===== Show Play Again ==== -- */
function showButton() {
    document.getElementById('playbutton').innerHTML = '<button type="button" class="buttonsm" onclick="playAgain()">PLAY AGAIN</button>';    
}

