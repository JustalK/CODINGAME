## Solution

```Javascript
const N = parseInt(readline());

const maxNumberOfTry = Math.ceil(N / 5)
const maxNumberOfKick = Math.ceil(N / 2)
const maxNumberOfDrop = Math.ceil(N / 3)

for (let i = 0; i <= maxNumberOfTry; ++i) {
    for (let j = 0; j <= i && j < maxNumberOfKick; ++j) {
        for (let k = 0; k <= maxNumberOfDrop; ++k) {
            if (i * 5 + j * 2 + k * 3 == N) {
                print([i, j, k].join(' '))
            }
        }
    }
}
```
