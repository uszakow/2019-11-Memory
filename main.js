//Statuses
const cardsArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
let gameRunning = false;
const timerSpan = document.getElementById("timer");
const startButton = document.getElementById("start");
const cards = document.querySelectorAll(".card");
const grid = document.querySelector("#grid");
const moves = document.getElementById("moves");
const startMenu = document.getElementById("start-menu");
let card1;
let card2;

let solvedPairs = 0;

////////////////// Randomize cardsArray ////////////////
shuffle(cardsArray);
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

////////////////// Start game / Start counting time / shuffle deck when starting ////////////////
let timeCounter;
function startTimer() {
  function countTimer() {
    timerSpan.innerText++;
  }
  if (!gameRunning) {
    if (startButton.innerText !== "Pause" && timerSpan.innerText == 0) {
      shuffle(cardsArray);

      //Add random data index from cardsArray to every card
      cards.forEach(function(item, index) {
        item.setAttribute("data-index", cardsArray[index]);
        // console.log(item.dataset.index);
      });
    }

    timeCounter = setInterval(function() {
      countTimer();
    }, 1000);
    gameRunning = !gameRunning;
  } else {
    clearInterval(timeCounter);
    gameRunning = !gameRunning;
  }
}
/////////////////////////////////////////////////////

//Menu actions

//Start/Pause button
const menu = document.getElementById("menu");
const menuButtons = menu.querySelectorAll("button").forEach(e => {
  e.addEventListener("click", function() {
    if (this.id === "start") {
      startTimer();
      startMenu.classList.add("hidden");
      if (!gameRunning) {
        this.innerText = "Start";
      } else {
        this.innerText = "Pause";
      }
    }
  });
});

//Reset button
const getButton = document.getElementById("reset");
getButton.addEventListener("click", function() {
  cards.forEach(card => {
    card.style.backgroundImage = `url('tile-images/question-mark.png')`;
    card.classList.remove("flipped", "removed");
  });
  shuffle(cardsArray);
  timerSpan.innerText = 0;
  card1 = card2 = undefined;
  moves.innerText = 0;
  // gameRunning = !gameRunning;
  startMenu.innerHTML = "<h3>Welcome</h3><h4>Press start</h4>";
  // console.log(cardsArray);
});

//card clicking action

function changeBackground() {
  let deckArray = [...document.getElementsByClassName("card")];

  const flippedCardsAmount = document.querySelectorAll(".flipped").length;
  if (
    gameRunning &&
    flippedCardsAmount < 2 &&
    !this.classList.contains("removed")
  ) {
    this.style.backgroundImage = `url('tile-images/tile_${this.getAttribute(
      "data-index"
    )}.png')`;
    this.classList.toggle("flipped");
    if (flippedCardsAmount === 0) {
      card1 = deckArray.indexOf(this);
    } else {
      card2 = deckArray.indexOf(this);
    }

    //Compare flipped cards
    if (flippedCardsAmount === 1) {
      moves.innerText++;
      //ACTION WHEN PAIR HAS BEEN FOUND
      if (cardsArray[card1] === cardsArray[card2]) {
        // console.log("pair!");

        cards.forEach(e => {
          if (e.classList.contains("flipped")) {
            e.style.backgroundImage = "none";
            e.classList.remove("flipped");
            e.classList.add("removed");
          }
        });
        solvedPairs++;

        //CHECK IF GAME IS FINISHED
        if (cards.length / 2 - solvedPairs === 0) {
          console.log("finished");
          startMenu.classList.remove("hidden");
          startMenu.innerHTML = "<h3>Finished!</h3>";
          clearInterval(timeCounter);
        }
      } else {
        //ACTION WHEN NO PAIR WAS FOUND
        setTimeout(() => {
          deckArray[card1].classList.toggle("flipped");
          deckArray[
            card1
          ].style.backgroundImage = `url('tile-images/question-mark.png')`;
          deckArray[card2].classList.toggle("flipped");
          deckArray[
            card2
          ].style.backgroundImage = `url('tile-images/question-mark.png')`;
        }, 600);
      }
    }
  } else if (gameRunning) {
    console.log("flip cards back");
  }
}

cards.forEach(function(item) {
  item.addEventListener("click", changeBackground);
});
