// //Variables
var newGame = document.querySelector('.title');
var playerOne = document.querySelector('.one');
var playerTwo = document.querySelector('.two');
var middleDeck = document.querySelector('.middle');
// var keydownQ = document.querySelector('event.which');

//GLOBAL VARIABLES - ON PAGE LOAD
var x = new Game();
x.startGame();
console.log(x)


window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

switch (event.key) {
  case "q":
  case "Q":
    alert('player 1 deal');
    x.currentKeyStroke = 'q';
    // x.currentPlayer = x.player1;
    x.playGame();
    break;
  case "p": 
  case "P":
    alert('player 2 deal')
    x.currentKeyStroke = 'p';
    // x.currentPlayer = x.player2;
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


// document.addEventListener("keydown", function(event) {
//   console.log(event.which);
//   if (event.which === 81) {
//     console.log('Q');
//     x.currentPlayer = x.player1
//     x.playGame();
//   } 
//   // else if (event.which === 80) {
//   //   console.log('P');
//   //   x.currentPlayer = x.player2
//   //   x.playGame();
//   // } 
//   else if (event.which === 70) {
//     console.log('F');
//   } else if (event.which === 74) {
//     console.log('J');
//   }
// });

// //Event Listeners
// //window.OnLoad
// newGame.addEventListener('click', startGame);
// playerOne.addEventListener('click', playerOneDeal);
// playerTwo.addEventListener('click', playerTwoDeal);
// middleDeck.addEventListener('click', slapMiddleDeckOne);

function currentGame() {
  // console.log('x')
  console.log('a=', currentGame);
  // console.log('b=', currentGame.playerOneDeck);
  // console.log('c=', currentGame.allCards);
  // console.log('d=', currentGame.randomIndex(currentGame.allCards.length));
  // console.log('e=', currentGame.randomizeDeck(currentGame.allCards));
  // console.log('currentGame=', currentGame.handForPlayers());
  currentGame.startGame();
  // currentGame.handForPlayers();
  // currentGame.assignTurn();
  // console.log('g=', currentGame.playerOneDeck[0].value)
  // console.log('i=', currentGame.dealIntoMiddleDeck());
  // if(currentGame.playerOneDeck[0].value === currentGame.playerOneDeck[0].value) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
  // if(currentGame.playerOneDeck[0].value === currentGame.playerOneDeck[1].value) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
  // if(currentGame.playerOneDeck[0] === currentGame.playerOneDeck[14]) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
}

//eventlistener for each keystroke
//player ONE keystroke or click
// 1) player 1 event listener active
// 2) player 2 event listener not active
// 3) player 1 messege = please deal or something
// 4) deal to (unshift) dealintoMiddleDeck
// 5) splice from player one hand
// 6) all for slaps to occur
// 7) run slap logic


// document.addEventListener("keydown", function(event) {
//   console.log(event.which);
//   if (event.which === 81) {
//     console.log('Q');
//     takeTurn()//
//     playerOneDeal();
//   } else if (event.which === 80) {
//     console.log('P');
//     // playerTwoDeal();
//   } else if (event.which === 70) {
//     console.log('F');
//     // slapMiddleDeckOne()
//   } else if (event.which === 74) {
//     console.log('J');
//     // slapMiddleDeckOne()
//   }
// });
