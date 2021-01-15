//Variables
var newGame = document.querySelector('.title');
var playerOne = document.querySelector('.one');
var playerTwo = document.querySelector('.two');
var middleDeck = document.querySelector('.middle');

//Event Listeners
//window.OnLoad
newGame.addEventListener('click', startGame);
playerOne.addEventListener('click', playerOneDeal);
playerTwo.addEventListener('click', playerOneDeal);

//Functions
var startGame = new Game();

function playerOneDeal() {
  startGame.playerOneDealIntoMiddleDeck();
  middleDeck.innerText = `${startGame.middleCardDeck}`
  playerTwo.addEventListener('click', playerOneDeal);
}

function playerTwoDeal() {
  startGame.playerTwoDealIntoMiddleDeck();
  middleDeck.innerText = `${startGame.middleCardDeck}`
}

function startGame() {
  // console.log('x')
  // console.log('a=', startGame);
  // console.log('b=', startGame.playerOneDeck);
  // console.log('c=', startGame.allCards);
  // console.log('d=', startGame.randomIndex(startGame.allCards.length));
  // console.log('e=', startGame.randomizeDeck(startGame.allCards));
  // console.log('startGame=', startGame.handForPlayers());
  startGame.handForPlayers();
  // console.log('g=', startGame.playerOneDeck[0].value)
  // console.log('i=', startGame.dealIntoMiddleDeck());
  // if(startGame.playerOneDeck[0].value === startGame.playerOneDeck[0].value) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
  // if(startGame.playerOneDeck[0].value === startGame.playerOneDeck[1].value) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
  // if(startGame.playerOneDeck[0] === startGame.playerOneDeck[14]) {
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
