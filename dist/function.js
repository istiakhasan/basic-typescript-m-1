"use strict";
//normal function
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2); //
// add(1,"asdfas") //error
const addArrow = (num1, num2) => num1 + num2;
const arr = [1, 4, 5];
const newArray = arr.map((elem) => elem * elem);
const person = {
    name: "Mozid",
    balance: 5,
    getBalance(money) {
        // return this.balance+money
        return `My balance is ${this.balance + money}`;
    }
};
