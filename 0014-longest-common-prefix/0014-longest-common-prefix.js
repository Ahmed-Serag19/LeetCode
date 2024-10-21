/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // Edge case: if the input array is empty, return an empty string
    if (strs.length === 0) return "";

    // Start with the first string as the initial prefix
    let prefix = strs[0];

    // Compare the prefix with each string in the array
    for (let i = 1; i < strs.length; i++) {
        let currentStr = strs[i];

        // Shorten the prefix as long as it is not a prefix of the current string
        while (currentStr.indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            
            // If prefix becomes empty, return ""
            if (prefix === "") return "";
        }
    }

    // Return the longest common prefix
    return prefix;
};