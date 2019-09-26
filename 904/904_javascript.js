/**
 * @param {number[]} tree
 * @return {number}
 */

// CLEANED UP A LITTL
var totalFruit = function (tree) {
    let maxCollect = curCollect = 0
    let prevFood = { food: null, count: 0 }
    let currentFoodSet = new Set()

    for (let i = 0; i < tree.length; i++) {
        const curFood = tree[i]
        if (currentFoodSet.size < 2) {
            currentFoodSet.add(curFood)
        } else if (!currentFoodSet.has(curFood)) {
            curCollect = prevFood.count
            currentFoodSet.clear()
            currentFoodSet.add(prevFood.food)
            currentFoodSet.add(curFood)
        }
        prevFood.count = 1
        curCollect++
        while (curFood === tree[i + 1]) {
            curCollect++
            i++
            prevFood.count++
        }
        prevFood.food = curFood
        maxCollect = Math.max(curCollect, maxCollect)
    }
    return maxCollect
};

// FIRST ATTEMPT
var totalFruit = function (tree) {
    let maxCollect = 0
    let curCollect = 0
    let lastFoodStats = { food: null, count: 0 }
    let food1 = null
    let food2 = null
    for (let i = 0; i < tree.length; i++) {
        const curFood = tree[i]
        if (food1 === null) {
            food1 = curFood
        } else if (food2 === null) {
            food2 = curFood
        } else if (food1 !== curFood && food2 !== curFood) {
            curCollect = lastFoodStats.count
            if (food1 === lastFoodStats.food) food2 = curFood
            if (food2 === lastFoodStats.food) food1 = curFood
        }
        lastFoodStats.count = 1
        lastFoodStats.food = curFood
        curCollect++
        while (curFood === tree[i + 1]) {
            curCollect++
            i++
            lastFoodStats.count++
        }
        maxCollect = Math.max(curCollect, maxCollect)
    }
    return maxCollect
};
