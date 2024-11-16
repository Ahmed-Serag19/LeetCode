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
    if (!root) return true;

    const queue = [];
    queue.push(root.left, root.right);

    while (queue.length) {
        const t1 = queue.shift();
        const t2 = queue.shift();

        if (!t1 && !t2) continue; // Both are null, move to next pair
        if (!t1 || !t2 || t1.val !== t2.val) return false; // Not symmetric

        // Enqueue children in mirrored order
        queue.push(t1.left, t2.right);
        queue.push(t1.right, t2.left);
    }

    return true;
};
