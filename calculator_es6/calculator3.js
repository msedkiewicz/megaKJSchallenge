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

const calculator = new Calculator({
  "+": new Operation((a, b) => a + b),
  "-": new Operation((a, b) => a - b),
  "*": new Operation((a, b) => a * b),
  "/": new Operation((a, b) => {
    if (b === 0) return " Nie możesz dzielić przez 0!";
    return a / b;
  }),
});
calculator.calculate("10 + 2");
