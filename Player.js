//1) Build player 1 and 2 as an empty array of card hands
var playerOneDeck = [];
var playerTwoDeck = [];

// console.log('1=', playerOneDeck);
// console.log('2=', playerTwoDeck);

//3) Build Slap Jack deck as deck of 52 cards; start with numbers 1 to 10
var slapJackDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('3=', slapJackDeck);

//3) Create random index generator
function randomIndex(num) {
  return Math.floor(Math.random() * num)
}

//4) Randomize the slapJackDeck array
function randomizeDeck() {
  var hold = []; //hold randomly generated cards
  var index; //hold index to grab random card
  for (var i = 0; hold.length < slapJackDeck.length; i++) {
    index =  randomIndex(slapJackDeck.length)
    if (!hold.includes(index)) {
      hold.push(index);
      // console.log('yes')
      // console.table(i, index, 'yes', hold)
    }
  }
  slapJackDeck = hold;
  // slapJackDeck.sort()
  return  slapJackDeck
}
// console.log('1=', randomizeDeck());

//3a) Assign initial cards to player #1
function handForPlayerOne() {
  playerOneDeck = [];
  playerTwoDeck = [];
  var deck = randomizeDeck();
  for (var i = 0; i < (deck.length* 0.5); i++) {
    playerOneDeck.push(deck[i]);
  }
  for (var i = 0; i < (deck.length* 0.5); i++) {
    playerTwoDeck.push(deck[i + deck.length * .5]);
  }
  console.log('2=', deck, playerOneDeck, playerTwoDeck)
}
handForPlayerOne();

//Track Decks
console.log('1=', playerOneDeck);
console.log('2=', playerTwoDeck);
console.log('3=', slapJackDeck);

var listenOnBody = document.querySelector('body');
var listenOnSlapJack = document.querySelector('.title');
// listenOnSlapJack.addEventListener('click', handForPlayerOne);
// listenOnBody.addEventListener('keydown', handForPlayerOne);
// listenOnSlapJack.removeEventListener('click ', handForPlayerOne);
document.querySelector(".title").style.cursor = "pointer";

// const log = document.getElementById('body');

// document.addEventListener('body', logKey);

// function logKey(e) {
//   listenOnSlapJack.textContent += ` ${e.code}`;
//   console.log(`key=${event.key},code=${event.code}`);
//   handForPlayerOne();
// }

// document.addEventListener("keydown", function(event) {
//   console.log(event.which);
//   if (event.which === 70) {
//     console.log('yes')
//   }
// });


