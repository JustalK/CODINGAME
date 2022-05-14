# Test

You must output the number of vowels in a string.
Y and y are not vowels!

## Entrée
A single line: A string str.
Sortie
An integer: The number of vowels in the string.

## Contraintes
0 < string length <= 100

Input: Hello World!
Output: 3

```Javascript
console.log(readline().replace(/[^aeiou]/gi,'').length)
```


## Research

```Javascript
print(readline().match(/[aeiou]/gi,'').length)
```
