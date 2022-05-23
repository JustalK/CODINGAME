# Goal
On an e-commerce website, we need to generate a star rating system based on all ratings a product has received, rounded down.

## Input
Line 1: A set of received notes separated by a comma.

## Output
Line 1: A line comprising a set of characters * representing the average score of all received scores.
Constraints

# Example
Input: 1,1,1
Output: *

## Solution

```Javascript
N=readline().split`,`
print('*'.repeat(N.reduce((a,b)=>+a+ +b)/N.length))
```

Trick for replacing the reduce:

```Javascript
N=readline().split`,`
print('*'.repeat(eval(N.join`+`)/N.length))
```

```Python
print(int(sum(n:=[*map(float,input().split(','))])/len(n))*'*')
```
