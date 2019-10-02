/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function (board) {
    const height = board.length
    const width = board[0].length
    let toCrush = new Set()

    while (true) {
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (!toCrush.has(`${x},${y}`) && board[y][x] !== 0) {
                    const newHorIndicies = findCrushesHor(board, x, y)
                    if (newHorIndicies.size > 2) {
                        toCrush = new Set([...toCrush, ...newHorIndicies])
                    }
                    const newVertIndicies = findCrushesVert(board, x, y)
                    if (newVertIndicies.size > 2) {
                        toCrush = new Set([...toCrush, ...newVertIndicies])
                    }
                }
            }
        }
        if (!toCrush.size) return board

        const toCrushArray = Array.from(toCrush).sort((a, b) => {
            const [AcordX, AcordY] = a.split(",")
            const [BcordX, BcordY] = b.split(",")
            if (AcordY < BcordY) return -1
            if (AcordY > BcordY) return 1
        });
        toCrushArray.forEach(key => {
            let [cordX, cordY] = key.split(",")
            while (cordY > 0) {
                board[cordY][cordX] = board[cordY - 1][cordX]
                cordY--
            }
            board[cordY][cordX] = 0
            toCrush.delete(key)
        })

    }
};

var findCrushesHor = function (board, x, y, tempCrush = new Set(), searchVal = board[y][x]) {
    let value = `${x},${y}`
    if (!tempCrush.has(value) && board[y][x] === searchVal) {
        tempCrush.add(value)
        if (x > 0) {
            tempCrush = new Set([...tempCrush, ...findCrushesHor(board, x - 1, y, tempCrush, searchVal)])
        }
        // if (y > 0) {
        //    tempCrush = new Set([...tempCrush,...findCrushes(board, x, y - 1, tempCrush, searchVal)])
        // }
        if (x < board.length - 1) {
            tempCrush = new Set([...tempCrush, ...findCrushesHor(board, x + 1, y, tempCrush, searchVal)])
        }
        // if (y < board[0].length - 1) {
        //    tempCrush = new Set([...tempCrush,...findCrushes(board, x, y + 1, tempCrush, searchVal)])
        // }
    } else {
        return new Set()
    }
    return tempCrush
}

var findCrushesVert = function (board, x, y, tempCrush = new Set(), searchVal = board[y][x]) {
    let value = `${x},${y}`
    if (!tempCrush.has(value) && board[y][x] === searchVal) {
        tempCrush.add(value)
        // if (x > 0) {
        //     tempCrush = new Set([...tempCrush,...findCrushes(board, x - 1, y, tempCrush, searchVal)])
        // }
        if (y > 0) {
            tempCrush = new Set([...tempCrush, ...findCrushesVert(board, x, y - 1, tempCrush, searchVal)])
        }
        // if (x < board.length - 1) {
        //    tempCrush = new Set([...tempCrush,...findCrushes(board, x + 1, y, tempCrush, searchVal)])
        // } 
        if (y < board[0].length - 1) {
            tempCrush = new Set([...tempCrush, ...findCrushesVert(board, x, y + 1, tempCrush, searchVal)])
        }
    } else {
        return new Set()
    }
    return tempCrush
}

445
183
153
107
84
53
16
7