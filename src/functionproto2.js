function kkk(name, salary, age) {
    this.name = name;
    this.salary = salary;
    this.age = age;
}

kkk.prototype.increment = function () {
    console.log("2022 increment:" + (this.salary = +2000));
}
console.log(kkk.prototype);

kkk.prototype.client = "shell";

let kkk1 = new kkk('krishna', 25000, 22);
console.log(kkk1);
kkk1.increment1();

let kkk2 = new kkk('Suhas', 45000, 27);
console.log(kkk2);
kkk2.increment();

let kkk3 = new kkk('varatha', 60000, 32);
console.log(kkk3);
kkk3.increment();


