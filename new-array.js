// Ai ajuns la casa de marcat, ai pus pe banda produsele lapte oua masline., pe urma le pui in plasa invers.
// const basket = [ 'lapte', 'oua', 'paine', 'masline'];
// checkProducts(basket);

const { emptyLine } = require('./helpers/console');

// OUTPUT
// 'Scanez - lapte'
// 'beep'
// 'Scanez - oua'
// 'beep'
// 'Scanez - paine'
// 'beep'
// 'Scanez - masline'
// 'beep'

// 'Ai pus in plasa masline, paine, oua, lapte'
console.clear();
const basket = ['lapte', 'oua', 'paine', 'masline', 'deodorant', 'pateu'];

checkProducts(basket);

function checkProducts(basket) {
  if (basket.length === 0) {
    console.log('Nu ai pus nimic in plasa');
    return;
  }

  const BEEP = 'beep';
  const PREFIX_MESSAGE = 'Scanez - ';
  let result = 'Ai pus in plasa ';
  let resultArr = [];

  for (let i = 0; i < basket.length; i++) {
    console.log(`${PREFIX_MESSAGE + basket[i]}\n${BEEP}`);
  }

  /*    Metoda cu, concatenare de stringuri */
  //   for (let i = basket.length - 1; i >= 0; i--) {
  //     if (i !== 0) {
  //       result = result + basket[i] + ', ';
  //     } else {
  //       result = result + basket[i];
  //     }
  //   }
  console.log(`${result}`);

  /*    Metoda cu array */
  emptyLine();

  console.log(resultArr);

  for (let i = basket.length - 1; i >= 0; i--) {
    resultArr.push(basket[i]);
  }

  console.log(`${result + resultArr.join(', ')}`);
}
// Escape charcters

/*
        \n new line
        \t tab
        \'
        \"
        \\
*/

const aliments = 'lapte|oua|paine|pateu|rubik';
emptyLine();

console.log(aliments.split('|'));
