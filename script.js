//by luka

//shemovitano elementebi
let player0Score = document.getElementById("score--0");
let player1Score = document.getElementById("score--1");
let diceImg = document.querySelector("img");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
let currentScr0 = document.getElementById("current--0");
let currentScr1 = document.getElementById("current--1");
let currentScr = 0;
let activePlayer = 0;
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnStart = document.querySelector(".start");
const startWindow = document.querySelector('.input-names');

function setPlayerNames(){
  let player0name = document.getElementById('name--0');
  let player1name = document.getElementById('name--1');
  let nameInp0 = document.getElementById('player1Name').value;
  let nameInp1 = document.getElementById('player2Name').value;
  player0name.textContent = nameInp0 || 'Player 1';
  player1name.textContent = nameInp1 || 'Player 2';
}


btnStart.addEventListener("click", function () {
  
  startWindow.classList.toggle('hide')
  setPlayerNames();
});


btnRoll.addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `dice-${randomNumber}.png`;
  if (randomNumber === 1) {
    switchPlayers();
  }
  if (!activePlayer) {
    currentScr += randomNumber;
    currentScr0.textContent = currentScr;
    if (randomNumber === 1) {
      currentScr = 0;
      currentScr0.textContent = 0;
    }
  } else if (activePlayer) {
    currentScr += randomNumber;
    currentScr1.textContent = currentScr;
    if (randomNumber === 1) {
      currentScr = 0;
      currentScr1.textContent = 0;
    }
  }

});



// motamasheebis cvlileba
function switchPlayers() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
  currentScr0.textContent = 0;
  currentScr1.textContent = 0;
  currentScr = 0;
}
function winGame() {
  if (parseInt(player0Score.textContent) >= 100) {
    player0.classList.add("player--winner");
    btnHold.style.display = "none";
    btnRoll.style.display = "none";
  } else if (parseInt(player1Score.textContent) >= 100) {
    player1.classList.add("player--winner");
    btnHold.style.display = "none";
    btnRoll.style.display = "none";
  }
}
//hold
btnHold.addEventListener("click", function () {
  if (!activePlayer) {
    let currentScore0 = parseInt(currentScr0.textContent);
    player0Score.textContent =
      parseInt(player0Score.textContent) + currentScore0;
  } else if (activePlayer) {
    let currentScore1 = parseInt(currentScr1.textContent);
    player1Score.textContent =
      parseInt(player1Score.textContent) + currentScore1;
  }

  winGame();
  if (currentScr != 0) {
    switchPlayers();
  }
  console.log('kkkkkk');
});

function init() {
  player0Score.textContent = 0;
  player1Score.textContent = 0;
  currentScr0.textContent = 0;
  currentScr1.textContent = 0;

  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");

  activePlayer = 0;
  currentScr = 0;
  randomNumber = undefined;
  btnHold.style.display = "block";
  btnRoll.style.display = "block";
  startWindow.classList.toggle('hide')

}

// restart game
// btnNew.addEventListener("click", init ());
