class Calculator {
  operationHistory = [];

  calculate() {}

  addToHisotry() {}

  printHistory() {}

  run() {
    let choice;
    do {
      console.log("Działam!");
      choice = prompt(
        "Czy chcesz obliczać dalej? Wpisz N aby zakończyć działanie."
      );
    } while (choice !== "N");
  }
}

const calculator = new Calculator();
calculator.run();
