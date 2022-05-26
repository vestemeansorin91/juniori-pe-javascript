const fs = require('fs');

const fileName = 'test.csv';
const rootPath = __dirname;
const filePath = rootPath + '/files/' + fileName;

fs.readFile(filePath, 'utf-8', function (err, response) {
  if (err) {
    console.log('[Eroare]: Nu am putut citi fisierul');
    return;
  }

  const content = response.split('\n');
  const employeeObjKeys = content[0];
  content.shift();
  console.log(content);
  console.log(employeeObjKeys.split(','));
});

// fs.writeFile(filePath, fileContent, { encoding: 'utf8' }, err => {
//   if (err) {
//     console.log('[Eroare]: Nu am putut scrie fisierul');
//     return;
//   }
//   console.log('Successfully Written to File.');
// });
