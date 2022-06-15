// A promise will return either a resolved value or a reason that it's not resolved (rejected);

// 3 SCENARIOS
// Fullfild
// Rejected
// Pending

// Before Promises we're callbacks

// someFn(100, 'Left', function () {
//   someFn(200, 'Right', function () {
//     someFn(300, 'Up', function () {
//       someFn(600, 'Down', function () {
//         console.log('Done');
//       });
//     });
//   });
// });
