import { TreeNodeStructure } from "./tree-setup";

const lowestCommonAncestor =
    (root: TreeNodeStructure | null, p: TreeNodeStructure | null, q: TreeNodeStructure | null)
        : TreeNodeStructure | null => {
        if (root.value > p.value && root.value > q.value) {
            lowestCommonAncestor(root.left, p, q);
        } else if (root.value < p.value && root.value < q.value) {
            lowestCommonAncestor(root.right, p, q);
        }
        else return root;
    }