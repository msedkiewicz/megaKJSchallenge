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

const isNumber = (char: string): boolean => {
  return !isNaN(parseInt(char));
}

const convertToRPN = (input: string): string => {
  const chars = [...input].filter(char => char !== ' ');
  const stack: string[] = [];
  const output: string[] = [];

  chars.forEach((char, index) => {
    if (isNumber(char)) {
      if (index > 0 && isNumber(chars[index - 1])) {
        output[output.length - 1] += char;
      }
      else output.push(char);
    } else if (char === '(' || stack.length === 0) {
      stack.push(char)
    } else if (char == ')') {
      let popped = stack.pop();
      while (popped && popped !== '(') {
        output.push(popped);
        popped = stack.pop();
      }
    } else {
      let last = stack[stack.length - 1];
      let currentPriority = getPriority(char);
      let lastPriority = getPriority(last);

      while (lastPriority >= currentPriority) {
        output.push(last);
        stack.pop();
        last = stack[stack.length - 1];
        if (!last) break;
        lastPriority = getPriority(char);
      }

      stack.push(char);
    }

  })
  while (stack.length) {
    output.push(stack.pop() as string);
  }
  return output.join(' ');
}

const calculateRPN = (input: string): number => {
  const stack: number[] = [];
  const elements = input.split(' ');

  elements.forEach(element => {
    if (isNumber(element)) {
      stack.push(parseInt(element));
    } else {
      const a = stack.pop();
      const b = stack.pop();

      if (typeof a !== 'undefined' && typeof b !== 'undefined') {
        switch (element) {
          case "+": {
            stack.push(b + a);
            break;
          }
          case "-": {
            stack.push(b - a);
            break;
          }
          case "*": {
            stack.push(b * a);
            break;
          }
          case "/": {
            stack.push(b / a);
            break;
          }
        }
      }

    }

  })

  return stack[stack.length - 1];
}

console.log(convertToRPN("1 + 232 * (2 + 421) - 5 "));
console.log(convertToRPN("(2+3)*51"));