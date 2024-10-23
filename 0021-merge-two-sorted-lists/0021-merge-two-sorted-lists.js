/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to simplify the merging process
    let dummy = new ListNode();
    let current = dummy;

    // Iterate while both lists have nodes
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1; // Attach list1 node
            list1 = list1.next;   // Move list1 pointer
        } else {
            current.next = list2; // Attach list2 node
            list2 = list2.next;   // Move list2 pointer
        }
        current = current.next; // Move the current pointer
    }

    // If any elements remain in either list, attach them
    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }

    // Return the next of dummy node, which is the head of the merged list
    return dummy.next;
};
