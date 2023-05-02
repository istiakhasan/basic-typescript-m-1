//null type
const searchName = (value: string | null) => {
    if (value === null) {
        console.log("There is nothing to search");
    } else {
        console.log("searching");
    }
}


searchName(null)

const getMySpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600
        console.log(`my speed is ${convertedSpeed}`);
    }

    if (typeof speed === "string") {
        const value = speed.split(" ")[0]
        console.log(value, "value");
    } else {
        console.log("not valid ");
    }
}


getMySpeed(10)
getMySpeed(`10 kmh^-1`)
getMySpeed(true)


function throwError(message: string):never { //jodi kokhono kono funciot kico return na kore sei khetry amra never type use kortey pari
    throw new Error(message)
}
throwError("Error is mortal ")
