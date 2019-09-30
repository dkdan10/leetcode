/**
 * @param {string} s
 * @return {number}
 */

var longestValidParentheses = function (s) {
    const stack = [-1]
    let longest = 0
    for (let i = 0; i < s.length; i++) {
        const currParen = s.charAt(i)
        switch (currParen) {
            case "(":
                stack.push(i)
                break
            case ")":
                stack.pop()
                if (stack.length < 1) {
                    stack.push(i)
                    break;
                }
                const curLength = i - stack[stack.length - 1]
                if (curLength > longest) longest = curLength
                break;
        }
    }
    return longest
};