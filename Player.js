//1) Build player 1 and 2 as an empty array of card hands
var playerOneDeck = [];
var playerTwoDeck = [];

console.log('1=', playerOneDeck);
console.log('2=', playerTwoDeck);

//2) Build Slap Jack deck as deck of 52 cards; start with numbers 1 to 10
var slapJackDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('3=', slapJackDeck.length * .5);

//2a) Randomize the array
// for (var i = 0; i < slapJackDeck.length; i++) {
//   slapJackDeck.push(slapJackDeck[i]);
//   console.log(slapJackDeck)
// }

//3) Build for loop to deal cards for player one
//5) Randomize the deck using #4 below
//6) Remove player one cards from slapjack deck
for (var i = 0; i < slapJackDeck.length * 0.5; i++) { //3
  var x = randomIndex(slapJackDeck.length); //5
  // console.log('6=', slapJackDeck.length)
  playerOneDeck.push(slapJackDeck[x]); //5
  slapJackDeck.splice(x, 1) //6
  // console.log(slapJackDeck)
}

//4) Build randomize function
function randomIndex(num) {
  // console.log('z=', slapJackDeck)
  return Math.floor(Math.random() * num)
}


//Track Decks
console.log('1=', playerOneDeck);
console.log('2=', playerTwoDeck);
console.log('3=', slapJackDeck);
