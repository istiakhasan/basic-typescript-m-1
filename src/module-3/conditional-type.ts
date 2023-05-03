// when a type depend on another type then it called conditional type
type a1 = string;
type a3 = undefined
type a4 = number
type a2 = a1 extends string ? string : null

//nested conditional type


type d = a1 extends null
    ? null :
    a3 extends number
    ? number
    : a4 extends null
    ? null
    : never


type Sheikh = {
    wife1: string,
    wife2: string
}

//check kkorbe sheikh type a wife1 ase kina ? true : false
// type checkProperty<T>=T extends 'wife1'? true : false //return false
type checkProperty<T, k> = k extends keyof T ? true : false
type checkWife1 = checkProperty<Sheikh, 'wife1'>


// complex example

type Friends = 'yellow' | 'black' | 'white'
type RemoveFriend<T,k> = T extends k ? never : T
type CurrentFriends=RemoveFriend<Friends,'yellow'>