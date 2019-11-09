const getButton = document.getElementById("reset");
getButton.addEventListener("click", function() {
  console.log("działam")
  licze();
});
const timerSpan = document.getElementById('timer')
const myInterval = setInterval(() => timerSpan.innerText++, 1000);
//setTimeout(() => clearInterval(myInterval), 10000)

const licze = () => 
{
  console.log("dzialam")
}