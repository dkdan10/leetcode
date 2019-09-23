/**
 * @param {number} num
 * @return {boolean}
 */

// FIRST ATTEMPT
var isUgly = function(num) {
    if (num === 1) return true
    if (num < 2) return false
    for (let i = 2; i < 6; i ++) {
        if (num % i === 0) {
            if ( i === 2 || i === 3 || i === 5) {
                return isUgly(num / i)
            } else {
                return false
            }
        }
    }
    return false
};
