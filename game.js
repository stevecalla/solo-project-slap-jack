class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.middleCardDeck = [];
    this.handCount = 1;
    this.slappedCount = 0;
    this.currentDealStroke = 'q';
    this.currentSlapStroke = null;
    this.currentPlayer = null;
    this.priorTurn = null;
    this.deckMiddleCount = null;
    this.deckOneCount = null;
    this.deckTwoCount = null;
    this.gameStatusMessage = 'Player One --> Press Q to Start the Game';
    this.allCards = [
      {value: "8", suit: "blue", asset: "./assets/blue-08.png"},
      {value: "9", suit: "blue", asset: "./assets/blue-09.png"},
      {value: "10", suit: "blue", asset: "./assets/blue-10.png"},
      {value: "J", suit: "blue", asset: "./assets/blue-jack.png"},
      {value: "K", suit: "blue", asset: "./assets/blue-king.png"},
      {value: "Q", suit: "blue", asset: "./assets/blue-queen.png"},
      {value: "7", suit: "gold", asset: "./assets/gold-07.png"},
      {value: "8", suit: "gold", asset: "./assets/gold-08.png"},
      {value: "9", suit: "gold", asset: "./assets/gold-09.png"},
      {value: "10", suit: "gold", asset: "./assets/gold-10.png"},
      {value: "J", suit: "gold", asset: "./assets/gold-jack.png"},
      {value: "K", suit: "gold", asset: "./assets/gold-king.png"},
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
    this.slappedCount = 0;
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

  trackPriorPlayerTurn() {
    if (this.player2.playerDeck.length === 1 && this.player1.playerDeck.length === 0) {
      this.priorTurn = this.player2;
    } else if (this.player1.playerDeck.length === 1 && this.player2.playerDeck.length === 0) {
      this.priorTurn = this.player1;
    } 
  }

  playGame(player) {
    this.assignTurn();
    this.trackPriorPlayerTurn();
    this.dealHandToMiddleDeck(player);
    this.resetSlapCount();
    }

  dealHandToMiddleDeck(player) {
    this.resetSlapCount();
    if (this.currentPlayer === player && player.playerDeck.length !== 0 && player.playerDeck.length !== this.allCards.length) {
        this.dealPlayerToMiddleDeck(player);
    //removed currentDealStroke, added passing arguement, replaced this.player1 w/ player
    // } else if (this.currentPlayer === this.player2 && this.currentDealStroke === 'p' && this.player2.playerDeck.length !== 0 && this.player2.playerDeck.length !== this.allCards.length) {
    //     this.dealPlayerToMiddleDeck(2);

    } else if (this.currentPlayer === this.player1 && this.currentDealStroke === 'p' && this.player2.playerDeck.length === 0 && this.player2.playerDeck.length !== this.allCards.length && this.player1.playerDeck.length === 0 && this.priorTurn === this.player2) {
        // this.dealMiddleDeckToPlayer2();
        this.dealMiddleDeckToPlayer(2)

    } else if (this.currentPlayer === this.player1 && this.currentDealStroke === 'q' && this.player2.playerDeck.length === 0 && this.player2.playerDeck.length !== this.allCards.length && this.player1.playerDeck.length === 0 && this.priorTurn === this.player1) {
        // this.dealMiddleDeckToPlayer1();
        this.dealMiddleDeckToPlayer(1)

    } else if (this.currentPlayer === this.player2 && this.currentDealStroke === 'p' && this.middleCardDeck.length === 0 && this.player2.playerDeck.length === this.allCards.length && this.player1.playerDeck.length === 0 && this.priorTurn === this.player2) {        
        this.dealOnePlayerToMiddleDeck(2);
    } else if (this.currentPlayer === this.player1 && this.currentDealStroke === 'q' && this.middleCardDeck.length === 0 && this.player1.playerDeck.length === this.allCards.length && this.player2.playerDeck.length === 0 && this.priorTurn === this.player1) {
        this.dealOnePlayerToMiddleDeck(1);
    }
    this.deckMiddleCount = this.middleCardDeck.length;
    this.deckOneCount = this.player1.playerDeck.length;
    this.deckTwoCount = this.player2.playerDeck.length;
  }

  dealPlayerToMiddleDeck(player) {
      this.middleCardDeck.unshift(player.playerDeck[0])
      player.playerDeck.splice(0, 1);
      this.handCount ++;     
      console.log('middle=', this.middleCardDeck);
      console.log(this.player1);
      console.log(this.player2);     
  }

  // dealPlayerToMiddleDeck(player) {
  //   if (player === 1) {
  //     this.middleCardDeck.unshift(this.player1.playerDeck[0])
  //     this.player1.playerDeck.splice(0, 1);
  //     this.handCount ++;        
  //   } else if (player === 2) {
  //       this.middleCardDeck.unshift(this.player2.playerDeck[0])
  //       this.player2.playerDeck.splice(0, 1);
  //       this.handCount ++;   
  //   }
  // }

  dealMiddleDeckToPlayer(player) {
    if (player === 1) {
      for (var i = 0; i < this.middleCardDeck.length; i++) {
        this.player1.playerDeck.push(this.middleCardDeck[i]);
      }
      this.player1.playerDeck = this.randomizeDeck(this.player1.playerDeck);
      this.middleCardDeck = [];
    } else if (player === 2) {
        for (var i = 0; i < this.allCards.length; i++) {
          this.player2.playerDeck.push(this.middleCardDeck[i]);
        }
        this.player2.playerDeck = this.randomizeDeck(this.player2.playerDeck);
        this.middleCardDeck = [];
      }
  }

  dealOnePlayerToMiddleDeck(player) {
    if (player === 1) {
      this.middleCardDeck.unshift(this.player1.playerDeck[0]);
      this.player1.playerDeck.splice(0, 1);
      this.handCount ++;
    } else if (player === 2) {
        this.middleCardDeck.unshift(this.player2.playerDeck[0]);
        this.player2.playerDeck.splice(0, 1);
        this.handCount ++;
    }
  }

  slapLogic() {
    if(this.middleCardDeck.length !== 0) {
      this.slapOnJack();
    }
    if(this.middleCardDeck.length > 1) {
      this.slapOnDouble();
    }
    if(this.middleCardDeck.length > 2) {
      this.slapOnSandwich();
    }
    if (this.slappedCount === 0 && this.middleCardDeck.length !== 0) {
      this.badSlap();
    }
    this.deckMiddleCount = this.middleCardDeck.length;
    this.deckOneCount = this.player1.playerDeck.length;
    this.deckTwoCount = this.player2.playerDeck.length;
  }

  slapOnJack() {
    if (this.player1.playerDeck.length >= 0 && this.player2.playerDeck.length === 0 && this.middleCardDeck[0].value === 'J') {
      this.winLogicOnJack();
    } else if (this.player1.playerDeck.length === 0 && this.player2.playerDeck.length >= 0 && this.middleCardDeck[0].value === 'J') {
        this.winLogicOnJack();
    } else if (this.middleCardDeck[0].value === 'J' && this.currentSlapStroke === 'f') {
        this.gameStatusMessage = "SLAPJACK! Player 1 takes the pile!";
        this.giveMiddleDeckToPlayer(1);
        this.slappedCount ++;
    } else if (this.middleCardDeck[0].value === "J" && this.currentSlapStroke === 'j') {
        this.gameStatusMessage = "SLAPJACK! Player 2 takes the pile!";
        this.giveMiddleDeckToPlayer(2);
        this.slappedCount ++;
    } 
  }

  slapOnDouble() {
    if (this.player1.playerDeck.length === 0 || this.player2.playerDeck.length === 0) {
      //NO DOUBLE ALLOWED IF EITHER DECK === 0
    } else if (this.middleCardDeck[0].value === this.middleCardDeck[1].value
        && this.currentSlapStroke === 'f') {
        this.gameStatusMessage = "DOUBLE! Player 1 takes the pile";
        this.giveMiddleDeckToPlayer(1);
        this.slappedCount ++;
    } else if (this.middleCardDeck[0].value === this.middleCardDeck[1].value
        && this.currentSlapStroke === 'j') {
        this.gameStatusMessage = "DOUBLE! Player 2 takes the pile!";
        this.giveMiddleDeckToPlayer(2);
        this.slappedCount ++;
    }
  }

  slapOnSandwich() {
    if (this.player1.playerDeck.length === 0 || this.player2.playerDeck.length === 0) {
      //NO SANDWICH ALLOWED IF EITHER DECK === 0
    } else if (this.currentPlayer === this.player1
        && (this.middleCardDeck[0].value === this.middleCardDeck[2].value)
        && this.currentSlapStroke === 'f') {
        this.gameStatusMessage = "SANDWICH! Player 1 takes the pile!";
        this.giveMiddleDeckToPlayer(1);
      this.slappedCount ++;
    } else if (this.middleCardDeck[0].value === this.middleCardDeck[2].value
        && this.currentSlapStroke === 'j') {
        this.gameStatusMessage = "SANDWICH! Player 2 takes the pile!";
        this.giveMiddleDeckToPlayer(2);
        this.slappedCount ++;
    }
  }

  resetSlapCount() {
    this.slappedCount = 0;
  }

  badSlap() {
    if (this.player1.playerDeck.length === 0 || this.player2.playerDeck.length === 0) {
      this.winLogicBadSlap();
    }
    
    if (this.currentSlapStroke === 'f' && this.player1.playerDeck.length > 0 && this.gameStatusMessage !== 'BAD SLAP! Player 2 WINS!') {
      this.player2.playerDeck.push(this.player1.playerDeck[0]);
      this.player1.playerDeck.splice(0, 1);
      this.gameStatusMessage = "BAD SLAP! Player 1 forfeits a card to Player2!";
      this.slappedCount ++;
    } else if (this.currentSlapStroke === 'j' & this.player2.playerDeck.length > 0 && this.gameStatusMessage !== "BAD SLAP! Player 1 WINS!") {
        this.player1.playerDeck.push(this.player2.playerDeck[0]);
        this.player2.playerDeck.splice(0, 1);
        this.gameStatusMessage = "BAD SLAP! Player 2 forfeits a card to Player1!";
        this.slappedCount ++;
    }
  }

  giveMiddleDeckToPlayer(player) {
    if (player === 1) {
      for (var i = 0; i < this.middleCardDeck.length; i++) {
        this.player1.playerDeck.push(this.middleCardDeck[i]);
      }
      this.player1.playerDeck = this.randomizeDeck(this.player1.playerDeck);
      this.middleCardDeck = [];  
    } else if (player === 2) {
      for (var i = 0; i < this.middleCardDeck.length; i++) {
        this.player2.playerDeck.push(this.middleCardDeck[i]);
      } 
      this.player2.playerDeck = this.randomizeDeck(this.player2.playerDeck);
      this.middleCardDeck = []; 
    }
  }

  winLogicOnJack() {
    if (this.player1.playerDeck.length >= 0 && this.player2.playerDeck.length === 0 && this.currentSlapStroke === 'f') {
      this.player1.wins ++;
      this.gameStatusMessage = "Player 1 WINS (on SLAPJACK)!";
      this.startGame();
    }

    if (this.player2.playerDeck.length >= 0 && this.player1.playerDeck.length === 0 && this.currentSlapStroke === 'j') {
      this.player2.wins ++;
      this.gameStatusMessage = "Player 2 WINS (ON SLAPJACK)!";
      this.startGame();
    } 

    if (this.player1.playerDeck.length >= 0 && this.player2.playerDeck.length === 0 && this.currentSlapStroke === 'j') {
      this.giveMiddleDeckToPlayer(2);
      this.gameStatusMessage = "SLAPJACK! Player 2 takes the pile!";
    }

    if (this.player2.playerDeck.length >= 0 && this.player1.playerDeck.length === 0 && this.currentSlapStroke === 'f') {
      this.giveMiddleDeckToPlayer(1);
      this.gameStatusMessage = "SLAPJACK! Player 1 takes the pile!";
    }
  }

  winLogicBadSlap() {
    if (this.currentSlapStroke === 'f' && this.middleCardDeck[0].value !== "J" && this.player1.playerDeck.length === 0) {
      this.player2.wins ++;
      this.gameStatusMessage = "BAD SLAP! Player 2 WINS!";
      this.startGame();
    }

    if (this.currentSlapStroke === 'j' && this.middleCardDeck[0].value !== "J" && this.player2.playerDeck.length === 0) {
      this.player1.wins ++;
      this.gameStatusMessage = "BAD SLAP! Player 1 WINS!";
      this.startGame();
    } 
  }

}