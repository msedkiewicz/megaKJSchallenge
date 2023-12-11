class Calculator {
  #operationHistory = [];

  calculate(a, b, sign) {
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
  }

  addToHistory(operation) {
    this.#operationHistory.push(operation);
  }

  printHistory() {
    this.#operationHistory.forEach((operation, index) => {
      console.log(`Operacja nr ${index + 1}: ${operation}`);
    });
  }

  run() {
    let choice;
    do {
      const val1 = parseInt(prompt("Podaj pierwszą liczbę"));
      const val2 = parseInt(prompt("Podaj drugą liczbę"));
      const operation = prompt("Podaj działanie (+ - * /).");

      const result = this.calculate(val1, val2, operation);
      this.addToHistory(result);
      choice = prompt(
        "Czy chcesz obliczać dalej? Wpisz N aby zakończyć działanie."
      );
    } while (choice !== "N");
    this.printHistory();
  }
}

const calculator = new Calculator();
calculator.run();
