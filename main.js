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

const timerSpan = document.getElementById("timer");

//stoper

const licze = () => {
// const timerInterval = setInterval(() => timerSpan.innerText++, 1000);
  //clearInterval(timerInterval)
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
const movesSpan = document.getElementById("moves");

//
let timerRunning = false



const getButton = document.getElementById("reset");
getButton.addEventListener("click", function() {
  licze();
  movesSpan.innerText = 0 
  timerSpan.innerText = 0
  if (!timerRunning) {
  const timerInterval = setInterval(() => timerSpan.innerText++, 1000);
  timerRunning = true  //clearInterval(timerInterval)
  }
});

//3. Pobieramy karty. Nadajemy zrandomizowane indeksy kartom.
const cards = document.querySelectorAll(".card");
cards.forEach(function(item, index) {
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

let currIndex = 0;
let prevIndex = 0;
function changeBackground() {
  zmienna++;
  // console.log(zmienna);

  // console.log(this);
  // this.style.backgroundImage = 'url:(til)';
  if (zmienna === 1) {
    prevIndex = this.dataset.index;
    // console.log(this.dataset.index);
    // console.log(currIndex);
  } else if (zmienna == 2) {
    currIndex = this.dataset.index;
    zmienna = 0;
   
    movesSpan.innerText++;
    //console.log(parseInt(movesSpan.innerText))

    //Zachowanie przy znalezieniu pary
    if (prevIndex === currIndex) {
      console.log("para!");
    }

    //zachowanie jeżeli nie trafilismy
  }

  // console.log(this.getAttribute("data-index"));
  this.style.backgroundImage = `url('tile-images/tile_${this.getAttribute(
    "data-index"
  )}.png')`;


}

cards.forEach(function(item) {
  item.addEventListener("click", changeBackground);
});

//5. Porównujemy dwie karty

//6. Obraca karty po 3 sec
