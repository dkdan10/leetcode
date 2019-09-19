/**
 * @param {number[]} stones
 * @return {number}
 */

//  FASTER FINDS EVERY TWO MAXES QUICKER THAN SORTING
var lastStoneWeight = function(stones) {
    if (stones.length <= 1) { return stones[0] }
    while(stones.length > 1) {
        const [x, y] =  maximumTwo(stones)
        if (x === y) {
            stones.splice(stones.indexOf(x), 1)
            stones.splice(stones.indexOf(y), 1)
        } else {
             stones.splice(stones.indexOf(x), 1)
             stones[stones.indexOf(y)] = y - x
        }
    }
    return stones[0] || 0
};

const maximumTwo = (arr) => {
    arr = new Array(...arr)
    const y = Math.max.apply(null, arr)
    arr.splice(arr.indexOf(y), 1)
    const x = Math.max.apply(null, arr)
    return [x, y]
}

//  NAIVE APPROACH SORT EVERYTIME
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones = stones.sort((a, b) => a - b);
       
        const big = stones.pop();
        const big2 = stones.pop();
        if (big !== big2) stones.push(big-big2)
    }
    return stones.length ? stones[0] : 0;
};