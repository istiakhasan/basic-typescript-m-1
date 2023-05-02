type NoobDeveloper={
    name:string
}

// type JuniorDeveloper={
//     name:string,
//     expertise:string,
//     experience:number
// }


// inter section
type JuniorDeveloper=NoobDeveloper &{
    expertise:string,
    experience:number
}
enum Level{
    Junior="Junior",
    mid="Mid",
    senior="Senior"
}
type NextLevelDeveloper=JuniorDeveloper &{
    leadershipExperience:boolean;
    level:"Junior" | "Mid" | "senior"
    // level:Level   //enum

}
// union type
const newDeveloper:NoobDeveloper | JuniorDeveloper={
    name:"Moznu mia",
    experience:12,
    expertise:"js"
}

// intersection
const developer:NextLevelDeveloper={
    name:"khaled",
    experience:15,
    expertise:"React",
    leadershipExperience:true,
    // level:Level.Junior
    level:"Junior"
}
