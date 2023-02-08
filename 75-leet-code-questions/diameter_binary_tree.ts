export interface TreeNodeStructure {
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

export class BinaryTree {
    root: TreeNode;

    constructor() {
        this.root = null;
    }

    insert(value: number): TreeNode {
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
        return this.root;
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


// helper class
class DiameterPair {
    height: number;
    diameter: number;
}



const diameterOfBinaryTree = (root: TreeNodeStructure | null): DiameterPair => {
    if (!root) {
        const bp: DiameterPair = new DiameterPair();
        bp.height = -1;
        bp.diameter = 0;
        return bp;
    }
    const lp: DiameterPair = diameterOfBinaryTree(root.left);
    const rp: DiameterPair = diameterOfBinaryTree(root.right);
    const mp: DiameterPair = new DiameterPair();
    mp.height = Math.max(lp.height, rp.height) + 1;
    const fes = lp.height + rp.height + 2;
    mp.diameter = Math.max(fes, Math.max(lp.diameter, rp.diameter));
    return mp;
}




const binaryTree = new BinaryTree();
console.log(binaryTree);
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(2);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(20);


binaryTree.display();