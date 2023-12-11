class Vehicle {
    constructor(name) {
        this.name = name;
    }

    getMyName() {
        return this.name;
    }
}

class Car extends Vehicle {
    drive() {
        console.log('I am a car and I can ride somewhere!')
    }
}

class Plane extends Vehicle {
    fly() {
        console.log('I am a plane and I can fly somewhere!')
    }
}

const fiat = new Car('Fiat 126p');
const boeing = new Plane('Boeing 737');

console.log(fiat.getMyName());
fiat.drive();

console.log(boeing.getMyName());
boeing.fly();

console.log(typeof fiat);
console.log(fiat instanceof Car);
console.log(fiat instanceof Vehicle);
console.log(fiat instanceof Object);
