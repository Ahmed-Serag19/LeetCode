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
var isBalanced = function(root) {
    const checkHeight = (node) => {
        if (!node) return 0; // Base case: height of an empty tree is 0
        
        const leftHeight = checkHeight(node.left); // Height of left subtree
        if (leftHeight === -1) return -1; // Left subtree is not balanced
        
        const rightHeight = checkHeight(node.right); // Height of right subtree
        if (rightHeight === -1) return -1; // Right subtree is not balanced
        
        // Check if the current node is balanced
        if (Math.abs(leftHeight - rightHeight) > 1) return -1;
        
        // Return the height of the current subtree
        return Math.max(leftHeight, rightHeight) + 1;
    };
    
    // Use the helper function to determine if the tree is balanced
    return checkHeight(root) !== -1;
};