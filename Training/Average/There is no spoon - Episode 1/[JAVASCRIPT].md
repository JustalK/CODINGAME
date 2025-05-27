## Solution

```Javascript
const width = parseInt(readline());
const height = parseInt(readline());
let board = []
for (let i = 0; i < height; i++) {
    const line = readline();
    board.push(line.split(''))
}

const searchClosestRight = (x, y) => {
    for (let i = x; i < board[y].length; i++) {
        if (board[y][i] == '0') {
            return i+' '+y
        }
    }
    return '-1 -1'
}

const searchClosestBottom = (x, y) => {
    for (let i = y; i < board.length; i++) {
        if (board[i][x] == '0') {
            return x+' '+i
        }
    }
    return '-1 -1'
}

lines: for (let i = 0; i < board.length; i++) {
    nodes: for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] == '0') {
            const closestX = searchClosestRight(j + 1, i);
            const closestY = searchClosestBottom(j, i + 1);

            print(`${j} ${i} ${closestX} ${closestY}`)
        }
    }
}
```
