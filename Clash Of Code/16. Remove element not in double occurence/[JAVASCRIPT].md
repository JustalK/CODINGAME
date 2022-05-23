## Objectif

Remove all the character that does not have one occurence following on two index.
Keep the space!

Input: Hello World!
Output: ll l

## Solution

```Javascript
let line = 'Hello World!'
let S = line.split('');
let letter = [];

for(let i = S.length ; i--;) {
    if ((S[i] === S[i+1] || S[i] === S[i-1]) && S[i] !== ' ') {
        if (!letter.includes(S[i])) {
            letter.push(S[i]);
        }
    }
}

for(let i = S.length; i--;) {
    if (!letter.includes(S[i]) && S[i] !== ' ') {
        line = line.replace(new RegExp(S[i]),'');
        console.error(S[i], line)
    }
}

print(line)
```
