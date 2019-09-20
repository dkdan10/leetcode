const sharePurchases = (investString) => {
    let left = right = 0
    let aIdx = bIdx = cIdx = null
    const strings = []
    let numWays = 0
    while (left < investString.length - 2) {
        switch (investString.charAt(right)) {
            case "A":
                aIdx = right
                break
            case "B":
                bIdx = right
                break
            case "C":
                cIdx = right
                break
            default:
                break;
        }
        if (aIdx !== null && bIdx !== null && cIdx !== null && aIdx >= left && bIdx >= left && cIdx >= left && right >= aIdx && right >= bIdx && right >= cIdx) {
            numWays += Math.abs(investString.length - left - right + 1)
            left++
            right = left
        } else {
            right++
        }
        if (right > investString.length) {
            left++
            right = left
            aIdx = bIdx = cIdx = null
        }
    }
    return numWays
}
