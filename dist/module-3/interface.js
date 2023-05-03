"use strict";
const rollNumbers = [1, 3, 4];
// const rollNumbers:rollNumbersType=[1,3,4]
// const rollNumbers:number[]=[1,3,4]
// const addNumbers=(num1:number,num2:number):number=>num1+num2
// const addNumbers:addNumbersType=(num1,num2)=>num1+num2
const addNumbers = (num1, num2) => num1 + num2;
const user = {
    role: 245,
    age: 2333,
    name: "something"
};
const userWithTypeAlias = {
    name: "Type alias",
    age: 23
};
const userWithInterface = {
    name: "Interface",
    age: 24
};
