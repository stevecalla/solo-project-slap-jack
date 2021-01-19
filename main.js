// //Variables
var newGame = document.querySelector('.title');
var middleCard = document.querySelector('.middle-card');
var middleCardContainer = document.querySelector('.middle-card-container');
var winsPlayerOne = document.querySelector('.win-box-player1');
var winsPlayerTwo = document.querySelector('.win-box-player2');

//GLOBAL VARIABLES - ON PAGE LOAD

//Event Listeners
window.onload = function() {
  var newGame = new Game();
  // newGame.startGame();
}

var newGame = new Game();
newGame.startGame();


window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

//Keystroke Tracking
switch (event.key) {
  case "q":
  case "Q":
    newGame.currentDealStroke = 'q';
    newGame.playGame();
    middleCardContainer.classList.remove('hidden')
    middleCardContainer.classList.remove('img')
    middleCardContainer.classList.add('left-card')
    middleCardContainer.innerHTML = `<img class="img" src=${newGame.middleCardDeck[0].asset} alt="player two deal into the middle">`
    winsPlayerOne.innerText = `${newGame.player1.wins} Wins`
    break;
  case "p": 
  case "P":
    newGame.currentDealStroke = 'p';
    newGame.playGame();
    middleCardContainer.classList.remove('hidden')
    middleCardContainer.classList.add('img')
    middleCardContainer.classList.remove('left-card')
    middleCardContainer.innerHTML = `<img class="middle-card" src=${newGame.middleCardDeck[0].asset} alt="middle deck of cards">`
    winsPlayerTwo.innerText = `${newGame.player2.wins} Wins`
    break;
  case "f":
  case "F":
    newGame.currentSlapStroke = 'f';
    newGame.slapLogic();
    break;
  case "j":
  case "J":
    newGame.currentSlapStroke = 'j';
    newGame.slapLogic();
    break;
  default:
    return; // Quit when this doesn't handle the key event.
}
  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
