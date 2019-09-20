/**
 * @param {string} S
 * @return {string}
 */

//  A BITTLE BIT BETTER 
var removeOuterParentheses = function(S) {
    let openIdx = null
    let numPar = 0
    let resultStr = ""
    for (let i = 0; i < S.length; i++) {
        const char = S.charAt(i)
        if (char === "(") {
            if (openIdx === null) openIdx = i
            numPar++
        } else if (char === ")") {
            if (numPar === 1) {
                resultStr += S.slice(openIdx + 1, i)
                openIdx = null
            }
            numPar--
        }
    }
    return resultStr
};


// A LITTLE BIT BETTER NOW
var removeOuterParentheses = function(S) {
    let openIdx = null
    let numPar = 0
    let currStr = ""
    const resultArr = []
    for (let i = 0; i < S.length; i++) {
        const char = S.charAt(i)
        if (char === "(") {
            if (openIdx === null) openIdx = i
            numPar++
        } else if (char === ")") {
            if (numPar === 1) {
                resultArr.push(currStr)
                currStr = ""
                openIdx = null
            }
            numPar --
        }
        if (openIdx !== null && openIdx !== i) currStr += char
    }
    return resultArr.join("")
};

// FIRST APPROACH!
var removeOuterParentheses = function(S) {
    const deconStruct = deconstructParentheses(S)
    console.log(deconStruct)
    return deconStruct.map(str => str.slice(1, str.length - 1)).join("")
};

var deconstructParentheses = function (S) {
    let openIdx = null
    let numPar = 0
    const deconIndicies = []
    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) === "(") {
            if (openIdx === null) openIdx = i
            numPar++
        } else if (S.charAt(i) === ")") {
            if (numPar === 1) {
                deconIndicies.push([openIdx, i + 1])
                openIdx = null
            }
            numPar --
        }
    }
    return deconIndicies.map(idx => S.slice(idx[0], idx[1]))
}