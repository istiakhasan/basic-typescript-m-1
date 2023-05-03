export { }
type PersonType = {
    name: string,
    age: number,
    address: string
}
type newType = "name" | "age" | "address"

type newTypeUsingKyeOf = keyof PersonType

// const a: newType='address'
const b: newTypeUsingKyeOf = 'address'
// console.log(a);



function getProperty<x, y extends keyof x>(obj: x, key: y) {
  return  obj[key]

}
const property = getProperty({ name: "mr.x", age: 100 }, "age")
console.log(property);
const a = {

}
