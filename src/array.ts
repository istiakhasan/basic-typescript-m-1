export{}
const namesTwo=["string1",12,true,"stringtwo"]
namesTwo[0]=13//possible
const names:string[]=["string1","string2","string3"]
const rollNumbers:number[]=[12,23,23]
//rollNumbers[4]="error"-it's an error

let user:[number,string]=[123,"userName"]
//user[0]="error"   not possible

const person={
    name:"Person one ",
    age :30,
    graduated:true
}
// Object destructuring
const {name,age}:{name:string,age:number}=person
console.log(name);
