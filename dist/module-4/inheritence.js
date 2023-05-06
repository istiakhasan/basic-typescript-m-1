"use strict";
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `This ${this.name} will sleep for ${hours}`;
    }
}
class Student extends Parent {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student1 = new Student('korim', 12, "thana more");
const a = student1.makeSleep(30);
console.log(a);
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClasses(numOfclass) {
        return `this ${this.name} will takke ${numOfclass}`;
    }
}
const teacher1 = new Teacher("kashem sir", 54, "RajPur", "Head master");
const b = teacher1.takeClasses(12);
console.log(b);
