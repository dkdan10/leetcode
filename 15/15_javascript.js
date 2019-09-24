/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//  SOLUTION
var threeSum = function (nums) {
    var rtn = [];
    if (nums.length < 3) {
        return rtn;
    }
    nums = nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            return rtn;
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (var j = i + 1, k = nums.length - 1; j < k;) {
            const sumOfThree = nums[i] + nums[j] + nums[k]
            if (sumOfThree === 0) {
                rtn.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] == nums[k + 1]) {
                    k--;
                }
            } else if (sumOfThree > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return rtn;
};

// MY FIRST ATTEMPT
var threeSum = function (nums) {
    const complementObj = {}
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            complementObj[nums[i] + nums[j]] = { index: [i, j], arr: [nums[i], nums[j]] }
        }
    }

    const resultArr = []
    for (let i = 0; i < nums.length; i++) {
        const complement = 0 - nums[i]
        const lookupRes = complementObj[complement]
        if (lookupRes && i < lookupRes.index[0] && i < lookupRes.index[1] && (nums.indexOf(nums[i])) === i) {
            const nextRes = complementObj[complement].arr.slice()
            nextRes.push(nums[i])
            resultArr.push(nextRes)
        }
    }
    return resultArr
};