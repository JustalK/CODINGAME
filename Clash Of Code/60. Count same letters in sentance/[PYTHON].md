## Goal

You are given a string. You need to calculate how many times each letter appears in the string. You should ignore the case of the letters (i.e., treat "A" and "a" as the same letter). As a result, you should write the counts with a space.

## Input
Line 1: A string s

## Output
Return a dictionary in the format of {letter number of occurrences}, showing how many times each letter appears.Output must be alphabetical and lowercase.

## Constraints
1 ≤ length of s ≤ 100

## Example
Input
abcdefg

Output
a 1
b 1
c 1
d 1
e 1
f 1
g 1

```py
for i in sorted(set(s:=input().lower())):print(i,s.count(i))
```