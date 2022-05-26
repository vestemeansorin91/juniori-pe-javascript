console.clear();
// Global Scope
let name = 'Sorin';

function changeText() {
  name = 'React';
}

if (true) {
  name = 'con';

  const newName = name;

  console.log(name);
}

const newPerson = {
  name
};

changeSomething();
function changeSomething() {
  // Function scope
  let cards = 'Morometii';

  console.log('este in functie', cards);
}

if (true) {
  // Block scope

  let newTree = 'copac';
}

while (false) {
  // Block scope
}
