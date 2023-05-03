"use strict";
var _a, _b;
//ternary operator
const age = 22;
// if(age>=18){
//     console.log("yes");
// }else{
//     console.log("no");
// }
const isAdult = age >= 18 ? 'yes' : 'no';
console.log(isAdult);
// Nullish coalescing operator
//Null and undefined
const isAuthenticatedUser = undefined;
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'Guest';
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
console.log({ userName }, { userName2 }, "user");
const manush1 = {
    name: "Manush",
    age: 102,
    address: {
        city: "No city",
        road: "No road",
    }
};
const home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : "No Home";
console.log(home);
