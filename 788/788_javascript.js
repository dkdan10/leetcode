/**
 * @param {number} N
 * @return {number}
 */


//  First Try
const rotations = { 0: 0, 1: 1, 8: 8, 2: 5, 5: 2, 6: 9, 9: 6 }
var rotatedDigits = function (N) {
    let goodNum = 0
    for (let i = 1; i <= N; i++) {
        if (isGoodNumber(i)) goodNum++
    }
    return goodNum
};

const isGoodNumber = (num) => {
    const startNum = num
    let newNum = 0
    let place = 1
    while (num !== 0) {
        let digit = num % 10
        digit = rotations[digit]
        if (digit === undefined) return false
        num = Math.floor(num / 10)
        newNum += digit * place
        place *= 10
    }
    return startNum !== newNum
}
