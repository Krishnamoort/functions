function Employee(name, designation, yearOfBirth) {
    this.name = name;
    this.designation = designation; //using this iss prototype
    this.yearOfBirth = yearOfBirth;
}
Employee.prototype.calculateAge = function () {
    console.log('The current age is: ' + (2019 - this.yearOfBirth));
}
console.log(Employee.prototype);


// creating Objects
let Emp1 = new Employee('sunshar', 'Junior Tester', 1995);
console.log(Emp1);
Emp1.calculateAge();

let Emp2 = new Employee('krishna', 'Software Developer', 1990);
console.log(Emp2)
Emp2.calculateAge();

let Emp3 = new Employee('gowri', 'Junior HR', 1998);
console.log(Emp3)
Emp3.calculateAge();
