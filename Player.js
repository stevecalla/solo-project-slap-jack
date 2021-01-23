class Player {
  constructor(id) {
    this.id = id;
    this.playerDeck = [];
    this.wins = 0;
  }

  saveToStorage() {
    localStorage.setItem(this.id, this.wins)
  }

}