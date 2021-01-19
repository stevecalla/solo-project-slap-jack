class Player {
  constructor(id) {
    this.id = id;
    this.playerDeck = []; //new deck
    this.wins = 0;
    // console.table('Player=', this);
  }

  playCard() {
    // TBD
  }

  saveToStorage() {
    localStorage.setItem(newGame.player1.id.toString(), JSON.stringify(newGame.player1.wins))
    localStorage.setItem(newGame.player2.id.toString(), JSON.stringify(newGame.player2.wins))
  }

  getFromStorage() {
    var storedWins;
    var keys = Object.keys(localStorage);
    sortDescending(keys);
    reviveWinsFromStorage(keys);
  }

  reviveWinsFromStorage(storedWins) {
    for (var i = 0; i < storedWins.length; i++) {
      var retrievedObject = localStorage.getItem(storedWins[i]);
      var parsedObject = JSON.parse(retrievedObject);
      // var revivedPastActivity = new Game(parsedObject.;
      // pastActivities.push(revivedPastActivity);
    }

}