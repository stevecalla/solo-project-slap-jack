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

// *** Global Variables ***
// var newGame;
var newGame = new Game();
newGame.startGame();

// // *** Event Listeners ***
// window.onload = function() {
//   startNewGame();
//   getFromStorage();
//   renderWins();
// }

// // *** Functions ***
// function startNewGame() {
//   newGame.startGame();
// }

document.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return;
  }
// *** Keystroke Tracking +***
  switch (event.key) {
    case "q":
    case "Q":
      newGame.currentDealStroke = 'q';
      newGame.playGame();
      renderBoxShawdowOne();
      showMiddleCardContainer()
      renderCardCount();
      hideGameStatusMessage();
      renderMiddleCard();
      playerOneTurnStyling();
      break;
    case "p": 
    case "P":
      newGame.currentDealStroke = 'p';
      newGame.playGame();
      renderBoxShawdowTwo();
      showMiddleCardContainer()
      renderCardCount();
      hideGameStatusMessage();
      renderMiddleCard();
      playerTwoTurnStyling();
      break;
    case "f":
    case "F":
      newGame.currentSlapStroke = 'f';
      newGame.slapLogic();
      hideMiddleCardContainer();
      renderCardCount();
      renderGameStatusMessage();
      renderWins();
      newGame.player1.saveToStorage();
      break;
    case "j":
    case "J":
      newGame.currentSlapStroke = 'j';
      newGame.slapLogic();
      hideMiddleCardContainer();
      renderCardCount();
      renderGameStatusMessage();
      renderWins();
      newGame.player1.saveToStorage();
      break;
    default:
      return; 
  }
    event.preventDefault();
}, true);

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
}

function playerTwoTurnStyling() {
  if (newGame.currentDealStroke === 'p' && newGame.player1.playerDeck.length !== 26 && newGame.player2.playerDeck.length !== 26) {
    playerOneTurn.classList.add('player-one');
    playerTwoTurn.classList.remove('player-two');
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

function getFromStorage() {
  var retrievedObject1 = localStorage.getItem('1');
  var retrievedObject2 = localStorage.getItem('2');

  if(localStorage.getItem('1') === null) {
    retrievedObject1 = 0;
    retrievedObject2 = 0;
  }

  newGame.player1.wins = retrievedObject1;
  newGame.player2.wins = retrievedObject2;
  }


  
