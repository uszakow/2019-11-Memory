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

const licze = () => {
  let index = 0;
  setInterval(function() {
    console.log(index);
    index++;
  }, 1000);
  console.log("działam");
};
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

const getButton = document.getElementById("reset");
getButton.addEventListener("click", function() {
  licze();

  shuffle(trialArray);
  console.log(trialArray);
});

//3. Pobieramy karty. Nadajemy zrandomizowane indeksy kartom.
const cards = document.querySelectorAll(".card");
cards.forEach(function(item, index) {
  item.setAttribute("data-index", indexOfCard[index]);
});
