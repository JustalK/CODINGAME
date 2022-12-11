# Goal

You have to find the sum of the first x powers of a number n starting from 0. You will find that this puzzle will be easier if you know the trick

## Entrée

n: an integer
x: an integer

## Sortie

The sum of the first x powers of n.

## Contraintes

x>=1 and n>=1

## Example

Input
2
5
Output
31

```js
const n = parseInt(readline());
const x = parseInt(readline());

let rsl = 0;

for (let i = 0; i < x; i++) {
  rsl += Math.pow(n, i);
}

console.log(rsl);
```
