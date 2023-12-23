var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var getPriority = function (operator) {
    switch (operator) {
        case "(": return 0;
        case "+": return 1;
        case "-": return 1;
        case "*": return 2;
        case "/": return 2;
    }
    throw new Error('Incorrect operator!');
};
var isNumber = function (char) {
    return !isNaN(parseInt(char));
};
var convertToRPN = function (input) {
    var chars = __spreadArray([], input, true).filter(function (char) { return char !== ' '; });
    var stack = [];
    var output = [];
    chars.forEach(function (char, index) {
        if (isNumber(char)) {
            if (index > 0 && isNumber(chars[index - 1])) {
                output[output.length - 1] += char;
            }
            else
                output.push(char);
        }
    });
    return output.join(' ');
};
console.log(convertToRPN("1 + 232 * (2 + 421) - 5 "));
console.log(convertToRPN("(2+3)*51"));
