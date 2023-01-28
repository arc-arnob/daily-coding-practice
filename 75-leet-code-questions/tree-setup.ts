interface TreeNodeStructure {
    value: number,
    left: TreeNodeStructure | undefined,
    right: TreeNodeStructure | undefined,
}

class TreeNode implements TreeNodeStructure {
    value: number;
    left: TreeNode;
    right: TreeNode;
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: TreeNode;

    constructor() {
        this.root = null;
    }

    insert(value: number): void {
        // Create a New Node
        // if root is null, make new node as root and return
        // else check left child and right child
        // if no left child, append as left child
        // else append as right child
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let currentNode: TreeNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                // Move to left
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            } else {
                // Move to right
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
        }
    }
    display() {
        this.inOrderTraversal(this.root);
    }

    inOrderTraversal(node: TreeNode) {
        if (!node) return;
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
    }
}
