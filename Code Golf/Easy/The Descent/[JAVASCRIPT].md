## Solution

### Normal Solution

```js
for (;;) {
  let result = 0;
  for (let mountainHigher = parseInt(readline()), i = 1; i < 8; i++) {
    const mountainH = parseInt(readline());
    if (mountainH > mountainHigher) {
      result = i;
      mountainHigher = mountainH;
    }
  }
  print(result);
}
```

### The good: Number of character: 64

```Javascript
for(;;print(v))for(b=i=0;i<8;i++){h=readline()
if(h>b){v=i;b=h}}
```

### My best solution: Number of character: 60

```Javascript
for(;;print(v))for(b=i=0;i<8;i++)h=readline(),h>b&&(v=i,b=h)
```

### Back to the game in 2025: Number of character: 59

After year, I look back at my solution and found that, I could actually from -1 and increment at the same time as checking for the condition.
It can save one character.

```js
for(;;print(v))for(b=i=-1;i++<7;h>b&&(v=i,b=h))h=readline()
```