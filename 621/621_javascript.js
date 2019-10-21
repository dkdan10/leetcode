/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

// LEET SOLUTION

function leastInterval(tasks, n) {
    const arr = new Array(26).fill(0);

    for (let t of tasks) {
        arr[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    arr.sort((a, b) => a - b);

    let i = 25;
    while (i >= 0 && arr[i] === arr[25]) {
        i--;
    }

    return Math.max(
        // case 1
        // AB...AB... = (arr[25] - 1) * (n + 1)
        // AB...AB...AB = (arr[25] - 1) * (n + 1) + (25 - i)
        (arr[25] - 1) * (n + 1) + (25 - i),

        // case 2
        // e.g. (ABC)(ABD)(ABEF)
        tasks.length,
    );
}


//  NAIVE SOLUTION
var leastInterval = function (tasks, n) {
    let idleObj = idleReset()
    let itterations = 0
    while (tasks.length) {
        for (let i = 0; i < tasks.length; i++) {
            const currTask = tasks[i]
            if (idleObj[currTask] === 0) {
                tasks.splice(i, 1)
                idleObj[currTask] = n + 1
                break
            }
        }
        itterations++
        Object.keys(idleObj).forEach(key => {
            if (idleObj[key] > 0) {
                idleObj[key]--
            }
        })

    }
    return itterations
};

var idleReset = function () {
    return {
        "A": 0,
        "B": 0,
        "C": 0,
        "D": 0,
        "E": 0,
        "F": 0,
        "G": 0,
        "H": 0,
        "J": 0,
        "K": 0,
        "L": 0,
        "M": 0,
        "N": 0,
        "O": 0,
        "P": 0,
        "Q": 0,
        "R": 0,
        "S": 0,
        "T": 0,
        "U": 0,
        "V": 0,
        "W": 0,
        "X": 0,
        "Y": 0,
        "Z": 0
    }
}