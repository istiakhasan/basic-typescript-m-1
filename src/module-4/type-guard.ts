export { }
//keyof guard-runtime a kaj kore
type Alphaneumerics = string | number
function add(param1: Alphaneumerics, param2: Alphaneumerics): Alphaneumerics {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2
    } else {
        return param1.toString() + param2.toString()
    }
}
add('1', '2')



//in guard

type NormalUserType = {
    name: string
}
type AdminUserType = {
    name: string,
    role: 'admin'
}
function getUser(user: NormalUserType | AdminUserType): string {
    if ('role' in user) {
        return `I am an admin and my role is ${user.role}`
    } else {
        return `I am a user `
    }
}

const normalUser1: NormalUserType = { name: "Mr. user" }
const adminUser1: AdminUserType = { name: "Mr admn ", role: "admin" }
console.log(getUser(normalUser1));
console.log(getUser(adminUser1));




//instanceof guard

class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name
        this.species = species
    }


    makesound() {
        console.log("I am making sound ");
    }


}


class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeMeaw() {
        console.log('I am meawing');
    }
}
class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeBark() {
        console.log(`I am barking`);
    }
}

function isDog(animal:Animal):animal is Dog{
    return animal instanceof Dog
}
function isCat(animal:Animal):animal is Cat{
    return animal instanceof Cat
}


function getAnimal(obj: Animal) {
    if (isDog(obj)) {
        obj.makeBark()
    }
    else if (isCat(obj)) {
        obj.makeMeaw()
    } else{
        obj.makesound()
    }
    // if (isDog(obj)) {
    //     obj.makeBark()
    // }
    // else if (obj instanceof Cat) {
    //     obj.makeMeaw()
    // } else{
    //     obj.makesound()
    // }

}


const animall = new Dog('german b', 'dog')   //dog instance
const animal2 = new Cat('Persian b', 'cat')   //cat instance