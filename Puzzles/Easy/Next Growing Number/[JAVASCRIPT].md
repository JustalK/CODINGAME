## Solution

```Javascript
const n = readline();

let result = n.split('');

for (let i = result.length; i--;) {
    if (result[i] !== '9') {
        result[i] = parseInt(result[i]) + 1
        for ( let j = i + 1; j < result.length; j++ ) {
            result[j] = '0';
        }
        break;
    }

    if (i == 0) {
        for (let j = 0; j < result.length; j++ ) {
            result[j] = '0';
        }
        result.unshift('1')
    }
}

for (let isBeingCopied = false, currentCopiedValue = result[0], i = 0; i < result.length; i++) {
    if ( result[i] < currentCopiedValue || isBeingCopied ) {
        result[i] = currentCopiedValue;
        isBeingCopied = true;
    }

    currentCopiedValue = result[i];
}

console.log(result.join(''));
```
