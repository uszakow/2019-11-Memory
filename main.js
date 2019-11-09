//1. Robimy tablicę z indeksami dla kart.
const indexOfCard = [
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9
];

//stoper
const licze = () => {
  let index = 0;
  const timerSpan = document.getElementById("timer");
  setInterval(() => timerSpan.innerText++, 1000);
};

//2. Randomizujemy tablicę.
shuffle(indexOfCard);
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

//
const getButton = document.getElementById("reset");
getButton.addEventListener("click", function () {
  licze();
});

//3. Pobieramy karty. Nadajemy zrandomizowane indeksy kartom.
const cards = document.querySelectorAll(".card");
cards.forEach(function (item, index) {
  item.setAttribute("data-index", indexOfCard[index]);
});

//4. Przy nacisku na kartę zmieniamy tło w zależności od znaczenia 'data-index'. Zapisujemy, że to pierwsza otwarta karta

let zmienna = 0;
//Zmienne dla czasowego przechowywania dwóch kart
let cardFirst = null;
let cardSecond = null;

// function cleanCards(cardFirst, cardSecond) {
//   cardFirst.style.backgroundImage = '';
//   cardSecond.style.backgroundImage = '';
//   cardFirst = null;
//   cardSecond = null;
//   console.log('Clean');

// }

function changeBackground() {
  // if (cardSecond !== null) {
  //   cleanCards(cardFirst, cardSecond);
  // }
  prevIndex = 0;
  zmienna++;

  //Zapisujeny pierwszą kartę. Jeżeli już jest, to drugą.
  if (cardFirst === null) {
    cardFirst = this;
    console.log(cardFirst)
  }
  else {
    cardSecond = this;
    console.log(cardSecond)
    // setTimeout(() => {
    // cardFirst.style.backgroundImage = '';
    // cardSecond.style.backgroundImage = '';
    // cardFirst = null;
    // cardSecond = null;
    // cleanCards(cardFirst, cardSecond);
    // }, 2000);

    cardFirst.style.backgroundImage = '';
    cardSecond.style.backgroundImage = '';
    cardFirst = null;
    cardSecond = null;
  }

  // if (cardFirst !== null && cardSecond !== null) {
  //   cleanCards(cardFirst, cardSecond);
  // }

  if (zmienna == 2) {
    zmienna = 0;


    const movesSpan = document.getElementById("moves");
    movesSpan.innerText++;
    //console.log(parseInt(movesSpan.innerText))    


  }

  // console.log(this.getAttribute("data-index"));
  this.style.backgroundImage = `url('tile-images/tile_${this.getAttribute(
    "data-index"
  )}.png')`;


}
cards.forEach(function (item) {
  item.addEventListener("click", changeBackground);
});


//5. Porównujemy dwie karty


//6. 

