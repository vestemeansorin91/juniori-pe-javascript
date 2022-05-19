const { emptyLine } = require('../../helpers/console');

const values = ['Alex', 'Sorin', 'Florin', 'Mihai', 'Petrut', 'Vlad'];

/*  Update element at specific index in array  */
console.log('arr before operations   --->   ', values);
emptyLine();
console.log("arr.splice(2, 1, 'Vlad')  --->   ", values.splice(2, 1, 'Vlad'));
console.log("arr after splice(2, 1, 'Vlad')  --->   ", values);
emptyLine();
const index = values.indexOf('Petrut');
console.log("values.indexOf('Petrut')  --->   ", values.indexOf('Petrut'));
console.log("arr.splice(index, 1, 'Peroni')  --->   ", values.splice(index, 1, 'Peroni'));
console.log("arr after values.indexOf('Petrut')  --->   ", values);
