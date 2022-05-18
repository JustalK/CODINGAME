## Solution

```Javascript
const n = parseInt(readline());
const inputs = readline().split(' ');
let result = inputs[0] || 0;
for (let i = 1; i < inputs.length; i++) {
    const t = parseInt(inputs[i]);
    if (t**2 < result**2 || (t**2 === result**2 && t > result)) {
        result = t;
    }
}

console.log(result);
```
