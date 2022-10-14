# Goal

You are trying to hit a ship of length 3 on a n\*n grid. The ship can only be placed horizontally or vertically in the grid.
How many shots do you need to be sure you hit any one of the cell of the ship?

For example, when the grid is 5 x 5, the following 8 shots guarantee to hit one of the cell of the ship :

+--+--+--+--+--+
| | |##| | |
+--+--+--+--+--+
|##| | |##| |
+--+--+--+--+--+
| |##| | |##|
+--+--+--+--+--+
| | |##| | |
+--+--+--+--+--+
|##| | |##| |
+--+--+--+--+--+

## Entrée

An integer n representing the size of the grid.
Sortie
An integer representing the minimum number of shots you need to hit the ship.

## Contraintes

n≥3

## Exemple

Input: 3
Output: 3

```Javascript
print(~~(readline()**2/3))
```
