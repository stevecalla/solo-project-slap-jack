// //Variables
var newGame = document.querySelector('.title');
var middleCard = document.querySelector('.middle-card');
var replaceCard = document.querySelector('.middle-card2');

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
    middleCard.classList.remove('hidden')
    middleCard.classList.remove('img')
    middleCard.classList.add('left-card')
    replaceCard.innerHTML = `<img class="img" src="./assets/back.png" alt="player two deal into the middle">`
    // replaceCard.classList.remove('img')
    // replaceCard.classList.add('left-card')
    break;
  case "p": 
  case "P":
    x.currentDealStroke = 'p';
    x.playGame();
    middleCard.classList.remove('hidden')
    // middleCard.classList.add('img')
    // middleCard.classList.remove('left-card')
    replaceCard.innerHTML = `<img class="middle-card" src="./assets/blue-10.png" alt="middle deck of cards">`
    // replaceCard.classList.add('img')
    // replaceCard.classList.remove('left-card')
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
