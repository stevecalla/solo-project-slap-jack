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
    // alert('player 1 deal');
    x.currentKeyStroke = 'q';
    x.playGame();
    break;
  case "p": 
  case "P":
    // alert('player 2 deal')
    x.currentKeyStroke = 'p';
    x.playGame();
    break;
  case "f":
  case "F":
    alert('player 1 slap');
    break;
  case "j":
  case "J":
    alert('player 2 slap')
    break;
  default:
    return; // Quit when this doesn't handle the key event.
}
  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
