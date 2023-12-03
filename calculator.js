var operationsHistory = [];

function calculate(a, b, sign) {
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

do {
  var val1 = parseInt(prompt("Podaj pierwszą liczbę"));
  var val2 = parseInt(prompt("Podaj drugą liczbę"));
  var operation = prompt("Podaj działanie (+ - * /).");

  var result = calculate(val1, val2, operation);
  console.log(result);
  operationsHistory.push(result);

  var choice = prompt(
    "Czy chcesz obliczać dalej? Wpisz N aby zakończyć działanie."
  );
} while (choice !== "N");

console.log(operationsHistory);