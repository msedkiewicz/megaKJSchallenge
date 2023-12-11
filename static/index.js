class MyMath {
    static pow(val, level) {
        let result = val;
        for(let i = 1; i < level; i++) {
            result *= val;
        }

        return result;
    }

    static abs(value) {
        if(value < 0) return value * -1;
        return value;
    }
}

console.log(`Potęgowanie: ${MyMath.pow(2, 8)}`);
console.log(`Potęgowanie: ${MyMath.pow(3, 2)}`);
console.log(`Moduł: ${MyMath.abs(-99)}`);
console.log(`Moduł: ${MyMath.abs(-0.99)}`);
console.log(`Moduł: ${MyMath.abs(2)}`);