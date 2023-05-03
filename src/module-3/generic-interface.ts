export { }
interface CrushInterface<T, U=null> {
    name: string,
    husband: T,
    ex: U
}
const Crush1: CrushInterface<boolean, string> = {
    name: "xyz",
    husband: true,
    ex: "yes"
}
const Crush2: CrushInterface<string, number> = {
    name: "xyz",
    husband: "parcian",
    ex: 1
}

// husband interface
interface HusbandInterface {
    name: string,
    salary: number,

}
const Crush3: CrushInterface<HusbandInterface, object> = {
    name: "xyz",
    husband: {
        name: "Parcian",
        salary: 232423
    },
    ex: {
        name: "something "
    }
}

interface PersonInterface {
    name: string,
    age: number
}

const crush4: CrushInterface<PersonInterface, PersonInterface> = {
    name: 'Persian',
    husband: {
        name: "ka",
        age: 23
    },
    ex: {
        name: "ca",
        age: 33
    }
}












type GenericArray<T> = Array<T>
// tuple
type GenericTuple<x, y> = [x, y]
const relation: GenericTuple<string, string> = ['persian', 'kate winslet']

// const relationWithSalary: GenericTuple<object, string> = [{

//     name: "Persian",
//     salary: 2000
// },
//     "kate winslet"
// ]

// type relationShipSalaryType = {
//     name: string,
//     salary: number
// }
interface relationShipSalaryType {
    name: string,
    salary: number
}
const relationWithSalary: GenericTuple<relationShipSalaryType, string> = [{

    name: "Persian",
    salary: 2000
},
    "kate winslet"
]


const rollNumbers: GenericArray<number> = [22, 34, 53, 53]
// const rollNumbers: Array<number> = [22, 34, 53, 53]
const rollNumber2: GenericArray<string> = ['23', '33']
// const rollNumber2: Array<string> = ['23', '33']
const rollNumber3: GenericArray<boolean> = [true, false]
// const rollNumber3: Array<boolean> = [true, false]

type NameRollType = {
    name: string,
    roll: number
}
const userNameAndRollNumbers: GenericArray<NameRollType> = [{
    name: "x",
    roll: 12
},
{
    name: "y",
    roll: 23
}
]