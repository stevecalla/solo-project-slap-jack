var startGame = new Game();



var listenOnSlapJack = document.querySelector('.title');
listenOnSlapJack.addEventListener('click', test);

function test() {
  console.log('x')
  // console.log('a=', startGame);
  // console.log('b=', startGame.playerOneDeck);
  // console.log('c=', startGame.allCards);
  // console.log('d=', startGame.randomIndex(startGame.allCards.length));
  // console.log('e=', startGame.randomizeDeck(startGame.allCards));
  console.log('f=', startGame.handForPlayers());
  console.log('g=', startGame.playerOneDeck[0].value)
  // if(startGame.playerOneDeck[0].value === startGame.playerOneDeck[0].value) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
  // if(startGame.playerOneDeck[0].value === startGame.playerOneDeck[1].value) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
  // if(startGame.playerOneDeck[0] === startGame.playerOneDeck[14]) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
}