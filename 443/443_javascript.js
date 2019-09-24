/**
 * @param {character[]} chars
 * @return {number}
 */

var compress = function(chars) {
    let count = 1
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i + 1]) {
            count++
            chars.splice(i, 1)
            i--
        } else if (count !== 1) {
            let moveI = 0
            while (count > 9) {
                let nextDij = count % 10
                count = Math.floor(count / 10)
                const nextDigString = nextDij.toString()
                chars.splice(i + 1, 0, nextDigString)
                moveI++
            }
            const stringCount = count.toString()
            chars.splice(i + 1, 0, stringCount)
            count = 1
            i += moveI + 1
        }
    }
    return chars.length
};