// Relative path
// const ceva = require('./resources/arrays/update-array');
// const ceva2 = require('./arrays/016-angajati/problem');

// Absolute path
// const ceva3 = require('/Users/sorinvestemean/Documents/JunioriPeJavascript/juniori-pe-javascript/resources/arrays/update-array');
// const ceva3 = require('/Users/sorinvestemean/Documents/JunioriPeJavascript/juniori-pe-javascript/arrays/016-angajati/problem');

const employee = {
  id: 2,
  fullName: 'Sorin',
  isActive: true,
  location: 'Bucharest',
  role: 'Programmer'
};

// Destructurare
const { id, fullName, isActive } = employee;
// const id = employee.id;
// const fullName = employee.fullName;
// const isActive = employee.isActive;

const newEmployee = { fullName, isActive };

console.log(fullName);
