## Goal

Write n letters, beginning with a and incrementing of d letters.
The increment works in a wrap-around way, i.e. you go back to a if you need to increment beyond z

## Input
Line 1: Two integers n and d separated by a space.

## Output
One line with n letters (lowercase).

## Constraints
1 < n < 100
0 <= d < 26

## Example
Input
10 0
Output
aaaaaaaaaa

```js
[n,d]=readline(o="").split(" ")
for(i=0;i<n;++i)o+=String.fromCharCode(i*d%26+97)
print(o)
```