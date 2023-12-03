var val1 = parseInt(prompt("Podaj pierwszą liczbę"));
var val2 = parseInt(prompt("Podaj drugą liczbę"));
var operation = prompt("Podaj działanie (+ - * /).");

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
// var operationsHistory = [];

// do {
//   var val1 = parseInt(prompt("Podaj pierwszą liczbę"));
//   var val2 = parseInt(prompt("Podaj drugą liczbę"));
//   var operation = prompt("Podaj działanie (+ - * /).");
//   var result;
//   if (isNaN(val1) || isNaN(val2)) {
//     result =
//       "Przynajmniej jedna z wartości jest niepoprawna. Proszę wpisać liczbę";
//   } else {
//     if (operation === "+") {
//       result = val1 + " + " + val2 + " = " + (val1 + val2);
//     } else if (operation === "-") {
//       result = val1 + " - " + val2 + " = " + (val1 - val2);
//     } else if (operation === "*") {
//       result = val1 + " * " + val2 + " = " + val1 * val2;
//     } else if (operation === "/") {
//       if (val2 === 0) {
//         result = "Nie możesz dzielić przez zero!";
//       } else {
//         result = val1 + " / " + val2 + " = " + val1 / val2;
//       }
//     } else {
//       result =
//         "Zostało podane niepoprawne działanie. Podaj jedno z wybranych działań (+ - * /).";
//     }
//   }

//   console.log(result);
//   operationsHistory.push(result);

//   var choice = prompt(
//     "Czy chcesz obliczać dalej? Wpisz N aby zakończyć działanie."
//   );
// } while (choice !== "N");

// console.log(operationsHistory);
