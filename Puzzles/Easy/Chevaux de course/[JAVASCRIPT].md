## solution

```Javascript
const N = parseInt(readline());
let result = 999999999999999, listOfHorses = [];
for (let i = 0; i < N; i++) {
    listOfHorses.push(parseInt(readline()));
}

listOfHorses.sort(function(a, b) {
    return a - b;
});

for (let i = 0; i < listOfHorses.length; i++) {
    const difference = Math.abs(listOfHorses[i] - listOfHorses[i+1])
    result = difference < result ? difference : result
}

console.log(result);
```
