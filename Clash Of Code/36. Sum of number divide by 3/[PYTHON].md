## Goal

For all numbers less or equal to n, you must return the difference between the sum of all the numbers divisible by 3 and the sum of even numbers.

## Input
one integer n
Output
one integer : the difference between the two sums.

## Constraints
0 <= n <= 100000

## Example

Input
5

Output
-3

```py
n = int(input())

odd = 0
even = 0

for nbr in range(0, n + 1):
if nbr % 3 == 0:
even += nbr
if nbr % 2 == 0:
odd += nbr

print(even - odd)
```