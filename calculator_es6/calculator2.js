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
}

const calculator = new Calculator();
