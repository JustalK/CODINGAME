## Goal

You are given three integers representing the lengths sides of a triangle: a, b, and c. If the three form a right triangle, print the area of the triangle with side lengths a, b, and c. Otherwise, print Invalid.

## Input
Line 1: Three integers, a, b, and c.

## Output
A single line containing the area of the triangle, if a, b, and c form a Pythagorean triple, and Invalid otherwise.


## Constraints
0<a<b<c<1000

## Example
Input
3
4
5
Output
6

```py
import sys
i=input
j=int
r=[j(i()),j(i()),j(i())]
r.sort()
print(j(r[0]*r[1]/2) if r[0]**2+r[1]**2==r[2]**2 else 'Invalid')
```