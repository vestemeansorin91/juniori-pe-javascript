console.clear();
const employee = {
  ip: 1,
  name: 'Sorin',
  isActive: true,
  location: 'Bucharest',
  role: 'doctor',
  greeting: function () {
    console.log('Say hello');
  }
};

/*
  REMEMBER
  class 
  new
  this
*/

class Employee {
  constructor(name, isActive, location, role) {
    this.name = name;
    this.isActive = isActive;
    this.location = location;
    this.role = role;
  }

  greeting() {
    console.log('Say hello ' + this.name);
  }

  toggleIsActive() {
    console.log('Inainte de schimbare', this.isActive);
    this.isActive = !this.isActive;
    console.log('Dupa de schimbare', this.isActive);
  }
}

const employeeSorin = new Employee('Sorin', true, 'Bucharest', 'Doctor');
const employeePetrut = new Employee('Petrut', true, 'Timisoara', 'Medic primar');
