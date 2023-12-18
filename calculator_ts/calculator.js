var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var OperationsMap = /** @class */ (function (_super) {
    __extends(OperationsMap, _super);
    function OperationsMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OperationsMap;
}(Map));
var Arithmetic;
(function (Arithmetic) {
    Arithmetic["Add"] = "+";
    Arithmetic["Substract"] = "-";
    Arithmetic["Multiply"] = "*";
    Arithmetic["Divide"] = "/";
    Arithmetic["Power"] = "^";
})(Arithmetic || (Arithmetic = {}));
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
        this.name = name;
        this.description = description;
        this.operations = operations;
        this.allowedOperations = allowedOperations;
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
        if (!sign || !this.allowedOperations.includes(sign))
            return "Niedozwolona operacja. Użyj znaku +, -, *, /.";
        var values = this.getValues(operation, sign);
        if (values.length !== 2)
            return 'Niepoprawna operacja!';
        var method = this.operations.get(sign);
        if (!method)
            return "Ta operacja nie jest jeszcze możliwa";
        return method.perform(values[0], values[1]);
    };
    return Calculator;
}());
var CalculatorBuilder = /** @class */ (function () {
    function CalculatorBuilder() {
        this.operations = new OperationsMap();
        this.allowedOperations = [];
        this.name = '';
        this.description = '';
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
    .setAllowedOperations(Arithmetic.Add, Arithmetic.Substract, Arithmetic.Multiply, Arithmetic.Divide, Arithmetic.Power)
    .addOperation(Arithmetic.Add, function (a, b) { return a + b; })
    .addOperation(Arithmetic.Substract, function (a, b) { return a - b; })
    .addOperation(Arithmetic.Multiply, function (a, b) { return a * b; })
    .addOperation(Arithmetic.Divide, function (a, b) {
    if (b === 0)
        throw new Error("Nie możesz dzielić przez 0!");
    return a / b;
})
    .build();
