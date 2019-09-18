/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = 0;
    const startedPos = x > 0
    x = Math.abs(x)
    while (x > 0) {
        const nextDig = x % 10
        x = Math.floor(x / 10)
        reverse = reverse * 10 + nextDig
        if (reverse > 2147483647) return 0
    }
    return startedPos ? reverse : -reverse
};