## Goal
Given a positive integer n, find all Armstrong numbers less than n.

A positive integer is an Armstrong number if it is equal to the sum of each digit raised to the power of the number of digits. For example, 153 is an Armstrong number since 153 = 1³ + 5³ + 3³.

## Input
Line 1: A positive integer n

## Output
All Armstrong numbers less than n, in ascending order, one on each line

## Constraints
0 < n < 100000

## Example
Input

5
Output
1
2
3
4

```Javascript
n=readline()
for(i=1;i<+n;i++)if(eval(i.toString().split('').map(x=>(+x)**(i.toString().length)).join('+'))== i)print(i)
```

```Javascript
n=+readline();for(;n-->1;)if([...s=''+i].reduce((a,v)=>a+v**s.length)==i)print(i)
```

## Tricks

```Javascript
[...v='15']
```
