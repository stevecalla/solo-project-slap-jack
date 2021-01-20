class Player {
  constructor(id) {
    this.id = id;
    this.playerDeck = [];
    this.wins = 0;
  }

  saveToStorage() {
    localStorage.setItem(newGame.player1.id, newGame.player1.wins)
    localStorage.setItem(newGame.player2.id, newGame.player2.wins)
  }

}