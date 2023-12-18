var Operation = /** @class */ (function () {
    function Operation(callback) {
        this.callback = callback;
    }
    Operation.prototype.perform = function (a, b) {
        return this.callback(a, b);
    };
    return Operation;
}());
var Calculator = /** @class */ (function () {
    function Calculator(name, description, operations, allowedOperations) {
        this.operations = operations;
        this.allowedOperations = allowedOperations;
        this.name = name;
        this.description = description;
    }
    Calculator.prototype.getSign = function (operation) {
        return this.allowedOperations.find(function (sign) { return operation.includes(sign); });
    };
    Calculator.prototype.getValues = function (operation, sign) {
        var values = operation.split(sign).map(function (val) { return parseInt(val); });
        return values;
    };
    Calculator.prototype.getInfo = function () {
        return "".concat(this.name, " : ").concat(this.description);
    };
    Calculator.prototype.calculate = function (operation) {
        var sign = this.getSign(operation);
        if (!this.allowedOperations.includes(sign))
            return "Niedozwolona operacja. Użyj znaku +, -, *, /.";
        var values = this.getValues(operation, sign);
        var method = this.operations.get(sign);
        if (!method)
            return "Ta operacja nie jest jeszcze możliwa";
        return method.perform.apply(method, values);
    };
    return Calculator;
}());
var CalculatorBuilder = /** @class */ (function () {
    function CalculatorBuilder() {
        this.operations = new Map();
        this.allowedOperations = [];
    }
    CalculatorBuilder.prototype.addOperation = function (sign, callback) {
        var operation = new Operation(callback);
        this.operations.set(sign, operation);
        return this;
    };
    CalculatorBuilder.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CalculatorBuilder.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CalculatorBuilder.prototype.setAllowedOperations = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        this.allowedOperations = operations;
        return this;
    };
    CalculatorBuilder.prototype.build = function () {
        var calculator = new Calculator(this.name, this.description, this.operations, this.allowedOperations);
        return calculator;
    };
    return CalculatorBuilder;
}());
var calculator = new CalculatorBuilder()
    .setName("Kalkulator w systemie dziesiątkowym")
    .setDescription("Prosty kalkulator obliczający sumę, różnicę, iloczyn i iloraz w systemie dziesiątkowym")
    .setAllowedOperations("+", "-", "*", "/", "^")
    .addOperation("+", function (a, b) { return a + b; })
    .addOperation("-", function (a, b) { return a - b; })
    .addOperation("*", function (a, b) { return a * b; })
    .addOperation("/", function (a, b) {
    if (b === 0)
        return " Nie możesz dzielić przez 0!";
    return a / b;
})
    .build();
var calculator2 = new Calculator("Kalkulator w systemie dziesiątkowym", "Prosty kalkulator obliczający sumę, różnicę, iloczyn i iloraz w systemie dziesiątkowym", new Map([
    ["+", new Operation(function (a, b) { return a + b; })],
    ["-", new Operation(function (a, b) { return a - b; })],
    ["*", new Operation(function (a, b) { return a * b; })],
    [
        "/",
        new Operation(function (a, b) {
            if (b === 0)
                return " Nie możesz dzielić przez 0!";
            return a / b;
        }),
    ],
]), ["+", "-", "*", "/", "^"]);
