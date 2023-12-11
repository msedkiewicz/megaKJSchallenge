function Calculator() {
  this.operationHistory = [];
}

Calculator.prototype.calculate = function (a, b, sign) {
  if (isNaN(a) || isNaN(b))
    return "Przynajmniej jedna z wartości jest niepoprawna. Proszę wpisać liczbę";

  switch (sign) {
    case "+":
      return a + " + " + b + " = " + (a + b);
    case "-":
      return a + " - " + b + " = " + (a - b);
    case "*":
      return a + " * " + b + " = " + a * b;
    case "/": {
      if (b === 0) return "Nie możesz dzielić przez zero!";
      return a + " / " + b + " = " + a / b;
    }

    default:
      return "Zostało podane niepoprawne działanie. Podaj jedno z wybranych działań (+ - * /).";
  }
};

Calculator.prototype.addToHistory = function (operation) {
  this.operationHistory.push(operation);
};

Calculator.prototype.printHistory = function () {
  this.operationHistory.forEach(function (operation, index) {
    console.log("Operacja nr " + index + ": " + operation);
  });
};

Calculator.prototype.run = function () {
  do {
    var val1 = parseInt(prompt("Podaj pierwszą liczbę"));
    var val2 = parseInt(prompt("Podaj drugą liczbę"));
    var operation = prompt("Podaj działanie (+ - * /).");

    var result = this.calculate(val1, val2, operation);
    console.log(result);
    this.addToHistory(operation);

    var choice = prompt(
      "Czy chcesz obliczać dalej? Wpisz N aby zakończyć działanie."
    );
  } while (choice !== "N");

  this.printHistory();
};

var calculator = new Calculator();
calculator.run();

var calculator2 = new Calculator();
calculator2.run();