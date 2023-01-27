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
var GenericTree = /** @class */ (function () {
    function GenericTree() {
    }
    // Generic Tree Formation.
    GenericTree.prototype.construct = function () {
        var root;
        var stackStorage = new Stack();
        for (var i = 0; i < inputArray.length; i++) {
            if (inputArray[i] === -1) {
                stackStorage.pop();
            }
            else {
                var node_1 = new TreeNode();
                node_1.data = inputArray[i];
                node_1.children = [];
                if (stackStorage.size() > 0) {
                    var currentNode = stackStorage.peek();
                    currentNode.children.push(node_1);
                }
                else {
                    root = node_1;
                }
                stackStorage.push(node_1);
            }
        }
        return root;
    };
    GenericTree.prototype.display = function (node) {
        var _this = this;
        // Traverse TreeNode Children.
        node.children.forEach(function (ele) { return console.log(ele.data); });
        node.children.forEach(function (ele) { return _this.display(ele); });
    };
    GenericTree.prototype.size = function (node) {
        var _this = this;
        /**
         * The binary + operator requires both operands to be of the Number primitive type or an enum type,
         * or at least one of the operands to be of type Any or the String primitive type
         */
        if (!node)
            return 0;
        var treeSize = 1;
        node.children.forEach(function (ele) { return treeSize += _this.size(ele); });
        return treeSize;
    };
    return GenericTree;
}());
var runCode = new GenericTree();
var node = runCode.construct();
// console.log("Display: ", runCode.display(node));
console.log("Size: ", runCode.size(node));
