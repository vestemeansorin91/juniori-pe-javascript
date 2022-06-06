const { emptyLine } = require('../../helpers/console');

let person = {
  id: 1,
  fullName: 'Sorin',
  isActive: true
};

/*  Show object */
console.log('Show object ---> ', person);
emptyLine();

/* Destructurare */
const { fullName } = person;
console.log(fullName);

emptyLine();

/* Add / Update property - METHOD 1 */
person.age = 31;
person.gender = 'male';

/* Add / Update property - METHOD 2 */
person['age'] = 31;
person['gender'] = 'male';

let prop = '';

if (true) {
  prop = 'alien';
} else {
  prop = 'human';
}

person[prop] = prop;
emptyLine();
console.log('Smecherii cu proprietatea ---> ', person);
emptyLine();

const ObjectKeys = ['id', 'fullName', 'age', 'gender'];
const ObjectValues = [3, 'Florin', 30, 'male'];

let myObject = {};

for (let i = 0; i < ObjectKeys.length; i++) {
  myObject[ObjectKeys[i]] = ObjectValues[i];

  // What happens inside for
  // myObject['id'] = 3;
  // myObject['fullName'] = 'Florin';
  // myObject['age'] = 30;
  // myObject['gender'] = 'male'
}
emptyLine();
console.log('myObject -----> ', myObject);
emptyLine();

/* Add / Update property - METHOD 3 */
const human = {
  ...person, // Spread operator
  id: 5,
  canBreak: true
};

const players = ['Sorin', 'Gabi', 'Alex'];

const newPlayers = [...players];
newPlayers.push('Florin');

console.log('players', players);
console.log('newPlayers', newPlayers);

emptyLine();
console.log('human -----> ', human);
emptyLine();

console.log('Object spread ...person ---> ', { ...person });
emptyLine();

/* Remove property */
// delete person.id;
// delete person.fullName;
// delete person.isActive;

if (person.hasOwnProperty('id')) {
  delete person.id;
}

emptyLine();
console.log('person dupa stergere --->', person);
emptyLine();

/* Objects functions*/
console.log('Object.keys(obiectul) ---> ', Object.keys(person));
emptyLine();

console.log('Object.values ---> ', Object.values(person));
emptyLine();

console.log('Object.entries ---> ', Object.entries(person));
emptyLine();

console.log('Keys before update !!!  ---> ', person);

for (let i = 0; i < Object.keys(person).length; i++) {
  const prop = Object.keys(person)[i]; // 'fullName'
  person[prop] = person[prop] + ' updated!';
}

emptyLine();
console.log('Keys after updated !!!  ---> ', person);
