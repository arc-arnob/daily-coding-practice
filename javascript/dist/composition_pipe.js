function pipe(funcs) {
    // your code here
    return function (args) {
        var result = args;
        for (var _i = 0, funcs_1 = funcs; _i < funcs_1.length; _i++) {
            var func = funcs_1[_i];
            result = func.call(this, result);
        }
        return result;
    };
}
var times = function (y) { return function (x) { return x * y; }; };
var plus = function (y) { return function (x) { return x + y; }; };
var subtract = function (y) { return function (x) { return x - y; }; };
var divide = function (y) { return function (x) { return x / y; }; };
console.log(pipe([
    times(2),
    times(3)
]));
