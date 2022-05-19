/*
  A dat soarele, merge un fotbal, dar ca sa nu fie nimeni suparat din baietii care au iesit
  afara la joc, vrem sa alegem aleatoriu echipele.
  
  In primul rand alegem 2 capitani (unul pentru fiecare echipa), 
  iar pe urma aleatoriu numarul persoanelor.

  Daca numarul de jucatori care au iesit la joc, este par echipele sunt complete
  Daca numarul de jucatori care au iesit la joc, este impar, cel care ramane la urma sta pe banca.

  INPUT
  const players = ['Sorin','Dan','Camelia','Mitrache','Bogdan','Teo','Vio','Costel','Cornel'];

  OUTPUT
    Sorin este capitan in echipa 1
    Bogdan este capitan in echipa 2

    Echipa 1 este formata din:
    Camelia
    Teo
    Mitrache

    Echipa 2 este formata din
    Costel
    Cornel
    Dan

    Vio sta pe banca
    
  prepareFootballGame(players);
*/
console.clear();
console.log('--------');
const players = ['Sorin', 'Dan', 'Camelia', 'Mitrache', 'Bogdan', 'Teo', 'Vio', 'Costel', 'Cornel'];

prepareFootballGame(players);

function prepareFootballGame(arr) {
  const isOdd = arr.length % 2 !== 0;

  console.log(`${pullRandomPlayer(arr)} este capitan in echipa 1`);
  console.log(`${pullRandomPlayer(arr)} este capitan in echipa 2`);
  console.log(`\n`);

  const howManyPlayerPerTeam = Math.floor(arr.length / 2);

  console.log(`Echipa 1 este formata din:`);

  for (let i = 0; i < howManyPlayerPerTeam; i++) {
    console.log(`${pullRandomPlayer(arr)}`);
  }
  console.log(`\n`);

  console.log(`Echipa 2 este formata din:`);
  for (let i = 0; i < howManyPlayerPerTeam; i++) {
    console.log(`${pullRandomPlayer(arr)}`);
  }
  console.log(`\n`);

  if (isOdd) {
    console.log(`${pullRandomPlayer(arr)} sta pe banca`);
  }
}

function pullRandomPlayer(arr) {
  const randomIndex = randomPlayerGenerator(arr.length);
  return arr.splice(randomIndex, 1)[0];
}

function randomPlayerGenerator(dimension) {
  return Math.floor(Math.random() * dimension);
}
