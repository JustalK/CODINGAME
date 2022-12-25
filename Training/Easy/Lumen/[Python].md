```py
import sys
import math

n = int(input())
l = int(input())

total = []

def change(i, j):
    for offset in range(l):
        for x in range(i - offset, i + offset + 1):
            for y in range(j - offset, j + offset + 1):
                if x >= 0 and x < n and y >=0 and y < len(total):
                    if total[x][y] == 'X':
                        total[x][y] = l - offset

for i in range(n):
    row = []
    for cell in input().split():
        row.append(cell)
    total.append(row)

for i in range(n):
    for j in range(len(total[i])):
        if 'C' == total[i][j]:
            change(i, j)

result = 0
for i in range(n):
    for j in range(len(total[i])):
        if 'X' == total[i][j]:
            result+=1

print(result)
```
