type OperationCallback = (a: number, b: number) => number;

class OperationsMap extends Map<string, Operation> { }

interface IOperation {
  perform: OperationCallback;
}

class Operation implements IOperation {
  private callback: OperationCallback;
  constructor(callback: OperationCallback) {
    this.callback = callback;
  }

  perform(a: number, b: number) {
    return this.callback(a, b);
  }
}

class Calculator {
  constructor(
    private name: string,
    private description: string,
    private operations: OperationsMap,
    private allowedOperations: string[]) { }

  getSign(operation: string) {
    return this.allowedOperations.find((sign) => operation.includes(sign));
  }

  getValues(operation: string, sign: string) {
    const values = operation.split(sign).map((val) => parseInt(val));
    return values;
  }

  getInfo() {
    return `${this.name} : ${this.description}`;
  }

  calculate(operation: string) {
    const sign = this.getSign(operation);

    if (!sign || !this.allowedOperations.includes(sign))
      return "Niedozwolona operacja. Użyj znaku +, -, *, /.";

    const values = this.getValues(operation, sign);

    if (values.length !== 2) return 'Niepoprawna operacja!'

    const method = this.operations.get(sign);

    if (!method) return "Ta operacja nie jest jeszcze możliwa";

    return method.perform(values[0], values[1]);
  }
}

class CalculatorBuilder {
  private operations = new OperationsMap();
  private allowedOperations: string[] = [];
  private name: string = '';
  private description: string = '';

  addOperation(sign: string, callback: OperationCallback) {
    const operation = new Operation(callback);
    this.operations.set(sign, operation);
    return this;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setDescription(description: string) {
    this.description = description;
    return this;
  }

  setAllowedOperations(...operations: string[]) {
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
  .setAllowedOperations("+", "-", "*", "/", "^")
  .addOperation("+", (a, b) => a + b)
  .addOperation("-", (a, b) => a - b)
  .addOperation("*", (a, b) => a * b)
  .addOperation("/", (a, b) => {
    if (b === 0) throw new Error("Nie możesz dzielić przez 0!");
    return a / b;
  })
  .build();

