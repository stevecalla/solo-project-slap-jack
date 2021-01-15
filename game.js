class Game {
  constructor() {
    this.playerOneDeck = [];
    this.playerTwoDeck = [];
    this.slapJackDeck = [];
    // this.allCards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    this.allCards = [
      {value: "A", suit: "spades"},
      {value: "2", suit: "spades"},
      {value: "3", suit: "spades"},
      {value: "4", suit: "spades"},
      {value: "5", suit: "spades"},
      {value: "6", suit: "spades"},
      {value: "7", suit: "spades"},
      {value: "8", suit: "spades"},
      {value: "9", suit: "spades"},
      {value: "10", suit: "spades"},
      {value: "J", suit: "spades"},
      {value: "Q", suit: "spades"},
      {value: "K", suit: "spades"},
      {value: "A", suit: "diamonds"},
      {value: "2", suit: "diamonds"},
      {value: "3", suit: "diamonds"},
      {value: "4", suit: "diamonds"},
      {value: "5", suit: "diamonds"},
      {value: "6", suit: "diamonds"}, 
      {value: "7", suit: "diamonds"},
      {value: "8", suit: "diamonds"},
      {value: "9", suit: "diamonds"},
      {value: "10", suit: "diamonds"}, 
      {value: "J", suit: "diamonds"},
      {value: "Q", suit: "diamonds"},
      {value: "K", suit: "diamonds"},
      {value: "A", suit: "clubs"},
      {value: "2", suit: "clubs"},
      {value: "3", suit: "clubs"},
      {value: "4", suit: "clubs"},
      {value: "5", suit: "clubs"},
      {value: "6", suit: "clubs"},
      {value: "7", Suit: "clubs"},
      {value: "8", suit: "clubs"},
      {value: "9", suit: "clubs"},
      {value: "10", suit: "clubs"},
      {value: "J", suit: "clubs"},
      {value: "Q", suit: "clubs"},
      {value: "K", suit: "clubs"},
      {value: "A", suit: "hearts"},
      {value: "2", suit: "hearts"},
      {value: "3", suit: "hearts"},
      {value: "4", suit: "hearts"},
      {value: "5", suit: "hearts"},
      {value: "6", suit: "hearts"},
      {value: "7", suit: "hearts"},
      {value: "8", suit: "hearts"},
      {value: "9", suit: "hearts"},
      {value: "10",suit: "hearts"},
      {value: "J", suit: "hearts"},
      {value: "Q", suit: "hearts"},
      {value: "K", suit: "hearts"}
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
    var playerOne = new Player(1, this.playerOneDeck)
    var playerTwo = new Player(1, this.playerTwoDeck)
    return (this.playerOneDeck, this.playerTwoDeck)
  }

}
