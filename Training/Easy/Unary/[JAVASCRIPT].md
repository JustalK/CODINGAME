## Solution

```Javascript
const m = readline();

let asci = result = '';
for(let i = 0; i < m.length;i++) {
    asci += m.charCodeAt(i).toString(2).padStart(7, '0')
}
let unary = asci.match(/(\d)\1*/g)

for(let i = 0; i < unary.length;i++) {
    const prefix = unary[i][0] === '1' ? '0' : '00'
    unary[i] = prefix + ' ' + '0'.repeat(unary[i].length)
}

console.log(unary.join(' '));
```
