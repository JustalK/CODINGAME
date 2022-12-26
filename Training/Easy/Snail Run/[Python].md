```py
import sys
import math

DESTINATION_SYMBOL = '#'
destinations = []
speed_snails = []
rows = []

number_snails = int(input())
for i in range(number_snails):
    speed_snails.append(int(input()))

map_height = int(input())
map_width = int(input())

for i in range(map_height):
    line = input()
    rows.append(line)
    for j in range(map_width):
        if line[j] == DESTINATION_SYMBOL:
            destinations.append({'x': i, 'y': j})

print(destinations)

```
