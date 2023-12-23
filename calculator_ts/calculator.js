"use strict";
class OperationsMap extends Map {}
var Arithmetic;
(function (Arithmetic) {
  Arithmetic["Add"] = "+";
  Arithmetic["Substract"] = "-";
  Arithmetic["Multiply"] = "*";
  Arithmetic["Divide"] = "/";
  Arithmetic["Power"] = "^";
})(Arithmetic || (Arithmetic = {}));
class Operation {
  constructor(callback) {
    this.callback = callback;
  }
  perform(a, b) {
    return this.callback(a, b);
  }
}
class Calculator {
  constructor(name, description, operations, allowedOperations) {
    this.name = name;
    this.description = description;
    this.operations = operations;
    this.allowedOperations = allowedOperations;
  }
  getSign(operation) {
    return this.allowedOperations.find((sign) => operation.includes(sign));
  }
  getValues(operation, sign) {
    const values = operation.split(sign).map((val) => parseInt(val));
    return values;
  }
  getInfo() {
    return `${this.name} : ${this.description}`;
  }
  calculate(operation) {
    const sign = this.getSign(operation);
    if (!sign || !this.allowedOperations.includes(sign))
      return "Niedozwolona operacja. Użyj znaku +, -, *, /.";
    const values = this.getValues(operation, sign);
    if (values.length !== 2) return "Niepoprawna operacja!";
    const method = this.operations.get(sign);
    if (!method) return "Ta operacja nie jest jeszcze możliwa";
    return method.perform(values[0], values[1]);
  }
}
class CalculatorBuilder {
  constructor() {
    this.operations = new OperationsMap();
    this.allowedOperations = [];
    this.name = "";
    this.description = "";
  }
  addOperation(sign, callback) {
    const operation = new Operation(callback);
    this.operations.set(sign, operation);
    return this;
  }
  setName(name) {
    this.name = name;
    return this;
  }
  setDescription(description) {
    this.description = description;
    return this;
  }
  setAllowedOperations(...operations) {
    this.allowedOperations = operations;
    return this;
  }
  build() {
    const calculator = new Calculator(
      this.name,
      this.description,
      this.operations,
      this.allowedOperations
    );
    return calculator;
  }
}
const calculator = new CalculatorBuilder()
  .setName("Kalkulator w systemie dziesiątkowym")
  .setDescription(
    "Prosty kalkulator obliczający sumę, różnicę, iloczyn i iloraz w systemie dziesiątkowym"
  )
  .setAllowedOperations(
    Arithmetic.Add,
    Arithmetic.Substract,
    Arithmetic.Multiply,
    Arithmetic.Divide,
    Arithmetic.Power
  )
  .addOperation(Arithmetic.Add, (a, b) => a + b)
  .addOperation(Arithmetic.Substract, (a, b) => a - b)
  .addOperation(Arithmetic.Multiply, (a, b) => a * b)
  .addOperation(Arithmetic.Divide, (a, b) => {
    if (b === 0) throw new Error("Nie możesz dzielić przez 0!");
    return a / b;
  })
  .build();
