// MY ANWSER
function root(x, n) {
    // your code goes here
    if (n === 0) return 1
    if (n === 1) return x
    let returnVal = 0
    const digits = [1, 0.1, 0.01, 0.001]
    let c = 0
    for (let i = 0; i < digits.length; i++) {
        const currentDig = digits[i]
        while (Math.pow(returnVal, n) < x) {
            c++
            returnVal += currentDig
            if (Math.pow(returnVal, n) === x) {
                console.log(c)
                return returnVal
            }
        }
        returnVal -= currentDig
    }

    console.log(c)
    return returnVal
}

// FASTER
function root2(x, n) {
    if (x == 0) {
        return 0
    }

    let c = 0
    let lowerBound = 0
    let upperBound = Math.max(1, x)
    let approxRoot = (upperBound + lowerBound) / 2

    while (approxRoot - lowerBound >= 0.001) {
        c++
        if (Math.pow(approxRoot, n) > x) {
            upperBound = approxRoot
        } else if (Math.pow(approxRoot, n) < x) {
            lowerBound = approxRoot
        } else {
            break
        }

        approxRoot = (upperBound + lowerBound) / 2
    }
    console.log(c)
    return approxRoot
}

console.log(root(1234123, 2))
console.log(root2(12341234, 2))