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
  calculate(operation) {
    const sign = this.getSign(operation);
    return sign;
  }
}

const calculator = new Calculator();
calculator.calculate("10 + 2");
