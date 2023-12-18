var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Operation_callback, _Calculator_operations, _Calculator_allowedOperations, _Calculator_name, _Calculator_description, _CalculatorBuilder_operations, _CalculatorBuilder_allowedOperations, _CalculatorBuilder_name, _CalculatorBuilder_description;
var Operation = /** @class */ (function () {
    function Operation(callback) {
        _Operation_callback.set(this, void 0);
        __classPrivateFieldSet(this, _Operation_callback, callback, "f");
    }
    Operation.prototype.perform = function (a, b) {
        return __classPrivateFieldGet(this, _Operation_callback, "f").call(this, a, b);
    };
    return Operation;
}());
_Operation_callback = new WeakMap();
var Calculator = /** @class */ (function () {
    function Calculator(name, description, operations, allowedOperations) {
        _Calculator_operations.set(this, void 0);
        _Calculator_allowedOperations.set(this, void 0);
        _Calculator_name.set(this, void 0);
        _Calculator_description.set(this, void 0);
        __classPrivateFieldSet(this, _Calculator_operations, operations, "f");
        __classPrivateFieldSet(this, _Calculator_allowedOperations, allowedOperations, "f");
        __classPrivateFieldSet(this, _Calculator_name, name, "f");
        __classPrivateFieldSet(this, _Calculator_description, description, "f");
    }
    Calculator.prototype.getSign = function (operation) {
        return __classPrivateFieldGet(this, _Calculator_allowedOperations, "f").find(function (sign) { return operation.includes(sign); });
    };
    Calculator.prototype.getValues = function (operation, sign) {
        var values = operation.split(sign).map(function (val) { return parseInt(val); });
        return values;
    };
    Calculator.prototype.getInfo = function () {
        return "".concat(__classPrivateFieldGet(this, _Calculator_name, "f"), " : ").concat(__classPrivateFieldGet(this, _Calculator_description, "f"));
    };
    Calculator.prototype.calculate = function (operation) {
        var sign = this.getSign(operation);
        if (!__classPrivateFieldGet(this, _Calculator_allowedOperations, "f").includes(sign))
            return "Niedozwolona operacja. Użyj znaku +, -, *, /.";
        var values = this.getValues(operation, sign);
        var method = __classPrivateFieldGet(this, _Calculator_operations, "f").get(sign);
        if (!method)
            return "Ta operacja nie jest jeszcze możliwa";
        return method.perform.apply(method, values);
    };
    return Calculator;
}());
_Calculator_operations = new WeakMap(), _Calculator_allowedOperations = new WeakMap(), _Calculator_name = new WeakMap(), _Calculator_description = new WeakMap();
var CalculatorBuilder = /** @class */ (function () {
    function CalculatorBuilder() {
        _CalculatorBuilder_operations.set(this, void 0);
        _CalculatorBuilder_allowedOperations.set(this, void 0);
        _CalculatorBuilder_name.set(this, void 0);
        _CalculatorBuilder_description.set(this, void 0);
        __classPrivateFieldSet(this, _CalculatorBuilder_operations, new Map(), "f");
        __classPrivateFieldSet(this, _CalculatorBuilder_allowedOperations, [], "f");
    }
    CalculatorBuilder.prototype.addOperation = function (sign, callback) {
        var operation = new Operation(callback);
        __classPrivateFieldGet(this, _CalculatorBuilder_operations, "f").set(sign, operation);
        return this;
    };
    CalculatorBuilder.prototype.setName = function (name) {
        __classPrivateFieldSet(this, _CalculatorBuilder_name, name, "f");
        return this;
    };
    CalculatorBuilder.prototype.setDescription = function (description) {
        __classPrivateFieldSet(this, _CalculatorBuilder_description, description, "f");
        return this;
    };
    CalculatorBuilder.prototype.setAllowedOperations = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        __classPrivateFieldSet(this, _CalculatorBuilder_allowedOperations, operations, "f");
        return this;
    };
    CalculatorBuilder.prototype.build = function () {
        var calculator = new Calculator(__classPrivateFieldGet(this, _CalculatorBuilder_name, "f"), __classPrivateFieldGet(this, _CalculatorBuilder_description, "f"), __classPrivateFieldGet(this, _CalculatorBuilder_operations, "f"), __classPrivateFieldGet(this, _CalculatorBuilder_allowedOperations, "f"));
        return calculator;
    };
    return CalculatorBuilder;
}());
_CalculatorBuilder_operations = new WeakMap(), _CalculatorBuilder_allowedOperations = new WeakMap(), _CalculatorBuilder_name = new WeakMap(), _CalculatorBuilder_description = new WeakMap();
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
