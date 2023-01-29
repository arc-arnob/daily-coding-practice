var Queue = /** @class */ (function () {
    function Queue(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
    }
    Queue.prototype.enqueue = function (item) {
        if (this.size() === this.capacity) {
            throw Error("Queue has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.storage.shift();
    };
    Queue.prototype.head = function () {
        return this.storage[0];
    };
    Queue.prototype.tail = function () {
        return this.storage[this.size() - 1];
    };
    Queue.prototype.size = function () {
        return this.storage.length;
    };
    return Queue;
}());
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
var inputArray = [10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 1110, 120, -1, 80, -1, 90, -1, -1, 40, -1, -1, -1];
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
    GenericTree.prototype.findMaximum = function (node) {
        var _this = this;
        var maxVal = Number.MIN_VALUE;
        node.children.forEach(function (ele) {
            var childMax = _this.findMaximum(ele);
            if (childMax > maxVal)
                maxVal = childMax;
        });
        // Compare current node with max of all children.
        if (node.data > maxVal) {
            maxVal = node.data;
        }
        return maxVal;
    };
    /**
     *
     * Expectation: Our expectation from height(node) is that it will find the distance between root (10) and the node with maximum depth (110) in terms of edges and return this distance as the height of the tree.
        Faith: Our faith is that we get the height of all the root's children nodes (20-1, 30-2 and 40-1)
        How to meet Expectation with Faith: If we add 1 to the maximum height (30-2) then we get the resultant height (2+1=3)
     *
     */
    GenericTree.prototype.findHeight = function (node) {
        var _this = this;
        var height = -1;
        node.children.forEach(function (ele) {
            var childHeight = _this.findHeight(ele);
            height = Math.max(height, childHeight);
        });
        height += 1;
        return height;
    };
    GenericTree.prototype.levelOrderTraversal = function (root) {
        // Remove, Print, Add
        // Algo: 
        /**
         * 1. Declare a queue
         * 2. Add Current node to Queue
         * 3. Pop, print and add all children to Queue
         */
        var auxilaryQueue = new Queue();
        auxilaryQueue.enqueue(root);
        while (auxilaryQueue.size() > 0) {
            node = auxilaryQueue.dequeue();
            console.log(node.data + " ");
            node.children.forEach(function (child) {
                auxilaryQueue.enqueue(child);
            });
        }
    };
    return GenericTree;
}());
var runCode = new GenericTree();
var node = runCode.construct();
// console.log("Display: ", runCode.display(node));
console.log("Size: ", runCode.size(node));
console.log("Max: ", runCode.findMaximum(node));
console.log("Tree Height: ", runCode.findHeight(node));
runCode.levelOrderTraversal(node);
