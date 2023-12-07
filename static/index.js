class MyMath {
    pow(val, level) {
        let result = val;
        for(let i = 1; i < level; i++) {
            result *= val;
        }

        return result;
    }

    abs(value) {
        if(value < 0) return value * -1;
        return value;
    }
}

const math = new MyMath()
console.log(`Potęgowanie: ${math.pow(2, 8)}`);
console.log(`Potęgowanie: ${math.pow(3, 2)}`);
console.log(`Moduł: ${math.abs(-99)}`);
console.log(`Moduł: ${math.abs(-0.99)}`);
console.log(`Moduł: ${math.abs(2)}`);