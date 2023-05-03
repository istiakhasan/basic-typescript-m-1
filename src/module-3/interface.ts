//We can extend interface
type user = {
    name: string;
    age: number
};
interface Iuser {
    name: string;
    age: number
}
interface IextendUser extends Iuser {
    role: number
}
type rollNumber=number;


type addNumbersType=(num1:number,num2:number)=>number

interface IAddNumbersType{
    (num1:number,num2:number):number
}

type rollNumbersType=number[]
interface IrollNumbers{
    [index:number]:number
}
const rollNumbers:IrollNumbers=[1,3,4]
// const rollNumbers:rollNumbersType=[1,3,4]
// const rollNumbers:number[]=[1,3,4]
// const addNumbers=(num1:number,num2:number):number=>num1+num2
// const addNumbers:addNumbersType=(num1,num2)=>num1+num2
 const addNumbers:IAddNumbersType=(num1,num2)=>num1+num2
const user: IextendUser = {
    role: 245,
    age: 2333,
    name: "something"
}
const userWithTypeAlias: user = {
    name: "Type alias",
    age: 23
}
const userWithInterface: Iuser = {
    name: "Interface",
    age: 24
}