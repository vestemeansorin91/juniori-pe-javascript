const fs = require('fs');

const fileName = 'test.csv';
const rootPath = __dirname;
const filePath = rootPath + '/files/' + fileName;

/* Read from a file */
fs.readFile(filePath, 'utf-8', function (err, response) {
  if (err) {
    console.log('[Eroare]: Fisierul nu exista sau nu poate fi citit');
    return;
  }

  /*  File content */
  console.log(response);

  /*  File split by lines*/
  // const content = response.split('\n');
  // console.log(content);

  /*  Keep first line (headers from xlsx file)*/
  // const employeeObjKeys = content[0];
  // content.shift();
  // console.log(employeeObjKeys.split(','));

  /*  Remain with rest of the lines*/
  // console.log(content);
});

function getEmployees() {}

function createEmployee() {}

function updateEmployee() {}

function deleteEmployee() {}

/* Write to a file */

// const fileContent = '';

// fs.writeFile(filePath, fileContent, { encoding: 'utf8' }, err => {
//   if (err) {
//     console.log('[Eroare]: Nu am putut scrie fisierul');
//     return;
//   }
//   console.log('Successfully Written to File.');
// });
