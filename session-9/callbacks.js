startGame('Sorin', 'Alex', generateRandomName);

function startGame(player1, player2, fn) {
  console.log('Start game for ', player1, player2, fn());
}

function generateRandomName() {
  return 'Petrut';
}
