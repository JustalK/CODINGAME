Place the barycenter of the given points.

Example :

INPUT:        OUTPUT:

....X         ....X
.....    =>   .....
.....         ..O..
.....         .....
X....         X....
Entrée
First line: The number N of given lines
Following N lines: N lines with the points represented by 'X'
Sortie
N lines: The given N lines with the barycenter represented by 'O'
Contraintes
1 ≤ N ≤ 10
Exemple
Entrée
5
..X..
.....
....X
.....
X....
Sortie
..X..
.....
..O.X
.....
X....


```Javascript
const N = parseInt(readline());
let lines = [];
const Xs = []
for (let i = 0; i < N; i++) {
    const line = readline();
    for (let z = 0; z < line.length; z++) {
        if (line[z] === 'X') {
            Xs.push([i, z]);
        }
    }
    lines.push(line);
}

const x = Xs.reduce((a, b)=> a + b[0],0)/Xs.length
const y = Xs.reduce((a, b)=> a + b[1],0)/Xs.length

let n = ''
for (let i = 0; i < lines[y].length; i++) {
    if (i == x) {
        n += 'O';
        continue;
    }
    n += lines[y].charAt(i)
}
lines[y] = n;

for (let j = 0; j < lines.length;j++) {
    console.log(lines[j]);
}
```
