## Goal

You will be given M values. Each value is an integer N. You must print the next highest odd number unless N is already odd then print N

## Input
Line 1: An integer M for the number of integer values that follow.
Next M Lines: M number of integer values.

## Output
M Lines: M integers that if integer N at line M of input is odd then print N otherwise print the next highest odd integer.

## Constraints
1 <= M <= 100
-10000 <= N <= 10000

## Example
Input
10
-64
71
-98
-60
-18
41
88
-2
-24
63

Output
-63
71
-97
-59
-17
41
89
-1
-23
63

```py
import sys
m = int(input())
for i in range(m):
    n = int(input())
    if n%2==0:
        while True:
            n+=1
            if n%2==1:
                break
    print(n)
```