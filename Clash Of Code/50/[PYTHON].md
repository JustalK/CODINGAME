## Goal

Given a string consisting only of the characters A, T, G and C, do the following:
- double the A-s
- triple the T-s
- remove the G-s
- leave the C-s as is

## Input
A single line of characters [ATGC].

## Output
A single line of characters [ATGC].

## Constraints
The input string is at most 20 characters long.

## Example
Input
ATGCAATTGGCC
Output
AATTTCAAAATTTTTTCC

```py
print(input().replace('A','AA').replace('T','TTT').replace('G',''))
```