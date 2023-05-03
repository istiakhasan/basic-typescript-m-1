"use strict";
let emni;
emni = "nest level development";
emni.length;
emni;
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is : ${value}`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
const resultToBeNumber = kgToGram(1000);
// const resultToBeNumber = kgToGram(1000) as number
const resultToBeString = kgToGram("1000");
// const resultToBeString = kgToGram("1000") as string
console.log(resultToBeNumber, resultToBeString);
try {
}
catch (err) {
    console.log(err.message);
}
