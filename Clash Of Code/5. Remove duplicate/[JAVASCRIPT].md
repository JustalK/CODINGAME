# Test

You have found a storage of lines which contains interesting information. Unfortunately, some of the data appears to have been duplicated and fractured to act as a decoy. In order to efficiently read the information that you want, you need to remove the decoy and leave behind lines that are not continuous fragments from other lines.

## Entrée
Line 1: N, the number of lines.
Next N lines: Text.

## Sortie
Each line: Text, with lines that are fragments from other lines removed. In case of duplicate lines, leave behind the first occurence. The order should be the same.

## Contraintes
0 < N < 80
0 < Length of each line in Text < 10

## Exemple
Input:
5
COUNTER
OU
NTE
STRATEGY
TR

Output:
COUNTER
STRATEGY

## Solution

```Javascript
x: for (let i = +readline(), r = [];i--;) {
    const S = readline()
    for (let j = r.length;j--;) {
        if(r[j].includes(S)) continue x
        if(S.includes(r[j])) r.splice(j, 1)
    }
    r.push(S)
    print(S)
}
```
