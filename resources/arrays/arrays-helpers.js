const { emptyLine } = require('../../helpers/console');

const values = ['Alex', 'Sorin', 'Florin', 'Mihai', 'Petrut', 'Vlad'];

/*
    SLICE
*/
emptyLine();
/*  Take a copy from array without affect it  */
console.log('values.slice(2,2)  --->   ', values.slice(2, 2));
console.log('arr after values.slice(2,2)  --->   ', values);
emptyLine();
console.log('values.slice(2,3)  --->   ', values.slice(2, 3));
console.log('arr after values.slice(2,3)  --->   ', values);
emptyLine();
console.log('values.slice(-2)  --->   ', values.slice(-2));
console.log('arr after values.slice(-2)  --->   ', values);
emptyLine();
console.log('values.slice()  --->   ', values.slice());
console.log('arr after values.slice()  --->   ', values);
