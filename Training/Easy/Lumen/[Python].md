```py
import sys
import math

n = int(input())
l = int(input())

total = []

def change(i, j):
    for offset in range(l):
        if i - offset >= 0:
            total[i - offset][j] = l - offset
        if i + offset < n:
            total[i + offset][j] = l - offset
        if j - offset >= 0:
            total[i][j - offset] = l - offset
            if i - offset >= 0:
                total[i - offset][j - offset] = l - offset
            if i + offset < n:
                total[i + offset][j - offset] = l - offset
        if j + offset < n:
            total[i][j + offset] = l - offset
            if i - offset >= 0:
                total[i - offset][j + offset] = l - offset
            if i + offset < n:
                total[i + offset][j + offset] = l - offset

for i in range(n):
    row = []
    for cell in input().split():
        row.append(cell)
    total.append(row)

for i in range(n):
    for j in range(len(total[i])):
        if 'C' == total[i][j]:
            change(i, j)
```
