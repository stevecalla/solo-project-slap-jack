class Player {
  constructor(id, deck, wins) {
    this.id = id;
    this.playerDeck = []; //new deck
    this.wins = wins || 0;
    // console.table('Player=', this);
  }

  playCard() {
    // TBD
  }

  saveWinsToStorage() {
    //save wins to storage
  }

}