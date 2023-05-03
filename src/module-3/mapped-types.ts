export { }
const arrayofNumbers = [1, 2, 3]
const arrayOfStrings = arrayofNumbers.map(number => number.toString())
console.log(arrayOfStrings);



type AreaNumber = {
    height: number;
    width: number

}

type Volume = {
    height: number;
    width: number
    depth: number
}


type Area<T> = {
    // [key in 'height' | 'width']:string
    // [key in keyof Volume]:Volume[key]
    readonly [key in keyof T]: T[key]
}



const area1: Area<{ name: string }> = {
    name: "kashem"
}


type AreaString = {
    height: string,
    width: string
}

type AreaReadOnly = {
    readonly height: number;
    readonly width: number
}
const rectangularArea: AreaReadOnly = {
    height: 10,
    width: 20
}
// rectangularArea.height=30

type A = AreaNumber['height']  //look up types
type B = keyof AreaNumber     //'width' | "height"



// const obj={
//     name:'Persian'
// }
// obj["name"]


// function getArrayItem(arr: T[], index: number, key: k): T[k] {
//     const item = arr[index]
//     return item[key]
// }


// const user = [{
//     name: 'John', age: 30
// },
// {
//     name: 'Mary',
//     age: 25
// }
// ]

// console.log(getArrayItem(user, 0, 'name'));