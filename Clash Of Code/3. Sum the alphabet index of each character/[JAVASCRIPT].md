# Test

Sum the alphabet index of each character in the given word.

## Entrée
String s.

## Sortie
An integer N, sum of the characters in s.

## Contraintes
s is one word
0 < length < 50

## Exemple
Input: Math
Output: 42


# Solution

M + a + t + h = 42
13 + 1 + 20 + 8 = 42

```
const s = readline().toLocaleLowerCase();

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
let r = 0;
for (let i = 0; i < s.length;i++) {
    r += alphabet.indexOf(s[i])  + 1
}

console.log(r);
```
