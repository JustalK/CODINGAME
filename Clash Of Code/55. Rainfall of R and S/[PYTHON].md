## Goal

To find the rainfall for a week
On Rainy days R, 4mm of rain falls
No rain falls on Sunny days S

## Input
Line 1 a string containing 7 characters representing Weather forecast

## Output
Write total rainfall
Integer

## Constraints
String contains 7 Capital letters R or S

## Example
Input
RRRRRRR
Output
28

```py
print(input().count('R')*4)
```