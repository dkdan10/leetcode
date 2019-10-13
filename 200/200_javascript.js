/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
    if (!grid[0]) return 0
    const height = grid.length
    const width = grid[0].length
    let numIslands = 0
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (grid[y][x] === "1") {
                numIslands++
                fillIslands(grid, x, y)
            }
        }
    }
    return numIslands
};

var fillIslands = function (grid, x, y) {
    grid[y][x] = "0"
    if (y > 0 && grid[y - 1][x] === "1") fillIslands(grid, x, y - 1)
    if (y < grid.length - 1 && grid[y + 1][x] === "1") fillIslands(grid, x, y + 1)
    if (x < grid[0].length - 1 && grid[y][x + 1] === "1") fillIslands(grid, x + 1, y)
    if (x > 0 && grid[y][x - 1] === "1") fillIslands(grid, x - 1, y)
}