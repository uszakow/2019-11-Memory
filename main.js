//1. Robimy tablicę z indeksami dla divów
const indexOfCard = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];

//2. Randomizujemy tablicę


//3.
const cards = document.querySelectorAll('.card');
cards.forEach(function (item, index) {
    item.setAttribute('data-index', indexOfCard[index]);
});
const getButton = document.getElementById("reset");
getButton.addEventListener("click", function() {
  console.log("działam");
});
