/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */


//  NAIVE (n + nLog(n)) -> nLog(n)
var topKFrequent = function(words, k) {
    const wordCount = {}
    for (let i = 0; i < words.length; i++) {
        if (wordCount[words[i]] === undefined) wordCount[words[i]] = 0
        wordCount[words[i]] ++
    }

    const values = Object.keys(wordCount).sort((a,b) => {
        if (wordCount[a] > wordCount[b]) {
            return -1
        } else if (wordCount[a] === wordCount[b]) {
            return a.localeCompare(b)
        } else {
            return 1
        }
    })
    return values.slice(0,k)
};