## Goal

To generate a Triangle with the help of of Fibonacci series numbers.

The Fibonacci sequence can be defined as such:
Starting with 1, 1, every nth term is the sum of the two previous ones
Example, the 2nd Fibonacci number is 1 + 1 = 2
the 3rd Fibonacci number is 1 + 2 = 3
the 4th Fibonacci number is 2 + 3 = 5
the 5th Fibonacci number is 3 + 5 = 8
And this goes on and on.
1, 1, 2, 3, 5, 8, 13, 21, ...

The goal is to create a pyramid using these numbers, of size n lines.
1
1 1
1 1 2
1 1 2 3
1 1 2 3 5
...
and every line ended with a SPACE .

## Input
An integer number n

## Output
n lines of space-separated integers which should form the Fibonacci triangle as described in the statement. Every line should end with a SPACE.

## Constraints
1<n<50

## Example
Input
2
Output
1 
1 1 


```py
import sys
import math

n = int(input())

line = [1, 1]
for _ in range(n):
    line.append(line[-2] + line[-1])
    print(" ".join(map(str, line[:_ + 1])) + " ")
```