## Goal

Convert the product of two numbers to the alphabet. (0-indexed)
If more than 26, return to the beginning of the alphabet.
(Example: 0=a, 1=b, 2=c, ... , 24=y,25=z, 26=a, 27=b, ...)

## Input
Two integers a,b are given in one line.

## Output
Output a single letter of the alphabet.

## Constraints
0 <= a,b <= 10

## Example
Input
0 0
Output
a

```py
import sys
import math

a, b = [int(i) for i in input().split()]

r = a * b % 26 + 97

print(chr(r))
```