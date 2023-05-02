let user:{
    company:"p h company",//fixed value
    readonly compaytwo:string,
    name:string,
    age:number,
    isMarried:boolean,
    wife?:string //optional type
}={
    company:"p h company",//with out fixed value it wil be error
    name:"Motaher Hossain",
    compaytwo:"II t",
    age:123,
    isMarried:true,
    // wife:"Sabnam"
}
// user.compaytwo="error" //readonly property can't be modified
export {user}



