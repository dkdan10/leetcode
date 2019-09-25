/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */

// SECOND ATTEMPT
var lengthOfLongestSubstring = function (s) {

    let longLength = 0
    let currentLength = 0
    const lastIndexChar = {}
    for (let i = 0; i < s.length; i++) {
        const currentChar = s.charAt(i)
        if (lastIndexChar[currentChar] === undefined || lastIndexChar[currentChar] < i - currentLength) {
            currentLength++
        } else if (lastIndexChar[currentChar] > i - currentLength) {
            currentLength = (i - lastIndexChar[currentChar])
        }
        
        lastIndexChar[currentChar] = i
        longLength = Math.max(currentLength, longLength)
    }

    return longLength
};

// ONE ATTEMPT
var lengthOfLongestSubstring = function(s) {
    let longestSub = 0
    let subStartIdx = 0
    let seenChars = {}
    for (let i = 0; i < s.length; i++) {
        const nextChar = s.charAt(i)
        if (seenChars[nextChar] !== undefined && seenChars[nextChar] >= subStartIdx) {
            subStartIdx = seenChars[nextChar] + 1
            seenChars[nextChar] = i
        } else {
            seenChars[nextChar] = i
        }
        if (longestSub <= i - subStartIdx) longestSub = i - subStartIdx + 1
    }
    return longestSub
};