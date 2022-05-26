// const chalk = require('chalk');
import chalk from 'chalk';

let globalCounter = 0;

function greeting(name) {
  console.log('Salut ' + name);
  //   console.log(chalk.blue('Salut ' + name));
}

function reset() {
  console.log('Gata... am dat reset!');
}

function incrementGlobalCounter() {
  globalCounter++;
}

module.exports = { greeting, reset, incrementGlobalCounter, globalCounter };
