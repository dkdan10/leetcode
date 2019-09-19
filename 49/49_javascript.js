/**
 * @param {string[]} strs
 * @return {string[][]}
 */


// NAIVE APPROACH
var naiveGroupAnagrams = function(strs) {
    const groupGram = []
    strs.forEach((el) => {
        let added = false
        for (let i = 0; i < groupGram.length; i ++) {
            if (!added && groupGram[i][0].split("").sort().join("") === el.split("").sort().join("")) {
                groupGram[i].push(el)
                added = true
            }
        }
        if (!added) groupGram.push([el])
    })
    return groupGram
};