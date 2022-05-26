// const fs = require('fs');
import fs from 'fs';

// const helpers = require('./helpers');
// import helpers from './helpers';

// helpers.greeting('Sorin');

import chalk from 'chalk';

const employees = ['Sorin', 'Alex'];

for (let i = 0; i < employees.length; i++) {
  console.log(chalk.bgBlue(employees[i]));
}

// Global, function, block scopes
// Class, new keyword

// Callstack
// relative / absolute path
// npm / NodeJS
// packages
// package.json
