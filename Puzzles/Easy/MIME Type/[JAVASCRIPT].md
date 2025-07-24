## Solution

```Javascript
const N = parseInt(readline());
const Q = parseInt(readline());

let tableMime = {}

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0];
    const MT = inputs[1];

    tableMime[EXT.toUpperCase()] = MT
}

for (let i = 0; i < Q; i++) {
    const FNAME = readline();
    const filename = FNAME.split('.')
    const extension = filename.length == 1 ? 'UNKNWON' : filename[filename.length - 1].toUpperCase()

    console.log(tableMime[extension] || 'UNKNOWN')
}
```
