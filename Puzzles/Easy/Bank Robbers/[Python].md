```py
import sys
import math

r = int(input())
v = int(input())
rsl_one_vault = []
rsl = 0
for i in range(v):
    c, n = [int(j) for j in input().split()]
    rsl_one_vault.append(pow(10, n) * pow(5, c - n))

rsl_chunked = [rsl_one_vault[i:i + r] for i in range(0, len(rsl_one_vault), r)]
print(rsl_chunked)

for i in rsl_chunked:
    rsl = rsl + max(i)

print(rsl)
```
