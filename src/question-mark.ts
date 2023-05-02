//ternary operator
const age: number = 22
// if(age>=18){
//     console.log("yes");
// }else{
//     console.log("no");
// }


const isAdult = age >= 18 ? 'yes' : 'no'
console.log(isAdult);


// Nullish coalescing operator
//Null and undefined

const isAuthenticatedUser=undefined
const userName=isAuthenticatedUser??'Guest'
const userName2=isAuthenticatedUser? isAuthenticatedUser:'Guest'
console.log({userName},{userName2},"user");


type Manush={
    name:string;
    age:number;
    address:{
        city:"No city",
        road:"No road",
        home?:""
    }

}

const manush1:Manush={
    name:"Manush",
    age:102,
    address:{
        city:"No city",
        road:"No road",

    }
}


const home=manush1?.address?.home??"No Home"
console.log(home);