/**
 * Implement a first in first out (FIFO) queue using only two stacks.
 * The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

    void push(int x) Pushes element x to the back of the queue.
    int pop() Removes the element from the front of the queue and returns it.
    int peek() Returns the element at the front of the queue.
    boolean empty() Returns true if the queue is empty, false otherwise.

Notes:

    You must use only standard operations of a stack, which means only push to top
    , peek/pop from top, size, and is empty operations are valid.
    Depending on your language, the stack may not be supported natively.
     You may simulate a stack using a list or deque (double-ended queue) as
     long as you use only a stack's standard operations.

 */
var QStack = /** @class */ (function () {
    function QStack(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
    }
    QStack.prototype.push = function (item) {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    };
    QStack.prototype.pop = function () {
        return this.storage.pop();
    };
    QStack.prototype.peek = function () {
        return this.storage[this.size() - 1];
    };
    QStack.prototype.size = function () {
        return this.storage.length;
    };
    return QStack;
}());
var pusedoQueue = /** @class */ (function () {
    function pusedoQueue() {
        // Main Stack
        this.primaryStack = new QStack();
        // Auxilary Stack
        this.auxilaryStack = new QStack();
    }
    // O(N)
    pusedoQueue.prototype.push = function (x) {
        while (!this.primaryStack) {
            var shiftingElement = this.primaryStack.pop();
            this.auxilaryStack.push(shiftingElement);
        }
        this.primaryStack.push(x);
        while (!this.auxilaryStack) {
            var shiftingElement = this.auxilaryStack.pop();
            this.primaryStack.push(shiftingElement);
        }
    };
    pusedoQueue.prototype.pop = function () {
        return this.primaryStack.pop();
    };
    pusedoQueue.prototype.peek = function () {
        return this.primaryStack.peek();
    };
    pusedoQueue.prototype.empty = function () {
        return this.primaryStack.size() === 0 ? true : false;
    };
    return pusedoQueue;
}());
var queue = new pusedoQueue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.peek());
