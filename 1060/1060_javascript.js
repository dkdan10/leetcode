//O(logN)
var missingElement = function (nums, k) {

    let l = 0, r = nums.length - 1;

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);

        const numMissed = nums[mid] - nums[0] - mid;

        if (numMissed < k) l = mid + 1;
        else r = mid;
    }

    const totalMissed = nums[l] - nums[0] - l;
    if (totalMissed >= k) return nums[l] - 1 - (totalMissed - k);
    else return nums[l] + (k - totalMissed);
};

// O(N) N = number of numbers in the array
var missingElement = function (nums, k) {
    let totalMisses = 0, i = 1;
    for (; i < nums.length; ++i) {
        totalMisses += nums[i] - nums[i - 1] - 1;
        if (totalMisses >= k) break;
    }

    if (i === nums.length) return nums[nums.length - 1] + k - totalMisses;
    else return nums[i] - 1 - (totalMisses - k);
};

// MY FIRST NAIVE SOLUTION O(Largest Number - Smallest Number)
var missingElement = function (nums, k) {
    let i = 1
    let missing = 0
    let num = nums[0]
    while (missing < k) {
        if (i < nums.length) {
            while (nums[i] > num) {
                if (k === missing) return num
                missing++
                num++
            }
            num++
            i++
        } else {
            missing++
            num++
        }
    }
    return num
};