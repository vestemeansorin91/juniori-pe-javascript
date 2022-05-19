const { emptyLine } = require('../../helpers/console');

const values = [];

console.log('arr before operations   --->   ', values);
emptyLine();
/*  Add last element to array  */
console.log("arr.push('Alex')  --->   ", values.push('Alex'));
console.log("arr after push('Alex')  --->   ", values);
emptyLine();
console.log("arr.push('Sorin')  --->   ", values.push('Sorin'));
console.log("arr after push('Sorin')  --->   ", values);
emptyLine();
console.log("arr.push('Florin')  --->   ", values.push('Florin'));
console.log("arr after push('Florin')  --->   ", values);
emptyLine();
/*  Add first element to array  */
console.log("arr.unshift('Mihai')  --->   ", values.unshift('Mihai'));
console.log("arr after unshift('Mihai')  --->   ", values);
emptyLine();
console.log("arr.unshift('Petrut')  --->   ", values.unshift('Petrut'));
console.log("arr after unshift('Petrut')  --->   ", values);
emptyLine();
/*  Add element to specific index in array  */
console.log("values.splice(2, 0, 'Vlad')  --->   ", values.splice(2, 0, 'Vlad'));
console.log("arr after values.splice(2, 0, 'Vlad')  --->   ", values);
emptyLine();
console.log(
  "values.splice(2, 0, 'Sorin', 'Vestemean')  --->   ",
  values.splice(2, 0, 'Sorin', 'Vestemean')
);
console.log("arr after values.splice(2, 0, 'Sorin', 'Vestemean')  --->   ", values);
