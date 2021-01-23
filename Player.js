class Player {
  constructor(id) {
    this.id = id;
    this.playerDeck = [];
    this.wins = 0;
  }

  saveToStorage() {
    localStorage.setItem(this.id, this.wins)
  }

  getFromStorage1() {
    var retrievedObject1 = localStorage.getItem('1');
  
    if(localStorage.getItem('1') === null) {
      retrievedObject1 = 0;
    }
  
    newGame.player1.wins = retrievedObject1;
  }

  getFromStorage2() {
    var retrievedObject2 = localStorage.getItem('2');
  
    if(localStorage.getItem('2') === null) {
      retrievedObject2 = 0;
    }
  
    newGame.player2.wins = retrievedObject2;
  }

}