/**
 * @param {number[]} seats
 * @return {number}
 */


//  First Try
var maxDistToClosest = function (seats) {
    let leftLookup = {}
    let lastOneIndex = null
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            lastOneIndex = i
        } else {
            leftLookup[i] = lastOneIndex
        }
    }
    lastOneIndex = null
    let maxDistToOne = 0
    for (let i = seats.length - 1; i >= 0; i--) {
        if (seats[i] === 1) {
            lastOneIndex = i
        } else {
            let distanceToOne
            if (leftLookup[i] !== null && lastOneIndex !== null) {
                distanceToOne = Math.min(
                    Math.abs(i - leftLookup[i]),
                    Math.abs(i - lastOneIndex))
            } else if (leftLookup[i] !== null) {
                distanceToOne = Math.abs(i - leftLookup[i])
            } else if (lastOneIndex !== null) {
                distanceToOne = Math.abs(i - lastOneIndex)
            }
            if (distanceToOne > maxDistToOne) maxDistToOne = distanceToOne
        }
    }
    return maxDistToOne
};
