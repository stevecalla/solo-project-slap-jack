// //Variables
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
var gameStatusMessage = document.querySelector('.game-status-message')

//GLOBAL VARIABLES - ON PAGE LOAD

//Event Listeners
window.onload = function() {
  var newGame = new Game();
  getFromStorage();
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

    // middleCardContainer.classList.remove('img');
    // middleCardContainer.classList.add('left-card');

    middleCardContainer.classList.add('middle-card-player1');

    middleCardContainer.classList.remove('hidden');
       
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

    middleCardContainer.classList.add('middle-card-player2');

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
    newGame.player1.saveToStorage();

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

    if ((newGame.player1.wins === 0 || newGame.player1.wins > 1) && newGame.player1.wins !== null) {
      winsPlayerOne.innerText = `${newGame.player1.wins} Wins`
    } else {
      winsPlayerOne.innerText = `${newGame.player1.wins} Win`
    }

    if ((newGame.player2.wins === 0 || newGame.player2.wins > 1) && newGame.player2.wins !== null) {
      winsPlayerTwo.innerText = `${newGame.player2.wins} Wins`
    } else {
      winsPlayerTwo.innerText = `${newGame.player2.wins} Win`
    }    
    
    if (newGame.slappedCount === 1) {
      middleCardContainer.classList.add('hidden');
    }

    break;
  case "j":
  case "J":
    newGame.currentSlapStroke = 'j';
    newGame.slapLogic();
    newGame.player1.saveToStorage();

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

    if ((newGame.player1.wins === 0 || newGame.player1.wins > 1) && newGame.player1.wins !== null) {
      winsPlayerOne.innerText = `${newGame.player1.wins} Wins`
    } else {
      winsPlayerOne.innerText = `${newGame.player1.wins} Win`
    }

    if ((newGame.player2.wins === 0 || newGame.player2.wins > 1) && newGame.player2.wins !== null) {
      winsPlayerTwo.innerText = `${newGame.player2.wins} Wins`
    } else {
      winsPlayerTwo.innerText = `${newGame.player2.wins} Win`
    }    
    
    if (newGame.slappedCount === 1) {
      middleCardContainer.classList.add('hidden');
    }
      
    break;
  default:
    return; // Quit when this doesn't handle the key event.
}
  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);

  function getFromStorage() {
    var retrievedObject1 = localStorage.getItem('1')
    var retrievedObject2 = localStorage.getItem('2')
    newGame.player1.wins = retrievedObject1;
    newGame.player2.wins = retrievedObject2;
  }
