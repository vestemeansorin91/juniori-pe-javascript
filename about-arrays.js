const { emptyLine } = require('./helpers/console');

/*      CRUD   
    C   -   Create
    R   -   Read
    U   -   Update
    D   -   Delete
*/
console.clear();

const persons = [];

// C   -   Create

console.log('-----------');
console.log('before persons ', persons);
console.log('persons.length after push ', persons.push('Alex'));
console.log('after persons ', persons);
console.log('persons.length after push ', persons.push('Razvan'));
console.log('after persons ', persons);
persons.push('Marius');
console.log('after persons ', persons);

persons.unshift('Florin');
console.log('after persons ', persons);
persons.unshift('Petrut', 'Sorin');
console.log('after persons ', persons);

//  D   -   Delete
const whoIsLastRemoved = persons.pop();
console.log(whoIsLastRemoved);
console.log('after persons ', persons);

const whoIsFirstRemoved = persons.shift();
console.log(whoIsFirstRemoved);
console.log('after persons ', persons);

//  U   -   Update
persons.splice(1, 1, 'Ionel');
console.log('after persons ', persons);

persons.push('Madalina');
console.log('after persons ', persons);

for (let i = persons.length - 1; i > 0; i--) {
  if (persons[i] === 'Razvan') {
    persons.splice(i, 1);
  }
}

//  D   -   Delete
console.log('after persons ', persons);

for (let i = 0; i < persons.length; i++) {
  if (persons[i] === 'Razvan') {
    persons.splice(i, 1);
  }
}
console.log('after persons ', persons);
