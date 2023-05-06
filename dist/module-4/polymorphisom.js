"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    takeNap() {
        console.log(`I am sleeping 8 hours per day`);
    }
}
class Students extends Person {
    takeNap() {
        console.log("I am sleeping 10 hours per day");
    }
}
class Developer extends Person {
    takeNap() {
        console.log("I am sleeping 5 hours per day ");
    }
}
function getNap(param) {
    param.
    ;
}
const person1 = new Person();
const person2 = new Students();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);
