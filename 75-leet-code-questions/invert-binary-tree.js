"use strict";
exports.__esModule = true;
var tree_setup_1 = require("./tree-setup");
// Invert a binary tree
var invertBinaryTree = function (node) {
    var _a;
    if (!node)
        return;
    _a = [node.right, node.left], node.left = _a[0], node.right = _a[1];
    invertBinaryTree(node.left);
    invertBinaryTree(node.right);
};
var binaryTree = new tree_setup_1.BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(2);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(20);
binaryTree.display();
