/**
 * @param {string[]} grid
 * @return {number}
 */

//  SOLUTION ANSWER WITH UNION FIND. 
var regionsBySlashes = function (grid) {
    // Main idea: Consider the borders between grid-cells as nodes.
    // When cell has "/", then the corresponding up and left nodes are connected.
    let n = grid.length;
    // List of disjoint-sets that each correspond to a vertical or horizontal cell-border
    let count = 2 * n * (n + 1); // number of borders in grid
    let ranks = Array(count).fill(0);
    let parents = [...Array(count).keys()];

    let find = i => parents[i] === i ? i : parents[i] = find(parents[i]);

    function union(a, b) {
        a = find(a);
        b = find(b);
        if (a === b) return 0; // Already in same set
        if (ranks[a] < ranks[b]) { // Keep depth of set-tree small
            parents[a] = b;
        } else {
            parents[b] = a;
            if (ranks[a] === ranks[b]) ranks[a]++;
        }
        return 1;
    }

    // This assumes that each node is isolated (you would need a grid with only "X" characters to achieve that)
    // Now reduce that count whenever disjoint sets are united:
    for (let i = 0, up = 0, down = n, left = count / 2, right = left + 1; i < n; i++ , left++ , right++) {
        let row = grid[i];
        for (let j = 0; j < n; j++ , up++ , down++ , left++ , right++) {
            let ch = row[j];
            // Note that the union method returns 1 when the two involved sets were disjoint before the merge,
            //  ...zero otherwise. It indicates the reduction in the total number of disjoint sets
            count -= (ch === "\\" ? 0 : union(up, left) + union(down, right)) +
                (ch === "/" ? 0 : union(up, right) + union(down, left));
        }
    }
    return count;
};
