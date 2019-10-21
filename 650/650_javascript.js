/**
 * @param {number} n
 * @return {number}
 */


//  FIRST TRY NO MEMO
var minSteps = function (n, current = 1, paste = 0) {
    if (current > n) return Infinity
    if (current === n) return 0

    if (current === paste) {
        return 1 + minSteps(n, current + paste, paste)
    }
    if (paste === 0) {
        return 1 + minSteps(n, current, current)
    }

    return 1 + Math.min(
        minSteps(n, current, current),
        minSteps(n, current + paste, paste)
    )

};