// export { }
// type GenericArray<T> = Array<T>
// // tuple
// type GenericTuple<x, y> = [x, y]
// const relation: GenericTuple<string, string> = ['persian', 'kate winslet']

// // const relationWithSalary: GenericTuple<object, string> = [{

// //     name: "Persian",
// //     salary: 2000
// // },
// //     "kate winslet"
// // ]

// // type relationShipSalaryType = {
// //     name: string,
// //     salary: number
// // }
// interface relationShipSalaryType{
//     name:string,
//     salary:number
// }
// const relationWithSalary: GenericTuple<relationShipSalaryType, string> = [{

//     name: "Persian",
//     salary: 2000
// },
//     "kate winslet"
// ]


// const rollNumbers: GenericArray<number> = [22, 34, 53, 53]
// // const rollNumbers: Array<number> = [22, 34, 53, 53]
// const rollNumber2: GenericArray<string> = ['23', '33']
// // const rollNumber2: Array<string> = ['23', '33']
// const rollNumber3: GenericArray<boolean> = [true, false]
// // const rollNumber3: Array<boolean> = [true, false]

// type NameRollType = {
//     name: string,
//     roll: number
// }
// const userNameAndRollNumbers: GenericArray<NameRollType> = [{
//     name: "x",
//     roll: 12
// },
// {
//     name: "y",
//     roll: 23
// }
// ]

export { }
const arr: Array<number> = [12, 34, 34]
const arr2: number[] = [12, 34, 34]

type GenericArray<T> = Array<T>
type ObjGeneric<T, U> = {
    name: number,
    ex: T,
    ps: U
}


const roll1: GenericArray<string> = ['1', '2']
const roll2: GenericArray<number> = [1, 2]
const roll3: GenericArray<boolean> = [true, false]
const roll4: GenericArray<object> = [{
    name: 1,
    roll: 1
}]

const nassimRaihan: ObjGeneric<false, string> = {
    name: 12,
    ex: false,
    ps: "ps"
}
console.log(arr);



interface Mehedi {
    deg: string,
    exp: number,
    isMarried: boolean
}



interface greetingMehedi<T, U> {
    deg: string,
    exp: U,
    isMarried: T
}


const MehediOne: Mehedi = {
    deg: "developer",
    exp: 5,
    isMarried: false
}
const MehediTwo: greetingMehedi<object, number> = {
    deg: "developer",
    exp: 5,
    isMarried: {

    }
}
const Mehedithree: greetingMehedi<boolean, string> = {
    deg: "developer",
    exp: "adfafdasfd",
    isMarried: false
}




