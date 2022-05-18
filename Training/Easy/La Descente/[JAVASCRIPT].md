## Solution

```Javascript
for(;;) {
    let result = 0
    for (let mountainHigher = parseInt(readline()), i = 1; i < 8; i++) {
        const mountainH = parseInt(readline());
        if (mountainH > mountainHigher) {
            result = i;
            mountainHigher = mountainH;
        }
    }
    console.log(result);
}
```
