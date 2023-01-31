import { TreeNodeStructure } from "./tree-setup";

const lowestCommonAncestor =
    (root: TreeNodeStructure | null, p: TreeNodeStructure | null, q: TreeNodeStructure | null)
        : TreeNodeStructure | null => {
        if (p?.right?.value === q.value || p?.left?.value === q.value) return p;
        if (q?.right?.value === p.value || q?.left?.value === p.value) return q;
        if (root.value > p.value && root.value > q.value) {
            lowestCommonAncestor(root.left, p, q);
        } else if (root.value < p.value && root.value < q.value) {
            lowestCommonAncestor(root.right, p, q);
        }
        else return root;
    }