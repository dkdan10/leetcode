/**
 * @param {number[][]} dungeon
 * @return {number}
 */


var calculateMinimumHP = function(dungeon) {
    if (dungeon === null || dungeon.length === 0 || dungeon[0].length === 0) return 0;
    
    const rows = dungeon.length;
    const cols = dungeon[0].length;
    
    const health = Array.from(dungeon, () => Array.from(dungeon[0], () => undefined));

    health[rows - 1][cols - 1] = Math.max(1 - dungeon[rows - 1][cols - 1], 1);

    for (let i = rows - 2; i >= 0; i--) {            
        health[i][cols - 1] = Math.max(health[i + 1][cols - 1] - dungeon[i][cols - 1], 1);
    }

    for (let j = cols - 2; j >= 0; j--) {
        health[rows - 1][j] = Math.max(health[rows - 1][j + 1] - dungeon[rows - 1][j], 1);
    }

    for (let i = rows - 2; i >= 0; i--) {
        for (let j = cols - 2; j >= 0; j--) {
            const down = Math.max(health[i + 1][j] - dungeon[i][j], 1);
            const right = Math.max(health[i][j + 1] - dungeon[i][j], 1);
            health[i][j] = Math.min(right, down);
        }
    }

    return health[0][0];

};