/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    const matchingBrackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (matchingBrackets[char]) {
            stack.push(char);
        } else {
            let lastOpeningBracket = stack.pop();  
            if (matchingBrackets[lastOpeningBracket] !== char) {
                return false; 
            }
        }
    }
    
    return stack.length === 0;
};