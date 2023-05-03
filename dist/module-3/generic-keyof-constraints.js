"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const a: newType='address'
const b = 'address';
// console.log(a);
function getProperty(obj, key) {
    return obj[key];
}
const property = getProperty({ name: "mr.x", age: 100 }, "age");
console.log(property);
const a = {};
