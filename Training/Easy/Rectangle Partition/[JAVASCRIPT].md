## Solution

```Javascript
var inputs = readline().split(' ');
const w = parseInt(inputs[0]);
const h = parseInt(inputs[1]);
const countX = parseInt(inputs[2]);
const countY = parseInt(inputs[3]);
var inputs = readline().split(' ');
let x = [0];
let y = [0]
for (let i = 0; i < countX; i++) {
    x.push(parseInt(inputs[i]));
}
x.push(w)
var inputs = readline().split(' ');
for (let i = 0; i < countY; i++) {
    y.push(parseInt(inputs[i]));
}
y.push(h)

const diffY = []
for (let i = 1; i < y.length; i++) {
    for (let j = i; j--;) {
        diffY.push(y[i] - y[j])
    }
}

const diffX = []
for (let i = 1; i < x.length; i++) {
    for (let j = i; j--;) {
        diffX.push(x[i] - x[j])
    }
}

let count = 0;
for (let i = 0; i < diffY.length; i++) {
    for (let j = 0; j < diffX.length; j++) {
        if (diffY[i] == diffX[j]) {
            count++;
        }
    }
}

console.log(count);
```
