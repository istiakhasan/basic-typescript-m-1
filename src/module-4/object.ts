class Animal {
    // name: string;
    // species: string;
    // sound: string;
    constructor(public name: string,public species: string,public sound: string) {
    // constructor( name: string, species: string, sound: string) {
        // this.name = name;
        // this.species = species;
        // this.sound = sound
    }
    makeSound() {
        console.log(`The ${this.name} saus ${this.sound}`);
    }
}



const dog=new Animal('german shaper','dog',"toi toi")
dog.makeSound()