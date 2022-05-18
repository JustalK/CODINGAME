## Solution

```Javascript
const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?'
let indexes = []

for (let l=0; l < T.length; l++) {
    let indexInAlphabet = alphabet.indexOf(T[l].toUpperCase());
    indexInAlphabet = indexInAlphabet !== -1 ? indexInAlphabet : 26;
    indexes.push(indexInAlphabet)
}

for (let i = 0; i < H; i++) {
    const ROW = readline();
    let result = ''
    for (let j=0; j < indexes.length; j++) {
        result += ROW.slice(L * indexes[j], L * indexes[j] + L)
    }
    print(result)
}
```
