## Solution

```Javascript
const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    let card = readline();
    let parity = 1;
    let sum = 0;

    card = card.replace(/\s+/g, '');

    for (let l = card.length - 1; l >= 0; l--) {
        let factor = parity ? 1 : 2;
            parity = parity ? 0 : 1;

        sum += ((card[l] * factor) > 9)
            ? card[l] * factor - 9
            : card[l] * factor;
    }

    console.log(sum % 10 === 0 ? 'YES' : 'NO')
}
```
