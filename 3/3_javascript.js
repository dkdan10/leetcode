/**
 * @param {string} s
 * @return {number}
 */
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