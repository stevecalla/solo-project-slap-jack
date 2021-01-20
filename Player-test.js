//1) Build player 1 and 2 as an empty array of card hands
var playerOneDeck = [];
var playerTwoDeck = [];

// console.log('1=', playerOneDeck);
// console.log('2=', playerTwoDeck);

//3) Build Slap Jack deck as deck of 52 cards; start with numbers 1 to 10
var allCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log('3=', allCards);

//3) Create random index generator
function randomIndex(num) {
  return Math.floor(Math.random() * num)
}

//4) Randomize the allCards array
function randomizeDeck(randomDeck) {
  var holdCards = []; //hold randomly generated cards
  var index; //hold index to grab random card
  for (var i = 0; holdCards.length < randomDeck.length; i++) {
    index =  randomIndex(randomDeck.length)
    if (!holdCards.includes(index)) {
      holdCards.push(index);
      // console.log('yes')
      // console.table(i, index, 'yes', holdCards)
    }
  }
  randomDeck = holdCards;
  // allCards.sort()
  return randomDeck
}
// console.log('1=', randomizeDeck());

//5) Assign initial cards to player #1
function handForPlayerOne(unrandomizedDeck) {
  playerOneDeck = [];
  playerTwoDeck = [];
  var playerDeck = randomizeDeck(unrandomizedDeck);
  for (var i = 0; i < (playerDeck.length* 0.5); i++) {
    playerOneDeck.push(playerDeck[i]);
  }
  for (var i = 0; i < (playerDeck.length* 0.5); i++) {
    playerTwoDeck.push(playerDeck[i + playerDeck.length * .5]);
  }
  console.table('2=', playerDeck, playerOneDeck, playerTwoDeck)
}
handForPlayerOne(allCards);

//Track Decks
// console.log('1=', playerOneDeck);
// console.log('2=', playerTwoDeck);
// console.log('3=', allCards);

// var listenOnBody = document.querySelector('body');
var listenOnSlapJack = document.querySelector('.title');
listenOnSlapJack.addEventListener('click', handForPlayerOne);
// listenOnBody.addEventListener('keydown', handForPlayerOne);
// listenOnSlapJack.removeEventListener('click ', handForPlayerOne);
// document.querySelector(".title").style.cursor = "pointer";

// const log = document.getElementById('body');

// document.addEventListener('body', logKey);

// function logKey(e) {
//   listenOnSlapJack.textContent += ` ${e.code}`;
//   console.log(`key=${event.key},code=${event.code}`);
//   handForPlayerOne();
// }

document.addEventListener("keydown", function(event) {
  console.log(event.which);
  if (event.which === 81) {
    console.log('Q')
  } else if (event.which === 80) {
    console.log('P')
  } else if (event.which === 70) {
    console.log('F');
  } else if (event.which === 74) {
    console.log('J')
  }
});


