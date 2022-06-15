// import prompt from 'prompt-sync';
// import chalk from 'chalk';

// const myName = prompt()('Cum te cheama? ');
// const myAge = +prompt()('Cati ani ai? ');

// console.log(chalk.bgBlue(`Salut ${myName} , ai ${myAge} de ani. Super!`));

/*
    Read input from user (console)
    
    var prompt = require('prompt-sync')()
    sau 
    import prompt from 'prompt-sync';

    prompt()('Custom prompt message here')

    ------------------------------------------------------------------------------------------------------------

    Desenati in consola o plansa de X si 0;
    Aveti 2 jucartori, trebuie sa joace pana unul dintre ei castiga.
    Afisati la final cine este castigatorul (Jucator 1 sau Jucator 2) si cu ce simbol a castigat.

    Cum decurge jocul?
    Pasul 1.  Prima data intrebati primul jucator cu ce simbol vrea sa joace.
    Pasul 2.  Intrebati pozitia pe care vrea sa plaseze simbolul.
    Pasul 3.  Afisati plansa de X si 0 cu simbolul selectat de catre jucator si pozitia sa.
    Pasul 4.  Repetati aceelasi lucru pentru Jucator 2, sarind peste Pasul 1.
    Pasul 5.  Cand cineva a castigat afisam castigatorul (Jucator 1 sau Jucator 2) si cu ce simbol a castigat.

    -- INITIALIZARE NPM 
    npm init 

    -- INSTALAM PACHETUL prompt-sync
    npm install prompt-sync --save
*/
import prompt from 'prompt-sync';

const pieces = [];

let playerOneCharacter = '';
let whichPlayerTurnIs = '';
let currentPlayer = 1;

fillPieces();
drawBoard();
playerCharacterSelect();

let gameOver = false;
let counter = 0;

/*  Putem alege daca jucam cu un alt jucator sau calculatorul */

/*  Restrictii de implementat
    -   REZOLVAT Trebuie sa nu fiu lasat sa pun pe o pozitie deja existenta
    -   REZOLVAT Sa nu am voie sa aleg altceva inafara de x sau 0
    -   REZOLVAT Sa nu am voie sa pun un index mai mic decat 0 sau mai mare decat 8
    -   REZOLVAT Nu se pune 'ciorba' cand nu e niciun castigator
*/

while (gameOver === false) {
  const playerChoice = +prompt()('Jucator ' + currentPlayer + ': ' + 'Unde vrei sa pui? ');

  /*  Nu pot pune pe o pozitie deja existenta  */
  if (pieces[playerChoice] === 'x' || pieces[playerChoice] === '0') {
    console.clear();
    drawBoard();
    continue;
  }

  /*  Nu pot selecta inafara plansei  */
  if (pieces[playerChoice] < 0 || pieces[playerChoice] > 8) {
    console.clear();
    drawBoard();
    continue;
  }

  /* Pune piesa pe tabla */
  pieces[playerChoice] = whichPlayerTurnIs;

  /* Reseteaza plansa de joc */
  console.clear();
  drawBoard();

  /* Verifica daca e gata jocul*/
  gameOver = gameIsOver();

  if (gameOver) {
    console.log('Jocul s-a terminat a castigat, jucatorul ' + currentPlayer);
  }

  /* Verifica daca e ciorba */
  if (counter > 7 && !gameOver) {
    console.log('E ciorba!');
    gameOver = true;
  }

  switchPlayerTurn();
  counter++;
}

function switchPlayerTurn() {
  if (whichPlayerTurnIs === 'x') {
    whichPlayerTurnIs = '0';
  } else {
    whichPlayerTurnIs = 'x';
  }

  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
}

function playerCharacterSelect() {
  let correctCharacter = false;

  while (correctCharacter === false) {
    /* Intreaba playerOne cu ce vrea sa joace x sau 0 */
    playerOneCharacter = prompt()('Cu ce vrei sa joci? x sau 0 ? ');

    if (!(playerOneCharacter === 'x' || playerOneCharacter === '0')) {
      continue;
    }

    whichPlayerTurnIs = playerOneCharacter;
    correctCharacter = true;
  }
}

function drawBoard() {
  const line = '  ___________';
  let result = line + '\n';

  for (let i = 0; i <= pieces.length; i++) {
    if (i === 3 || i === 6 || i === 9) {
      result = result + ' |';
    }

    if (i === 9) {
      break;
    }

    if (i % 3 === 0) {
      result = result + '\n';
    }

    result = result + ' | ' + pieces[i];
  }

  result = result + '\n' + line + '\n';

  console.log(result);
}

function fillPieces() {
  for (let i = 0; i < 9; i++) {
    pieces.push(' ');
  }
}

function gameIsOver() {
  const turn = whichPlayerTurnIs;

  if (
    (pieces[0] === turn && pieces[1] === turn && pieces[2] === turn) ||
    (pieces[3] === turn && pieces[4] === turn && pieces[5] === turn) ||
    (pieces[6] === turn && pieces[7] === turn && pieces[8] === turn) ||
    (pieces[0] === turn && pieces[3] === turn && pieces[6] === turn) ||
    (pieces[1] === turn && pieces[4] === turn && pieces[7] === turn) ||
    (pieces[2] === turn && pieces[5] === turn && pieces[8] === turn) ||
    (pieces[0] === turn && pieces[4] === turn && pieces[8] === turn) ||
    (pieces[2] === turn && pieces[4] === turn && pieces[6] === turn)
  ) {
    return true;
  } else {
    return false;
  }
}

// &&
// TRUE TRUE ====> TRUE
// TRUE FALSE ====> FLASE
// FALSE FALSE ====> FLASE
// FLASE TRUE ====> FLASE

// ||
// TRUE TRUE ====> TRUE
// TRUE FALSE ====> TRUE
// FALSE FALSE ====> FALSE
// FLASE TRUE ====> TRUE
