//Variables
var newGame = document.querySelector('.title');
var playerOne = document.querySelector('.one');
var playerTwo = document.querySelector('.two');
var middleDeck = document.querySelector('.middle');

//Event Listeners
//window.OnLoad
newGame.addEventListener('click', currentGame);
playerOne.addEventListener('click', playerOneDeal);
playerTwo.addEventListener('click', playerTwoDeal);
middleDeck.addEventListener('click', slapMiddleDeckOne);

//Functions
var currentGame = new Game();

function playerOneDeal() {
  currentGame.playerOneDealIntoMiddleDeck();
  middleDeck.innerText = `${currentGame.middleCardDeck}`
}

function playerTwoDeal() {
  currentGame.playerTwoDealIntoMiddleDeck();
  middleDeck.innerText = `${currentGame.middleCardDeck}`
}

function slapMiddleDeckOne() {
  console.log('hello')
  currentGame.slapOnJackOne();
  currentGame.slapOnJackTwo();
  currentGame.slapOnDoubleOne();
  currentGame.slapOnDoubleTwo();
}

function currentGame() {
  // console.log('x')
  // console.log('a=', currentGame);
  // console.log('b=', currentGame.playerOneDeck);
  // console.log('c=', currentGame.allCards);
  // console.log('d=', currentGame.randomIndex(currentGame.allCards.length));
  // console.log('e=', currentGame.randomizeDeck(currentGame.allCards));
  // console.log('currentGame=', currentGame.handForPlayers());
  currentGame.handForPlayers();
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
