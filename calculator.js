var operationsHistory = [];

do {
  var choice = prompt(
    "Czy chcesz obliczać dalej? Wpisz N aby zakończyć działanie."
  );

  if (choice !== "N") {
    var val1 = parseInt(prompt("Podaj pierwszą liczbę"));
    var val2 = parseInt(prompt("Podaj drugą liczbę"));
    var operation = prompt("Podaj działanie (+ - * /).");
    var result;
    if (isNaN(val1) || isNaN(val2)) {
      result = "Przynajmniej jedna z wartości jest niepoprawna. Proszę wpisać liczbę";
    } else {
      if (operation === "+") {
        result = val1 + " + " + val2 + " = " + (val1 + val2);
      }

      if (operation === "-") {
        result = val1 + " - " + val2 + " = " + (val1 - val2);
      }

      if (operation === "*") {
        result = val1 + " * " + val2 + " = " + val1 * val2;
      }

      if (operation === "/") {
        result = val1 + " / " + val2 + " = " + val1 / val2;
      }
    }

    console.log(result);
    operationsHistory.push(result);
  }
} while (choice !== "N");

console.log(operationsHistory);
