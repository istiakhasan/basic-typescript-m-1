"use strict";
//null type
const searchName = (value) => {
    if (value === null) {
        console.log("There is nothing to search");
    }
    else {
        console.log("searching");
    }
};
searchName(null);
const getMySpeed = (speed) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`my speed is ${convertedSpeed}`);
    }
    if (typeof speed === "string") {
        const value = speed.split(" ")[0];
        console.log(value, "value");
    }
    else {
        console.log("not valid ");
    }
};
getMySpeed(10);
getMySpeed(`10 kmh^-1`);
getMySpeed(true);
function throwError(message) {
    throw new Error(message);
}
throwError("Error is mortal ");
