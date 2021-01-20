class Player {
  constructor(id) {
    this.id = id;
    this.playerDeck = [];
    this.wins = 0;

    // this.retrievedObject1 = 0;
    // this.retrievedObject2 = 0;
    // this.parsedObject11 = 0;
    // this.parsedObject2 = 0;

    // console.table('Player=', this);
  }

  saveToStorage() {
    localStorage.setItem(newGame.player1.id, newGame.player1.wins)
    localStorage.setItem(newGame.player2.id, newGame.player2.wins)
  }

}