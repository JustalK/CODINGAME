## Solution

```Javascript
const b = readline();

const splitted = b.split('00')
let result = 0;

for (let i = 0; i < splitted.length; i++) {
    if (!splitted[i].includes('0')) {
        result = result < splitted[i].length ? splitted[i].length : result;
    }
}

for (let i = 0; i < splitted.length; i++) {
    const minSplitted = splitted[i].split('0')

    for (let j = 0; j < minSplitted.length - 1; j++) {
        const tmp = minSplitted[j].length + minSplitted[j + 1].length;
        result = result < tmp ? tmp : result;
    }
}

console.log(result + 1);
```
