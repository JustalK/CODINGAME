## Solution

```Javascript
let board = []
let countColumn = [0, 0, 0]
let win = false;

for (let i = 0; i < 3; i++) {
    board.push(readline());
}

const replaceAt = (str, i, character) => {
    let arr = str.split('');
    arr.splice(i, 1, character);
    return arr.join("");
}

const isWinning = (str) => {
    return !win && (str.match(/O/g) || []).length == 2 && str.includes('.');
}

const winningBoard = (str, reverse = false, offset = null) => {
    const pos = str.indexOf('.');
    board[pos] = replaceAt(board[pos], reverse ? 2 - pos : offset !==  null ? offset : pos, 'O')
    win = true;
}


for (let i = 0; i < 3; i++) {
    if (isWinning(board[i])) {
        board[i] = 'OOO';
        win = true;
        break;
    }

    const column = board[0][i] + board[1][i] + board[2][i]
    if (isWinning(column)) winningBoard(column, false, i)
}

const diag1 = board[0][0] + board[1][1] + board[2][2]
if (isWinning(diag1)) winningBoard(diag1)

const diag2 = board[0][2] + board[1][1] + board[2][0]
if (isWinning(diag2)) winningBoard(diag2, true)

console.log(win ? board.join('\n') : false)
```
