
function findBusiestPeriod(data) {
    // your code goes here
    const maxData = { timestamp: 0, maxPeople: 0 }
    let currentPeople = 0
    let i = 0

    while (i < data.length) {
        const currentData = data[i]
        currentPeople = currentData[2] ?
            (currentPeople + currentData[1]) :
            (currentPeople - currentData[1])
        if (i === data.length - 1 || currentData[0] !== data[i + 1][0]) {
            if (maxData.maxPeople < currentPeople) {
                maxData.maxPeople = currentPeople
                maxData.timestamp = data[i][0]
            }
        }
        i++
    }
    return maxData.timestamp
}

const data = [[1487799425, 14, 1],
[1487799425, 4, 0],
[1487799425, 2, 0],
[1487800378, 10, 1],
[1487801478, 18, 0],
[1487801478, 18, 1],
[1487901013, 1, 0],
[1487901211, 7, 1],
[1487901211, 7, 0]]
console.log(findBusiestPeriod(data))
