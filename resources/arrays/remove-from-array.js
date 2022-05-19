const { emptyLine } = require('../../helpers/console');

const values = ['Alex', 'Sorin', 'Florin', 'Mihai', 'Petrut', 'Vlad'];

console.log('arr before operations   --->   ', values);
emptyLine();
/*  Remove last element from array  */
console.log('arr.pop()  --->   ', values.pop());
console.log('arr after pop()  --->   ', values);
emptyLine();
/*  Remove first element from array  */
console.log('arr.shift()  --->   ', values.shift());
console.log('arr after shift()  --->   ', values);
emptyLine();
/*  Remove specific element from array  */
console.log('arr.splice()  --->   ', values.splice(2, 1));
console.log('arr after splice()  --->   ', values);
