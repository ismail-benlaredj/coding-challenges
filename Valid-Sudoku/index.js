function setupMap(map) {
    for (let i = 1; i < 10; i++) {
        map.set(i + "", false);
    }
}

const isValidSudoku = (board) => {
    const map = new Map();
    setupMap(map);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[j][i] != ".") {

                let b = map.get(board[j][i]);
                if (b) {
                    return false;
                } else {
                    map.set(board[j][i], true);
                }
            }
        }
        setupMap(map);
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] != ".") {
                let b = map.get(board[i][j]);
                if (b) {
                    return false;
                } else {
                    map.set(board[i][j], true);
                }
            }
        }
        setupMap(map);
    }

    for (let j = 0; j < 3; j++) {
        for (let m = 0; m < 3; m++) {

            for (let x = j * 2 + j; x < j * 2 + j + 3; x++) {
                for (let y = m * 2 + m; y < m * 2 + m + 3; y++) {
                    if (board[x][y] != ".") {
                        let b = map.get(board[x][y]);
                        if (b) {
                            return false;
                        } else {
                            map.set(board[x][y], true);
                        }
                    }
                }
            }
            setupMap(map);
        }
    }

    return true;
}

const board = [
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."]]

console.log(isValidSudoku(board))