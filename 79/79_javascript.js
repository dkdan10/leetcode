/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const col = board.length
    const row = board[0].length

    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            if (isValid(board, word, i, j)) return true
        }
    }
    return false
};

var isValid = function (board, word, i, j, visited = {}, wordIdx = 0) {
    let key = `i-${i}j-${j}`
    if (!visited[key] && board[i][j] === word.charAt(wordIdx)) {
        if (word.length - 1 === wordIdx) return true
        visited[key] = true
        if (i > 0 &&
            isValid(board, word, i - 1, j, visited, wordIdx + 1)) return true
        if (j > 0 &&
            isValid(board, word, i, j - 1, visited, wordIdx + 1)) return true
        if (i < board.length - 1 &&
            isValid(board, word, i + 1, j, visited, wordIdx + 1)) return true
        if (j < board[0].length - 1 &&
            isValid(board, word, i, j + 1, visited, wordIdx + 1)) return true

        visited[key] = false
    }

    return false
}
