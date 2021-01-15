class Player {
  constructor(id, deck, wins) {
    this.id = id;
    this.player = deck;
    this.wins = wins || 0;
    console.table('Player=', this);
  }

  playCard() {
    // TBD
  }

  saveWinsToStorage() {
    // TBD
  }

}