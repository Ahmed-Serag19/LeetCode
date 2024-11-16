/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true; // An empty tree is symmetric

    const isMirror = (t1, t2) => {
        if (!t1 && !t2) return true; // Both nodes are null
        if (!t1 || !t2) return false; // One node is null, the other isn't
        return (
            t1.val === t2.val && // Values must be equal
            isMirror(t1.left, t2.right) && // Left subtree of t1 mirrors right subtree of t2
            isMirror(t1.right, t2.left)   // Right subtree of t1 mirrors left subtree of t2
        );
    };

    return isMirror(root.left, root.right);
};
