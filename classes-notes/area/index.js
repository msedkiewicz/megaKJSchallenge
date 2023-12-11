class Square {
    constructor(size) {
        this.size = size;
    }

    getArea() {
        return this.size * this.size;
    }
}

class Cube extends Square {
    getArea() {
        return super.getArea() * 6;
    }
    getVolume() {
        return super.getArea() * this.size;
    }
}

const square = new Square(10);
console.log(`Pole powierzchni kwadratu to ${square.getArea()}`);
const cube = new Cube(10);
console.log(`Pole powierzchni sześcianu to ${cube.getArea()}`);
console.log(`Objętość sześcianu to ${cube.getVolume()}`)