// *** Targeting Variables ***
var newGame = document.querySelector('.title');
var middleCard = document.querySelector('.middle-card');
var middleCardContainer = document.querySelector('.middle-card-container');
var middleCardPlayer1 = document.querySelector('.middle-card-player1');
var middleCardPlayer2 = document.querySelector('.middle-card-player2');
var winsPlayerOne = document.querySelector('.win-box-player1');
var winsPlayerTwo = document.querySelector('.win-box-player2');
var cardCountOne = document.querySelector('.card-count-one');
var cardCountTwo = document.querySelector('.card-count-two');
var cardCountMiddle = document.querySelector('.card-count-middle');
var gameStatusMessage = document.querySelector('.game-status-message');
var player = document.querySelector('.player');
var playerOneTurn = document.querySelector('.player-one');
var playerTwoTurn = document.querySelector('.player-two');
var playerOneKeystroke = document.querySelector('.keystroke-player1');
var playerTwoKeystroke = document.querySelector('.keystroke-player2');

// *** Global Variables ***
var newGame;

// *** Event Listeners ***
window.onload = function() {
  startNewGame();  
  newGame.player1.getFromStorage1();
  newGame.player2.getFromStorage2();
  renderWins();
}

window.addEventListener('keydown', dealKeystrokePlayer1);

window.addEventListener('keydown', dealKeystrokePlayer2);

window.addEventListener('keydown', slapKeystrokePlayer1);

window.addEventListener('keydown', slapKeystrokePlayer2);

// *** Functions ***
function startNewGame() {
  newGame = new Game();
  newGame.startGame();
}

function dealKeystrokePlayer1(event) {
  if (event.key === 'q' || event.key === 'Q') {
    newGame.currentDealStroke = 'q';
    newGame.playGame();
    renderBoxShawdowOne();
    showMiddleCardContainer()
    renderCardCount();
    hideGameStatusMessage();
    renderMiddleCard();
    playerOneTurnStyling();
  }
}

function dealKeystrokePlayer2(event) {
  if (event.key === 'p' || event.key === 'P') {
    newGame.currentDealStroke = 'p';
    newGame.playGame();
    renderBoxShawdowOne();
    showMiddleCardContainer()
    renderCardCount();
    hideGameStatusMessage();
    renderMiddleCard();
    playerTwoTurnStyling();
  }
}

function slapKeystrokePlayer1(event) {
  if (event.key === 'f' || event.key === 'F') {
    newGame.currentSlapStroke = 'f';
    newGame.slapLogic();
    hideMiddleCardContainer();
    renderCardCount();
    renderGameStatusMessage();
    renderWins();
    newGame.player1.saveToStorage();
  }
}

function slapKeystrokePlayer2(event) {
  if (event.key === 'j' || event.key === 'J') {
    newGame.currentSlapStroke = 'j';
    newGame.slapLogic();
    hideMiddleCardContainer();
    renderCardCount();
    renderGameStatusMessage();
    renderWins();
    newGame.player2.saveToStorage();
  }
}

function renderBoxShawdowOne() {
  middleCardContainer.classList.add('middle-card-player1')
  middleCardContainer.classList.remove('middle-card-player2')
}

function renderBoxShawdowTwo() {
  middleCardContainer.classList.add('middle-card-player2')
  middleCardContainer.classList.remove('middle-card-player1')
}

function playerOneTurnStyling() {
  playerOneTurn.classList.remove('player-one');
  playerTwoTurn.classList.add('player-two');
  playerOneKeystroke.classList.remove('keystroke-player1');
  playerTwoKeystroke.classList.add('keystroke-player2');
}

function playerTwoTurnStyling() {
  if (newGame.currentDealStroke === 'p' && newGame.player1.playerDeck.length !== 26 && newGame.player2.playerDeck.length !== 26) {
    playerOneTurn.classList.add('player-one');
    playerTwoTurn.classList.remove('player-two');
    playerOneKeystroke.classList.add('keystroke-player1');
    playerTwoKeystroke.classList.remove('keystroke-player2');
  }
}

function showMiddleCardContainer() {
  middleCardContainer.classList.remove('hidden');
}

function hideMiddleCardContainer() {
  if (newGame.slappedCount === 1 || newGame.gameStatusMessage === 'Player 2 WINS (ON SLAPJACK)!' || newGame.gameStatusMessage === 'Player 1 WINS (ON SLAPJACK)!') {
    middleCardContainer.classList.add('hidden');
  }
  renderMiddleCardIfBadSlap();
}

function renderMiddleCardIfBadSlap() {
  if ((newGame.player1.playerDeck.length > 0 && newGame.player2.playerDeck.length > 0) && 
        (newGame.gameStatusMessage === 'BAD SLAP! Player 1 forfeits a card to Player2!' 
        || newGame.gameStatusMessage === 'BAD SLAP! Player 2 forfeits a card to Player1!')) {
      middleCardContainer.classList.remove('hidden')
    }
  }

function renderCardCount() {
  if (newGame.deckMiddleCount === 0 || newGame.deckMiddleCount > 1) {
    cardCountMiddle.innerText = `${newGame.deckMiddleCount} Cards`;
  } else {
    cardCountMiddle.innerText = `${newGame.deckMiddleCount} Card`;
  }   

  if (newGame.deckOneCount === 0 || newGame.deckOneCount > 1) {
    cardCountOne.innerText = `${newGame.deckOneCount} Cards`;
  } else {
    cardCountOne.innerText = `${newGame.deckOneCount} Card`;
  }   

  if (newGame.deckTwoCount === 0 || newGame.deckTwoCount > 1) {
    cardCountTwo.innerText = `${newGame.deckTwoCount} Cards`;
  } else {
    cardCountTwo.innerText = `${newGame.deckTwoCount} Card`;
  }
}

function renderMiddleCard() {
  if (newGame.middleCardDeck.length !== 0) {
    middleCardContainer.innerHTML = `<img class="middle-card" src=${newGame.middleCardDeck[0].asset} alt="middle deck of cards">`;
  }
}
function renderGameStatusMessage() {
  gameStatusMessage.classList.remove('hidden');
  gameStatusMessage.innerText = `${newGame.gameStatusMessage}`;
}

function hideGameStatusMessage() {
  if (newGame.currentDealStroke === 'p' && newGame.player1.playerDeck.length === 26 && newGame.player2.playerDeck.length === 26) {
    gameStatusMessage.classList.remove('hidden');
  } else {
    gameStatusMessage.classList.add('hidden');
  }
}

function renderWins() {
  if ((newGame.player1.wins === 0 || newGame.player1.wins > 1) && newGame.player1.wins !== null) {
    winsPlayerOne.innerText = `${newGame.player1.wins} Wins`;
  } else {
    winsPlayerOne.innerText = `${newGame.player1.wins} Win`;
  }

  if ((newGame.player2.wins === 0 || newGame.player2.wins > 1) && newGame.player2.wins !== null) {
    winsPlayerTwo.innerText = `${newGame.player2.wins} Wins`;
  } else {
    winsPlayerTwo.innerText = `${newGame.player2.wins} Win`;
  }    
}


  
