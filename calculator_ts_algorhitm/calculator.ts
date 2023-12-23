const getPriority = (operator: string) => {
  switch (operator) {
    case "(": return 0;
    case "+": return 1;
    case "-": return 1;
    case "*": return 2;
    case "/": return 2;

  }
  throw new Error('Incorrect operator!');
}

const convertToRPN = (input: string): string => {
  const chars = [...input].filter(char => char !== ' ');
  const stack: string[] = [];
  const output: string[] = [];

  return output.join(' ');
}

console.log(convertToRPN("1 + 232 * (2 + 421) - 5 "));
console.log(convertToRPN("(2+3)*51"));