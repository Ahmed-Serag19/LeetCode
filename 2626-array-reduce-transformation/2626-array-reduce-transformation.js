/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
     let accumulatedValue = init; 

    for (let i = 0; i < nums.length; i++) {
        accumulatedValue = fn(accumulatedValue, nums[i]); 
    }

    return accumulatedValue; 
};