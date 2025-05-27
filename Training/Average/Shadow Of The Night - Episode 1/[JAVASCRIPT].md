## Solution

```Javascript
var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline());
var inputs = readline().split(' ');
let X = parseInt(inputs[0]);
let Y = parseInt(inputs[1]);

let left = 0;
let right = W - 1;
let bottom = 0;
let top = H - 1;

for(;;) {
    const bombDir = readline();

    if (bombDir.includes('U')) {
        top = Y - 1;
        Y = Math.ceil((top + bottom) / 2);
    } else if (bombDir.includes('D')) {
        bottom = Y + 1;
        Y = Math.ceil((top + bottom) / 2);
    }

    if (bombDir.includes('R')) {
        left = X + 1;
        X = Math.ceil((left + right) / 2);
    } else if (bombDir.includes('L')) {
        right = X - 1;
        X = Math.ceil((left + right) / 2);
    }

    console.log(X+' '+Y);
}
```
