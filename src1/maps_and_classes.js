
var map1 = new Map();
map1.set("first name", "Krishna");
map1.set("last name", "moorthy");
map1.set("friend 1", "Sundhar")
map1.set("friend 2", "Mohan")
console.log(map1);
console.log("map1 has friend 3 ? " + map1.has("friend 3"));//false
console.log("get value for key = friend 3 - " + map1.get("friend 3"));//undefined
console.log("delete element with key = friend 2 - " + map1.delete("friend 2"));//delete element with key = friend 2 - true
//map1.clear(); here deleted all objects
console.log(map1);
//class in js

class Employee {
    constructor(id, name, company) {
        this.id = id;
        this.name = name;
        this.company = company;
    }
    detail() {
        document.writeln(this.id + " " + this.name + "<br>" + this.company)
    }
}
//passing object to a variable 
var e1 = new Employee(129625, "krishna", "Shell india");
var e2 = new Employee(122354, "sundhar", "zelon tech");
e1.detail();
e2.detail();