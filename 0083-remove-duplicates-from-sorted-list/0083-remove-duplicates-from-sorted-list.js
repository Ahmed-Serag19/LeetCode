/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    // Edge case: If the list is empty, return null
    if (!head) return null;

    // Initialize the current node to head
    let current = head;

    // Traverse the list
    while (current && current.next) {
        // If current node's value is the same as the next node's value
        if (current.val === current.next.val) {
            // Remove the next node by pointing current node's next to next's next
            current.next = current.next.next;
        } else {
            // Move to the next node
            current = current.next;
        }
    }

    return head;
};
