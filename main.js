// //Variables
var newGame = document.querySelector('.title');
var middleCard = document.querySelector('.middle-card');
var middleCardContainer = document.querySelector('.middle-card-container')

//GLOBAL VARIABLES - ON PAGE LOAD

//Event Listeners
window.onload = function() {
  var x = new Game();
  // x.startGame();
}

var x = new Game();
x.startGame();


window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

//Keystroke Tracking
switch (event.key) {
  case "q":
  case "Q":
    x.currentDealStroke = 'q';
    x.playGame();
    middleCardContainer.classList.remove('hidden')
    middleCardContainer.classList.remove('img')
    middleCardContainer.classList.add('left-card')
    middleCardContainer.innerHTML = `<img class="img" src=${x.middleCardDeck[0].asset} alt="player two deal into the middle">`
    break;
  case "p": 
  case "P":
    x.currentDealStroke = 'p';
    x.playGame();
    middleCardContainer.classList.remove('hidden')
    middleCardContainer.classList.add('img')
    middleCardContainer.classList.remove('left-card')
    middleCardContainer.innerHTML = `<img class="middle-card" src=${x.middleCardDeck[0].asset} alt="middle deck of cards">`
    break;
  case "f":
  case "F":
    x.currentSlapStroke = 'f';
    x.slapLogic();
    break;
  case "j":
  case "J":
    x.currentSlapStroke = 'j';
    x.slapLogic();
    break;
  default:
    return; // Quit when this doesn't handle the key event.
}
  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
