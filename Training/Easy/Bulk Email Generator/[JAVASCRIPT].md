## Solution

```Javascript
const N = parseInt(readline());
let lines = ''
for (let i = 0; i < N; i++) {
    lines+=readline()+'\n';
}

const find = lines.match(/(?<=\()(.|\n)*?(?=\))/g)
const choices = []
for (let i = 0; i < find.length; i++) {
    choices.push(find[i].split('|'))
}

for (let i = 0; i < find.length; i++) {
    const rsl = choices[i][i % choices[i].length]
    lines = lines.replace('('+find[i]+')', rsl)
}

console.log(lines);
```
