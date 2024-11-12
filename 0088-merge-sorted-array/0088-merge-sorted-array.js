/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Initialize pointers for nums1, nums2, and the last position in nums1
    let p1 = m - 1; // Last element in the first part of nums1
    let p2 = n - 1; // Last element in nums2
    let p = m + n - 1; // Last position in nums1 (where merged elements will be stored)

    // Iterate from the end of nums1, filling it with the largest remaining elements from nums1 and nums2
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // If there are remaining elements in nums2, add them to nums1
    // (No need to check for remaining elements in nums1 as they are already in place)
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
};
