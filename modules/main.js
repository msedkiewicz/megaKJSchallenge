import { Square } from "./square.js"; // not recommended (using different name for import)

const squares = [];

for (let i = 0; i < 10; i++) {
    const newShape = new Square(Math.round(Math.random() * 50 + 5));
    squares.push(newShape);
}

console.log(squares);