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
let timerRunning = false;

const getButton = document.getElementById("reset");
getButton.addEventListener("click", function () {
  licze();
  movesSpan.innerText = 0;
  timerSpan.innerText = 0;
  if (!timerRunning) {
    const timerInterval = setInterval(() => timerSpan.innerText++, 1000);
    timerRunning = true; //clearInterval(timerInterval)
  movesSpan.innerText = 0
  timerSpan.innerText = 0
  if (!timerRunning) {
    const timerInterval = setInterval(() => timerSpan.innerText++, 1000);
    timerRunning = true  //clearInterval(timerInterval)
  }
});

//3. Pobieramy karty. Nadajemy zrandomizowane indeksy kartom.
const cards = document.querySelectorAll(".card");
cards.forEach(function (item, index) {
  item.setAttribute("data-index", indexOfCard[index]);
});

//4. Przy nacisku na kartę zmieniamy tło w zależności od znaczenia 'data-index'. Zapisujemy, że to pierwsza otwarta karta

let zmienna = 0;
let currIndex = 0;
let prevIndex = 0;
let visibleCards = 0;

function changeBackground() {
  if (visibleCards < 2) {
    zmienna++;
    if (!this.classList.contains("removed") && visibleCards < 2) {
      this.style.backgroundImage = `url('tile-images/tile_${this.getAttribute(
        "data-index"
      )}.png')`;
      // console.log(zmienna);

//Zmienne dla czasowego przechowywania dwóch kart
let cardFirst = null;
let cardSecond = null;

function changeBackground() {



  zmienna++;
  // console.log(zmienna);

  // console.log(this);
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

    this.classList.toggle("picked");

    // console.log(zmienna);

    // console.log(this);
    // this.style.backgroundImage = 'url:(til)';
    if (zmienna === 1) {
      prevIndex = this.dataset.index;
      // console.log(this.dataset.index);
      // console.log(currIndex);
    } else if (zmienna === 2) {
      console.log(zmienna);

      currIndex = this.dataset.index;
      zmienna = 0;

      movesSpan.innerText++;
      //console.log(parseInt(movesSpan.innerText))

      //Zachowanie przy znalezieniu pary
      if (prevIndex === currIndex) {
        // console.log("para!");
        cards.forEach(e => {
          if (e.dataset.index === currIndex) {
            e.style.backgroundImage = "none";
            e.classList.add("removed");
            // console.log(e.style.backgroundImage);
          }
        });
      }

      //zachowanie jeżeli nie trafilismy
    }
  }

  // console.log(this.getAttribute("data-index"));
  visibleCards++;
  console.log(visibleCards);
  this.style.backgroundImage = `url('tile-images/tile_${this.getAttribute(
    "data-index"
  )}.png')`;



}

cards.forEach(function (item) {
  item.addEventListener("click", changeBackground);
});

//5. Porównujemy dwie karty

//6. Obraca karty po 3 sec
cards.forEach(function (item) {
  item.addEventListener("click", changeViewAsStart);
});


function changeViewAsStart() {
  if (cardFirst !== null && cardSecond !== null) {
    if (cardFirst.style.backgroundImage) {
      cardFirst.style.backgroundImage = '';
    }
    if (cardSecond.style.backgroundImage) {
      cardSecond.style.backgroundImage = '';
    }
    cardFirst = null;
    cardSecond = null;
    console.log(cardFirst)
    console.log(cardSecond)
    // console.log(cardFirst)
    // console.log(cardSecond)
    // cleanCards(cardFirst, cardSecond);
  }

  if (cardFirst === null) {
    console.log('first 0')
    cardFirst = this;
  }
  else if (cardFirst !== null && cardSecond === null) {
    console.log('second 0')
    cardSecond = this;
    // cleanCards(cardFirst, cardSecond);
    // setTimeout(cleanCards, 2000, cardFirst, cardSecond);
    setTimeout(() => {
      cardFirst.style.backgroundImage = '';
      cardSecond.style.backgroundImage = '';
      cardFirst = null;
      cardSecond = null;
    }, 2000);
  }

}

// zmienna++;
// if (!this.classList.contains("removed") && visibleCards < 2) {
//   this.style.backgroundImage = `url('tile-images/tile_${this.getAttribute(
//     "data-index"
//   )}.png')`;
//   // console.log(zmienna);
// }

// this.classList.toggle("picked");

// // console.log(zmienna);

// // console.log(this);
// // this.style.backgroundImage = 'url:(til)';
// if (zmienna === 1) {
//   prevIndex = this.dataset.index;
//   // console.log(this.dataset.index);
//   // console.log(currIndex);
// } else if (zmienna === 2) {
//   console.log(zmienna);

//   currIndex = this.dataset.index;
//   zmienna = 0;

//   movesSpan.innerText++;
//   //console.log(parseInt(movesSpan.innerText))

//   //Zachowanie przy znalezieniu pary
//   if (prevIndex === currIndex) {
//     // console.log("para!");
//     cards.forEach(e => {
//       if (e.dataset.index === currIndex) {
//         e.style.backgroundImage = "none";
//         e.classList.add("removed");
//         // console.log(e.style.backgroundImage);
//       }
//     });
//   }

//   //zachowanie jeżeli nie trafilismy
// }

// // console.log(this.getAttribute("data-index"));
// visibleCards++;
// console.log(visibleCards);
// function cleanCards(first, second) {
//   console.log(cardFirst);
//   console.log(cardSecond);
//   first.style.backgroundImage = '';
//   second.style.backgroundImage = '';
//   cardFirst = null;
//   cardSecond = null;
//   console.log('Clean');
//   console.log(cardFirst)
//   console.log(cardSecond)
// }
