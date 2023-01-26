When given an integer n, output the total number of integers leading up to n whose digits have a sum of 10.

For example, 19 when taken as 1 + 9 adds up to 10, and is thus considered valid.

Another example:
Input: 50

19 (1 + 9 = 10)
28 (2 + 8 = 10)
37 (3 + 7 = 10)
46 (4 + 6 = 10)

Output: 4 (4 integers that met the criteria were found)
Input
An integer n representing the number of integers to check.
Output
The total number of integers leading up to n whose digits have a sum of 10.
Constraints
10 ≤ n ≤ 1,000,000
Example
Input
100
Output
9

```js
const n = parseInt(readline());
let rsl = 0;

for (let i = 0; i < n; i++) {
  const tmp = Array.from(String(i)).reduce(
    (acc, cur) => parseInt(cur[0]) + acc,
    0
  );
  if (tmp === 10) {
    rsl++;
  }
}

console.log(rsl);
```
