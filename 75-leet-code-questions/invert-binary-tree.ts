import { TreeNodeStructure, BinaryTree } from "./tree-setup";

// Invert a binary tree
const invertBinaryTree = (node: TreeNodeStructure) => {
    if (!node) return;
    [node.left, node.right] = [node.right, node.left];
    invertBinaryTree(node.left);
    invertBinaryTree(node.right);
}

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(2);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(20);

binaryTree.display();