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

let employees = [];

let employeeCounter = 1;

let employee = {
  id: employeeCounter,
  name: 'Sorin Vestemean',
  isActive: true,
  location: 'Romania',
  role: 'Admin'
};

createEmployee(employee);
createEmployee(employee);
getEmployees();

function createEmployee(employee) {
  employees.push(employee);
  employeeCounter++;
}
function getEmployees() {
  console.log(employees);
}

function updateEmployee(employeeId, employee) {}

function deleteEmployee(employeeId) {}

/* 
  *BONUS 2*

  Faceti asta DOAR daca ati terminat ce e deasupra si ati testat.

  setTimeout(() => {
  const randomFnCall = Math.floor(Math.random() * 3);

  if (randomFnCall === 0) {
    console.log('Se apeleaza createEmployee');
    createEmployee(employee);
    getEmployees();
  }

  if (randomFnCall === 1) {
    console.log('Se apeleaza updateEmployee');
    updateEmployee(employeeId, employee);
    getEmployees();
  }

  if (randomFnCall === 2) {
    console.log('Se apeleaza deleteEmployee');
    deleteEmployee(employeeId);
    getEmployees();
  }
}, 4000);

*/
