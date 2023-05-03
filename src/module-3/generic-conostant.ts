export { }
//arrow function
const createArray = <T>(param: T): T[] => {
    return [param]
}
const createArray1 = <x,y>(param1:x,param2:y): [x,y] => {
    return [param1,param2]
}

const result = createArray<string>('bd')
const result1 = createArray<boolean>(false)
type Name={
    name: string,
    reg: number
}
const result3 = createArray<Name>({
    name: "something",
    reg: 22342
})
// =====================
const result4=createArray1<string,string>('I love bd',"so much")

// =====================
// spread operator




const adMeInMyChMnd=<T extends {name:string,age:number,salary:number}>(myInfo:T)=>{
    const crh='kate winslet'
    return {...myInfo,crh}
}
const myInfo:{
    name:string,
    age:number,
    salary:number
}={
    name:'Persian',
    age:100,
    salary:10000
}
const result5=adMeInMyChMnd({name:"asdfas",age:12,salary:12})

console.log(result5);
