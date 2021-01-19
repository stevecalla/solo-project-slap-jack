class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.middleCardDeck = [];
    this.handCount = 1;
    this.slapped = 0;
    this.currentDealStroke = 'q';
    this.currentSlapStroke = null;
    this.currentPlayer = null;
    this.priorTurn = null;
    this.deckMiddleCount = null;
    this.deckOneCount = null;
    this.deckTwoCount = null;
    this.allCards = [
      {value: "9", suit: "blue", asset: "./assets/blue-09.png"},
      {value: "10", suit: "blue", asset: "./assets/blue-10.png"},
      {value: "J", suit: "blue", asset: "./assets/blue-jack.png"},
      {value: "9", suit: "gold", asset: "./assets/gold-09.png"},
      {value: "10", suit: "gold", asset: "./assets/gold-10.png"},
      {value: "J", suit: "gold", asset: "./assets/gold-jack.png"},
    ]
    this.allCards2 = [
      {value: "1", suit: "blue", asset: "./assets/blue-01.png"},
      {value: "2", suit: "blue", asset: "./assets/blue-02.png"},
      {value: "3", suit: "blue", asset: "./assets/blue-03.png"},
      {value: "4", suit: "blue", asset: "./assets/blue-04.png"},
      {value: "5", suit: "blue", asset: "./assets/blue-05.png"},
      {value: "6", suit: "blue", asset: "./assets/blue-06.png"},
      {value: "7", suit: "blue", asset: "./assets/blue-07.png"},
      {value: "8", suit: "blue", asset: "./assets/blue-08.png"},
      {value: "9", suit: "blue", asset: "./assets/blue-09.png"},
      {value: "10", suit: "blue", asset: "./assets/blue-10.png"},
      {value: "J", suit: "blue", asset: "./assets/blue-jack.png"},
      {value: "K", suit: "blue", asset: "./assets/blue-king.png"},
      {value: "Q", suit: "blue", asset: "./assets/blue-queen.png"},
      {value: "1", suit: "gold", asset: "./assets/gold-01.png"},
      {value: "2", suit: "gold", asset: "./assets/gold-02.png"},
      {value: "3", suit: "gold", asset: "./assets/gold-03.png"},
      {value: "4", suit: "gold", asset: "./assets/gold-04.png"},
      {value: "5", suit: "gold", asset: "./assets/gold-05.png"},
      {value: "6", suit: "gold", asset: "./assets/gold-06.png"},
      {value: "7", suit: "gold", asset: "./assets/gold-07.png"},
      {value: "8", suit: "gold", asset: "./assets/gold-08.png"},
      {value: "9", suit: "gold", asset: "./assets/gold-09.png"},
      {value: "10", suit: "gold", asset: "./assets/gold-10.png"},
      {value: "J", suit: "gold", asset: "./assets/gold-jack.png"},
      {value: "K", suit: "gold", asset: "./assets/gold-king.png"},
      {value: "Q", suit: "gold", asset: "./assets/gold-queen.png"},
      {value: "1", suit: "green", asset: "./assets/green-01.png"},
      {value: "2", suit: "green", asset: "./assets/green-02.png"},
      {value: "3", suit: "green", asset: "./assets/green-03.png"},
      {value: "4", suit: "green", asset: "./assets/green-04.png"},
      {value: "5", suit: "green", asset: "./assets/green-05.png"},
      {value: "6", suit: "green", asset: "./assets/green-06.png"},
      {value: "7", suit: "green", asset: "./assets/green-07.png"},
      {value: "8", suit: "green", asset: "./assets/green-08.png"},
      {value: "9", suit: "green", asset: "./assets/green-09.png"},
      {value: "10", suit: "green", asset: "./assets/green-10.png"},
      {value: "J", suit: "green", asset: "./assets/green-jack.png"},
      {value: "K", suit: "green", asset: "./assets/green-king.png"},
      {value: "Q", suit: "green", asset: "./assets/green-queen.png"},
      {value: "1", suit: "red", asset: "./assets/red-01.png"},
      {value: "2", suit: "red", asset: "./assets/red-02.png"},
      {value: "3", suit: "red", asset: "./assets/red-03.png"},
      {value: "4", suit: "red", asset: "./assets/red-04.png"},
      {value: "5", suit: "red", asset: "./assets/red-05.png"},
      {value: "6", suit: "red", asset: "./assets/red-06.png"},
      {value: "7", suit: "red", asset: "./assets/red-07.png"},
      {value: "8", suit: "red", asset: "./assets/red-08.png"},
      {value: "9", suit: "red", asset: "./assets/red-09.png"},
      {value: "10", suit: "red", asset: "./assets/red-10.png"},
      {value: "J", suit: "red", asset: "./assets/red-jack.png"},
      {value: "K", suit: "red", asset: "./assets/red-king.png"},
      {value: "Q", suit: "red", asset: "./assets/red-queen.png"},
    ]
  }

  startGame() {
    this.handForPlayers();
    console.log('middle', this.middleCardDeck.length, 'one', this.player1.playerDeck.length, 'two', this.player2.playerDeck.length, 'wins1', this.player1.wins, 'wins2', this.player2.wins)
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
    return randomDeck
  }

  handForPlayers() {
    this.player1.playerDeck = [];
    this.player2.playerDeck = [];
    var playerDeck = this.randomizeDeck(this.allCards);
    for (var i = 0; i < playerDeck.length * 0.5; i++) {
      this.player1.playerDeck.push(playerDeck[i]);
    } 
    for (var i = 0; i < (Math.round(playerDeck.length * 0.5)); i++) {
      if ((this.player1.playerDeck.length + this.player2.playerDeck.length < this.allCards.length)) {
        this.player2.playerDeck.push(playerDeck[i + (Math.round(playerDeck.length * 0.5))]);
      }
    }
    this.middleCardDeck = [];
    this.deckMiddleCount = this.middleCardDeck.length;
    this.deckOneCount = this.player1.playerDeck.length;
    this.deckTwoCount = this.player2.playerDeck.length;
    console.table('MakeDeck=', this.middleCardDeck, 'one=', this.player1.playerDeck, 'two=', this.player2.playerDeck);
  }

  isEven(value) {
    if (value%2 === 0) {
      return true; //player 1
    } else {
      return false; //player 2
    }
  }

  assignTurn() {
    if ((!this.isEven(this.handCount) && this.currentDealStroke === 'q') || this.player2.playerDeck.length === 0) {
      this.currentPlayer = this.player1;
    } else if ((this.isEven(this.handCount) && this.currentDealStroke === 'p') || this.player1.playerDeck.length === 0) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = null;
    }
  }

  playGame() {
    this.assignTurn();
    if (this.player2.playerDeck.length === 1 && this.player1.playerDeck.length === 0) {
      this.priorTurn = this.player2;
    } else if (this.player1.playerDeck.length === 1 && this.player2.playerDeck.length === 0) {
      this.priorTurn = this.player1;
    } 
    this.dealHandToMiddleDeck();
    this.slapped = 0;
    if ((this.player1.playerDeck.length + this.player2.playerDeck.length + this.middleCardDeck.length) > 53) {
      return "card limit"}
    }

  dealHandToMiddleDeck() {
    if (this.currentPlayer === this.player1 && this.currentDealStroke === 'q' && this.player1.playerDeck.length !== 0 && this.player1.playerDeck.length !== this.allCards.length) {
      this.middleCardDeck.unshift(this.player1.playerDeck[0])
      this.player1.playerDeck.splice(0, 1);
      console.log('handcount= ', this.handCount);
      this.handCount ++;
      console.log('p1 & q')
      console.log('prior turn= ', this.priorTurn)
      console.log('p1= ', this.currentPlayer, 'q= ', this.currentDealStroke, 'p1L!==0 ', this.player2.playerDeck.length, '&&p2L!==aL ', this.allCards.length)
    } else if (this.currentPlayer === this.player2 && this.currentDealStroke === 'p' && this.player2.playerDeck.length !== 0 && this.player2.playerDeck.length !== this.allCards.length) {
        this.middleCardDeck.unshift(this.player2.playerDeck[0])
        this.player2.playerDeck.splice(0, 1);
        console.log('handcount= ', this.handCount);
        this.handCount ++;
        console.log('p2 & p')
        console.log('prior turn= ', this.priorTurn)
        console.log('p2= ', this.currentPlayer, 'p= ', this.currentDealStroke, 'p2L!==0 ', this.player2.playerDeck.length, '&&p2L!==aL ', this.allCards.length)
    } else if (this.currentPlayer === this.player1 && this.currentDealStroke === 'p' && this.player2.playerDeck.length === 0 && this.player2.playerDeck.length !== this.allCards.length && this.player1.playerDeck.length === 0 && this.priorTurn === this.player2) {
        for (var i = 0; i < this.allCards.length; i++) {
          this.player2.playerDeck.push(this.middleCardDeck[i]);
        }
      this.middleCardDeck = [];
      console.log('p2 gets hand')
      console.log('prior turn= ', this.priorTurn)
      console.log('p2 & p')
      console.log('p2= ', this.currentPlayer, 'p= ', this.currentDealStroke, 'p2L!==0 ', this.player2.playerDeck.length, '&&p2L!==aL ', this.allCards.length)
    
    } else if (this.currentPlayer === this.player1 && this.currentDealStroke === 'q' && this.player2.playerDeck.length === 0 && this.player2.playerDeck.length !== this.allCards.length && this.player1.playerDeck.length === 0 && this.priorTurn === this.player1) {
      for (var i = 0; i < this.middleCardDeck.length; i++) {
        this.player1.playerDeck.push(this.middleCardDeck[i]);
      }
      this.middleCardDeck = [];
      console.log('p1 gets hand')
      console.log('prior turn= ', this.priorTurn)
      console.log('p2 & p')
      console.log('p2= ', this.currentPlayer, 'p= ', this.currentDealStroke, 'p2L!==0 ', this.player2.playerDeck.length, '&&p2L!==aL ', this.allCards.length)
////////
///////
    } else if (this.currentPlayer === this.player2 && this.currentDealStroke === 'p' && this.middleCardDeck.length === 0 && this.player2.playerDeck.length === this.allCards.length && this.player1.playerDeck.length === 0 && this.priorTurn === this.player2) {
      this.middleCardDeck.unshift(this.player2.playerDeck[0])
      this.player2.playerDeck.splice(0, 1);
      console.log('handcount= ', this.handCount);
      this.handCount ++;
      console.log('new code')
      console.log('prior turn= ', this.priorTurn)
      console.log('p2= ', this.currentPlayer, 'p= ', this.currentDealStroke, 'p2L!==0 ', this.player2.playerDeck.length, '&&p2L!==aL ', this.allCards.length)
      
    } else if (this.currentPlayer === this.player1 && this.currentDealStroke === 'q' && this.middleCardDeck.length === 0 && this.player1.playerDeck.length === this.allCards.length && this.player2.playerDeck.length === 0 && this.priorTurn === this.player1) {
      this.middleCardDeck.unshift(this.player1.playerDeck[0])
      this.player1.playerDeck.splice(0, 1);
      console.log('handcount= ', this.handCount);
      this.handCount ++;
      console.log('new code')
      console.log('prior turn= ', this.priorTurn)
      console.log('p2= ', this.currentPlayer, 'p= ', this.currentDealStroke, 'p2L!==0 ', this.player2.playerDeck.length, '&&p2L!==aL ', this.allCards.length)
////////
///////    
    }  else {
      console.log('handcount= ', this.handCount);
      console.log('no deal')
      console.log('prior turn= ', this.priorTurn)
      console.log('current player= ', this.currentPlayer, 'current deal stroke= ', this.currentDealStroke)
      // console.log('current player= ', this.currentPlayer, 'p= ', this.currentDealStroke, 'p2L!==0 ', this.player2.playerDeck.length, '&&p2L!==aL ', this.allCards.length)
      // console.log('6=', this.middleCardDeck.length, 'p=', this.currentDealStroke, 'p1', this.currentPlayer)
    }
    if (this.middleCardDeck.length > 0) {
      console.log('middleCard Length', this.middleCardDeck.length, 'middleCard', this.middleCardDeck[0].value)
    }
    this.deckMiddleCount = this.middleCardDeck.length;
    this.deckOneCount = this.player1.playerDeck.length;
    this.deckTwoCount = this.player2.playerDeck.length;
    console.log('middle', this.middleCardDeck.length, 'one', this.player1.playerDeck.length, 'two', this.player2.playerDeck.length, 'wins1', this.player1.wins, 'wins2', this.player2.wins)
  }

  slapLogic() {
    if(this.middleCardDeck.length !== 0) {
      this.slapOnJack()
      console.log('jack hand', 'middle', this.middleCardDeck.length, 'one', this.player1.playerDeck.length, 'two', this.player2.playerDeck.length)
    }
    if(this.middleCardDeck.length > 1) {
      // console.log('double 0=', this.middleCardDeck[0].value, this.middleCardDeck[1].value)
      this.slapOnDouble()
      // console.log('double hand', 'middle', this.middleCardDeck.length, 'one', this.player1.playerDeck.length, 'two', this.player2.playerDeck.length)
    }
    if(this.middleCardDeck.length > 2) {
      console.log('sandwich 0=', this.middleCardDeck[0].value, this.middleCardDeck[2].value)
      this.slapOnSandwich()
      console.log('sandwich hand', 'middle', this.middleCardDeck.length, 'one', this.player1.playerDeck.length, 'two', this.player2.playerDeck.length)
    }
    if (this.slapped === 0 && this.middleCardDeck.length !== 0) {
      this.badSlap();
      console.log('badslap')
      console.log(this.slapped);
      console.log('bad hand', this.middleCardDeck.length, 'one', this.player1.playerDeck.length, 'two', this.player2.playerDeck.length)
    }
    this.deckMiddleCount = this.middleCardDeck.length;
    this.deckOneCount = this.player1.playerDeck.length;
    this.deckTwoCount = this.player2.playerDeck.length;
  }

  slapOnJack() {
    if (this.player1.playerDeck.length === 0 || this.player2.playerDeck.length === 0) {
      this.winLogicOnJack();
    } else if (this.middleCardDeck[0].value === 'J' && this.currentSlapStroke === 'f') {
      this.slapActionPlayerOne();
      console.log('jack-One');
      this.slapped ++;
    } else if (this.middleCardDeck[0].value === "J" && this.currentSlapStroke === 'j') {
      this.slapActionPlayerTwo();
      console.log('jack-Two');
      this.slapped ++;
    } 
  }

  slapOnDouble() {
    console.log('double');
    // console.log(this.middleCardDeck[0].value)
    // console.log(this.middleCardDeck[1].value)
    if (this.player1.playerDeck.length === 0 || this.player2.playerDeck.length === 0) {
      //NO DOUBLE ALLOWED IF EITHER DECK === 0
    } 
    if (this.currentPlayer === this.player1
          && (this.middleCardDeck[0].value === this.middleCardDeck[1].value
          && this.currentSlapStroke === 'f')) {
      this.slapActionPlayerOne();
      // console.log('doubles-One')
      this.slapped ++;
    } else if (this.middleCardDeck[0].value === this.middleCardDeck[1].value
          && this.currentSlapStroke === 'j') {
      this.slapActionPlayerTwo();
      // console.log('doubles-Two');
      this.slapped ++;
    }
  }

  slapOnSandwich() {
    console.log('sandwich');
    // console.log(this.middleCardDeck[0].value)
    // console.log(this.middleCardDeck[2].value)
    if (this.player1.playerDeck.length === 0 || this.player2.playerDeck.length === 0) {
      //NO SANDWICH ALLOWED IF EITHER DECK === 0
    } else if (this.currentPlayer === this.player1
          && (this.middleCardDeck[0].value === this.middleCardDeck[2].value)
          && this.currentSlapStroke === 'f') {
      this.slapActionPlayerOne();
      // console.log('sandwich-One');
      this.slapped ++;
    } else if (this.middleCardDeck[0].value === this.middleCardDeck[2].value
          && this.currentSlapStroke === 'j') {
      this.slapActionPlayerTwo();
      // console.log('sandwich-Two');
      this.slapped ++;
    }
  }

  badSlap() {
    if (this.player1.playerDeck.length === 0 || this.player2.playerDeck.length === 0) {
      this.winLogicBadSlap();
    } else if (this.currentSlapStroke === 'f' && this.player1.playerDeck.length > 0) {
      this.player2.playerDeck.push(this.player1.playerDeck[0]);
      this.player1.playerDeck.splice(0, 1);
      this.slapped ++;
    } else if (this.currentSlapStroke === 'j' & this.player2.playerDeck.length > 0) {
      this.player1.playerDeck.push(this.player2.playerDeck[0]);
      this.player2.playerDeck.splice(0, 1);
      this.slapped ++;
    }
  }

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

  winLogicOnJack() {
    console.log('WINS LOGIC')
    if (this.player1.playerDeck.length > 0 && this.player2.playerDeck.length === 0) {
      this.player1.wins ++;
      console.log('WINS LOGIC #1')
      console.table('wins1) handcount', this.handCount, 'middle=', this.middleCardDeck.length, 'one=', this.player1.playerDeck.length, 'two', this.player2.playerDeck.length, 'wins1', this.player1.wins, 'wins2', this.player2.wins)
      this.startGame();
    }
    if (this.player2.playerDeck.length > 0 && this.player1.playerDeck.length === 0 && this.currentDealKeystroke === 'j') {
      this.player2.wins ++;
      console.log('WINS LOGIC #2')
      console.table('wins2) handcount', this.handCount, 'middle=', this.middleCardDeck.length, 'one=', this.player1.playerDeck.length, 'two', this.player2.playerDeck.length, 'wins1', this.player1.wins, 'wins2', this.player2.wins)
      this.startGame();
    } 
  }

  winLogicBadSlap() {
    console.log('BAD SLAP WIN LOGIC')
    if (this.currentSlapStroke === 'f' && this.middleCardDeck[0].value !== "J" && this.player1.playerDeck.length === 0) {
      this.player2.wins ++;
      console.log('WINS LOGIC #1 BAD SLAP')
      console.table('wins1) handcount', this.handCount, 'middle=', this.middleCardDeck.length, 'one=', this.player1.playerDeck.length, 'two', this.player2.playerDeck.length, 'wins1', this.player1.wins, 'wins2', this.player2.wins)
      this.startGame();
    }
    if (this.currentSlapStroke === 'j' && this.middleCardDeck[0].value !== "J" && this.player2.playerDeck.length === 0) {
      this.player1.wins ++;
      console.log('WINS LOGIC #2')
      console.table('wins2) handcount', this.handCount, 'middle=', this.middleCardDeck.length, 'one=', this.player1.playerDeck.length, 'two', this.player2.playerDeck.length, 'wins1', this.player1.wins, 'wins2', this.player2.wins)
      this.startGame();
    } 
  }

}