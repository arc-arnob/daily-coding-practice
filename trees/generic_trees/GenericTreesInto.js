var Stack = /** @class */ (function () {
    function Stack(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
    }
    Stack.prototype.push = function (item) {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    };
    Stack.prototype.pop = function () {
        return this.storage.pop();
    };
    Stack.prototype.peek = function () {
        return this.storage[this.size() - 1];
    };
    Stack.prototype.size = function () {
        return this.storage.length;
    };
    return Stack;
}());
var TreeNode = /** @class */ (function () {
    function TreeNode() {
    }
    return TreeNode;
}());
// Input Array
var inputArray = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, 120, -1, 80, -1, 90, -1, -1, 40, -1, -1, -1];
var DriverCode = /** @class */ (function () {
    function DriverCode() {
    }
    // Generic Tree Formation.
    DriverCode.prototype.generateGenericTree = function () {
        var root;
        var stackStorage = new Stack();
        for (var i = 0; i < inputArray.length; i++) {
            console.log("Stack Storage: ", stackStorage);
            if (inputArray[i] === -1) {
                stackStorage.pop();
            }
            else {
                var node = new TreeNode();
                node.data = inputArray[i];
                node.children = [];
                if (stackStorage.size() > 0) {
                    var currentNode = stackStorage.peek();
                    currentNode.children.push(node);
                }
                else {
                    root = node;
                }
                stackStorage.push(node);
            }
        }
    };
    return DriverCode;
}());
var runCode = new DriverCode();
runCode.generateGenericTree();
