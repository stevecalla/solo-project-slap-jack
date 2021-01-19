// //Variables
var newGame = document.querySelector('.title');
var middleCard = document.querySelector('.middle-card');
var middleCardContainer = document.querySelector('.middle-card-container');
var winsPlayerOne = document.querySelector('.win-box-player1');
var winsPlayerTwo = document.querySelector('.win-box-player2');
var cardCountOne = document.querySelector('.card-count-one');
var cardCountTwo = document.querySelector('.card-count-two');
var cardCountMiddle = document.querySelector('.card-count-middle');
var gameStatusMessage = document.querySelector('.game-status-message')

//GLOBAL VARIABLES - ON PAGE LOAD

//Event Listeners
window.onload = function() {
  var newGame = new Game();
  // newGame.startGame();
}

var newGame = new Game();
newGame.startGame();


window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

//Keystroke Tracking
switch (event.key) {
  case "q":
  case "Q":
    newGame.currentDealStroke = 'q';
    newGame.playGame();

    middleCardContainer.classList.remove('hidden');
    middleCardContainer.classList.remove('img');
    middleCardContainer.classList.add('left-card');
       
    // gameStatusMessage.innerText = `${newGame.gameStatusMessage}`;

    if (newGame.middleCardDeck.length !== 0) {
      middleCardContainer.innerHTML = `<img class="middle-card" src=${newGame.middleCardDeck[0].asset} alt="middle deck of cards">`
    }

    if (newGame.deckMiddleCount === 0 || newGame.deckMiddleCount > 1) {
      cardCountMiddle.innerText = `${newGame.deckMiddleCount} Cards`
    } else {
      cardCountMiddle.innerText = `${newGame.deckMiddleCount} Card`
    }   

    if (newGame.deckOneCount === 0 || newGame.deckOneCount > 1) {
      cardCountOne.innerText = `${newGame.deckOneCount} Cards`
    } else {
      cardCountOne.innerText = `${newGame.deckOneCount} Card`
    }   

    if (newGame.deckTwoCount === 0 || newGame.deckTwoCount > 1) {
      cardCountTwo.innerText = `${newGame.deckTwoCount} Cards`
    } else {
      cardCountTwo.innerText = `${newGame.deckTwoCount} Card`
    }

    break;
  case "p": 
  case "P":
    newGame.currentDealStroke = 'p';
    newGame.playGame();

    middleCardContainer.classList.add('img');
    middleCardContainer.classList.remove('left-card');


    middleCardContainer.classList.remove('hidden');
    
    if (newGame.middleCardDeck.length !== 0) {
      middleCardContainer.innerHTML = `<img class="middle-card" src=${newGame.middleCardDeck[0].asset} alt="middle deck of cards">`
    }

    gameStatusMessage.innerText = `${newGame.gameStatusMessage}`;

    if (newGame.deckMiddleCount === 0 || newGame.deckMiddleCount > 1) {
      cardCountMiddle.innerText = `${newGame.deckMiddleCount} Cards`
    } else {
      cardCountMiddle.innerText = `${newGame.deckMiddleCount} Card`
    }   

    if (newGame.deckOneCount === 0 || newGame.deckOneCount > 1) {
      cardCountOne.innerText = `${newGame.deckOneCount} Cards`
    } else {
      cardCountOne.innerText = `${newGame.deckOneCount} Card`
    }   

    if (newGame.deckTwoCount === 0 || newGame.deckTwoCount > 1) {
      cardCountTwo.innerText = `${newGame.deckTwoCount} Cards`
    } else {
      cardCountTwo.innerText = `${newGame.deckTwoCount} Card`
    }
      
    break;
  case "f":
  case "F":
    newGame.currentSlapStroke = 'f';
    newGame.slapLogic();

    gameStatusMessage.innerText = `${newGame.gameStatusMessage}`;

    if (newGame.player1.wins === 0 || newGame.player1.wins > 1) {
      winsPlayerOne.innerText = `${newGame.player1.wins} Wins`
    } else {
      winsPlayerOne.innerText = `${newGame.player1.wins} Win`
    }

    if (newGame.player2.wins === 0 || newGame.player2.wins > 1) {
      winsPlayerTwo.innerText = `${newGame.player2.wins} Wins`
    } else {
      winsPlayerTwo.innerText = `${newGame.player2.wins} Win`
    }    

    break;
  case "j":
  case "J":
    newGame.currentSlapStroke = 'j';
    newGame.slapLogic();
    gameStatusMessage.innerText = `${newGame.gameStatusMessage}`;

    if (newGame.player1.wins === 0 || newGame.player1.wins > 1) {
      winsPlayerOne.innerText = `${newGame.player1.wins} Wins`
    } else {
      winsPlayerOne.innerText = `${newGame.player1.wins} Win`
    }

    if (newGame.player2.wins === 0 || newGame.player2.wins > 1) {
      winsPlayerTwo.innerText = `${newGame.player2.wins} Wins`
    } else {
      winsPlayerTwo.innerText = `${newGame.player2.wins} Win`
    }    
      
    break;
  default:
    return; // Quit when this doesn't handle the key event.
}
  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);

// MESSAGES
// - BAD SLAP! Player 2 forfeits a card to Player 1!
// - DOUBLE! Player 2 takes the pile!
// - SANDWICH! Player 2 takes the pile!
// - SLAPJACK! Player 1 takes the pile!
// - Player 1 WINS!
