// console.log('Start');
// umblamLaBazaDeDate();

// const umbluLaBazaDeDate = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve('Am terminat sa ma uit la baza de date');
//   });
// });

// console.log(umbluLaBazaDeDate); // Promise <pending>

// umbluLaBazaDeDate
//   .then(function (result) {
//     console.log(result);
//     console.log('Finish');

//     return new Promise(function (resolve, reject) {
//       resolve(true);
//     });
//   })
//   .then(result => {
//     return new Promise(function (resolve, reject) {
//       reject(new Error('Nu m-am conectat la server'));
//     });
//   })
//   .catch(result => console.log(result))
//   .finally();

// function umblamLaBazaDeDate() {
//   setTimeout(function () {
//     console.log('Am terminat sa ma uit la baza de date');
//   }, 3000);
// }

// Fat arrow function
const rezultat1 = function (input) {
  return input;
};

console.log(rezultat1());
