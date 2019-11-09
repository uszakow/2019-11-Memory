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

//2. Randomizujemy tablicę.
const trialArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
getButton.addEventListener("click", function() {
  licze();
});

//3. Pobieramy karty. Nadajemy zrandomizowane indeksy kartom.
const cards = document.querySelectorAll(".card");
cards.forEach(function(item, index) {
  item.setAttribute("data-index", indexOfCard[index]);
});

//4. Przy nacisku na kartę zmieniamy tło w zależności od znaczenia 'data-index'. Zapisujemy, że to pierwsza otwarta karta

let zmienna = 0;
function changeBackground() {
  console.log(this);
  // this.style.backgroundImage = 'url:(til)';
  zmienna++;
  console.log(zmienna);
  if (zmienna == 2) {
    zmienna = 0;
    // console.log("mamy parę");
  }
}

// cards.addEventListener('click', changeBackground);
// console.log(cards);
// document.querySelector('.card').addEventListener('click', changeBackground);
cards.forEach(function(item) {
  item.addEventListener("click", changeBackground);
});

//5.
