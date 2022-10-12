# Goal

You will be given a string of digits to add up. Start adding them up, but if at any time one of the digits is 0, reset the sum back to 0.
Entrée
Line 1: An integer N telling the number of digits in the string.
Line 2: A string S of N digits.
Sortie
The sum, given as an integer.
Contraintes
1 ≤ N ≤ 1000
Exemple
Entrée
5
12345
Sortie
15

```js
const n = parseInt(readline());
const s = readline();
let r = 0;
for (let i = 0; i < n; i++) {
  r += parseInt(s[i]);
  if (s[i] === "0") {
    r = 0;
  }
}
print(r);
```

```python
import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = int(input())
s = input()

ttl = 0
for c  in s:
    i  = int(c)
    ttl += i
    if i == 0:
        ttl = 0

print(ttl)
```
