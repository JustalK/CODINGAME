# Goal
Write the number of days in a certain month of a certain year (in modern western calendar).

# Input
Line 1: Integer m for the month.
Line 2: Integer y for the year.

# Output
Line 1 : The number of days in that month (1-31).
Constraints
1 ≤ m ≤ 12
1600 ≤ y ≤ 2500

# Example
Input
3
2010
Output
31

```Solution
r=readline
y=r(m=r())
print(new Date(y,m,0).getDate())
```
