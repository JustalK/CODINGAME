## Goal

Crash bandicoot needs to cross a falling apart bridge, where only some tiles are still in place, the others are gone.
He will need to run over the tiles and jump over the holes in order to successfully finish the level.

## Input
The structure of the bride is described by a string containing only "#" and spaces " " chars.
A tile is represented by a #, while a hole is represented by one space. The bridge always starts with a tile and ends with a tile, should be crossed from left to right.
Line 1: : l length of the bridge.
Line 2: : b A string containing the structure of the bridge using "#" and " "

## Output
A single line containing the movements that have to be carried successively in order to cross the bridge.
w: walk from one tile to an adjacent tile.
j: jump over a hole.

## Constraints
l>=2

## Example
Input
5
## ##
Output
wjw

```py
import sys
import math

l = int(input())
b = input()
rsl = ''

for (index, tile) in enumerate(b.split(' ')):
    if index != 0:
        rsl += 'j'
    rsl += 'w' * (len(tile) - 1)

print(rsl)
```