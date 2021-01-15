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
    for (var i = 0; holdCards.length < this.allCards.length; i++) {
      index =  this.randomIndex(this.allCards.length)
      if (!holdCards.includes(index)) {
        holdCards.push(index);
        // console.table(i, index, holdCards)
      }
    }
    randomDeck = holdCards;
    // allCards.sort()
    // console.log('x=', randomDeck)
    return randomDeck
  }

  //5) Assign initial cards to player #1 & 2
  handForPlayers(unrandomizedDeck) {
    this.playerOneDeck = [];
    this.playerTwoDeck = [];
    var playerDeck = this.randomizeDeck(unrandomizedDeck);
    console.log('please=', playerDeck)
    for (var i = 0; i < (playerDeck.length * 0.5); i++) {
      this.playerOneDeck.push(playerDeck[i]);
    } 
    for (var i = 0; i < (playerDeck.length * 0.5); i++) {
      this.playerTwoDeck.push((playerDeck[i + playerDeck.length * .5]));
    }
    console.table('1=', this.playerDeck, this.playerOneDeck, this.playerTwoDeck)
    console.log('1=', this)
    return (this.playerOneDeck, this.playerTwoDeck)
  }

}
