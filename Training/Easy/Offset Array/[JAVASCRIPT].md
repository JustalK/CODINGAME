## Solution [Ugly]

```Javascript
const n = parseInt(readline());
let result = {}
for (let i = 0; i < n; i++) {
    const assignment = readline();
    const explodedEquals = assignment.split('=')

    const explodedIdentifier = explodedEquals[0].split('[')
    result[explodedIdentifier[0]] = {}

    const values = explodedEquals[1].trim().split(' ')
    const indexes = explodedIdentifier[1].replace(/\..|]/g,' ').trim().split(' ');
    const first_index = parseInt(indexes[0])
    const last_index = parseInt(indexes[1])

    for(let j = first_index, z = 0; z < values.length ;j++, z++) {
        result[explodedIdentifier[0]][j] = parseInt(values[z])
    }
}

const x = readline();
const changeXtoFunction = x.replace(/([A-Z]+)/g, "f('\$1'").replace(/\[/g, ',').replace(/\]/g, ')');

const f = (letter, position) => result[letter][position];

console.log(eval(changeXtoFunction));
```

## Explanation

I did not really like this challenge, it was mainly focus on parsing string to have the data easy to manipulate.

The loops is there for just having the data in an object with a key representing the letter of the array and as values, you will find another object.
This second object will contain as a key, the index of the value and as the value, the integer.

The part under the loop has been use to transform the array into nested functions that I can eval.

And boom !
