'use strict'
//PLAN GRY
//Utworzyć tablicę indeksów kart - dwa identyczne indeksy na każdą parę
//Przemieszać tablicę
//Nadać każdej karcie indeks
//Przy kliknięciu na kartę musi spracować funkcja:
//-za pierwszym przyciskiem startuje licznik czasu
//-nadać karcie obrazek odpowiednio do indeksu
//-zapisać 1 klikniętą kartę do 1 zmiennej, 2 kartę do 2 zmiennej
//-jeżeli 2 karta == 1 karta, to zabrać z pola (obie karty nie można więcej przycisnąć)
//-jeżeli 2 karta != 1 karta, to po 2 sekundach odwrócić obie z powrotem
//-jeżeli przy otwartych dwóch kartach kliknąć jeszcze jedną, to dwie karty odwracają się natychmiast
//-po każdej parze kart licznik ruchów zwiększa się na 1
//Jeżeli nie zostało żadnej pary kart, to pojawia się alert "wygrałeś po ...ruchach za ...sekund"
//Jeżeli nacisnąć restart, to prosi potwierdzenia. Jeżeli tak, to zaczyna grę od samego początku

//Utworzyć tablicę indeksów kart - dwa identyczne indeksy na każdą parę
const indexOfCard = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];

//Przemieszać tablicę
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
shuffleArray(indexOfCard);

//Nadać każdej karcie indeks
let cards = document.querySelectorAll(".card");
cards.forEach(function (item, index) {
    item.setAttribute("data-index", indexOfCard[index]);
});

//Przy kliknięciu na kartę...
cards.forEach(function (item) {
    item.addEventListener("click", clickCard);
});

//zmienne dla funkcji:
//timer gry
let timerInDoc = document.getElementById('timer');
let timerId;
//timer 2 sekund
let timerMoves;
//ilość ruchów
let moves = document.getElementById('summary');
//zachowuje 1 i 2 karty
let cardFirst = null;
let cardSecond = null;

//...musi spracować funkcja:
function clickCard() {
    //-za pierwszym przyciskiem startuje licznik czasu
    if (timerId === undefined) {
        timerId = setInterval(() => {
            timerInDoc.innerHTML++;
        }, 1000);
    }
    //-nadać karcie obrazek odpowiednio do indeksu (jeżeli ma data-index)
    if (this.hasAttribute('data-index')) {
        this.style.backgroundImage = `url('tile-images/tile_${this.getAttribute("data-index")}.png')`;
    }
    //-zapisać 1 klikniętą kartę do 1 zmiennej, 2 kartę do 2 zmiennej. Jeżeli niemożliwe wyzerować
    if (cardFirst !== null && cardSecond !== null) {
        //-jeżeli przy otwartych dwóch kartach kliknąć jeszcze jedną, to dwie karty odwracają się natychmiast
        clearTimeout(timerMoves);
        cardFirst.style.backgroundImage = '';
        cardSecond.style.backgroundImage = '';
        //wyzerować zmienne dla kart
        cardFirst = null;
        cardSecond = null;
    }
    if (cardFirst === null && cardSecond === null) {
        cardFirst = this;
    }
    else if (cardSecond === null && cardFirst !== this) {
        cardSecond = this;
        //-po każdej parze kart licznik ruchów zwiększa się na 1
        if (cardFirst.getAttribute('data-index') && cardSecond.getAttribute('data-index')) {
            moves.innerText++;
        }
        //wysłąć dwie karty na sprawdzanie identyczności
        checkTwoCards(cardFirst, cardSecond);
        //-jeżeli 2 karta != 1 karta, to po 2 sekundach odwrócić obie z powrotem
        if (cardFirst.style != null && cardSecond.style != null) {
            timerMoves = setTimeout(() => {
                cardFirst.style.backgroundImage = '';
                cardSecond.style.backgroundImage = '';
                //wyzerować zmienne dla kart
                cardFirst = null;
                cardSecond = null;
            }, 2000);
        }
    }
}

//-jeżeli 2 karta == 1 karta, to zabrać z pola (obie karty nie można więcej przycisnąć)
function checkTwoCards(first, second) {
    if (first.getAttribute('data-index') === second.getAttribute('data-index')) {
        first.classList.remove('card');
        first.removeAttribute('data-index');
        first.style.backgroundImage = '';
        second.classList.remove('card');
        second.removeAttribute('data-index');
        second.style.backgroundImage = '';
        cards = document.querySelectorAll(".card");
        //Jeżeli nie zostało żadnej pary kart, to pojawia się alert "wygrałeś po ...ruchach za ...sekund"
        if (cards.length === 0) {
            clearInterval(timerId)
            alert(`You won in ${moves.innerHTML} moves and ${timerInDoc.innerText} secunds`)
            console.log(timerId)
        }
    }
}

//Jeżeli nacisnąć restart, to prosi potwierdzenia. Jeżeli tak, to zaczyna grę od samego początku
const restart = document.getElementById('reset');
restart.onclick = function () {
    if (confirm('Are you shure?')) {
        location.reload();
    }
}