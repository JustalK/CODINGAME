## Solution

```Javascript
const N = parseInt(readline());
var numbers = readline().split(' ').map(Number);

let r = 0;
for (let i = 0; i < N - 1; i++) {
    if (numbers.length > 1) {
        numbers = numbers.sort((a,b) => a-b)
        const result = numbers[0] + numbers[1]
        numbers.shift();
        numbers.shift();
        numbers.push(result)
        r += result;
    }
}

console.log(r);
```
