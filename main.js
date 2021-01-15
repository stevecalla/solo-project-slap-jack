var startGame = new Game();



var listenOnSlapJack = document.querySelector('.title');
listenOnSlapJack.addEventListener('click', test);

function test() {
  console.log('a=', startGame);
  console.log('b=', startGame.playerOneDeck);
  console.log('c=', startGame.allCards);
  console.log('d=', startGame.randomIndex(startGame.allCards.length));
  console.log('e=', startGame.randomizeDeck(startGame.allCards));
  console.log('f=', startGame.handForPlayers());
  console.log('h=', startGame.getDeck());
}