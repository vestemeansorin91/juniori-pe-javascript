/*
    Din numarul de persoane online pe discord, vreau sa aleg un programator aleatoriu.
*/

const persons = ['Alex6665', 'BIG_Duck', 'Florin C.', 'mihaifirst', 'TheRankN1'];

pickPlayerForPresentation(persons);

function pickPlayerForPresentation(arr) {
  const randomChoice = Math.floor(Math.random() * arr.length);

  console.log('Prezinta-ne te rog tu ' + arr[randomChoice]);
}
