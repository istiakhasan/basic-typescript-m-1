"use strict";
const person1 = {
    name: 'Monika ',
    age: 23,
    profession: "Developer",
    address: "Bangladesh"
};
const person2 = {
    name: 'Monisha ',
    profession: "React developer",
    address: "India"
};
const isCrushMarried = false;
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculate(4, 4, (x, y) => x + y);
