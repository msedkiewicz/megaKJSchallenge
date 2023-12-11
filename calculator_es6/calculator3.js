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
  #allowedOperations;

  constructor(operations) {
    this.#operations = operations;
    this.#allowedOperations = Object.keys(operations);
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
    if (!this.#allowedOperations.includes(sign))
      return "Niedozwolona operacja. Użyj znaku +, -, *, /.";

    const values = this.getValues(operation, sign);

    const result = this.#operations[sign].perform(...values);
    return result;
  }
}

class CalculatorBuilder {
  #operations;

  constructor() {
    this.#operations = new Map();
  }
  addOperation(sign, callback) {
    const operation = new Operation(callback);
    this.#operations.set(sign, operation);
    return this;
  }

  build() {
    const calculator = new Calculator(this.#operations);
    return calculator;
  }
}

const calculator = new CalculatorBuilder()
  .addOperation("+", (a, b) => a + b)
  .addOperation("-", (a, b) => a - b)
  .addOperation("*", (a, b) => a * b)
  .addOperation("/", (a, b) => {
    if (b === 0) return " Nie możesz dzielić przez 0!";
    return a / b;
  })
  .build();
