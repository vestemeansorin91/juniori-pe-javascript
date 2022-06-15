/*
   Vreau sa faceti un CRUD pentru o lista de angajati.

   Un angajat are urmatoarele proprietati.
   id : number ( e unic )
   name : string
   isActive : boolean
   location : string
   role : string

   
   Va ajut eu cu cele 4 functii ce parametrii primeste fiecare functie.
   Va dau voie sa folositi direct array-ul employees in interiorul functiilor,  nu e nevoie sa il pasati ca parametru.
   
   getEmployees - afiseaza in consola numele angajatilor, cu virgula
   DOAR getEmployees afiseaza ceva in consola, restul modifica array-ul.

   OUTPUT: Sorin, Mariana, Ioana

   createEmployee - adauga in array un angajat ( la final ), id-ul e generat in functie
   updateEmployee - modifica un angajat, cu ce proprietati primeste ( poate sa updateze name, isActive, location, role)
   deleteEmployee - sterge un angajat

   TIPS: daca vi se pare prea greu sa incepeti cu array de obiecte , puteti incepe cu array de string-uri.
   TIPS: in folderul resources/arrays si resources/objects aveti toate functiile pe care le-am discutat.
*/
console.clear();

let listOfEmployees = [];
let idCounter = 1;

const employee1 = {
  name: 'Mariusica',
  isActive: true,
  location: 'Romania',
  role: 'Tester'
};

createEmployeeFromObject(employee1);

function createEmployeeFromObject(input) {
  const newEmployee = {
    ...input,
    id: idCounter
  };
  listOfEmployees.push(newEmployee);
  idCounter++;
}

// TODO
function updateEmployeeFromObject(id, updateEmployee) {}

createEmployee('Alex', false, 'Romania', 'Tester');
createEmployee('Florin', true, 'Romania', 'QA');
createEmployee('Petrut', false, 'Project Manager', 'Romania');
createEmployee('Alex', false, 'Romania', 'Tester');
createEmployee('Florin', true, 'Romania', 'QA');

// deleteEmployeeById(1);
// deleteEmployeeByName("Florin");

toggleEmployeeActiveState(3);
toggleEmployeeActiveState(3);

findEmployeeByNameAndUpdate('Petrut', 'Dana', true, 'Romania', 'Analist Financiar');
getEmployees();

function getEmployees() {
  console.log(listOfEmployees);
}

function createEmployee(paramName, paramIsActive, paramLocation, paramRole) {
  listOfEmployees.push({
    id: idCounter,
    name: paramName,
    isActive: paramIsActive,
    location: paramLocation,
    role: paramRole
  });

  idCounter++;
}

function findEmployeeByNameAndUpdate(employeeName, name, isActive, location, role) {
  for (let i = 0; i < listOfEmployees.length; i++) {
    if (listOfEmployees[i].name === employeeName) {
      listOfEmployees[i].name = name;
      listOfEmployees[i].isActive = isActive;
      listOfEmployees[i].location = location;
      listOfEmployees[i].role = role;
    }
  }
}

function deleteEmployeeById(paramId) {
  for (let i = 0; i < listOfEmployees.length; i++) {
    if (listOfEmployees[i].id === paramId) {
      console.log('Employee was deleted');
      return listOfEmployees.splice(i, 1);
    }
  }
  console.log('Employee not found!');
}

function deleteEmployeeByName(paramName) {
  for (let i = 0; i < listOfEmployees.length; i++) {
    if (listOfEmployees[i].name === paramName) {
      console.log('Employee was deleted');
      return listOfEmployees.splice(i, 1);
    }
  }
  console.log('Employee not found!');
}

function toggleEmployeeActiveState(id) {
  for (let i = 0; i < listOfEmployees.length; i++) {
    if (listOfEmployees[i].id === id) {
      listOfEmployees[i].isActive = !listOfEmployees[i].isActive;
    }
  }
}
