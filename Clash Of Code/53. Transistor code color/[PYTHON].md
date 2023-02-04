## Goal

You must output values of resistors based on their three strips of colors.
The first strip is the first digit of value.
The second strip is the second digit of value.
The third strip is the multiplier.

Table of colors :
black → digit : 0, multiplier : 1
brown → digit : 1, multiplier : 10
red → digit : 2, multiplier : 100
orange → digit : 3, multiplier : 1,000
yellow → digit : 4, multiplier : 10,000
green → digit : 5, multiplier : 100,000
blue → digit : 6, multiplier : 1,000,000
violet → digit : 7, multiplier : 10,000,000
grey → digit : 8, multiplier : 100,000,000
white → digit : 9, multiplier : 1,000,000,000

## Example :
yellow violet blue
yellow : 4, violet : 7, blue : 1,000,000 → value of resistor is 47,000,000 Ω.

## Input
Line 1 : An integer N for the number of resistors.
Next N lines : Three space separated strings representing three strips of colors.

## Output
N lines : value of each resistor.

## Constraints

## Example
Input
4
yellow violet orange
brown black red
grey red brown
green blue white
Output
47000
1000
820
56000000000

```py
import sys

d = {
  "black": 0,
  "brown": 1,
  "red": 2,
  "orange": 3,
  "yellow": 4,
  "green": 5,
  "blue": 6,
  "violet": 7,
  "grey": 8,
  "white": 9
}

e = {
  "black": 1,
  "brown": 10,
  "red": 100,
  "orange": 1000,
  "yellow": 10000,
  "green": 100000,
  "blue": 1000000,
  "violet": 10000000,
  "grey": 100000000,
  "white": 1000000000
}

n = int(input())
for i in range(n):
    str_1, str_2, str_3 = input().split()
    print(int(str(d[str_1])+str(d[str_2])) * e[str_3])
```