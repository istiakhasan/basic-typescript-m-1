//interface
// interface IVehicle{
//     name:string;
//     model:string
// }

// const vehicle:IVehicle={
//     name:"Car",
//     model:"2000"
// }



// interface IVehicle {
//     startEngine(): void;
//     stopEngine(): void;
//     move(): void
// }


// class Vehicle implements IVehicle {
//     constructor(public name: string, public brand: string, public model: number) { }
//     startEngine(): void {
//         console.log("I am starting engine");
//     }
//     stopEngine(): void {
//         console.log("I am stoping engine");
//     }
//     move(): void {
//         console.log("Movine engine");
//     }
//     test() {
//         console.log("I am for testing purpose");
//     }
// }




// const vehicle1 = new Vehicle('car','toyota',2000)
//abstract class


abstract class Vehicle { //instance banano jabe na  shodhu follow kore onnno class kora jabe
    constructor(public name: string, public brand: string, public model: number) { }
    abstract startEngine(): void
    abstract stopEngine(): void
    move(): void {
        console.log("difference");
    }

}


class Car extends Vehicle {
    startEngine(): void {
        console.log("Engine starting ");
    }
    stopEngine(): void {
        console.log("stop engine ");
    }

}




