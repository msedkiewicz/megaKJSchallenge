class Operation {
  #callback;
  constructor(callback) {
    this.#callback = callback;
  }

  perform(a, b) {
    return this.#callback(a, b);
  }
}

class Calculator {
  #operations;

  constructor() {
    this.#operations = {
      "+": new Operation((a, b) => a + b),
      "-": new Operation((a, b) => a - b),
      "*": new Operation((a, b) => a * b),
      "/": new Operation((a, b) => a / b),
    };
  }

  getSign(operation) {
    if (operation.includes("+")) return "+";
    if (operation.includes("-")) return "-";
    if (operation.includes("*")) return "*";
    if (operation.includes("/")) return "/";
  }

  getValues(operation, sign) {
    const values = operation.split(sign).map((val) => parseInt(val));
    return values;
  }
  calculate(operation) {
    const sign = this.getSign(operation);
    const values = this.getValues(operation, sign).perform(...values);

    const result = this.#operations[sign]();
    return result;
  }
}

const calculator = new Calculator();
calculator.calculate("10 + 2");
