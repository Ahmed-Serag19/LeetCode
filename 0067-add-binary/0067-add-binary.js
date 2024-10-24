/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    // Loop through both strings from the end towards the beginning
    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;

        if (i >= 0) {
            sum += a[i] - '0';  // Convert character '0' or '1' to number 0 or 1
            i--;
        }
        
        if (j >= 0) {
            sum += b[j] - '0';  // Convert character '0' or '1' to number 0 or 1
            j--;
        }

        // Append the result of sum % 2 to the result (0 or 1)
        result = (sum % 2) + result;

        // Update carry
        carry = Math.floor(sum / 2);
    }

    return result;
};