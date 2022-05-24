const names = ['Sorin', 'Alex', 'Florin', 'Petrut', 'Claudia'];
const ages = [31, 20, 23, 100, 28];
const sexes = ['barbat', 'barbat', 'barbat', 'barbat', 'femeie'];
const areActive = [false, true, false, false, false];

/*
  Afiseaza in consola asa

  OUTPUT
  Ma numesc Sorin
  Am 31 de ani
  Sunt barbat
  Si contul meu este activ

  OUTPUT
  Ma numesc Claudia
  Am 28 de ani
  Sunt femeie
  Si contul meu nu este  activ

*/
console.clear();

// displayInformation(names, ages, sexes, areActive);

function displayInformation(names, ages, sexes, areActive) {
  for (let i = 0; i < names.length; i++) {
    let isActive = '';

    if (!areActive[i]) {
      isActive = 'nu ';
    }

    console.log(`
    Ma numesc ${names[i]}
    Am ${ages[i]} ani
    Sunt ${sexes[i]}
    Si contul meu ${isActive}este activ
    `);
  }
}

//  Primitives

// boolean
// string
// number
// null
// undefined

// object

// function greeting(name) {
//   console.log(`Salutare ${name}`);
// }

// const sorinWillGreet = greeting;
// sorinWillGreet(names[0]);

const person1 = {
  name: 'Sorin',
  sex: 'barbat',
  age: 31,
  isActive: true
};

const person2 = {
  name: 'Alex',
  sex: 'barbat',
  age: 24,
  isActive: true,
  address: {
    city: 'Bucuresti',
    country: 'Romania'
  },
  hobbies: ['Biliard', 'Fotbal', 'Darts', 'Ping-Pong'],
  greeting: function () {
    console.log(`
    Ma numesc ${this.name}
    Am ${this.age} ani
    Sunt ${this.sex}
    Si contul meu ${this.isActive}este activ
    `);
  }
};

const isHuman = true;

function greeting() {
  console.log(`
  Ma numesc ${this.name}
  Am ${this.age} ani
  Sunt ${this.sex}
  Si contul meu ${this.isActive}este activ
  `);
}

const isActive = true;

const employees = [
  {
    name: 'Alex',
    sex: 'barbat',
    age: 24,
    address: [
      { city: 'Bucuresti', country: 'Romania' },
      { city: 'Paris', country: 'France' },
      { city: 'Barcelona', country: 'Spain' }
    ],
    hobbies: ['Biliard', 'Fotbal', 'Darts', 'Ping-Pong'],
    isHuman,
    isActive,
    greeting
  },
  {
    name: 'Sorin',
    sex: 'barbat',
    age: 31,
    address: [
      { city: 'Bucuresti', country: 'Romania' },
      { city: 'Paris', country: 'France' },
      { city: 'Barcelona', country: 'Spain' }
    ],
    hobbies: ['Biliard', 'Fotbal', 'Darts', 'Ping-Pong'],
    isHuman: isHuman,
    isActive: true,
    greeting: greeting
  }
];

for (let i = 0; i < employees.length; i++) {
  employees[i].greeting();
}

// Mutability

// IMMUTABLE
// boolean
// string
// number
// null
// undefined

// MUTABLE
// Array
// Object
// Function

// Pass by value
let country = 'Romania';
let country2 = country;
country2 = 'Ungaria';

changeCountry(country);

function changeCountry(input) {
  input = 'France';

  console.log('input ----> ', input);
}

console.log('country ----> ', country);
console.log('country2 ----> ', country2 + '\n');

// Pass by refference
let location = {
  country: 'Romania'
};

let location2 = location;

changeCountryForObject(location);

function changeCountryForObject(obj) {
  obj.country = 'France';
  console.log('changeCountryForObject obj.country ----> ', obj.country);
}

location2.country = 'Grecia';
location.country = 'USA';

console.log('location.country ----> ', location.country);
console.log('location2.country ----> ', location2.country);
// console.log("country2 ----> ", country2);

let users = ['Sorin', 'Alex'];

addExclamationMark(users);

function addExclamationMark(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + '--!';
  }
  // console.log(arr);
}

// console.log(users);

// How to iterate through object keys
const employeeKeys = Object.keys(employees[0]);
// console.log(employeeKeys);

// Methods to access object properties
// console.log(employees[0].name);
// console.log(employees[0]["name"]);

// How to iterate through object values METHOD 1
const employeeValues = Object.values(employees[0]);

for (let i = 0; i < employeeValues.length; i++) {
  console.log(employeeValues[i]);
}

// How to iterate through object values METHOD 2
for (let i = 0; i < employeeKeys.length; i++) {
  console.log(employees[0][employeeKeys[i]]);
}

console.log(employeeValues);

console.clear();
let popular = 'Alex';
popular = 'Sorin';
let popularArr = ['A', 'l', 'e', 'x'];

for (let i = 0; i < popular.length; i++) {
  console.log(popular[i]);
}

console.log('-------');

for (let i = 0; i < popularArr.length; i++) {
  popularArr[i] = 'R';

  console.log(popularArr[i]);
}
