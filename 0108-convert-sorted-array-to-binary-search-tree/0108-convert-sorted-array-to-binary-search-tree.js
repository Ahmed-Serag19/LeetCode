/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // Helper function to recursively construct the tree
    const helper = (left, right) => {
        if (left > right) return null; // Base case: no elements to process
        
        const mid = Math.floor((left + right) / 2); // Middle element
        const root = new TreeNode(nums[mid]); // Create a node with the middle element
        
        // Recursively build the left and right subtrees
        root.left = helper(left, mid - 1);
        root.right = helper(mid + 1, right);
        
        return root;
    };
    
    return helper(0, nums.length - 1); // Start with the full array range
};