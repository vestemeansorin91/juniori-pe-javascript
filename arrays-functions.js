const users = [
  {
    isAdmin: false,
    _id: "62b9e8e079fa7cfc1e59aaa0",
    username: "newmagicfilms",
    fullName: "Petrut",
    password: "444214",
    email: "sorin@mail.com",
    isActive: true,
    gender: "men",
    firstName: "Sorin",
    lastName: "Vestemean"
  },
  {
    isAdmin: false,
    _id: "62b9ea37f16771b69e69bd1b",
    username: "newmagicfilms2",
    fullName: "Petrut",
    password: "444214",
    email: "sorin2@mail.com",
    isActive: false,
    gender: "men",
    firstName: "Daniela",
    lastName: "Vestemean"
  },
  {
    isAdmin: false,
    _id: "62b9ecf4b8eb14f185a29f7e",
    username: "newmagicfilms3",
    fullName: "Petrut",
    password: "444214",
    email: "sorin3@mail.com",
    isActive: false,
    gender: "men",
    firstName: "Radu",
    lastName: "Vestemean"
  },
  {
    isAdmin: false,
    _id: "62b9fd3f71c353b0908dec12",
    username: "newmagicfilms4",
    fullName: "Petrut",
    password: "444214",
    email: "sorin4@mail.com",
    isActive: false,
    gender: "men",
    firstName: "Petrut",
    lastName: "Vestemean"
  },
  {
    isAdmin: false,
    _id: "62bc85a3241349b245f95c27",
    username: "newmagicfilms1",
    fullName: "Sorin Vestemean",
    password: "1234",
    email: "sorin1@mail.com",
    isActive: true,
    gender: "men",
    firstName: "Florin",
    lastName: "Vestemean"
  },
  {
    isAdmin: false,
    _id: "62bc85e5bb0f7da7de054af0",
    username: "newmagicfilms5",
    fullName: "Sorin Vestemean",
    password: "1234",
    email: "sorin5@mail.com",
    isActive: false,
    gender: "men",
    firstName: "Alex",
    lastName: "Vestemean"
  },
  {
    _id: "62bef88c847b55f641218626",
    username: "user",
    fullName: "user",
    password: "1234",
    email: "user",
    isActive: false,
    isAdmin: false,
    gender: "men",
    firstName: "Mihai",
    lastName: "Vestemean"
  }
];
console.clear();

const id = "62bc85e5bb0f7da7de054af0";

// Metoda cu for .find();
console.log(getUserById(id));

function getUserById(id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i]._id === id) {
      return users[i];
    }
  }
}

// .find();
const userFound = users.find((user) => {
  // return boolean
  return user._id === id;
});

const userFound2 = users.find((user) => user._id === id);

console.log(userFound);
console.log(userFound2);
console.clear();

//-------------------------//
// Metoda cu for pentru .filter();
const notActiveUsersFor = getAllUsersWithActiveStatus(false);
const activeUsersFor = getAllUsersWithActiveStatus(true);

console.log(notActiveUsersFor);
console.log(activeUsersFor);

function getAllUsersWithActiveStatus(isActive) {
  let result = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].isActive === isActive) {
      result.push(users[i]);
    }
  }

  return result;
}

console.log("-----------------");
console.log(users.filter((el) => el.isActive !== true));
console.log(users.filter((el) => el.isActive === true));

const fruits = ["banana", "portocala", "cireasa", "strugure"];

console.log(fruits.find((el) => el === "cireasa"));
console.log(fruits.filter((el) => el !== "cireasa"));

/* Verificati daca toti userii sunt activi */

const areAllUsersActive = checkIfAllUsersAreActive();

function checkIfAllUsersAreActive() {
  const howManyUsersCount = users.length;
  let activeUsers = 0;

  for (let i = 0; i < users.length; i++) {
    if (users[i].isActive === true) {
      activeUsers++;
    }
  }

  return howManyUsersCount === activeUsers;
}

console.log(users.every((el) => el.isActive === true));
console.log({ areAllUsersActive });

/* Verficati daca cel putin un user este activ */
const atLeastOneUserActive = checkIfAtLeastOneUserIsActive();

function checkIfAtLeastOneUserIsActive() {
  for (let i = 0; i < users.length; i++) {
    if (users[i].isActive === true) {
      return true;
    }
  }
  return false;
}

console.log({ atLeastOneUserActive: atLeastOneUserActive });
console.log(users.some((el) => el.isActive === true));

// Realizeaza o functie care saluta fiecare utilizator
greetAllUsers();

function greetAllUsers() {
  for (let i = 0; i < users.length; i++) {
    console.log("Salut " + users[i].username + "!!!" + "cu indexul ----> " + i);
  }
}

console.log("-----------------");

users.forEach((el, i) => {
  console.log("Salut " + el.username + "!!!" + "cu indexul ----> " + i);
});

console.log("-----------------");

for (const [i, el] of users.entries()) {
  console.log("Salut " + el.username + "!!!" + "cu indexul ----> " + i);
}
console.clear();
console.log(users);
// Vreau o functie care parcurge array-ul de users si returneaza un array de [{ username, fullname}]
// .map();
const usersEcusons = getEcusons();

function getEcusons() {
  let result = [];
  for (let i = 0; i < users.length; i++) {
    result.push({
      fullname: users[i].firstName + " " + users[i].lastName
    });
  }
  return result;
}

console.log({ usersEcusons });

const usersEcusons2 = users.map((el) => {
  return {
    fullName: el.firstName + " " + el.lastName
  };
});

const usersEcusons3 = users.map((el) => ({
  fullName: el.firstName + " " + el.lastName
}));

console.log({ usersEcusons2 });
console.log({ usersEcusons3 });

console.log(users.findIndex((el) => el.email === "sorin4@mail.com"));
console.log(users[3].username);

console.clear();

// Sortati dupa nume alfabetic -> crescator / descrescator
// Sortati dupa valoare numerica -> crescator / descrescator
// Sortati dupa boolean false / true
// Sortati dupa Date

// Bubble sort
const numere = [13, 19, 2, 1, 17, 12, -3, 6];
//   0    1  2  3  4   5
bubbleSort(numere);
console.log("dupa ----> " + numere);

function bubbleSort(arr) {
  let temp = null;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }

    }
  }
}

const sortedUsersByUsername = users.sort((a, b) =>
  a.username < b.username ? 1 : -1
);
console.log(sortedUsersByUsername.map((el) => el.username));

const sortUsersByBoolean = users.sort((a, b) =>
  a.isActive > b.isActive ? 1 : -1
);
console.log(sortUsersByBoolean.map((el) => el.isActive));
console.log(numere.sort((a, b) => (a < b)));

