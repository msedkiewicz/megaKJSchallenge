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
  #name;
  #description;

  constructor(name, description, operations, allowedOperations) {
    this.#operations = operations;
    this.#allowedOperations = allowedOperations;
    this.#name = name;
    this.#description = description;
  }

  getSign(operation) {
    return this.#allowedOperations.find((sign) => operation.includes(sign));
  }

  getValues(operation, sign) {
    const values = operation.split(sign).map((val) => parseInt(val));
    return values;
  }

  getInfo() {
    return `${this.#name} : ${this.#description}`;
  }

  calculate(operation) {
    const sign = this.getSign(operation);

    if (!this.#allowedOperations.includes(sign))
      return "Niedozwolona operacja. Użyj znaku +, -, *, /.";

    const values = this.getValues(operation, sign);

    const method = this.#operations.get(sign);

    if (!method) return "Ta operacja nie jest jeszcze możliwa";

    return method.perform(...values);
  }
}

class CalculatorBuilder {
  #operations;
  #allowedOperations;
  #name;
  #description;

  constructor() {
    this.#operations = new Map();
    this.#allowedOperations = [];
  }
  addOperation(sign, callback) {
    const operation = new Operation(callback);
    this.#operations.set(sign, operation);
    return this;
  }

  setName(name) {
    this.#name = name;
    return this;
  }

  setDescription(description) {
    this.#description = description;
    return this;
  }

  setAllowedOperations(...operations) {
    this.#allowedOperations = operations;
    return this;
  }

  build() {
    const calculator = new Calculator(
      this.#name,
      this.#description,
      this.#operations,
      this.#allowedOperations
    );
    return calculator;
  }
}

const calculator = new CalculatorBuilder()
  .setName("Kalkulator w systemie dziesiątkowym")
  .setDescription(
    "Prosty kalkulator obliczający sumę, różnicę, iloczyn i iloraz w systemie dziesiątkowym"
  )
  .setAllowedOperations("+", "-", "*", "/", "^")
  .addOperation("+", (a, b) => a + b)
  .addOperation("-", (a, b) => a - b)
  .addOperation("*", (a, b) => a * b)
  .addOperation("/", (a, b) => {
    if (b === 0) return " Nie możesz dzielić przez 0!";
    return a / b;
  })
  .build();
