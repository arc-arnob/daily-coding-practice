"use strict";
exports.__esModule = true;
var lowestCommonAncestor = function (root, p, q) {
    if (!root)
        return null;
    if (root.value > p.value && root.value > q.value) {
        lowestCommonAncestor(root.left, p, q);
    }
    else if (root.value < p.value && root.value < q.value) {
        lowestCommonAncestor(root.right, p, q);
    }
    return root;
};
