// //Variables
var newGame = document.querySelector('.title');

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
    break;
  case "p": 
  case "P":
    x.currentDealStroke = 'p';
    x.playGame();
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
