class Game {
  constructor() {
    this.playerOneDeck = [];
    this.playerTwoDeck = [];
    this.slapJackDeck = [];
    // this.allCards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    this.allCards = [
      {Value: "A", Suit: "spades"},
      {Value: "2", Suit: "spades"},
      {Value: "3", Suit: "spades"},
      {Value: "4", Suit: "spades"},
      {Value: "5", Suit: "spades"},
      {Value: "6", Suit: "spades"},
      {Value: "7", Suit: "spades"},
      {Value: "8", Suit: "spades"},
      {Value: "9", Suit: "spades"},
      {Value: "10", Suit: "spades"},
      {Value: "J", Suit: "spades"},
      {Value: "Q", Suit: "spades"},
      {Value: "K", Suit: "spades"},
      {Value: "A", Suit: "diamonds"},
      {Value: "2", Suit: "diamonds"},
      {Value: "3", Suit: "diamonds"},
      {Value: "4", Suit: "diamonds"},
      {Value: "5", Suit: "diamonds"},
      {Value: "6", Suit: "diamonds"}, 
      {Value: "7", Suit: "diamonds"},
      {Value: "8", Suit: "diamonds"},
      {Value: "9", Suit: "diamonds"},
      {Value: "10", Suit: "diamonds"}, 
      {Value: "J", Suit: "diamonds"},
      {Value: "Q", Suit: "diamonds"},
      {Value: "K", Suit: "diamonds"},
      {Value: "A", Suit: "clubs"},
      {Value: "2", Suit: "clubs"},
      {Value: "3", Suit: "clubs"},
      {Value: "4", Suit: "clubs"},
      {Value: "5", Suit: "clubs"},
      {Value: "6", Suit: "clubs"},
      {Value: "7", Suit: "clubs"},
      {Value: "8", Suit: "clubs"},
      {Value: "9", Suit: "clubs"},
      {Value: "10", Suit: "clubs"},
      {Value: "J", Suit: "clubs"},
      {Value: "Q", Suit: "clubs"},
      {Value: "K", Suit: "clubs"},
      {Value: "A", Suit: "hearts"},
      {Value: "2", Suit: "hearts"},
      {Value: "3", Suit: "hearts"},
      {Value: "4", Suit: "hearts"},
      {Value: "5", Suit: "hearts"},
      {Value: "6", Suit: "hearts"},
      {Value: "7", Suit: "hearts"},
      {Value: "8", Suit: "hearts"},
      {Value: "9", Suit: "hearts"},
      {Value: "10", Suit: "hearts"},
      {Value: "J", Suit: "hearts"},
      {Value: "Q", Suit: "hearts"},
      {Value: "K", Suit: "hearts"}
      ]
  }

  //3) Create random index generator
  randomIndex(numberOfCards) {
    console.log('g=', numberOfCards)
    return Math.floor(Math.random() * numberOfCards)
  }

  //4) Randomize the allCards array
  randomizeDeck(randomDeck) {
    var holdCards = []; //hold randomly generated cards
    var index; //hold index to grab random card
    for (var i = 0; holdCards.length < this.allCards.length; i++) {
      index =  this.randomIndex(this.allCards.length)
      if (!holdCards.includes(this.allCards[index])) {
        holdCards.push(this.allCards[index]);
        // console.table(i, index, holdCards)
      }
    }
    randomDeck = holdCards;
    // allCards.sort()
    console.log('x=', randomDeck)
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
    console.log(Math.round(playerDeck.length * 0.5))
    for (var i = 0; i < (Math.round(playerDeck.length * 0.5)); i++) {
      this.playerTwoDeck.push(playerDeck[i + (Math.round(playerDeck.length * 0.5)-1)]);
    }
    console.table('1=', this.playerDeck, this.playerOneDeck, this.playerTwoDeck)
    console.log('1=', this)
    return (this.playerOneDeck, this.playerTwoDeck)
  }

}
