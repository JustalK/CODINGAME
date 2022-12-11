# Goal

Each programming language has its own conventions.
Your company has just switched from one language that uses snake_case to one using camelCase.
Your boss has tasked you with converting variable names from snake_case to camelCase.

To do this, strip the variable name of all underscores (\_) and capitalize the letter after each underscore.

## Entrée

A single line containing the variableName in snake_case.

## Sortie

A single line with the variableName converted to camelCase.

## Contraintes

The variableName will always be in valid snake_case. It will never be a CONSTANT or contain any uppercase letters.
It can, however, contain numbers.

## Example

Input
test_case
Output
testCase

```js
let variableName = readline();

for (let i = variableName.length; i--; ) {
  if (variableName.charAt(i) === "_") {
    variableName =
      variableName.substring(0, i) +
      variableName.charAt(i + 1).toUpperCase() +
      variableName.substring(i + 2);
  }
}

console.log(variableName);
```
