class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.middleCardDeck = [];
    this.handCount = 0;
    this.slapped = 0;
    this.currentPlayer = this.player1;
    // this.allCards2 = [{value: "J", suit: "2"}, {value: "A", suit: "2"}, {value: "J", suit: "2"}, {value: "1", suit: "2"}, {value: "J", suit: "2"}, {value: "A", suit: "2"}, {value: "1", suit: "2"}, {value: "1", suit: "2"}];
    this.allCards = [{value: "J"}, {value: "A"}, {value: "1"}, {value: "2"}, {value: "3"}, {value: "A"}, {value: "5"}, {value: "4"}, {value: "8"}]
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
    // this.currentPlayer = this.player1;
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
    this.player1.playerDeck = [];
    this.player2.playerDeck = [];
    var playerDeck = this.randomizeDeck(this.allCards);
    // console.log('a=', playerDeck.length)
    // console.log('b=', playerDeck)
    for (var i = 0; i < playerDeck.length * 0.5; i++) {
      this.player1.playerDeck.push(playerDeck[i]);
    } 
    for (var i = 0; i < (Math.round(playerDeck.length * 0.5)); i++) {
      if ((this.player1.playerDeck.length + this.player2.playerDeck.length < this.allCards.length)) {
        this.player2.playerDeck.push(playerDeck[i + (Math.round(playerDeck.length * 0.5))]);
      }
    }
    console.table('MakeDeck=', this.middleCardDeck, 'one=', this.player1.playerDeck, 'two=', this.player2.playerDeck);
  }

  assignTurn() {
    if(this.currentPlayer === this.player1 && this.player2.playerDeck.length > 0) {
      this.currentPlayer = this.player2;
    } else if (this.currentPlayer === this.player2 && this.player1.playerDeck.length > 0) {
      this.currentPlayer = this.player1;
    }
  }

  playGame() {
    this.handCount ++;
    console.log('a) count=', this.handCount);
    // console.log('b) middleCardLength#1', this.middleCardDeck.length)
    this.dealBothPlayersHaveCards();
    this.slapLogic()
    this.slapped = 0;
    this.assignTurn();
    this.winLogic();
    // console.log('4', this.player1.playerDeck.length + this.player2.playerDeck.length + this.middleCardDeck.length);
    if ((this.player1.playerDeck.length + this.player2.playerDeck.length + this.middleCardDeck.length) > 53) {
      // console.log('all', this.allCards.length);
      // alert('4', this.player1.playerDeck.length + this.player2.playerDeck.length + this.middleCardDeck.length)
      // console.log('one', this.player1.playerDeck.length);
      // console.log('two', this.player2.playerDeck.length);
      // console.log('middle', this.middleCardDeck.length);
      return "card limit"}
      console.log('total', this.player1.playerDeck.length + this.player2.playerDeck.length + this.middleCardDeck.length);
    }

  dealBothPlayersHaveCards() {
    console.log('c) player', this.currentPlayer)
    if (this.currentPlayer === this.player1) {
      this.middleCardDeck.unshift(this.player1.playerDeck[0])
      this.player1.playerDeck.splice(0, 1);
    } else {
      this.middleCardDeck.unshift(this.player2.playerDeck[0])
      this.player2.playerDeck.splice(0, 1);
    }    
    // console.table('d) Deal=', "Middle=", this.middleCardDeck, "Middle1", 'One=', this.player1.playerDeck, "Two=", this.player2.playerDeck)
    // console.log(this)
  }

  slapLogic() {
    console.log('jack 0=', this.middleCardDeck[0].value)
    this.slapOnJack();
    // console.log('f) middleCardLength#2', this.middleCardDeck.length)
    if(this.middleCardDeck.length > 1) {
      console.log('double 0=', this.middleCardDeck[0].value)
      console.log('double 1=', this.middleCardDeck[1].value)
      this.slapOnDouble()
    }
    if(this.middleCardDeck.length > 2) {
      console.log('sandwich 0=', this.middleCardDeck[0].value)
      console.log('sandwich 2=', this.middleCardDeck[2].value)
      this.slapOnSandwich()
    }
    // if (this.slapped > 0) {
    //   this.badSlap();
    //   console.log('badslap')
    //   console.log(this.slapped);
    // }
    // console.table('z) Slap=', "Middle=", this.middleCardDeck, "Middle1", 'One=', this.player1.playerDeck, "Two=", this.player2.playerDeck)
    console.table('z) Slap=', "Middle=", this.middleCardDeck.length, "Middle1", 'One=', this.player1.playerDeck.length, "Two=", this.player2.playerDeck.length)
  }

  slapOnJack() {
    // console.log('e) middle 0=', this.middleCardDeck[0].value)
    if (this.currentPlayer === this.player1 && this.middleCardDeck[0].value === "J") {
      this.slapActionPlayerOne();
      console.log('jack-One');
      this.slapped ++;
    } else if (this.currentPlayer === this.player2 && this.middleCardDeck[0].value === "J") {
      this.slapActionPlayerTwo();
      console.log('jack-Two');
      this.slapped ++;
    } 
  }

  slapOnDouble() {
    console.log('double');
    // console.log(this.middleCardDeck[0].value)
    // console.log(this.middleCardDeck[1].value)
    if (this.currentPlayer === this.player1
      && (this.middleCardDeck[0].value === this.middleCardDeck[1].value)) {
      this.slapActionPlayerOne();
      console.log('doubles-One')
      this.slapped ++;
    } else if (this.middleCardDeck[0].value === this.middleCardDeck[1].value) {
      this.slapActionPlayerTwo();
      console.log('doubles-Two');
      this.slapped ++;
    }
  }

  slapOnSandwich() {
    console.log('sandwich');
    // console.log(this.middleCardDeck[0].value)
    // console.log(this.middleCardDeck[2].value)
    if (this.currentPlayer === this.player1
      && (this.middleCardDeck[0].value === this.middleCardDeck[2].value)) {
        this.slapActionPlayerOne();
        console.log('sandwich-One');
        this.slapped ++;
    } else if (this.middleCardDeck[0].value === this.middleCardDeck[2].value) {
        this.slapActionPlayerTwo();
        console.log('sandwich-Two');
        this.slapped ++;
    }
  }

  // badSlap() {
  //   if (this.currentPlayer === this.player1) {
  //     this.player2.playerDeck.push(this.player1.playerDeck[0]);
  //     this.player1.playerDeck.slice(0, 1);
  //   } else if (this.currentPlayer === this.player2) {
  //     this.player1.playerDeck.push(this.player2.playerDeck[0]);
  //     this.player2.playerDeck.slice(0, 1);
  //   }
  // }

  slapActionPlayerOne() {
    for (var i = 0; i < this.middleCardDeck.length; i++) {
      this.player1.playerDeck.push(this.middleCardDeck[i]);
    } 
    this.player1.playerDeck = this.randomizeDeck(this.player1.playerDeck);
    this.middleCardDeck = [];  
  }

  slapActionPlayerTwo() {
    for (var i = 0; i < this.middleCardDeck.length; i++) {
      this.player2.playerDeck.push(this.middleCardDeck[i]);
    } 
    this.player2.playerDeck = this.randomizeDeck(this.player2.playerDeck);
    this.middleCardDeck = []; 
  }

  //9) Update Wins
  //Update wins logic

  //10) Player Wins
  winLogic() {
    if (this.player1.playerDeck.length >= 52) {
      this.player1.wins ++;
    }

    if (this.player2.playerDeck.length >= 52) {
      this.player2.wins ++;
      // return ("player 2 wins ")
    } 
  }

}

  //11) Reset Deck
  //Hwo to rest the deck
