Given two similar triangles specified with side lengths, provide the scaling factor as a reduced ratio n:d > 1, or 1:1 if congruent.
Input
Lines 1 and 2: Three space separated integers a b c for the side lengths in clockwise order
Output
Line 1: The side ratio in reduced form n:d with integers n ≥ d relatively prime
Constraints
1 ≤ a, b, c < 100
Example
Input
3 4 5
9 12 15
Output
3:1

```py
import sys
import math

rsl = []

for i in range(2):
    a, b, c = [int(j) for j in input().split()]
    r = [a,b,c]
    r.sort()
    rsl.append(r)

a = rsl[0][0] / rsl[1][0]
b = rsl[0][1] / rsl[1][1]
c = rsl[0][2] / rsl[1][2]

if a == 1 and b == 1 and c == 1:
    print('1:1')
else:
    l = a + b + c
    r1 = rsl[1][0] + rsl[1][1] + rsl[1][1]
    r2 = rsl[0][0] + rsl[0][1] + rsl[0][1]
    r = int(r1 / r2)
    print(str(r) + ":1")
```