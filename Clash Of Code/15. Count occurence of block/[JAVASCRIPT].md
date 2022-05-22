# Objectif

Given a string that consists of groups of '#'-characters separated by 1 or more spaces (nonogram row), print the length of each group separated by spaces.

## Input
Line 1: A string of # and spaces

## Output
Line 1: Lengths of each group of #'s separated by spaces

## Constraints
1<= length of string <=100
string contains at least 1 character '#'

## Example

Input:
####  #      ######  ##

Output:
4 1 6 2

## Solution

```Javascript
print(readline().match(/[^\s]+/g).map(x=>x.length).join` `)
```
