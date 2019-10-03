var removeDuplicates = function (S) {
    const stack = []
    for (let i = 0; i < S.length; i++) {
        const char = S.charAt(i)
        if (stack[stack.length - 1] === char) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }

    return stack.join("")
};


// NAIVE
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    let loopAgain = true
    while (loopAgain) {
        loopAgain = false
        for (let i = 0; i < S.length - 1; i++) {
            if (S.charAt(i) === S.charAt(i + 1)) {
                S = S.slice(0, i) + S.slice(i + 2)
                loopAgain = true
                break
            }
        }
    }
    return S
};