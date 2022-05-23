# Goal

Choose two integers and multiply it.
What is the possible maximum product?

## Input
Three integers a, b, c.

## Output
Possible maximum product

## Constraints
-100≤a,b,c≤100

## Example
Input: 3 6 5
Output: 30

Input 2: -6 9 -8
Output 2: 48

```Javascript
[a,b,c]=readline().split` `;print(Math.max(a*b,b*c,c*a))
```
