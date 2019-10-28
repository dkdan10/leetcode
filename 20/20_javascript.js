/**
 * @param {string} s
 * @return {boolean}
 */

//  FIRST SOLUTION
var isValid = function (s) {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i)
        switch (char) {
            case "(":
                stack.push(char)
                break;
            case "{":
                stack.push(char)
                break;
            case "[":
                stack.push(char)
                break;
            case ")":
                if (stack[stack.length - 1] === "(") {
                    stack.pop()
                } else {
                    return false
                }
                break;
            case "}":
                if (stack[stack.length - 1] === "{") {
                    stack.pop()
                } else {
                    return false
                }
                break;
            case "]":
                if (stack[stack.length - 1] === "[") {
                    stack.pop()
                } else {
                    return false
                }
                break;
        }
    }
    return stack.length ? false : true
};