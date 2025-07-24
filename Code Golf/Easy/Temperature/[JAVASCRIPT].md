## Solution

### The good: Number of character: 62

```Javascript
r=readline;print(!r()|r().split` `.sort((a,b)=>a*a-b*b||b)[0])
```

### Back to the game in 2025:  Number of character: 60

It's possible to change the comparison expression to save one character

```js
r=readline;print(+r(r()).split` `.sort((a,b)=>a*a-b*b-a)[0])
```