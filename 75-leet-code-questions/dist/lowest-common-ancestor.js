var lowestCommonAncestor = function (root, p, q) {
    if (root.value > p.value && root.value > q.value) {
        lowestCommonAncestor(root.left, p, q);
    }
    else if (root.value < p.value && root.value < q.value) {
        lowestCommonAncestor(root.right, p, q);
    }
    else
        return root;
};
export {};
//# sourceMappingURL=lowest-common-ancestor.js.map