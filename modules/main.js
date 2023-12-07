import { Square as SuperSquare } from "./square.js"; // not recommended (using different name for import)

const squares = [];

for (let i = 0; i < 10; i++) {
    const newShape = new SuperSquare(Math.round(Math.random() * 50 + 5));
    squares.push(newShape);
}

console.log(squares);