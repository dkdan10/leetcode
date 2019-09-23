

/**
 * @param {number} n
 * @return {number}
 */

// BETTER WAY
/**
 * @param {number} n
 * @return {number}
 */
var cache = [1];
var p2 = 0;
var p3 = 0;
var p5 = 0;

var nthUglyNumber = function(n) {
    var m,r2,r3,r5;
    for(let i = cache.length; i < n; i++)
    { 
        r2 = cache[p2] * 2;
        r3 = cache[p3] * 3;
        r5 = cache[p5] * 5;
        m = Math.min(r2,r3,r5);
        if(m === r2) p2++; 
        if(m === r3) p3++;
        if(m === r5) p5++;
        // cache.push(m)
        cache[i] = m;
    }
    return cache[n-1]; 
};



//  BAD WAY WITH OUT OF MEMORY PROBLEM
const uglyNums = new Set([2, 3, 5])
const memoUglyNums = {0: true, 1: true, 2: true, 3: true, 5: true}

var nthUglyNumber = function(n) {
    if (n < 1) return 0
    let i = 1
    let numberUgly = 0
    let lastUgly = 1
    while (numberUgly < n) {
        if (isUgly(i)) {
            lastUgly = i
            numberUgly++
        }
        i ++
    }
    return lastUgly
};

var isUgly = function(num) {
    if (memoUglyNums[num] === true || memoUglyNums[num] === false) return memoUglyNums[num]
    for (let i = 2; i < 6; i ++) {
        if (num % i === 0) {
            if ( uglyNums.has(i) ) {
                const result = isUgly(num / i)
                memoUglyNums[num / i] = result
                return result
            } else {
                memoUglyNums[num] = false
                return false
            }
        }
    }
    memoUglyNums[num] = false
    return false
};