const trialArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const licze = () => {
  console.log("działam");
};

const getButton = document.getElementById("reset");
getButton.addEventListener("click", function() {
  licze();

  shuffle(trialArray);
  console.log(trialArray);
});

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
