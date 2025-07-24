## Solution

```JAVASCRIPT
const rounds = parseInt(readline());
let cash = parseInt(readline());
for (let i = 0; i < rounds; i++) {
    const play = readline().split(' ');
    let bet = Math.ceil(cash/4);
    cash -= bet;
    switch(play[1]) {
    case "EVEN":
        if( play[0] % 2 == 0 && play[0] != 0) cash += bet*2;
        break;
    case "ODD":
        if( play[0] % 2 == 1) cash += bet*2;
        break;
    case "PLAIN":
        if( play[0] === play[2]) cash += bet*36;
        break;
    }
    console.error(play, bet, cash);
}

console.log(cash);
```
