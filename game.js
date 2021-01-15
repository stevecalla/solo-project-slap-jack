class Game {
  constructor() {
    this.playerOneDeck = [];
    this.playerTwoDeck = [];
    this.middleCardDeck = [];
    this.allCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // this.allCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];//jack
    // this.allCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];//double
    // this.allCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];//sandwich
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

  //3) Create random index generator
  randomIndex(numberOfCards) {
    // console.log('g=', numberOfCards)
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
    // randomDeck.sort()
    // console.log('x=', randomDeck)
    return randomDeck
  }

  //5) Assign initial cards to player #1 & 2
  handForPlayers(dealDeck) {
    this.playerOneDeck = [];
    this.playerTwoDeck = [];
    var playerDeck = this.randomizeDeck(dealDeck);
    // console.log('randomDeck=', playerDeck)
    for (var i = 0; i < (Math.round(playerDeck.length * 0.5)); i++) {
      this.playerOneDeck.push(playerDeck[i]);
    } 
    // console.log(Math.round(playerDeck.length * 0.5))
    for (var i = 0; i < (Math.round(playerDeck.length * 0.5)); i++) {
      if ((this.playerOneDeck.length + this.playerTwoDeck.length < this.allCards.length)) {
        this.playerTwoDeck.push(playerDeck[i + (Math.round(playerDeck.length * 0.5))]);
      }
    }
    console.table('Step5=', playerDeck, this.playerOneDeck, this.playerTwoDeck)
    // console.log('step5=', this)
    var playerOne = new Player(1, this.playerOneDeck)
    var playerTwo = new Player(1, this.playerTwoDeck)
    return (this.playerOneDeck, this.playerTwoDeck)
  }

  //6) Player turn - ?

  //7) Deal Into Middle Deck
  playerOneDealIntoMiddleDeck() {
    // happens upon click of the players respective keystroke
    // if keystroke === XXX then deal card to middle deck
    // console.log('7a=', this.middleCardDeck)
    this.middleCardDeck.unshift(this.playerOneDeck[0])
    this.playerOneDeck.splice(0, 1);
    console.log('7 Middle=', this.middleCardDeck)
    console.log('7 One', this.playerOneDeck)
    // console.log(this)
    // return(this)
  }

  //7a) Deal Into Middle Deck
  playerTwoDealIntoMiddleDeck() {
    // happens upon click of the players respective keystroke
    // if keystroke === XXX then deal card to middle deck
    // console.log('7a=', this.middleCardDeck)
    this.middleCardDeck.unshift(this.playerTwoDeck[0])
    this.playerTwoDeck.splice(0, 1);
    console.log('7a Middle=', this.middleCardDeck)
    console.log('7a Two=', this.playerTwoDeck)
    // console.log(this)
    // return(this)
  }

  //8) Attempt Slapping
  //slapOnJack
  slapOnJackOne() {
    //create for player2
    //create === jack not 10
    console.log('slap')
    if (this.middleCardDeck[0] === 10) {
      for (var i = 0; i < this.middleCardDeck.length; i++) {
        // console.log()
        this.playerOneDeck.push(this.middleCardDeck[i]);
      }
      this.middleCardDeck = [];
      console.log('8 Middle=', this.middleCardDeck)
      console.log('8 One', this.playerOneDeck)
      console.log('8 Two=', this.playerTwoDeck)
    }
  }

  slapOnJackTwo() {
    //create for player2
    //create === jack not 5
    console.log('slap')
    if (this.middleCardDeck[0] === 5) {
      for (var i = 0; i < this.middleCardDeck.length; i++) {
        // console.log()
        this.playerTwoDeck.push(this.middleCardDeck[i]);
      }
      this.middleCardDeck = [];
      console.log('8 Middle=', this.middleCardDeck)
      console.log('8 One', this.playerOneDeck)
      console.log('8 Two=', this.playerTwoDeck)
    }
  }
  //slapOnDouble
  //slapOnSandwich
  //badSlap
  slapOnBad() {
    console.log('slap')
    if (this.middleCardDeck[0] !== 10) {
      // for (var i = 0; i < this.middleCardDeck.length; i++) {
      //   // console.log()
        this.playerOneDeck.push(this.middleCardDeck[i]);
      // }
      console.log('8 Middle=', this.middleCardDeck)
      console.log('8 One', this.playerOneDeck)
      console.log('8 Two=', this.playerTwoDeck)
    }
  }

  //9) Update Wins
  //Update wins logic

  //10) Player Wins
  //What happens if player wins

  //11) Reset Deck
  //Hwo to rest the deck

}
