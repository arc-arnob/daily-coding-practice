var MyStack = /** @class */ (function () {
    function MyStack() {
        // create two queues, q1 and q2
        this.q1 = new Queue();
        this.q2 = new Queue();
    }
    MyStack.prototype.push = function (x) {
        this.q2.enqueue(x);
        // Dequeue all q1 and enqueue it to q2
        while (!this.q1.isEmpty()) {
            var poppedElement = this.q1.dequeue();
            if (poppedElement !== null) {
                this.q2.enqueue(poppedElement);
            }
        }
        // Enqueue all q2 to q1
        while (!this.q2.isEmpty()) {
            var poppedElement = this.q2.dequeue();
            if (poppedElement !== null) {
                this.q1.enqueue(poppedElement);
            }
        }
        // Clear q2
        this.q2.clear();
    };
    MyStack.prototype.pop = function () {
        return this.q1.dequeue();
    };
    MyStack.prototype.top = function () {
        return this.q1.front();
    };
    MyStack.prototype.empty = function () {
        return this.q1.isEmpty();
    };
    return MyStack;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (x) {
        this.items.push(x);
    };
    Queue.prototype.dequeue = function () {
        var _a, _b;
        return (_b = (_a = this.items) === null || _a === void 0 ? void 0 : _a.shift()) !== null && _b !== void 0 ? _b : null;
    };
    Queue.prototype.front = function () {
        return this.items[0];
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.clear = function () {
        this.items = [];
    };
    return Queue;
}());
var obj = new MyStack();
obj.push(10);
obj.push(20);
obj.push(30);
obj.push(40);
var param_2 = obj.pop();
var param_2 = obj.pop();
var param_2 = obj.pop();
var param_3 = obj.top();
var param_4 = obj.empty();
console.log(param_4, param_3);
