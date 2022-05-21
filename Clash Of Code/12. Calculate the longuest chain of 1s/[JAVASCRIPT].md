# Objectif

Given a binary string bin, output the index and the lengthof the longest chain of 1's in bin. If there are multiple longest chains then output only the index that refers to the first occurrences.

To know about what's considered an index in this puzzle, read the info below

- Index refers to groups of 1, not in individual bits. So index = 2, refers to the 2nd group of 1
- Index are counted from 1, not 0
- Single digit is also counted as a group of length 1

## Output Meaning:
If output is like
2
4
It means: "The longest chain of 1 in the string is the 2nd chain and it has a length of 4"
Input
Line 1: Length of bin
Line 2: Binary string bin
Output
Line 1: The index of the longest chain of one
Line 2: The length of that chain

## Constraints
bin is always a non-empty string and always contains at least one "1"
8 <= length <= 964

## Example

## Input
8
10111101

## Output
2
4

```Javascript
const length = parseInt(readline());
const bin = readline().split();

let best = 0;
let bestIndex = 0;
let prev = -1;
let current = 0;
let currentIndex = 0;

for (let i = 0; i < bin.length; i++) {
    if (bin[i] == '1') {
      if (prev !== '1') {
        if (current > best) {
          bestIndex = currentIndex;
          best = current;
        }
        current = 0;
        currentIndex = i;
      }
      current++;
    }
    prev = bin[i];
}
print(bestIndex);
print(best);
```
