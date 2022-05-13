let persons = ['Maria', 'Sorin', 'Alex'];

const testBus = beforeStartingTheBus(persons, 4);
console.log(testBus);

function beforeStartingTheBus(arr, MAX_CAPACITY) {
  const RESULT_I_DONT_GO = 'Nu plec, nu s-a urcat nimeni!';
  const RESULT_NOT_FULL_YET = ', dar autobuzul nu este plin.';
  const RESULT_OVERLOADED = 'Nu plec, e prea plin autobuzul!';

  if (!arr.length) {
    return RESULT_I_DONT_GO;
  }

  if (arr.length < MAX_CAPACITY) {
    return compoundPersons(arr, arr.length) + RESULT_NOT_FULL_YET;
  }

  if (arr.length === MAX_CAPACITY) {
    return compoundPersons(arr, MAX_CAPACITY);
  }

  if (arr.length > MAX_CAPACITY) {
    return RESULT_OVERLOADED;
  }
}

function compoundPersons(arr, maxCapacity) {
  let result = 'S-a urcat ';

  for (let i = 0; i < maxCapacity; i++) {
    if (arr.length === 1) {
      result = result + arr[i];
      break;
    }

    if (i === maxCapacity - 1) {
      result = result + ' si ' + arr[i];
    } else if (i === maxCapacity - 2) {
      result = result + arr[i];
    } else {
      result = result + arr[i] + ',';
    }
  }

  return result;
}
