"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//arrow function
const createArray = (param) => {
    return [param];
};
const createArray1 = (param1, param2) => {
    return [param1, param2];
};
const result = createArray('bd');
const result1 = createArray(false);
const result3 = createArray({
    name: "something",
    reg: 22342
});
// =====================
const result4 = createArray1('I love bd', "so much");
// =====================
// spread operator
const adMeInMyChMnd = (myInfo) => {
    const crh = 'kate winslet';
    return Object.assign(Object.assign({}, myInfo), { crh });
};
const myInfo = {
    name: 'Persian',
    age: 100,
    slary: 10000
};
const result5 = adMeInMyChMnd(myInfo);
console.log(result5);
