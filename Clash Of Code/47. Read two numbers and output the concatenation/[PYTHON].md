## GOAL

Your program must read two numbers and output the concatenation of their difference and sum.

## INPUT:
Two positive integers A and B.

## OUTPUT:
The concatenated results of A-B and A+B.

## CONSTRAINTS:
A > 0
B > 0

## EXAMPLE:
Input
6 4
Output
210

```py
a,b=[int(i) for i in input().split()]
print(f'{a-b}{a+b}')
```

```bash
read -r A B
echo $((A-B))$((A+B))
```