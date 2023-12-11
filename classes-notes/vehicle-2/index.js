class Vehicle {
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log('NOT IMPLEMENTED');
    }

    getMileage() {
        console.log('NOT IMPLEMENTED');
    }
}

class Car extends Vehicle {
    move() {
        console.log(`I am a ${this.name} and I can drive.`);
    }
}

class Plane extends Vehicle {
    move() {
        console.log(`I am a ${this.name} and I can fly.`);
    }
}

const fiat = new Car('Fiat 126p');
const boeing = new Plane('Boeing 737');

console.log(fiat.move());
console.log(boeing.move());