/**
 * @param {number[]} digits
 * @return {number[]}
 */

 
var plusOne = function (digits) {

    const result = []
    let addOne = true
    for (let i = digits.length - 1; i >= 0; i--) {
        if (addOne) {
            const nextDigit = digits[i] + 1
            addOne = (nextDigit > 9)
            result.unshift(nextDigit % 10)
        } else {
            result.unshift(digits[i])
        }
    }
    if (addOne) result.unshift(1)
    return result
};