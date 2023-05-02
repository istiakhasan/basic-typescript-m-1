//normal function
function add(num1:number,num2:number):number{
    return num1+num2
}
add(1,2) //
// add(1,"asdfas") //error
const addArrow=(num1:number,num2:number):number=>num1+num2
const arr=[1,4,5]
const newArray=arr.map((elem:number)=>elem*elem)
const person:{
    name:string,
    balance:number,
    getBalance(money:number):string
}={
    name:"Mozid",
    balance:5,
    getBalance(money:number){
        // return this.balance+money
        return `My balance is ${this.balance+money}`

    }
}