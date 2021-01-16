// //Variables
var newGame = document.querySelector('.title');
var playerOne = document.querySelector('.one');
var playerTwo = document.querySelector('.two');
var middleDeck = document.querySelector('.middle');
// var keydownQ = document.querySelector('event.which');

//GLOBAL VARIABLES - ON PAGE LOAD
var currentGame = new Game();
console.log(currentGame)

// //Event Listeners
// //window.OnLoad
// newGame.addEventListener('click', startGame);
// playerOne.addEventListener('click', playerOneDeal);
// playerTwo.addEventListener('click', playerTwoDeal);
// middleDeck.addEventListener('click', slapMiddleDeckOne);

function playerOneDeal() {
  console.log('a')
  currentGame.playerOneDealIntoMiddleDeck();
  middleDeck.innerText = `${currentGame.middleCardDeck[0].a}, ${currentGame.allCards.length}, ${currentGame.middleCardDeck.length}, ${currentGame.playerOneDeck.length}, ${currentGame.playerTwoDeck.length}`
}

function playerTwoDeal() {
  currentGame.playerTwoDealIntoMiddleDeck();
  middleDeck.innerText = `${currentGame.middleCardDeck[0].a}, ${currentGame.allCards.length}, ${currentGame.middleCardDeck.length}, ${currentGame.playerOneDeck.length}, ${currentGame.playerTwoDeck.length}`
}

function slapMiddleDeckOne() {
  console.log('hello')
  currentGame.slapOnJackOne();
  currentGame.slapOnJackTwo();
  console.log(currentGame.middleCardDeck[1])
  console.log(currentGame.middleCardDeck[1])
}

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
