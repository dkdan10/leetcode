/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const height = grid.length
    const width = grid[0].length
    let loopAgain = true
    let notRotten = true
    let minutes = 0
    while (loopAgain) {
        loopAgain = false
        notRotten = false
        //         MARK ORANGES
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (
                    grid[y][x] === 1 && (
                        (y < height - 1 && grid[y + 1][x] === 2) ||
                        (y > 0 && grid[y - 1][x] === 2) ||
                        grid[y][x + 1] === 2 ||
                        grid[y][x - 1] === 2
                    )
                ) {
                    grid[y][x] = -1
                    loopAgain = true
                } else if (grid[y][x] === 1) {
                    notRotten = true
                }
            }
        }
        //         CHANGE MARKED ORANGES
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (grid[y][x] === -1) {
                    grid[y][x] = 2
                }
            }
        }
        if (loopAgain) minutes++
    }
    return notRotten ? -1 : minutes
};