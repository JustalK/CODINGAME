# Test

You receive 4 integers.
a is the starting number.
b is the increment in between numbers.
c is the number of numbers per line.
d is the number of lines

## Entrée
15
2
5
3

## Sortie
15 17 19 21 23
25 27 29 31 33
35 37 39 41 43

## Contraintes
a > 0
b > 0
c > 0
d > 0

## Exemple

Input
98
4
2
6

Output
98 102
106 110
114 118
122 126
130 134
138 142


Solution

```Javascript
const a = parseInt(readline());
const b = parseInt(readline());
const c = parseInt(readline());
const d = parseInt(readline());

let number = a;
for (let v = 0; v < d; v++) {
    let line = number
    for(let z = 0; z < c - 1; z++) {
        number += b
        line += ' ' + number;
    }
    number += b
    console.log(line);
}
```
