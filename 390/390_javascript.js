/**
 * @param {number} n
 * @return {number}
 */

var lastRemaining = function (n) {
    let head = 1
    let steps = 1
    let rem = n
    let left2R = true

    while (rem > 1) {
        if (rem % 2 === 1 || left2R) {
            head += steps
        }
        steps *= 2
        rem = Math.floor(rem / 2)
        left2R = !left2R
    }

    return head
};