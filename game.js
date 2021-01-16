class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.middleCardDeck = [];
    this.currentPlayer = null;
    // this.allCards = [{value: "J", suit: "2"}, {value: "A", suit: "2"}, {value: "J", suit: "2"}, {value: "1", suit: "2"}, {value: "J", suit: "2"}, {value: "A", suit: "2"}, {value: "1", suit: "2"}, {value: "1", suit: "2"}];
    this.allCards = [{value: "J"}, {value: "A"}, {value: "J"}, {value: "1"}, {value: "J"}, {value: "A"}, {value: "1"}, {value: "1"}]
    this.allCards2 = [
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

  startGame() {
    this.handForPlayers();
    this.currentPlayer = this.player1;
  }

  randomIndex(numberOfCards) {
    return Math.floor(Math.random() * numberOfCards)
  }

  randomizeDeck(randomDeck) {
    var holdCards = [];
    var index;
    for (var i = 0; holdCards.length < randomDeck.length; i++) {
      index =  this.randomIndex(randomDeck.length)
      if (!holdCards.includes(randomDeck[index])) {
        holdCards.push(randomDeck[index]);
      }
    }
    randomDeck = holdCards;
    // randomDeck.sort()
    return randomDeck
  }

  handForPlayers() {
    this.playerOneDeck = [];
    this.playerTwoDeck = [];
    var playerDeck = this.randomizeDeck(this.allCards);
    for (var i = 0; i < (Math.round(playerDeck.length * 0.5)); i++) {
      this.playerOneDeck.push(playerDeck[i]);
    } 
    for (var i = 0; i < (Math.round(playerDeck.length * 0.5)); i++) {
      if ((this.playerOneDeck.length + this.playerTwoDeck.length < this.allCards.length)) {
        this.playerTwoDeck.push(playerDeck[i + (Math.round(playerDeck.length * 0.5))]);
      }
    }

    console.table('MakeDeck=', this.middleCardDeck, this.playerOneDeck, this.playerTwoDeck)
    this.player1.playerDeck.push(this.playerOneDeck)
    this.player2.playerDeck.push(this.playerTwoDeck)
  }

  assignTurn() {
    if(this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  //7) Deal Into Middle Deck
  dealIntoMiddleDeck() {
    if(this.currentPlayer === this.player1) {
      this.middleCardDeck.unshift(this.playerOneDeck[0])
      this.playerOneDeck.splice(0, 1);
      this.assignTurn();
    } else {
      this.middleCardDeck.unshift(this.playerTwoDeck[0])
      this.playerTwoDeck.splice(0, 1);
      this.assignTurn();
    }
    // this.player1.playerDeck.splice(0,1); //NEW
    // console.log('7 Middle=', this.middleCardDeck[0].value);
    // console.log('7 One', this.playerOneDeck[0].value);
    // console.log('7 Two', this.playerTwoDeck[0].value);
    // console.table('Deal1=', this.middleCardDeck[0].value, this.playerOneDeck[0].value, this.playerTwoDeck[0].value)
    console.table('Deal=', this.middleCardDeck, this.middleCardDeck[0].value, this.playerOneDeck, this.playerTwoDeck)
    // console.log(this)
  }

  // playerOneDealIntoMiddleDeck() {
  //   this.middleCardDeck.unshift(this.playerOneDeck[0])
  //   this.playerOneDeck.splice(0, 1);
  //   // this.player1.playerDeck.splice(0,1); //NEW
  //   console.log('7 Middle=', this.middleCardDeck)
  //   console.log('7 One', this.playerOneDeck)
  //   // console.log(this)
  // }

  // //7a) Deal Into Middle Deck
  // playerTwoDealIntoMiddleDeck() {
  //   this.middleCardDeck.unshift(this.playerTwoDeck[0])
  //   this.playerTwoDeck.splice(0, 1);
  //   console.log('7a Middle=', this.middleCardDeck)
  //   console.log('7a Two=', this.playerTwoDeck)
  //   // console.log(this)
  // }

  //8a) Attempt Slapping
  //Jack & Double & Sandwich ONE
  slapOnJackOne() {
    console.log('slap')
    if (this.player1.playerDeck.length >= 0 
        && (this.middleCardDeck[0].value === "J" 
        || this.middleCardDeck[0].value === this.middleCardDeck[1].value
        || this.middleCardDeck[0].value === this.middleCardDeck[2].value)) {
      for (var i = 0; i < this.middleCardDeck.length; i++) {
        // this.player1.playerDeck.push(this.middleCardDeck[i].value);
      }
      this.middleCardDeck = [];
      this.player1.playerDeck = this.randomizeDeck(this.player1.playerDeck);
    }
    console.table('Slap1=', this.middleCardDeck, this.playerOneDeck, this.playerTwoDeck)
  }

  //8a) Jack & Double & Sandwich TWO {
  slapOnJackTwo() {
    console.log('slap2')
    if (this.player2.playerDeck.length >= 0 
          && (this.middleCardDeck[0].value === "J" 
          || this.middleCardDeck[0].value === this.middleCardDeck[1].value
          || this.middleCardDeck[0].value === this.middleCardDeck[2].value)) {
      for (var i = 0; i < this.middleCardDeck.length; i++) {
        this.player2.playerDeck.push(this.middleCardDeck[i].value);
      }
      this.middleCardDeck = [];
      this.player2.playerDeck = this.randomizeDeck(this.player2.playerDeck);
    }
    console.table('Slap2=', this.middleCardDeck, this.playerOneDeck, this.playerTwoDeck)
  }
}

  //9) Update Wins
  //Update wins logic

  //10) Player Wins
  //What happens if player wins

  //11) Reset Deck
  //Hwo to rest the deck
