/**
 * @param {number[]} deck
 * @return {boolean}
 */

var hasGroupsSizeX = function (deck) {
    const counter = {}
    for (let i = 0; i < deck.length; i++) {
        if (counter[deck[i]] === undefined) counter[deck[i]] = 0
        counter[deck[i]]++
        count = counter[deck[i]]
    }

    let minX;
    const numbCount = Object.values(counter)
    for (let i = 0; i < numbCount.length; i++) {
        if (minX === undefined) minX = numbCount[i]
        minX = gcd(minX, numbCount[i])
        if (minX < 2) return false
    }

    return numbCount.every(num => num >= 2 && num % minX === 0)
};

function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
}