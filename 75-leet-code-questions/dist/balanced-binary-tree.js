var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.insert = function (value) {
        // Create a New Node
        // if root is null, make new node as root and return
        // else check left child and right child
        // if no left child, append as left child
        // else append as right child
        var newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        var currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                // Move to left
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            }
            else {
                // Move to right
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
        }
        return this.root;
    };
    BinaryTree.prototype.display = function () {
        this.inOrderTraversal(this.root);
    };
    BinaryTree.prototype.inOrderTraversal = function (node) {
        if (!node)
            return;
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
    };
    return BinaryTree;
}());
export { BinaryTree };
var isBalanced = function (root) {
    // Empty Tree check
    if (!root)
        return true;
    var isBalanced = true;
    var result = checkTreeBalanced(root, isBalanced);
    if (result)
        return true;
    return false;
};
var checkTreeBalanced = function (root, isBalanced) {
    if (!root)
        return;
    var leftHeight = checkTreeBalanced(root.left, isBalanced);
    var rightHeight = checkTreeBalanced(root.right, isBalanced);
    if (Math.abs(leftHeight - rightHeight) > 1) {
        isBalanced = false;
    }
    return Math.max(leftHeight, rightHeight) + 1;
};
var binaryTree = new BinaryTree();
console.log(binaryTree);
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(2);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(20);
binaryTree.display();
//# sourceMappingURL=balanced-binary-tree.js.map