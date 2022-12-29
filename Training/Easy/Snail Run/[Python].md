```py
import sys
import math

DESTINATION_SYMBOL = '#'
destinations = []
starts = {}
speed_snails = []
rows = []
resultat_distance = None
resultat_index = None

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
            destinations.append({'x': j, 'y': i})
        elif line[j] != '*':
            starts[line[j]] = {'x': j, 'y': i}

def manhatan(x1,y1,x2,y2):
    return abs(x1-x2) + abs(y1-y2)

for index, key in enumerate(starts):
    speed = speed_snails[int(key) - 1]
    closest = None
    distance = None
    for destination in destinations:
        tmp = manhatan(destination['x'],destination['y'], starts[key]['x'], starts[key]['y'])
        if distance is None or tmp < distance:
            distance = tmp
            closest = destination
    if resultat_distance is None or resultat_distance > distance / speed:
         resultat_distance = distance / speed
         resultat_index = key


print(resultat_index)

```
