console.clear();
let employee = {
  id: 4,
  name: 'Sorin',
  isActive: true,
  location: 'Romania',
  role: 'Senior'
};

let employee1 = {
  id: 5,
  name: 'Mariana',
  location: 'Romania',
  isActive: true,
  role: 'Junior'
};

let employee2 = {
  id: 6,
  name: 'Ioana',
  isActive: true,
  location: 'Romania',
  role: 'Junior'
};

let employees = [
  {
    id: 1,
    name: 'Sorin',
    isactive: true,
    location: 'Bucharest',
    role: 'doctor'
  },
  {
    id: 2,
    name: 'Mariana',
    isactive: false,
    location: 'Ramnicu Valcea',
    role: 'vanzator'
  },
  {
    id: 3,
    name: 'Ioana',
    isactive: true,
    location: 'Sibiu',
    role: 'it-ist'
  }
];

let idEmployeeCounter = 4;

createEmployee(employee);
createEmployee(employee1);
createEmployee(employee2);
updateEmployee(2, employee);
deleteEmployee(3);
getEmployees();

function updateEmployee(employeeId, employee) {
  for (let i = 0; i < employees.length; i++) {
    if (employeeId === employees[i].id) {
      employees[i] = { ...employee };
      // employees[i].name = "Mirel";
      // employees[i].isActive = true;
      // employees[i].role = "Junior";
      // employees[i].location = "Romania";
    }
  }
}

function deleteEmployee(employeeId) {
  for (let i = 0; i < employees.length; i++) {
    if (employeeId === employees[i].id) {
      employees.splice(i, 1);
    }
  }
}

function createEmployee(employee) {
  const newEmployee = { ...employee };
  newEmployee.id = idEmployeeCounter;
  employees.push(newEmployee);
  idEmployeeCounter++;
}

function getEmployees() {
  let names = [];
  for (let i = 0; i < employees.length; i++) {
    names.push(employees[i].name);
  }
  console.log(names.join(', '));

  console.log(names);
}
