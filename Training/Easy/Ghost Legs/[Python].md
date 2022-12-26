```py
import sys
import math

w, h = [int(i) for i in input().split()]

dict = {}

for i in range(h):
    line = input()
    # Initialization
    if i == 0:
        column = line.split()
        for index, j in enumerate(column):
            dict[j] = index + 1
    else:
        for index, key in enumerate(dict):
            if dict[key] - 1 > 0 and line[(dict[key] - 1) * 3 - 1] == '-':
                dict[key] -= 1
                continue
            if dict[key] + 1 <= len(dict) and line[(dict[key] - 1) * 3 + 1] == '-':
                dict[key] += 1
                continue

result = line.split()

for index, key in enumerate(dict):
    print(key+result[dict[key] - 1])
```
