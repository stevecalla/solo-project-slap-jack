var startGame = new Game();



var listenOnSlapJack = document.querySelector('.title');
listenOnSlapJack.addEventListener('click', test);

function test() {
  console.log('a=', startGame);
  console.log('b=', startGame.playerOneDeck);
  console.log('c=', startGame.allCards);
  console.log('d=', startGame.randomIndex(10));
  console.log('e=', startGame.randomizeDeck(startGame.allCards))
  console.log('f=', startGame.handForPlayers())
}