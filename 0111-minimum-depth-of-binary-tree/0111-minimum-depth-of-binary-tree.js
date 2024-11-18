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
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0; // Base case: empty tree
    
    // If one of the subtrees is null, we must consider the depth of the non-null subtree
    if (!root.left) return 1 + minDepth(root.right);
    if (!root.right) return 1 + minDepth(root.left);
    
    // If both subtrees exist, return the minimum depth of the two
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};