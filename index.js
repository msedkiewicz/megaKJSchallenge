class User {
    constructor (name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const marcin = new User('Marcin', 'Grygierek');
const marian = new User('Marian', 'Nowak');

marcin.sayHello();
marian.sayHello();