class Game {
  constructor() {
    this.playerOneDeck = [];
    this.playerTwoDeck = [];
    this.slapJackDeck = [];
    this.allCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  //3) Create random index generator
  randomIndex(numberOfCards) {
    return Math.floor(Math.random() * numberOfCards)
  }

  //4) Randomize the allCards array
  randomizeDeck(randomDeck) {
    var holdCards = []; //hold randomly generated cards
    var index; //hold index to grab random card
    for (var i = 0; holdCards.length < randomDeck.length; i++) {
      index =  randomIndex(randomDeck.length)
      if (!holdCards.includes(index)) {
        holdCards.push(index);
        // console.log('yes')
        // console.table(i, index, 'yes', hold)
      }
    }
    randomDeck = holdCards;
    // allCards.sort()
    return randomDeck
  }

  //5) Assign initial cards to player #1
  handForPlayerOne(unrandomizedDeck) {
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

}
