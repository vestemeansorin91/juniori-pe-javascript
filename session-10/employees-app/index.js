/*
    Ruleaza npm init sa creezi package.json
    In package.json scrie pe prima linie asta pentru importuri "type": "module",

    Instalez pachetele necesare:
    chalk

    Rulez npm install chalk
    Citim dintr-un fisier

*/

/*  Pachete din NodeJS*/
import fs from 'fs';
import path from 'path';

/*  Pachete Third party*/
import chalk from 'chalk';

let employeeObjKeys = [];
let restOfTheLines = [];
const employees = [];

/* Read from a file ->  Set employeeObjKeys -> Set fileContent*/
const fileName = 'users-db.csv';
const rootPath = process.cwd();
const filePath = rootPath + '/files/' + fileName;

const resultFromFile = fs.readFileSync(filePath, 'utf-8');
employeeObjKeys = setTableHeaders(resultFromFile);
restOfTheLines = setRestOfTheLines(resultFromFile);

addAllEmployees(restOfTheLines);
console.log(employees);

function setTableHeaders(response) {
  const content = response.split('\n');
  return content[0].split(',');
}

function setRestOfTheLines(response) {
  //   if (err) {
  //     console.log('[Eroare]: Fisierul nu exista sau nu poate fi citit');
  //     return;
  //   }

  /*  File content */
  //   console.log(response);

  //   /*  File split by lines*/
  const content = response.split('\n');
  //   console.log(content);

  //   /*  Keep first line (headers from xlsx file)*/
  content.shift();
  //   console.log(employeeObjKeys.split(','));

  //   /*  Remain with rest of the lines*/
  return content;
}

function createEmployee(employee) {
  //   employeeObjKeys = ['id', 'name', 'age', 'location', 'isActive'];
  //   const newEmployee = {
  //     // id: 1,
  //     name: 'Sorin V'
  //     // age: 31,
  //     // location: 'Romania',
  //     // isActive: !!0
  //   };

  //   newEmployee.name = 'Sorin V';
  //   newEmployee['name'] = 'Sorin V';

  //'1,Sorin V,31,Romania,1',

  const newEmployee = {};
  const convertedEmployeeStringToArray = employee.split(','); // ['1', 'Sorin V', '31', 'Romania', '1'];
  for (let i = 0; i < convertedEmployeeStringToArray.length; i++) {
    newEmployee[employeeObjKeys[i]] = convertedEmployeeStringToArray[i];
  }

  employees.push(newEmployee);
}

function addAllEmployees(arr) {
  for (let i = 0; i < arr.length; i++) {
    createEmployee(arr[i]);
  }
}
