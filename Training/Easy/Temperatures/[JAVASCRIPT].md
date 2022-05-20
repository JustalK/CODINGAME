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

### Alternative

```Javascript
var n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');

var r = inputs.sort((a,b)=>{return Math.abs(a)-Math.abs(b)|| b-a});

var r=r[0]||0;

print(r);
```
