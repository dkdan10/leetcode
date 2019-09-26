/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = leftMax = rightMax = totalWater = 0
    let right = height.length - 1
    while (left < right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])

        if (leftMax < rightMax) {
            totalWater += leftMax - height[left]
            left++
        } else {
            totalWater += rightMax - height[right]
            right--
        }
    }
    return totalWater
};


var trap = function (height) {
    let maxLookup = {}
    let maxCounter = 0
    let waterTotal = 0
    for (let i = 0; i < height.length; i++) {
        const curHeight = height[i]
        maxLookup[i] = { left: maxCounter, right: null }
        if (curHeight > maxCounter) maxCounter = curHeight
    }
    maxCounter = 0
    for (let i = height.length - 1; i >= 0; i--) {
        const curHeight = height[i]
        maxLookup[i].right = maxCounter
        if (curHeight > maxCounter) maxCounter = curHeight
    }
    for (let i = 0; i < height.length; i++) {
        const curHeight = height[i]
        const wallHeight = Math.min(maxLookup[i].left, maxLookup[i].right)
        if (wallHeight > curHeight) {
            waterTotal += wallHeight - curHeight
        }
    }
    return waterTotal
};