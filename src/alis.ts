type PersonType = {
    name: string;
    age?: number;
    profession: string;
    address: string
}
const person1: PersonType = {
    name: 'Monika ',
    age: 23,
    profession: "Developer",
    address: "Bangladesh"
}
const person2: PersonType = {
    name: 'Monisha ',
    profession: "React developer",
    address: "India"
}


type CrushMarredType = boolean;
const isCrushMarried: CrushMarredType = false

type OperationType=(x: number, y: number) => number
const calculate = (
    number1: number,
    number2: number,
    operation: OperationType
): number => {
    return operation(number1, number2)

}

calculate(4, 4, (x, y) => x + y)