import { Square } from "./square.js"; // not recommended (using different name for import)
import { formatValue2, formatValue4 } from "./utils.js";

const squares = [];

for (let i = 0; i < 10; i++) {
    const newShape = new Square(Math.random() * 50 + 5);
    squares.push(newShape);
}

squares.forEach(square => {
    console.log(`Pole powierzchni to ${formatValue2(square.getArea())} ${formatValue4(square.getArea())}`)
} )
console.log(squares);